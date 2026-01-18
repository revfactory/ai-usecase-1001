import { PrismaClient } from '@prisma/client';
import { readFileSync } from 'fs';
import { join } from 'path';

const prisma = new PrismaClient();

interface ParsedUseCase {
  id: string;
  company: string;
  industry: string;
  agentType: string;
  summary: string;
  technologies: string[];
  metrics?: string;
  isNew: boolean;
}

async function syncDatabase() {
  // 파싱된 데이터 로드
  const parsedPath = join(process.cwd(), 'src/data/usecases-parsed.json');
  const parsedData: ParsedUseCase[] = JSON.parse(readFileSync(parsedPath, 'utf-8'));

  console.log(`Loaded ${parsedData.length} parsed use cases`);

  // 현재 DB의 모든 use cases 가져오기
  const existingUseCases = await prisma.useCase.findMany({
    select: { company: true, industryId: true, agentTypeId: true },
  });

  // 중복 체크를 위한 키 생성
  const existingKeys = new Set(
    existingUseCases.map((uc) => `${uc.company}|${uc.industryId}|${uc.agentTypeId}`)
  );

  console.log(`Found ${existingUseCases.length} existing use cases in DB`);

  // 누락된 케이스 찾기
  const missingCases = parsedData.filter((uc) => {
    const key = `${uc.company}|${uc.industry}|${uc.agentType}`;
    return !existingKeys.has(key);
  });

  console.log(`Found ${missingCases.length} missing use cases`);

  if (missingCases.length === 0) {
    console.log('No missing use cases to add.');
    return;
  }

  // 기존 기술 태그 가져오기
  const existingTechnologies = await prisma.technology.findMany();
  const techMap = new Map(existingTechnologies.map((t) => [t.name, t.id]));

  // 누락된 케이스 추가
  let addedCount = 0;
  for (const uc of missingCases) {
    try {
      // 새 기술 태그 생성 (없는 경우)
      const techConnections: { technologyId: string }[] = [];
      for (const techName of uc.technologies) {
        let techId = techMap.get(techName);
        if (!techId) {
          // 새 기술 생성
          const newTech = await prisma.technology.create({
            data: { name: techName },
          });
          techId = newTech.id;
          techMap.set(techName, techId);
          console.log(`Created new technology: ${techName}`);
        }
        techConnections.push({ technologyId: techId });
      }

      // UseCase 생성
      await prisma.useCase.create({
        data: {
          id: uc.id,
          company: uc.company,
          industryId: uc.industry,
          agentTypeId: uc.agentType,
          summary: uc.summary,
          metrics: uc.metrics,
          isNew: uc.isNew,
          technologies: {
            create: techConnections,
          },
        },
      });

      addedCount++;
      console.log(`Added: ${uc.company} (${uc.industry}/${uc.agentType})`);
    } catch (error) {
      console.error(`Failed to add ${uc.company}:`, error);
    }
  }

  console.log(`\nSuccessfully added ${addedCount} new use cases`);

  // 최종 통계
  const finalCount = await prisma.useCase.count();
  console.log(`Total use cases in DB: ${finalCount}`);
}

syncDatabase()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
