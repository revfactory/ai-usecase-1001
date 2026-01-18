import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// 한글 포함 여부로 언어 감지
function isKorean(text: string): boolean {
  const koreanRegex = /[\uac00-\ud7af]/;
  return koreanRegex.test(text);
}

async function migrateBilingual() {
  console.log('다국어 필드 마이그레이션 시작...');

  const usecases = await prisma.useCase.findMany({
    where: {
      OR: [
        { summaryKo: null },
        { summaryEn: null },
      ],
    },
  });

  console.log(`처리할 케이스: ${usecases.length}개`);

  let koCount = 0;
  let enCount = 0;

  for (const uc of usecases) {
    const updates: { summaryKo?: string; summaryEn?: string } = {};

    if (isKorean(uc.summary)) {
      // 한글 요약인 경우
      if (!uc.summaryKo) {
        updates.summaryKo = uc.summary;
        koCount++;
      }
    } else {
      // 영어 요약인 경우
      if (!uc.summaryEn) {
        updates.summaryEn = uc.summary;
        enCount++;
      }
    }

    if (Object.keys(updates).length > 0) {
      await prisma.useCase.update({
        where: { id: uc.id },
        data: updates,
      });
    }
  }

  console.log(`\n=== 마이그레이션 완료 ===`);
  console.log(`한국어 요약 설정: ${koCount}개`);
  console.log(`영어 요약 설정: ${enCount}개`);

  // 통계
  const totalKo = await prisma.useCase.count({ where: { summaryKo: { not: null } } });
  const totalEn = await prisma.useCase.count({ where: { summaryEn: { not: null } } });
  const total = await prisma.useCase.count();

  console.log(`\n=== 현재 상태 ===`);
  console.log(`전체: ${total}개`);
  console.log(`한국어 요약 있음: ${totalKo}개`);
  console.log(`영어 요약 있음: ${totalEn}개`);
}

migrateBilingual()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
