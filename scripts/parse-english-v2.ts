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
    'AI Platform', 'AutoML', 'TensorFlow', 'JAX', 'Chirp',
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
    /(\d+X\s[^.]*)/i,
    /(\d+x\s[^.]*improvement[^.]*)/i,
    /(reduced[^.]*by\s*\d+[^.]*)/i,
    /(saved[^.]*\d+[^.]*)/i,
    /(increased[^.]*\d+[^.]*)/i,
    /(\d+\s*hours?[^.]*saved[^.]*)/i,
    /(\d+-fold[^.]*)/i,
  ];

  for (const pattern of metricsPatterns) {
    const match = text.match(pattern);
    if (match) {
      return match[0].substring(0, 100);
    }
  }
  return undefined;
}

function extractCompanyName(text: string): string | null {
  // Remove leading asterisk if present
  const cleanText = text.startsWith('*') ? text.substring(1).trim() : text;

  // Skip meta lines
  if (cleanText.startsWith('http') || cleanText.startsWith('[') ||
      cleanText.includes('.max-') || cleanText.includes('.jpg') ||
      cleanText.includes('.png') || cleanText.length < 10) {
    return null;
  }

  // Common verbs that follow company names
  const verbPatterns = [
    'is', 'are', 'has', 'have', 'uses', 'used', 'using', 'built', 'builds', 'building',
    'launched', 'launches', 'launching', 'developed', 'develops', 'developing',
    'created', 'creates', 'creating', 'implemented', 'implements', 'implementing',
    'adopted', 'adopts', 'adopting', 'deployed', 'deploys', 'deploying',
    'leverages', 'leveraged', 'leveraging', 'utilizes', 'utilized', 'utilizing',
    'partnered', 'partners', 'partnering', 'worked', 'works', 'working',
    'turned', 'turns', 'turning', 'runs', 'ran', 'running',
    'powers', 'powered', 'powering', 'provides', 'provided', 'providing',
    'enables', 'enabled', 'enabling', 'helps', 'helped', 'helping',
    'offers', 'offered', 'offering', 'integrates', 'integrated', 'integrating',
    'combines', 'combined', 'combining', 'transformed', 'transforms', 'transforming',
    'enhanced', 'enhances', 'enhancing', 'improved', 'improves', 'improving',
    'streamlined', 'streamlines', 'streamlining', 'accelerated', 'accelerates', 'accelerating',
    'optimized', 'optimizes', 'optimizing', 'automated', 'automates', 'automating',
    'modernized', 'modernizes', 'modernizing', 'migrated', 'migrates', 'migrating',
    'established', 'establishes', 'establishing', 'designed', 'designs', 'designing',
    'delivers', 'delivered', 'delivering', 'serves', 'served', 'serving',
    'connects', 'connected', 'connecting', 'manages', 'managed', 'managing',
    'processes', 'processed', 'processing', 'analyzes', 'analyzed', 'analyzing',
    'generates', 'generated', 'generating', 'produces', 'produced', 'producing',
    'supports', 'supported', 'supporting', 'allows', 'allowed', 'allowing',
    'makes', 'made', 'making', 'lets', 'let', 'letting',
    'brings', 'brought', 'bringing', 'takes', 'took', 'taking',
    'puts', 'put', 'putting', 'gave', 'gives', 'giving',
    'gained', 'gains', 'gaining', 'achieved', 'achieves', 'achieving',
    'reached', 'reaches', 'reaching', 'saw', 'sees', 'seeing',
    'experienced', 'experiences', 'experiencing', 'reported', 'reports', 'reporting',
    'announced', 'announces', 'announcing', 'introduced', 'introduces', 'introducing',
    'unveiled', 'unveils', 'unveiling', 'revealed', 'reveals', 'revealing',
    'expanded', 'expands', 'expanding', 'extended', 'extends', 'extending',
    'grew', 'grows', 'growing', 'doubled', 'doubles', 'doubling',
    'tripled', 'triples', 'tripling', 'reduced', 'reduces', 'reducing',
    'cut', 'cuts', 'cutting', 'saved', 'saves', 'saving',
    'increased', 'increases', 'increasing', 'boosted', 'boosts', 'boosting',
    'lowered', 'lowers', 'lowering', 'raised', 'raises', 'raising',
    'drove', 'drives', 'driving', 'piloted', 'pilots', 'piloting',
    'tested', 'tests', 'testing', 'rolled', 'rolls', 'rolling',
    'scales', 'scaled', 'scaling', 'taps', 'tapped', 'tapping',
    'employs', 'employed', 'employing', 'trains', 'trained', 'training',
    'handles', 'handled', 'handling', 'harnesses', 'harnessed', 'harnessing',
    'selected', 'selects', 'selecting', 'relies', 'relied', 'relying',
    'plans', 'planned', 'planning', 'expects', 'expected', 'expecting',
    'aims', 'aimed', 'aiming', 'seeks', 'sought', 'seeking',
    'wants', 'wanted', 'wanting', 'needs', 'needed', 'needing',
    'decided', 'decides', 'deciding', 'chose', 'chooses', 'choosing',
    'picked', 'picks', 'picking', 'standardized', 'standardizes', 'standardizing',
    'transitioned', 'transitions', 'transitioning', 'operates', 'operated', 'operating',
    'collaborated', 'collaborates', 'collaborating', 'teamed', 'teams', 'teaming',
    'joined', 'joins', 'joining', 'linked', 'links', 'linking',
  ];

  // Build regex pattern
  const verbPattern = new RegExp(
    `^([A-Z][A-Za-z0-9\\s&\\-''.(),/]+?)\\s+(${verbPatterns.join('|')})\\s`,
    'i'
  );

  const match = cleanText.match(verbPattern);
  if (match) {
    let company = match[1].trim();
    // Clean up company name
    company = company.replace(/['']s$/, '').trim();
    // Skip if too long or looks like a sentence
    if (company.length > 80 || company.split(' ').length > 10) {
      return null;
    }
    return company;
  }

  // Also try comma pattern: "CompanyName, a/an/the..."
  const commaPattern = /^([A-Z][A-Za-z0-9\s&\-''.()]+?),\s+(a|an|the|one|which|who|whose|that)\s/i;
  const commaMatch = cleanText.match(commaPattern);
  if (commaMatch) {
    let company = commaMatch[1].trim();
    if (company.length <= 80 && company.split(' ').length <= 10) {
      return company;
    }
  }

  return null;
}

