import { PrismaClient } from '@prisma/client';
import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const prisma = new PrismaClient();

interface MissingUseCase {
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

// 회사명 정리
function cleanCompanyName(name: string): string {
  return name
    // 후행 쉼표 및 설명 제거
    .replace(/,\s*(a|an|the|one|which|who|whose)\s.*$/i, '')
    // 후행 also, additionally 등 제거
    .replace(/\s+also$/i, '')
    .replace(/\s+additionally$/i, '')
    // 후행 쉼표 제거
    .replace(/,+$/, '')
    // 따옴표 통일
    .replace(/['']s\s*$/, '')
    .replace(/['']/g, "'")
    // 공백 정리
    .replace(/\s+/g, ' ')
    .trim();
}

// 기술 태그 한글화
const techTranslations: Record<string, string> = {
  'Google Cloud AI': 'Google Cloud AI',
  'Vertex AI': 'Vertex AI',
  'Gemini': 'Gemini',
  'BigQuery': 'BigQuery',
  'Google Cloud': 'Google Cloud',
  'Cloud Run': 'Cloud Run',
  'Google Kubernetes Engine': 'Google Kubernetes Engine',
  'GKE': 'GKE',
  'Looker': 'Looker',
  'Document AI': 'Document AI',
  'Doc AI': 'Doc AI',
  'Dialogflow': 'Dialogflow',
  'Contact Center AI': 'Contact Center AI',
  'NotebookLM': 'NotebookLM',
  'Google Workspace': 'Google Workspace',
  'Imagen': 'Imagen',
  'Veo': 'Veo',
  'AlloyDB': 'AlloyDB',
  'Cloud SQL': 'Cloud SQL',
  'Firestore': 'Firestore',
  'Cloud Storage': 'Cloud Storage',
  'Cloud Functions': 'Cloud Functions',
  'Agentspace': 'Agentspace',
  'Security Operations': 'Security Operations',
  'Code Assist': 'Code Assist',
  'AI Hypercomputer': 'AI Hypercomputer',
  'MedLM': 'MedLM',
  'Customer Engagement Suite': 'Customer Engagement Suite',
  'Model Garden': 'Model Garden',
  'Gemini Code Assist': 'Gemini Code Assist',
  'Compute Engine': 'Compute Engine',
  'Speech-to-Text': 'Speech-to-Text',
  'Text-to-Speech': 'Text-to-Speech',
  'Cloud Spanner': 'Cloud Spanner',
  'Pub/Sub': 'Pub/Sub',
  'Dataflow': 'Dataflow',
  'Dataproc': 'Dataproc',
  'TensorFlow': 'TensorFlow',
  'AI Studio': 'AI Studio',
  'Chirp': 'Chirp',
  'TPU': 'TPU',
  'GPU': 'GPU',
};

async function addMissingCases() {
  // 누락된 케이스 로드
  const missingPath = join(process.cwd(), 'src/data/usecases-missing.json');
  const missingCases: MissingUseCase[] = JSON.parse(readFileSync(missingPath, 'utf-8'));
  console.log(`Loaded ${missingCases.length} missing cases`);

  // 기존 기술 태그 로드
  const existingTechnologies = await prisma.technology.findMany();
  const techMap = new Map(existingTechnologies.map((t) => [t.name, t.id]));
  console.log(`Found ${existingTechnologies.length} existing technologies`);

  // 기존 케이스 ID 체크 (중복 방지)
  const existingIds = new Set(
    (await prisma.useCase.findMany({ select: { id: true } })).map((u) => u.id)
  );

  let addedCount = 0;
  let skippedCount = 0;
  let errorCount = 0;

  // 배치 처리를 위한 카운터
  const batchSize = 50;

  for (let i = 0; i < missingCases.length; i++) {
    const mc = missingCases[i];

    // 회사명 정리
    const cleanedCompany = cleanCompanyName(mc.company);

    // ID 생성 (중복 방지)
    let uniqueId = mc.id;
    let suffix = 1;
    while (existingIds.has(uniqueId)) {
      uniqueId = `${mc.id}-${suffix}`;
      suffix++;
    }

    try {
      // 기술 태그 처리
      const techConnections: { technologyId: string }[] = [];
      for (const techName of mc.technologies) {
        let techId = techMap.get(techName);
        if (!techId) {
          // 새 기술 생성
          const newTech = await prisma.technology.create({
            data: { name: techName },
          });
          techId = newTech.id;
          techMap.set(techName, techId);
        }
        techConnections.push({ technologyId: techId });
      }

      // 요약 정리 (500자 제한)
      let summary = mc.summaryOriginal;
      if (summary.length > 500) {
        const sentences = summary.match(/[^.!?]+[.!?]+/g);
        if (sentences && sentences.length >= 2) {
          summary = sentences.slice(0, 2).join('');
        } else {
          summary = summary.substring(0, 497) + '...';
        }
      }

      // UseCase 생성
      await prisma.useCase.create({
        data: {
          id: uniqueId,
          company: cleanedCompany,
          industryId: mc.industry,
          agentTypeId: mc.agentType,
          summary: summary,
          metrics: mc.metrics,
          isNew: mc.isNew,
          technologies: {
            create: techConnections,
          },
        },
      });

      existingIds.add(uniqueId);
      addedCount++;

      // 진행상황 출력
      if (addedCount % batchSize === 0) {
        console.log(`Progress: ${addedCount}/${missingCases.length} added`);
      }
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      // P2002: Unique constraint violation
      if (errorMessage.includes('P2002') || errorMessage.includes('Unique constraint')) {
        skippedCount++;
      } else {
        errorCount++;
        if (errorCount <= 10) {
          console.error(`Error adding ${cleanedCompany}:`, errorMessage);
        }
      }
    }
  }

  console.log(`\n=== Summary ===`);
  console.log(`Added: ${addedCount}`);
  console.log(`Skipped (duplicates): ${skippedCount}`);
  console.log(`Errors: ${errorCount}`);

  // 최종 통계
  const finalStats = await prisma.useCase.groupBy({
    by: ['industryId'],
    _count: { id: true },
  });

  const totalCount = await prisma.useCase.count();
  console.log(`\nTotal use cases in DB: ${totalCount}`);

  console.log('\nBy Industry:');
  for (const stat of finalStats.sort((a, b) => b._count.id - a._count.id)) {
    console.log(`  ${stat.industryId}: ${stat._count.id}`);
  }
}

addMissingCases()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
