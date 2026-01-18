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
  '자동차 및 물류': 'automotive_logistics',
  '비즈니스 및 전문 서비스': 'business_services',
  '금융 서비스': 'financial_services',
  '헬스케어 및 생명과학': 'healthcare_lifesciences',
  '호스피탈리티 및 여행': 'hospitality_travel',
  '제조업': 'manufacturing',
  '미디어 및 마케팅': 'media_marketing',
  '공공 부문': 'public_sector',
  '소매': 'retail',
  '기술': 'technology',
  '통신': 'telecommunications',
};

const agentTypeMap: Record<string, string> = {
  '고객 에이전트': 'customer_agent',
  '직원 에이전트': 'employee_agent',
  '크리에이티브 에이전트': 'creative_agent',
  '코드 에이전트': 'code_agent',
  '데이터 에이전트': 'data_agent',
  '보안 에이전트': 'security_agent',
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
    'AI', '생성형 AI', '대화형 AI', '디지털 트윈', '머신러닝'
  ];

  for (const tech of techKeywords) {
    if (text.includes(tech)) {
      techs.push(tech);
    }
  }

  return techs.length > 0 ? techs : ['Google Cloud AI'];
}

function extractMetrics(text: string): string | undefined {
  // 숫자와 %가 포함된 패턴 찾기
  const metricsPatterns = [
    /(\d+%[^.]*)/g,
    /(\d+배[^.]*)/g,
    /(시간[^.]*단축[^.]*)/g,
    /(비용[^.]*절감[^.]*)/g,
  ];

  for (const pattern of metricsPatterns) {
    const match = text.match(pattern);
    if (match) {
      return match[0];
    }
  }
  return undefined;
}

function parseDocument(filePath: string): UseCase[] {
  const content = readFileSync(filePath, 'utf-8');
  const lines = content.split('\n');

  const usecases: UseCase[] = [];
  let currentIndustry = '';
  let currentAgentType = '';
  let caseCounter: Record<string, number> = {};

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();

    // 산업 섹션 감지
    if (line.startsWith('====')) {
      const nextLine = lines[i + 1]?.trim();
      if (nextLine && industryMap[nextLine]) {
        currentIndustry = industryMap[nextLine];
        i++; // 다음 라인 건너뛰기
        continue;
      }
    }

    // 에이전트 유형 감지
    if (agentTypeMap[line]) {
      currentAgentType = agentTypeMap[line];
      continue;
    }

    // 사례 파싱 (회사명으로 시작하는 문단)
    if (line && currentIndustry && currentAgentType && !line.startsWith('===') && !line.startsWith('[')) {
      // 회사명 추출 (첫 단어 또는 *로 시작하면 첫 단어)
      const isNew = line.startsWith('*');
      const cleanLine = isNew ? line.substring(1) : line;

      // 회사명 추출: "은/는/이/가" 또는 "," 또는 "의" 전까지
      const companyMatch = cleanLine.match(/^([^은는이가,의]+)/);
      if (companyMatch) {
        let company = companyMatch[1].trim();

        // 너무 긴 회사명은 제외 (설명문일 가능성)
        if (company.length > 50 || company.includes('우리') || company.includes('이러한')) {
          continue;
        }

        // ID 생성
        const industryPrefix = currentIndustry.split('_')[0].substring(0, 4);
        const agentPrefix = currentAgentType.split('_')[0].substring(0, 4);
        const key = `${currentIndustry}-${currentAgentType}`;
        caseCounter[key] = (caseCounter[key] || 0) + 1;
        const id = `${industryPrefix}-${agentPrefix}-${caseCounter[key]}`;

        // 기술 추출
        const technologies = extractTechnologies(cleanLine);

        // 지표 추출
        const metrics = extractMetrics(cleanLine);

        // 요약 (첫 문장 또는 전체)
        let summary = cleanLine;
        if (summary.length > 200) {
          const firstSentence = summary.match(/^[^.]+\./);
          if (firstSentence) {
            summary = firstSentence[0];
          } else {
            summary = summary.substring(0, 200) + '...';
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
  }

  return usecases;
}

// 실행
const inputPath = join(process.cwd(), '../google-cloud-ai-usecase-korean.txt');
const outputPath = join(process.cwd(), 'src/data/usecases-parsed.json');

console.log('Parsing document...');
const usecases = parseDocument(inputPath);
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
for (const [k, v] of Object.entries(byIndustry)) {
  console.log(`  ${k}: ${v}`);
}

console.log('\nBy Agent Type:');
for (const [k, v] of Object.entries(byAgentType)) {
  console.log(`  ${k}: ${v}`);
}

console.log(`\nNew cases: ${newCount}`);

// JSON 저장
writeFileSync(outputPath, JSON.stringify(usecases, null, 2));
console.log(`\nSaved to ${outputPath}`);