function parseEnglishDocument(filePath: string): UseCase[] {
  const content = readFileSync(filePath, 'utf-8');

  // Split by double newlines to get paragraphs
  const paragraphs = content.split(/\n\n+/);

  const usecases: UseCase[] = [];
  let currentIndustry = '';
  let currentAgentType = '';
  let caseCounter: Record<string, number> = {};

  for (const para of paragraphs) {
    const text = para.trim();
    if (!text) continue;

    // Check for industry headers
    for (const [engName, id] of Object.entries(industryMap)) {
      if (text === engName || text.includes(engName)) {
        currentIndustry = id;
        currentAgentType = '';
        break;
      }
    }

    // Check for agent type headers
    for (const [engName, id] of Object.entries(agentTypeMap)) {
      if (text === engName) {
        currentAgentType = id;
        break;
      }
    }

    // Skip if no context yet
    if (!currentIndustry || !currentAgentType) continue;

    // Try to extract company name
    const isNew = text.startsWith('*');
    const company = extractCompanyName(text);

    if (company) {
      const key = `${currentIndustry}-${currentAgentType}`;
      caseCounter[key] = (caseCounter[key] || 0) + 1;

      const industryPrefix = currentIndustry.split('_')[0].substring(0, 4);
      const agentPrefix = currentAgentType.split('_')[0].substring(0, 4);
      const id = `${industryPrefix}-${agentPrefix}-${caseCounter[key]}`;

      const cleanText = isNew ? text.substring(1).trim() : text;
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
        industry: currentIndustry,
        agentType: currentAgentType,
        summary,
        technologies,
        metrics,
        isNew,
      });
    }
  }

  return usecases;
}

// 실행
const inputPath = join(process.cwd(), '../google-cloud-ai-usecase.txt');
const outputPath = join(process.cwd(), 'src/data/usecases-english.json');

console.log('Parsing English document (v2)...');
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

// Show sample
console.log('\nSample entries:');
for (let i = 0; i < 5 && i < usecases.length; i++) {
  console.log(`- ${usecases[i].company} (${usecases[i].industry}/${usecases[i].agentType})`);
}
