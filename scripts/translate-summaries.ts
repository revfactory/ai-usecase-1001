import { PrismaClient } from '@prisma/client';
import translate from 'google-translate-api-x';

const prisma = new PrismaClient();

// 번역 함수 (재시도 로직 포함)
async function translateText(text: string, from: string, to: string, retries = 3): Promise<string> {
  for (let i = 0; i < retries; i++) {
    try {
      const result = await translate(text, { from, to });
      return result.text;
    } catch (error: any) {
      if (i === retries - 1) throw error;
      // 잠시 대기 후 재시도
      await new Promise(resolve => setTimeout(resolve, 1000 * (i + 1)));
    }
  }
  return text;
}

async function translateSummaries() {
  console.log('=== 번역 시작 ===\n');

  // 1. 영어 -> 한국어 번역 (summaryKo가 없는 경우)
  const needsKorean = await prisma.useCase.findMany({
    where: { summaryKo: null },
    select: { id: true, summary: true },
  });

  console.log(`한국어 번역 필요: ${needsKorean.length}개`);

  let koTranslated = 0;
  let koFailed = 0;

  for (const item of needsKorean) {
    try {
      const translated = await translateText(item.summary, 'en', 'ko');
      await prisma.useCase.update({
        where: { id: item.id },
        data: { summaryKo: translated },
      });
      koTranslated++;

      if (koTranslated % 50 === 0) {
        console.log(`  한국어 번역 진행: ${koTranslated}/${needsKorean.length}`);
      }

      // API 제한 방지를 위한 딜레이
      await new Promise(resolve => setTimeout(resolve, 200));
    } catch (error) {
      koFailed++;
      console.error(`  실패 (${item.id}):`, error);
    }
  }

  console.log(`\n한국어 번역 완료: ${koTranslated}개, 실패: ${koFailed}개\n`);

  // 2. 한국어 -> 영어 번역 (summaryEn이 없는 경우)
  const needsEnglish = await prisma.useCase.findMany({
    where: { summaryEn: null },
    select: { id: true, summary: true },
  });

  console.log(`영어 번역 필요: ${needsEnglish.length}개`);

  let enTranslated = 0;
  let enFailed = 0;

  for (const item of needsEnglish) {
    try {
      const translated = await translateText(item.summary, 'ko', 'en');
      await prisma.useCase.update({
        where: { id: item.id },
        data: { summaryEn: translated },
      });
      enTranslated++;

      if (enTranslated % 50 === 0) {
        console.log(`  영어 번역 진행: ${enTranslated}/${needsEnglish.length}`);
      }

      await new Promise(resolve => setTimeout(resolve, 200));
    } catch (error) {
      enFailed++;
      console.error(`  실패 (${item.id}):`, error);
    }
  }

  console.log(`\n영어 번역 완료: ${enTranslated}개, 실패: ${enFailed}개`);

  // 최종 통계
  const finalKo = await prisma.useCase.count({ where: { summaryKo: { not: null } } });
  const finalEn = await prisma.useCase.count({ where: { summaryEn: { not: null } } });

  console.log(`\n=== 최종 결과 ===`);
  console.log(`한국어 요약: ${finalKo}/1001`);
  console.log(`영어 요약: ${finalEn}/1001`);
}

translateSummaries()
  .catch((e) => {
    console.error('번역 오류:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
