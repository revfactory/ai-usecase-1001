import { PrismaClient } from '@prisma/client';
import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const prisma = new PrismaClient();

interface EnglishUseCase {
  id: string;
  company: string;
  companyOriginal: string;
  industry: string;
  agentType: string;
  summary: string;
  summaryOriginal: string;
  technologies: string[];
  metrics?: string;
  isNew: boolean;
}

async function findMissingCases() {
  // 영문 파싱 데이터 로드
  const englishPath = join(process.cwd(), 'src/data/usecases-english.json');
  const englishData: EnglishUseCase[] = JSON.parse(readFileSync(englishPath, 'utf-8'));
  console.log(`Loaded ${englishData.length} English use cases`);

  // DB에서 현재 케이스 로드
  const existingCases = await prisma.useCase.findMany({
    select: {
      company: true,
      industryId: true,
      agentTypeId: true,
    },
  });
  console.log(`Found ${existingCases.length} existing cases in DB`);

  // 회사명 정규화 함수
  const normalizeCompany = (name: string): string => {
    return name
      .toLowerCase()
      .replace(/['']/g, "'")
      .replace(/\s+/g, ' ')
      .replace(/[.,()]/g, '')
      .trim();
  };

  // 기존 케이스를 Set으로 변환 (회사명 + 산업 + 에이전트유형)
  const existingSet = new Set<string>();
  const existingCompanies = new Set<string>();

  for (const ec of existingCases) {
    const key = `${normalizeCompany(ec.company)}|${ec.industryId}|${ec.agentTypeId}`;
    existingSet.add(key);
    existingCompanies.add(normalizeCompany(ec.company));
  }

  // 누락된 케이스 찾기
  const missingCases: EnglishUseCase[] = [];
  const partialMatches: { english: EnglishUseCase; reason: string }[] = [];

  for (const ec of englishData) {
    const normalizedCompany = normalizeCompany(ec.company);
    const key = `${normalizedCompany}|${ec.industry}|${ec.agentType}`;

    if (!existingSet.has(key)) {
      // 회사가 다른 산업/에이전트에 존재하는지 확인
      if (existingCompanies.has(normalizedCompany)) {
        partialMatches.push({
          english: ec,
          reason: `Company exists but in different industry/agent type`,
        });
      } else {
        missingCases.push(ec);
      }
    }
  }

  console.log(`\nFound ${missingCases.length} completely missing cases`);
  console.log(`Found ${partialMatches.length} partial matches (same company, different context)`);

  // 산업별/에이전트별 통계
  const byIndustry: Record<string, number> = {};
  const byAgentType: Record<string, number> = {};

  for (const mc of missingCases) {
    byIndustry[mc.industry] = (byIndustry[mc.industry] || 0) + 1;
    byAgentType[mc.agentType] = (byAgentType[mc.agentType] || 0) + 1;
  }

  console.log('\nMissing by Industry:');
  for (const [k, v] of Object.entries(byIndustry).sort((a, b) => b[1] - a[1])) {
    console.log(`  ${k}: ${v}`);
  }

  console.log('\nMissing by Agent Type:');
  for (const [k, v] of Object.entries(byAgentType).sort((a, b) => b[1] - a[1])) {
    console.log(`  ${k}: ${v}`);
  }

  // 누락된 케이스를 파일로 저장
  const outputPath = join(process.cwd(), 'src/data/usecases-missing.json');
  writeFileSync(outputPath, JSON.stringify(missingCases, null, 2));
  console.log(`\nSaved ${missingCases.length} missing cases to ${outputPath}`);

  // 부분 매치도 저장
  const partialPath = join(process.cwd(), 'src/data/usecases-partial.json');
  writeFileSync(partialPath, JSON.stringify(partialMatches, null, 2));
  console.log(`Saved ${partialMatches.length} partial matches to ${partialPath}`);

  // 샘플 출력
  console.log('\n--- Sample missing cases ---');
  for (let i = 0; i < 10 && i < missingCases.length; i++) {
    const mc = missingCases[i];
    console.log(`\n${i + 1}. ${mc.company} (${mc.industry}/${mc.agentType})`);
    console.log(`   ${mc.summaryOriginal.substring(0, 150)}...`);
  }

  return { missingCases, partialMatches };
}

findMissingCases()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
