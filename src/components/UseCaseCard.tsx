'use client';

import { useLocale } from 'next-intl';
import { UseCase } from '@/types';
import { industries } from '@/data/constants';
import PaperCard from './PaperCard';
import { IndustryBadge, AgentBadge, TechBadge, NewBadge } from './Badge';
import { Link } from '@/i18n/navigation';

interface UseCaseCardProps {
  useCase: UseCase;
  index?: number;
}

const paperColors: Array<'pink' | 'mint' | 'lavender' | 'sky' | 'peach' | 'yellow' | 'white'> = [
  'pink',
  'mint',
  'lavender',
  'sky',
  'peach',
  'yellow',
];

export default function UseCaseCard({ useCase, index = 0 }: UseCaseCardProps) {
  const locale = useLocale();
  const rotation = (index % 5) * 1.5 - 3;
  const colorIndex = index % paperColors.length;
  const industry = industries.find((i) => i.id === useCase.industry);

  // 현재 로케일에 따른 요약 선택
  const summary = locale === 'en'
    ? (useCase.summaryEn || useCase.summary)
    : (useCase.summaryKo || useCase.summary);

  return (
    <Link href={`/case/${useCase.id}`}>
      <PaperCard
        color={paperColors[colorIndex]}
        rotation={rotation}
        className="h-full hover:z-10"
        withTape={index % 3 === 0}
        withPin={index % 5 === 2}
      >
        <div className="flex flex-col gap-3">
          {/* Badges */}
          <div className="flex flex-wrap gap-2 items-center">
            <IndustryBadge industryId={useCase.industry} size="sm" />
            {useCase.isNew && <NewBadge />}
          </div>

          {/* Company Name */}
          <h3
            className="text-xl font-bold text-[var(--text-dark)]"
            style={{ fontFamily: 'Jua, sans-serif' }}
          >
            {useCase.company}
          </h3>

          {/* Agent Type */}
          <AgentBadge agentTypeId={useCase.agentType} size="sm" />

          {/* Summary */}
          <p
            className="text-[var(--text-medium)] line-clamp-3 leading-relaxed text-sm"
            style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
          >
            {summary}
          </p>

          {/* Metrics */}
          {useCase.metrics && (
            <div
              className="bg-white/50 rounded px-3 py-2 text-sm"
              style={{
                fontFamily: 'Poor Story, cursive',
                borderLeft: `3px solid ${industry?.color || 'var(--accent-coral)'}`,
              }}
            >
              📊 {useCase.metrics}
            </div>
          )}

          {/* Tech Tags */}
          <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
            {useCase.technologies.slice(0, 3).map((tech) => (
              <TechBadge key={tech} tech={tech} />
            ))}
            {useCase.technologies.length > 3 && (
              <span className="text-xs text-[var(--text-light)]">
                +{useCase.technologies.length - 3}
              </span>
            )}
          </div>
        </div>
      </PaperCard>
    </Link>
  );
}
