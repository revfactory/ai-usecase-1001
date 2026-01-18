'use client';

import { industries, agentTypes } from '@/data/constants';
import { IndustryId, AgentTypeId } from '@/types';

interface IndustryBadgeProps {
  industryId: IndustryId;
  size?: 'sm' | 'md' | 'lg';
}

interface AgentBadgeProps {
  agentTypeId: AgentTypeId;
  size?: 'sm' | 'md' | 'lg';
}

interface TechBadgeProps {
  tech: string;
}

const sizeClasses = {
  sm: 'text-xs px-2 py-1',
  md: 'text-sm px-3 py-1.5',
  lg: 'text-base px-4 py-2',
};

// 결정적 해시 기반 회전값 생성 (hydration 오류 방지)
function getRotation(seed: string, range: number = 4): number {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = ((hash << 5) - hash) + seed.charCodeAt(i);
    hash = hash & hash;
  }
  return ((Math.abs(hash) % 100) / 100) * range - (range / 2);
}

export function IndustryBadge({ industryId, size = 'md' }: IndustryBadgeProps) {
  const industry = industries.find((i) => i.id === industryId);
  if (!industry) return null;

  return (
    <span
      className={`paper-tag ${sizeClasses[size]} text-white`}
      style={{
        backgroundColor: industry.color,
        '--tag-rotation': `${getRotation(industryId)}deg`,
      } as React.CSSProperties}
    >
      {industry.icon} {industry.name}
    </span>
  );
}

export function AgentBadge({ agentTypeId, size = 'md' }: AgentBadgeProps) {
  const agent = agentTypes.find((a) => a.id === agentTypeId);
  if (!agent) return null;

  return (
    <span
      className={`paper-tag ${sizeClasses[size]} bg-[var(--paper-lavender)] text-[var(--text-dark)]`}
      style={{
        '--tag-rotation': `${getRotation(agentTypeId)}deg`,
      } as React.CSSProperties}
    >
      {agent.icon} {agent.name}
    </span>
  );
}

export function TechBadge({ tech }: TechBadgeProps) {
  return (
    <span
      className="paper-tag text-xs px-2 py-1 bg-[var(--paper-sky)] text-[var(--text-dark)]"
      style={{
        '--tag-rotation': `${getRotation(tech, 2)}deg`,
      } as React.CSSProperties}
    >
      {tech}
    </span>
  );
}

export function NewBadge() {
  return (
    <span
      className="paper-tag text-xs px-2 py-1 bg-[var(--accent-coral)] text-white font-bold"
      style={{
        '--tag-rotation': '-3deg',
      } as React.CSSProperties}
    >
      NEW
    </span>
  );
}
