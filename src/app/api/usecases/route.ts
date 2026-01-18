import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);

    // 쿼리 파라미터
    const industry = searchParams.get('industry');
    const agentType = searchParams.get('agentType');
    const isNew = searchParams.get('isNew');
    const search = searchParams.get('search');
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '50');
    const skip = (page - 1) * limit;

    // 필터 조건 구성
    const where: {
      industryId?: string;
      agentTypeId?: string;
      isNew?: boolean;
      OR?: Array<{
        company?: { contains: string };
        summary?: { contains: string };
      }>;
    } = {};

    if (industry) {
      where.industryId = industry;
    }

    if (agentType) {
      where.agentTypeId = agentType;
    }

    if (isNew === 'true') {
      where.isNew = true;
    }

    if (search) {
      where.OR = [
        { company: { contains: search } },
        { summary: { contains: search } },
      ];
    }

    // 데이터 조회
    const [usecases, total] = await Promise.all([
      prisma.useCase.findMany({
        where,
        include: {
          industry: true,
          agentType: true,
          technologies: {
            include: {
              technology: true,
            },
          },
        },
        skip,
        take: limit,
        orderBy: [
          { isNew: 'desc' },
          { company: 'asc' },
        ],
      }),
      prisma.useCase.count({ where }),
    ]);

    // 응답 형식 변환
    const formattedUsecases = usecases.map((uc) => ({
      id: uc.id,
      company: uc.company,
      industry: uc.industryId,
      agentType: uc.agentTypeId,
      summary: uc.summary,
      summaryKo: uc.summaryKo || uc.summary,
      summaryEn: uc.summaryEn || uc.summary,
      technologies: uc.technologies.map((t) => t.technology.name),
      metrics: uc.metrics,
      isNew: uc.isNew,
    }));

    return NextResponse.json({
      data: formattedUsecases,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error('Error fetching usecases:', error);
    return NextResponse.json(
      { error: 'Failed to fetch usecases' },
      { status: 500 }
    );
  }
}
