import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

interface UseCase {
  id: string;
  company: string;
  industry: string;
  agentType: string;
  summary: string;
  technologies: string[];
  metrics?: string;
  isNew: boolean;
}

const industryMap: Record<string, string> = {
  'Automotive & Logistics': 'automotive_logistics',
  'Business & Professional Services': 'business_services',
  'Financial Services': 'financial_services',
  'Healthcare & Life Sciences': 'healthcare_lifesciences',
  'Hospitality & Travel': 'hospitality_travel',
  'Manufacturing, Industrial & Electronics': 'manufacturing',
  'Media, Marketing & Gaming': 'media_marketing',
  'Public Sector & Nonprofits': 'public_sector',
  'Retail': 'retail',
  'Technology': 'technology',
  'Telecommunications': 'telecommunications',
};

const agentTypeMap: Record<string, string> = {
  'Customer Agents': 'customer_agent',
  'Employee Agents': 'employee_agent',
  'Creative Agents': 'creative_agent',
  'Code Agents': 'code_agent',
  'Data Agents': 'data_agent',
  'Security Agents': 'security_agent',
};

function extractTechnologies(text: string): string[] {
  const techs: string[] = [];
  const techKeywords = [
    'Vertex AI', 'Gemini', 'BigQuery', 'Google Cloud', 'Cloud Run',
    'Google Kubernetes Engine', 'GKE', 'Looker', 'Document AI', 'Doc AI',
    'Dialogflow', 'Contact Center AI', 'NotebookLM', 'Google Workspace',
    'Imagen', 'Veo', 'Claude', 'TPU', 'GPU', 'AlloyDB', 'Cloud SQL',
    'Firestore', 'Cloud Storage', 'Cloud Functions', 'Agentspace',
    'Security Operations', 'SecOps', 'Code Assist', 'AI Hypercomputer',
    'Healthcare Data Engine', 'MedLM', 'Customer Engagement Suite',
    'Agent Development Kit', 'Model Garden', 'RAG', 'LLM', 'ML',
    'Gemini Code Assist', 'Gemini 1.5', 'Gemini 2.0', 'Gemini 2.5',
    'VertexAI', 'Compute Engine', 'Speech-to-Text', 'Text-to-Speech',
    'Natural Language API', 'Vision AI', 'Video AI', 'Translation API',
    'Cloud Spanner', 'Pub/Sub', 'Dataflow', 'Dataproc', 'Composer',
    'AI Platform', 'AutoML', 'TensorFlow', 'JAX', 'DeepMind', 'Bard',
    'PaLM', 'Duet AI', 'AI Studio', 'Chirp', 'Anthropic', 'Claude',
  ];

  for (const tech of techKeywords) {
    if (text.toLowerCase().includes(tech.toLowerCase())) {
      techs.push(tech);
    }
  }

  return techs.length > 0 ? techs : ['Google Cloud AI'];
}

function extractMetrics(text: string): string | undefined {
  const metricsPatterns = [
    /(\d+%[^.]*)/,
    /(\d+X[^.]*)/i,
    /(\d+x[^.]*improvement[^.]*)/i,
    /(reduced[^.]*\d+[^.]*)/i,
    /(saved[^.]*\d+[^.]*)/i,
    /(increased[^.]*\d+[^.]*)/i,
    /(\d+\s*hours?[^.]*saved[^.]*)/i,
  ];

  for (const pattern of metricsPatterns) {
    const match = text.match(pattern);
    if (match) {
      return match[0].substring(0, 100);
    }
  }
  return undefined;
}

