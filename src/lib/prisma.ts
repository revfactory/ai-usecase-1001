import { PrismaClient } from '@prisma/client';

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    datasources: {
      db: {
        url: process.env.DATABASE_URL,
      },
    },
  });

// 서버리스 환경에서 연결 풀 관리를 위해 전역 인스턴스 저장
globalForPrisma.prisma = prisma;

export default prisma;
