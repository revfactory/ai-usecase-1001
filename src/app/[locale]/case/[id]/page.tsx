'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import PaperCard from '@/components/PaperCard';
import UseCaseCard from '@/components/UseCaseCard';
import { IndustryBadge, AgentBadge, TechBadge, NewBadge } from '@/components/Badge';
import { industries, agentTypes } from '@/data/constants';
import { UseCase } from '@/types';

export default function CaseDetailPage() {
  const params = useParams();
  const id = params.id as string;
  const locale = useLocale();
  const t = useTranslations('case');
  const tIndustries = useTranslations('industries');
  const tAgentTypes = useTranslations('agentTypes');
  const tAgentDesc = useTranslations('agentDescriptions');

  const [useCase, setUseCase] = useState<UseCase | null>(null);
  const [relatedCases, setRelatedCases] = useState<UseCase[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // 전체 데이터 로드
        const response = await fetch('/api/usecases?limit=2000');
        if (response.ok) {
          const result = await response.json();
          const allCases: UseCase[] = result.data;

          // 현재 케이스 찾기
          const currentCase = allCases.find((uc) => uc.id === id);
          setUseCase(currentCase || null);

          // 관련 케이스 찾기
          if (currentCase) {
            const related = allCases
              .filter(
                (uc) =>
                  uc.id !== currentCase.id &&
                  (uc.industry === currentCase.industry || uc.agentType === currentCase.agentType)
              )
              .slice(0, 3);
            setRelatedCases(related);
          }
        }
      } catch (error) {
        console.error('Failed to fetch data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-4xl animate-bounce">🔍</div>
          <p style={{ fontFamily: 'Gaegu, cursive' }}>Loading...</p>
        </div>
      </div>
    );
  }

  if (!useCase) {
    return (
      <div className="min-h-screen py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <PaperCard color="yellow" rotation={0} className="py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h1
              className="text-2xl mb-4"
              style={{ fontFamily: 'Jua, sans-serif' }}
            >
              {t('notFound')}
            </h1>
            <Link href="/explore">
              <button className="paper-button paper-button-accent">
                {t('backToExplore')}
              </button>
            </Link>
          </PaperCard>
        </div>
      </div>
    );
  }

  const industry = industries.find((i) => i.id === useCase.industry);
  const agent = agentTypes.find((a) => a.id === useCase.agentType);

  // 현재 로케일에 따른 요약 선택
  const summary = locale === 'en'
    ? (useCase.summaryEn || useCase.summary)
    : (useCase.summaryKo || useCase.summary);

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Back Link */}
        <div className="mb-6">
          <Link
            href="/explore"
            className="inline-flex items-center gap-2 text-[var(--text-medium)] hover:text-[var(--accent-coral)] transition-colors"
            style={{ fontFamily: 'Jua, sans-serif' }}
          >
            ← {t('backLink')}
          </Link>
        </div>

        {/* Main Card */}
        <PaperCard color="white" rotation={0} withTape className="relative mb-8">
          {/* NEW Badge */}
          {useCase.isNew && (
            <div className="absolute top-4 right-4">
              <NewBadge />
            </div>
          )}

          <div className="space-y-6">
            {/* Badges */}
            <div className="flex flex-wrap gap-3">
              <IndustryBadge industryId={useCase.industry} size="lg" />
              <AgentBadge agentTypeId={useCase.agentType} size="lg" />
            </div>

            {/* Company Name */}
            <h1
              className="text-4xl"
              style={{ fontFamily: 'Jua, sans-serif' }}
            >
              {useCase.company}
            </h1>

            {/* Summary */}
            <div
              className="bg-[var(--paper-cream)] rounded-lg p-6"
              style={{
                borderLeft: `4px solid ${industry?.color || 'var(--accent-coral)'}`,
              }}
            >
              <h2
                className="text-lg mb-2 text-[var(--text-medium)]"
                style={{ fontFamily: 'Jua, sans-serif' }}
              >
                📋 {t('useCase')}
              </h2>
              <p
                className="text-lg leading-relaxed text-[var(--text-dark)]"
                style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
              >
                {summary}
              </p>
            </div>

            {/* Metrics */}
            {useCase.metrics && (
              <PaperCard color="mint" rotation={1} className="!p-4">
                <h2
                  className="text-lg mb-2"
                  style={{ fontFamily: 'Jua, sans-serif' }}
                >
                  📊 {t('keyMetrics')}
                </h2>
                <p
                  className="text-xl font-bold text-[var(--accent-teal)]"
                  style={{ fontFamily: 'Jua, sans-serif' }}
                >
                  {useCase.metrics}
                </p>
              </PaperCard>
            )}

            {/* Technologies */}
            <div>
              <h2
                className="text-lg mb-3"
                style={{ fontFamily: 'Jua, sans-serif' }}
              >
                🛠️ {t('technologies')}
              </h2>
              <div className="flex flex-wrap gap-2">
                {useCase.technologies.map((tech) => (
                  <TechBadge key={tech} tech={tech} />
                ))}
              </div>
            </div>

            {/* Industry and Agent Info */}
            <div className="grid md:grid-cols-2 gap-4">
              <PaperCard color="pink" rotation={-1} className="!p-4">
                <h3
                  className="text-base mb-2"
                  style={{ fontFamily: 'Jua, sans-serif' }}
                >
                  🏭 {t('industrySection')}
                </h3>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{industry?.icon}</span>
                  <span style={{ fontFamily: 'Jua, sans-serif', color: industry?.color }}>
                    {tIndustries(useCase.industry)}
                  </span>
                </div>
              </PaperCard>

              <PaperCard color="lavender" rotation={1} className="!p-4">
                <h3
                  className="text-base mb-2"
                  style={{ fontFamily: 'Jua, sans-serif' }}
                >
                  🤖 {t('agentSection')}
                </h3>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{agent?.icon}</span>
                  <span style={{ fontFamily: 'Jua, sans-serif' }}>
                    {tAgentTypes(useCase.agentType)}
                  </span>
                </div>
                <p
                  className="text-sm text-[var(--text-light)] mt-1"
                  style={{ fontFamily: 'Gaegu, cursive' }}
                >
                  {tAgentDesc(useCase.agentType)}
                </p>
              </PaperCard>
            </div>
          </div>
        </PaperCard>

        {/* Related Cases */}
        {relatedCases.length > 0 && (
          <div>
            <h2
              className="text-2xl mb-6 text-center"
              style={{ fontFamily: 'Jua, sans-serif' }}
            >
              <span
                className="inline-block bg-[var(--paper-sky)] px-4 py-2 shadow-[3px_3px_0px_rgba(0,0,0,0.15)]"
                style={{ transform: 'rotate(1deg)' }}
              >
                🔗 {t('relatedCases')}
              </span>
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedCases.map((uc, idx) => (
                <UseCaseCard key={uc.id} useCase={uc} index={idx + 5} />
              ))}
            </div>
          </div>
        )}

        {/* Explore More */}
        <div className="text-center mt-12">
          <Link href="/explore">
            <button
              className="paper-button paper-button-teal text-lg"
              style={{ '--btn-rotation': '-1deg' } as React.CSSProperties}
            >
              {t('exploreMore')} →
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
