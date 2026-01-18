import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function cleanupDuplicates() {
  console.log('Finding duplicates...');

  // 중복 찾기 (company + industryId + agentTypeId가 같은 것)
  const duplicates = await prisma.$queryRaw<
    { company: string; industryId: string; agentTypeId: string; cnt: number }[]
  >`
    SELECT company, industryId, agentTypeId, COUNT(*) as cnt
    FROM usecases
    GROUP BY company, industryId, agentTypeId
    HAVING COUNT(*) > 1
  `;

  console.log(`Found ${duplicates.length} duplicate groups`);

  let deletedCount = 0;

  for (const dup of duplicates) {
    // 같은 조합의 모든 케이스 가져오기
    const cases = await prisma.useCase.findMany({
      where: {
        company: dup.company,
        industryId: dup.industryId,
        agentTypeId: dup.agentTypeId,
      },
      orderBy: { createdAt: 'asc' },
    });

    // 첫 번째만 유지, 나머지 삭제
    const toDelete = cases.slice(1);
    for (const c of toDelete) {
      // 먼저 관련 기술 연결 삭제
      await prisma.useCaseTechnology.deleteMany({
        where: { useCaseId: c.id },
      });
      // 케이스 삭제
      await prisma.useCase.delete({
        where: { id: c.id },
      });
      deletedCount++;
    }
  }

  console.log(`Deleted ${deletedCount} duplicate entries`);

  // 최종 통계
  const total = await prisma.useCase.count();
  const uniqueCompanies = await prisma.$queryRaw<{ cnt: number }[]>`
    SELECT COUNT(DISTINCT company) as cnt FROM usecases
  `;

  console.log(`\n=== 최종 결과 ===`);
  console.log(`총 케이스: ${total}`);
  console.log(`고유 회사: ${uniqueCompanies[0].cnt}`);
}

cleanupDuplicates()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
