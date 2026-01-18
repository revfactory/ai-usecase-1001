import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

interface UseCase {
  id: string;
  company: string;
  companyOriginal: string; // 원본 영문 회사명
  industry: string;
  agentType: string;
  summary: string;
  summaryOriginal: string; // 원본 영문 요약
  technologies: string[];
  metrics?: string;
  isNew: boolean;
}

const industryHeaders = [
  'Automotive & Logistics',
  'Business & Professional Services',
  'Financial Services',
  'Healthcare & Life Sciences',
  'Hospitality & Travel',
  'Manufacturing, Industrial & Electronics',
  'Media, Marketing & Gaming',
  'Public Sector & Nonprofits',
  'Retail',
  'Technology',
  'Telecommunications',
];

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

const agentTypeHeaders = [
  'Customer Agents',
  'Employee Agents',
  'Creative Agents',
  'Code Agents',
  'Data Agents',
  'Security Agents',
];

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
    'Imagen', 'Veo', 'AlloyDB', 'Cloud SQL', 'Firestore', 'Cloud Storage',
    'Cloud Functions', 'Agentspace', 'Security Operations', 'Code Assist',
    'AI Hypercomputer', 'MedLM', 'Customer Engagement Suite', 'Model Garden',
    'Gemini Code Assist', 'Compute Engine', 'Speech-to-Text', 'Text-to-Speech',
    'Cloud Spanner', 'Pub/Sub', 'Dataflow', 'Dataproc', 'TensorFlow',
    'AI Studio', 'Chirp', 'TPU', 'GPU',
  ];

  for (const tech of techKeywords) {
    if (text.includes(tech)) {
      techs.push(tech);
    }
  }

  return techs.length > 0 ? techs : ['Google Cloud AI'];
}

function extractMetrics(text: string): string | undefined {
  const metricsPatterns = [
    /(\d+%[^.,]*)/,
    /(\d+X\s[^.,]*)/i,
    /(reduced[^.,]*\d+[^.,]*)/i,
    /(saved[^.,]*\d+[^.,]*)/i,
    /(increased[^.,]*\d+[^.,]*)/i,
    /(\d+-fold[^.,]*)/i,
    /(\d+x\simprovement[^.,]*)/i,
  ];

  for (const pattern of metricsPatterns) {
    const match = text.match(pattern);
    if (match) {
      return match[0].substring(0, 100);
    }
  }
  return undefined;
}

function extractCompanyFromParagraph(text: string): { company: string; isNew: boolean } | null {
  const isNew = text.startsWith('*');
  const cleanText = isNew ? text.substring(1).trim() : text.trim();

  // Skip meta/header lines
  if (cleanText.startsWith('http') ||
      cleanText.startsWith('[') ||
      cleanText.includes('.max-') ||
      cleanText.includes('.jpg') ||
      cleanText.includes('.png') ||
      cleanText.length < 20 ||
      industryHeaders.some(h => cleanText.startsWith(h)) ||
      agentTypeHeaders.some(h => cleanText === h)) {
    return null;
  }

  // Extract company name: everything before common verb patterns
  // Pattern: "CompanyName verb..." or "CompanyName, description, verb..."
  const patterns = [
    // "Company is/has/uses..."
    /^([A-Z][A-Za-z0-9\s&\-''.(),/]+?)\s+(is|are|has|have|uses|used|built|builds|launched|developed|develops|created|creates|implemented|implements|adopted|deployed|leverages|leveraged|utilizes|partnered|worked|works|turned|runs|ran|powers|powered|provides|provided|enables|enabled|helps|offers|integrates|integrated|combines|combined|transformed|enhanced|improved|streamlined|accelerated|optimized|automated|modernized|migrated|established|designed|delivers|delivered|serves|served|connects|connected|manages|managed|processes|analyzed|analyzes|generates|generated|produces|produced|supports|supported|allows|allowed|makes|made|lets|brings|brought|takes|took|puts|gave|gives|gained|achieved|reached|saw|sees|experienced|reported|announced|introduced|unveiled|revealed|expanded|extended|grew|doubled|tripled|reduced|cut|saved|increased|boosted|lowered|raised|drove|piloted|tested|rolled|scales|scaled|taps|tapped|employs|employed|trains|trained|handles|handled|harnesses|selected|selects|relies|relied|plans|planned|expects|aims|aimed|seeks|sought|wants|needed|decided|chose|standardized|transitioned|operates|collaborated|teamed|joined|linked|adding|offering|powering|enabling|helping|using|building|creating|developing|launching|implementing|deploying|integrating|combining|transforming|enhancing|improving|streamlining|accelerating|optimizing|automating|modernizing|migrating|designing|delivering|serving|connecting|managing|processing|analyzing|generating|producing|supporting|allowing|making|letting|bringing|taking|putting|giving|gaining|achieving|reaching|seeing|experiencing|reporting|announcing|introducing|unveiling|revealing|expanding|extending|growing|doubling|tripling|reducing|cutting|saving|increasing|boosting|lowering|raising|driving|piloting|testing|rolling|scaling|tapping|employing|training|handling|harnessing|selecting|relying|planning|expecting|aiming|seeking|wanting|needing|deciding|choosing|standardizing|transitioning|operating|collaborating|teaming|joining|linking)\s/i,
    // "Company, a/an/the/which..."
    /^([A-Z][A-Za-z0-9\s&\-''.()]+?),\s+(a|an|the|one|which|who|whose)\s/i,
    // "Company's product..."
    /^([A-Z][A-Za-z0-9\s&\-''.()]+?)['']s\s+\w+\s+(is|has|was|uses|built|launched|developed|provides|enables|helps|offers|integrates|enhanced|improved)\s/i,
  ];

  for (const pattern of patterns) {
    const match = cleanText.match(pattern);
    if (match) {
      let company = match[1].trim();
      // Clean up possessive
      company = company.replace(/['']s$/, '').trim();

      // Validate company name
      if (company.length >= 2 && company.length <= 100 && company.split(' ').length <= 12) {
        return { company, isNew };
      }
    }
  }

  return null;
}

