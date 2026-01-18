import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function trimTo1001() {
  const currentCount = await prisma.useCase.count();
  const targetCount = 1001;
  const toRemove = currentCount - targetCount;

  console.log(`현재: ${currentCount}개`);
  console.log(`목표: ${targetCount}개`);
  console.log(`제거할 케이스: ${toRemove}개`);

  if (toRemove <= 0) {
    console.log('이미 1001개 이하입니다.');
    return;
  }

  // 덜 중요한 케이스 선정 기준:
  // 1. metrics가 없음
  // 2. 요약이 짧음
  // 3. isNew가 false (기존 케이스)
  // 4. 기술 태그가 적음
  const casesToRemove = await prisma.$queryRaw<{ id: string }[]>`
    SELECT u.id
    FROM usecases u
    LEFT JOIN (
      SELECT useCaseId, COUNT(*) as tech_count
      FROM usecase_technologies
      GROUP BY useCaseId
    ) t ON u.id = t.useCaseId
    WHERE u.metrics IS NULL OR u.metrics = ''
    ORDER BY
      u.isNew ASC,           -- 기존 케이스 우선 제거
      LENGTH(u.summary) ASC, -- 짧은 요약 우선 제거
      COALESCE(t.tech_count, 0) ASC  -- 기술 태그 적은 것 우선
    LIMIT ${toRemove}
  `;

  console.log(`\n선정된 ${casesToRemove.length}개 케이스 제거 중...`);

  let deleted = 0;
  for (const c of casesToRemove) {
    // 기술 연결 삭제
    await prisma.useCaseTechnology.deleteMany({
      where: { useCaseId: c.id },
    });
    // 케이스 삭제
    await prisma.useCase.delete({
      where: { id: c.id },
    });
    deleted++;
  }

  console.log(`${deleted}개 삭제 완료`);

  // 최종 확인
  const finalCount = await prisma.useCase.count();
  const newCount = await prisma.useCase.count({ where: { isNew: true } });

  console.log(`\n=== 최종 결과 ===`);
  console.log(`총 케이스: ${finalCount}`);
  console.log(`신규 케이스: ${newCount}`);
}

trimTo1001()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
