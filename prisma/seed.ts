import { PrismaClient } from '@prisma/client';

// 산업 분야 데이터
const industries = [
  { id: 'automotive_logistics', name: '자동차 및 물류', color: '#FF6B6B', icon: '🚗' },
  { id: 'business_services', name: '비즈니스 서비스', color: '#4ECDC4', icon: '💼' },
  { id: 'financial_services', name: '금융 서비스', color: '#45B7D1', icon: '🏦' },
  { id: 'healthcare_lifesciences', name: '헬스케어', color: '#96CEB4', icon: '🏥' },
  { id: 'hospitality_travel', name: '호스피탈리티', color: '#FFEAA7', icon: '✈️' },
  { id: 'manufacturing', name: '제조', color: '#DDA0DD', icon: '🏭' },
  { id: 'media_marketing', name: '미디어/마케팅', color: '#FFB6C1', icon: '📺' },
  { id: 'public_sector', name: '공공 부문', color: '#98D8C8', icon: '🏛️' },
  { id: 'retail', name: '소매', color: '#F7DC6F', icon: '🛒' },
  { id: 'technology', name: '기술', color: '#BB8FCE', icon: '💻' },
  { id: 'telecommunications', name: '통신', color: '#85C1E9', icon: '📡' },
];

// 에이전트 유형 데이터
const agentTypes = [
  { id: 'customer_agent', name: '고객 에이전트', icon: '👤', description: '고객 서비스, 챗봇, 가상 비서 등 고객 대면 AI' },
  { id: 'employee_agent', name: '직원 에이전트', icon: '💼', description: '직원 생산성 향상, 내부 도구, 업무 자동화' },
  { id: 'creative_agent', name: '크리에이티브', icon: '🎨', description: '콘텐츠 생성, 디자인, 마케팅 자료 제작' },
  { id: 'code_agent', name: '코드 에이전트', icon: '💻', description: '코드 생성, 리뷰, 개발 도구 지원' },
  { id: 'data_agent', name: '데이터 에이전트', icon: '📊', description: '데이터 분석, 인사이트 추출, 예측' },
  { id: 'security_agent', name: '보안 에이전트', icon: '🛡️', description: '보안 모니터링, 위협 탐지, 규정 준수' },
];

// usecases는 너무 커서 파일에서 동적으로 로드
import { readFileSync } from 'fs';
import { join } from 'path';

function loadUsecases() {
  const filePath = join(process.cwd(), 'src/data/usecases.ts');
  const content = readFileSync(filePath, 'utf-8');

  // usecases 배열 추출 (간단한 파싱)
  const match = content.match(/export const usecases: UseCase\[\] = \[([\s\S]*)\];/);
  if (!match) {
    throw new Error('Could not parse usecases file');
  }

  // 각 객체를 파싱
  const arrayContent = match[1];
  const usecases: Array<{
    id: string;
    company: string;
    industry: string;
    agentType: string;
    summary: string;
    technologies: string[];
    metrics?: string;
    isNew: boolean;
  }> = [];

  // 정규식으로 각 객체 추출
  const objectRegex = /\{\s*id:\s*'([^']+)',\s*company:\s*'([^']+)',\s*industry:\s*'([^']+)',\s*agentType:\s*'([^']+)',\s*summary:\s*'([^']+)',\s*technologies:\s*\[([^\]]*)\](?:,\s*metrics:\s*'([^']+)')?(?:,\s*isNew:\s*(true|false))?\s*\}/g;

  let objMatch;
  while ((objMatch = objectRegex.exec(arrayContent)) !== null) {
    const technologies = objMatch[6]
      .split(',')
      .map(t => t.trim().replace(/^'|'$/g, ''))
      .filter(t => t.length > 0);

    usecases.push({
      id: objMatch[1],
      company: objMatch[2],
      industry: objMatch[3],
      agentType: objMatch[4],
      summary: objMatch[5],
      technologies,
      metrics: objMatch[7] || undefined,
      isNew: objMatch[8] === 'true',
    });
  }

  return usecases;
}

const usecases = loadUsecases();

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding database...');

  // 1. 산업 분야 데이터 삽입
  console.log('Inserting industries...');
  for (const industry of industries) {
    await prisma.industry.upsert({
      where: { id: industry.id },
      update: {
        name: industry.name,
        color: industry.color,
        icon: industry.icon,
      },
      create: {
        id: industry.id,
        name: industry.name,
        color: industry.color,
        icon: industry.icon,
      },
    });
  }
  console.log(`Inserted ${industries.length} industries`);

  // 2. 에이전트 유형 데이터 삽입
  console.log('Inserting agent types...');
  for (const agentType of agentTypes) {
    await prisma.agentType.upsert({
      where: { id: agentType.id },
      update: {
        name: agentType.name,
        icon: agentType.icon,
        description: agentType.description,
      },
      create: {
        id: agentType.id,
        name: agentType.name,
        icon: agentType.icon,
        description: agentType.description,
      },
    });
  }
  console.log(`Inserted ${agentTypes.length} agent types`);

  // 3. 기술 태그 수집 및 삽입
  console.log('Collecting technologies...');
  const allTechnologies = new Set<string>();
  for (const usecase of usecases) {
    for (const tech of usecase.technologies) {
      allTechnologies.add(tech);
    }
  }

  console.log(`Inserting ${allTechnologies.size} technologies...`);
  const techMap = new Map<string, number>();
  for (const techName of allTechnologies) {
    const tech = await prisma.technology.upsert({
      where: { name: techName },
      update: {},
      create: { name: techName },
    });
    techMap.set(techName, tech.id);
  }
  console.log(`Inserted ${allTechnologies.size} technologies`);

  // 4. 사용 사례 데이터 삽입
  console.log('Inserting use cases...');
  let count = 0;
  for (const usecase of usecases) {
    // 기존 데이터 삭제 후 삽입 (upsert)
    await prisma.useCase.upsert({
      where: { id: usecase.id },
      update: {
        company: usecase.company,
        industryId: usecase.industry,
        agentTypeId: usecase.agentType,
        summary: usecase.summary,
        metrics: usecase.metrics || null,
        isNew: usecase.isNew,
      },
      create: {
        id: usecase.id,
        company: usecase.company,
        industryId: usecase.industry,
        agentTypeId: usecase.agentType,
        summary: usecase.summary,
        metrics: usecase.metrics || null,
        isNew: usecase.isNew,
      },
    });

    // 기존 기술 관계 삭제
    await prisma.useCaseTechnology.deleteMany({
      where: { useCaseId: usecase.id },
    });

    // 기술 관계 삽입
    for (const techName of usecase.technologies) {
      const techId = techMap.get(techName);
      if (techId) {
        await prisma.useCaseTechnology.create({
          data: {
            useCaseId: usecase.id,
            technologyId: techId,
          },
        });
      }
    }

    count++;
    if (count % 100 === 0) {
      console.log(`Processed ${count} use cases...`);
    }
  }
  console.log(`Inserted ${usecases.length} use cases`);

  console.log('Seeding completed!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