function parseEnglishDocument(filePath: string): UseCase[] {
  const content = readFileSync(filePath, 'utf-8');
  const lines = content.split('\n');

  const usecases: UseCase[] = [];
  let currentIndustry = '';
  let currentAgentType = '';
  let caseCounter: Record<string, number> = {};

  let currentParagraph = '';

  const processParagraph = () => {
    if (!currentParagraph.trim() || !currentIndustry || !currentAgentType) {
      currentParagraph = '';
      return;
    }

    const result = extractCompanyFromParagraph(currentParagraph);
    if (result) {
      const { company, isNew } = result;

      const key = `${currentIndustry}-${currentAgentType}`;
      caseCounter[key] = (caseCounter[key] || 0) + 1;

      const industryPrefix = currentIndustry.split('_')[0].substring(0, 4);
      const agentPrefix = currentAgentType.split('_')[0].substring(0, 4);
      const id = `en-${industryPrefix}-${agentPrefix}-${caseCounter[key]}`;

      const cleanText = isNew ? currentParagraph.substring(1).trim() : currentParagraph.trim();
      const technologies = extractTechnologies(cleanText);
      const metrics = extractMetrics(cleanText);

      let summary = cleanText;
      if (summary.length > 500) {
        const sentences = summary.match(/[^.!?]+[.!?]+/g);
        if (sentences && sentences.length >= 2) {
          summary = sentences.slice(0, 2).join('');
        } else {
          summary = summary.substring(0, 500) + '...';
        }
      }

      usecases.push({
        id,
        company,
        companyOriginal: company,
        industry: currentIndustry,
        agentType: currentAgentType,
        summary,
        summaryOriginal: cleanText,
        technologies,
        metrics,
        isNew,
      });
    }

    currentParagraph = '';
  };

  for (const line of lines) {
    const trimmedLine = line.trim();

    // Empty line = end of paragraph
    if (!trimmedLine) {
      processParagraph();
      continue;
    }

    // Check for industry headers
    if (industryHeaders.includes(trimmedLine)) {
      processParagraph();
      currentIndustry = industryMap[trimmedLine];
      currentAgentType = '';
      continue;
    }

    // Check for agent type headers
    if (agentTypeHeaders.includes(trimmedLine)) {
      processParagraph();
      currentAgentType = agentTypeMap[trimmedLine];
      continue;
    }

    // Skip URL lines and image references
    if (trimmedLine.startsWith('http') || trimmedLine.includes('.max-') ||
        trimmedLine.includes('.jpg') || trimmedLine.includes('.png')) {
      continue;
    }

    // Add to current paragraph
    if (currentParagraph) {
      currentParagraph += ' ' + trimmedLine;
    } else {
      currentParagraph = trimmedLine;
    }
  }

  // Process last paragraph
  processParagraph();

  return usecases;
}

// 실행
const inputPath = join(process.cwd(), '../google-cloud-ai-usecase.txt');
const outputPath = join(process.cwd(), 'src/data/usecases-english.json');

console.log('Parsing English document (v3)...');
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

console.log(`\nNew cases (marked with *): ${newCount}`);

// JSON 저장
writeFileSync(outputPath, JSON.stringify(usecases, null, 2));
console.log(`\nSaved to ${outputPath}`);

// Show samples
console.log('\n--- Sample entries ---');
const industries = [...new Set(usecases.map(u => u.industry))];
for (const ind of industries.slice(0, 3)) {
  const sample = usecases.find(u => u.industry === ind);
  if (sample) {
    console.log(`\n[${ind}/${sample.agentType}]`);
    console.log(`  Company: ${sample.company}`);
    console.log(`  New: ${sample.isNew}`);
    console.log(`  Tech: ${sample.technologies.join(', ')}`);
  }
}