function parseEnglishDocument(filePath: string): UseCase[] {
  const content = readFileSync(filePath, 'utf-8');
  const lines = content.split('\n');

  const usecases: UseCase[] = [];
  let currentIndustry = '';
  let currentAgentType = '';
  let caseCounter: Record<string, number> = {};

  let currentCompany = '';
  let currentText = '';
  let isNewCase = false;

  const processEntry = () => {
    if (currentCompany && currentIndustry && currentAgentType && currentText.length > 20) {
      const key = `${currentIndustry}-${currentAgentType}`;
      caseCounter[key] = (caseCounter[key] || 0) + 1;

      const industryPrefix = currentIndustry.split('_')[0].substring(0, 4);
      const agentPrefix = currentAgentType.split('_')[0].substring(0, 4);
      const id = `${industryPrefix}-${agentPrefix}-${caseCounter[key]}`;

      const technologies = extractTechnologies(currentText);
      const metrics = extractMetrics(currentText);

      let summary = currentText.trim();
      if (summary.length > 500) {
        const firstSentences = summary.match(/^[^.]+\.[^.]+\./);
        if (firstSentences) {
          summary = firstSentences[0];
        } else {
          summary = summary.substring(0, 500) + '...';
        }
      }

      usecases.push({
        id,
        company: currentCompany,
        industry: currentIndustry,
        agentType: currentAgentType,
        summary,
        technologies,
        metrics,
        isNew: isNewCase,
      });
    }
    currentCompany = '';
    currentText = '';
    isNewCase = false;
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();

    // Skip empty lines
    if (!line) continue;

    // Skip header/meta lines
    if (line.startsWith('http') || line.startsWith('[') || line.includes('max-')) continue;

    // Check for industry headers
    for (const [engName, id] of Object.entries(industryMap)) {
      if (line === engName) {
        processEntry();
        currentIndustry = id;
        currentAgentType = '';
        continue;
      }
    }

    // Check for agent type headers
    for (const [engName, id] of Object.entries(agentTypeMap)) {
      if (line === engName) {
        processEntry();
        currentAgentType = id;
        continue;
      }
    }

    // Check if this is a new company entry
    // Company entries typically start with a capital letter or asterisk
    if (currentIndustry && currentAgentType) {
      // Check if line starts with asterisk (new entry) or capital letter followed by company name pattern
      const isNewEntry = line.startsWith('*');
      const cleanLine = isNewEntry ? line.substring(1).trim() : line;

      // Pattern: "CompanyName is/has/uses/built..." or "CompanyName, a/an/the..."
      const companyStartPattern = /^([A-Z][A-Za-z0-9\s&\-''.()]+?)(,?\s+(is|are|has|have|uses|used|built|launched|developed|created|implemented|adopted|deployed|leverages|utilizes|partnered|worked|turned|runs|powers|provides|enables|helps|offers|integrates|combines|transformed|enhanced|improved|streamlined|accelerated|optimized|automated|modernized|migrated|established|designed|delivers|serves|connects|manages|processes|analyzes|generates|produces|creates|builds|supports|allows|makes|lets|brings|takes|puts|gave|gives|gained|achieved|reached|saw|experienced|reported|announced|introduced|unveiled|revealed|expanded|extended|grew|doubled|tripled|quadrupled|reduced|cut|saved|increased|boosted|lowered|raised|drove|piloted|tested|rolled|scales|scaled|taps|tapped|employs|employed|brought|trains|trained|handles|handled|harnesses|harnessed|selected|selects|relies|relied|plans|planned|expects|expected|aims|aimed|seeks|sought|wants|wanted|needs|needed|decided|decides|chose|chooses|picked|picks|adopted|standardized|transitioned|operates|operated|collaborated|teamed|joined|combined|linked|brought))/i;

      const match = cleanLine.match(companyStartPattern);

      if (match) {
        // Save previous entry
        processEntry();

        // Start new entry
        currentCompany = match[1].trim();
        currentText = cleanLine;
        isNewCase = isNewEntry;
      } else if (currentCompany) {
        // Continue current entry
        currentText += ' ' + line;
      }
    }
  }

  // Process last entry
  processEntry();

  return usecases;
}

// 실행
const inputPath = join(process.cwd(), '../google-cloud-ai-usecase.txt');
const outputPath = join(process.cwd(), 'src/data/usecases-english.json');

console.log('Parsing English document...');
const usecases = parseEnglishDocument(inputPath);
console.log(`Parsed ${usecases.length} use cases`);

// 통계 출력
const byIndustry: Record<string, number> = {};
const byAgentType: Record<string, number> = {};
let newCount = 0;

for (const uc of usecases) {
  byIndustry[uc.industry] = (byIndustry[uc.industry] || 0) + 1;
  byAgentType[uc.agentType] = (byAgentType[uc.agentType] || 0) + 1;
  if (uc.isNew) newCount++;
}

console.log('\nBy Industry:');
for (const [k, v] of Object.entries(byIndustry).sort((a, b) => b[1] - a[1])) {
  console.log(`  ${k}: ${v}`);
}

console.log('\nBy Agent Type:');
for (const [k, v] of Object.entries(byAgentType).sort((a, b) => b[1] - a[1])) {
  console.log(`  ${k}: ${v}`);
}

console.log(`\nNew cases: ${newCount}`);

// JSON 저장
writeFileSync(outputPath, JSON.stringify(usecases, null, 2));
console.log(`\nSaved to ${outputPath}`);
