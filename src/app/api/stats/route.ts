import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

// Edge 캐싱 설정
export const revalidate = 300; // 5분 캐시

export async function GET() {
  try {
    const startTime = Date.now();
    // 전체 통계
    const [
      totalUsecases,
      newUsecases,
      industriesWithCount,
      agentTypesWithCount,
      topTechnologies,
    ] = await Promise.all([
      // 전체 사례 수
      prisma.useCase.count(),

      // 신규 사례 수
      prisma.useCase.count({ where: { isNew: true } }),

      // 산업별 사례 수
      prisma.industry.findMany({
        include: {
          _count: {
            select: { useCases: true },
          },
        },
      }),

      // 에이전트 유형별 사례 수
      prisma.agentType.findMany({
        include: {
          _count: {
            select: { useCases: true },
          },
        },
      }),

      // 상위 기술 태그
      prisma.technology.findMany({
        include: {
          _count: {
            select: { useCases: true },
          },
        },
        orderBy: {
          useCases: {
            _count: 'desc',
          },
        },
        take: 20,
      }),
    ]);

    // 매트릭스 데이터 (산업 x 에이전트 유형)
    const matrix = await prisma.useCase.groupBy({
      by: ['industryId', 'agentTypeId'],
      _count: {
        id: true,
      },
    });

    const duration = Date.now() - startTime;

    return NextResponse.json(
      {
        total: totalUsecases,
        newCases: newUsecases,
        industries: industriesWithCount.map((i) => ({
          id: i.id,
          name: i.name,
          color: i.color,
          icon: i.icon,
          count: i._count.useCases,
        })),
        agentTypes: agentTypesWithCount.map((a) => ({
          id: a.id,
          name: a.name,
          icon: a.icon,
          description: a.description,
          count: a._count.useCases,
        })),
        topTechnologies: topTechnologies.map((t) => ({
          name: t.name,
          count: t._count.useCases,
        })),
        matrix: matrix.map((m) => ({
          industry: m.industryId,
          agentType: m.agentTypeId,
          count: m._count.id,
        })),
        _meta: { queryTime: `${duration}ms` },
      },
      {
        headers: {
          'Cache-Control': 'public, max-age=300, s-maxage=300, stale-while-revalidate=600',
        },
      }
    );
  } catch (error) {
    console.error('Error fetching stats:', error);
    return NextResponse.json(
      { error: 'Failed to fetch stats' },
      { status: 500 }
    );
  }
}
