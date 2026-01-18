'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import PaperCard from '@/components/PaperCard';
import UseCaseCard from '@/components/UseCaseCard';
import { industries, agentTypes } from '@/data/constants';
import { UseCase } from '@/types';

interface Stats {
  total: number;
  newCases: number;
  industries: Array<{ id: string; count: number }>;
  agentTypes: Array<{ id: string; count: number }>;
}

export default function HomePage() {
  const t = useTranslations('home');
  const tCommon = useTranslations('common');
  const tIndustries = useTranslations('industries');
  const tAgentTypes = useTranslations('agentTypes');

  const [stats, setStats] = useState<Stats | null>(null);
  const [featuredCases, setFeaturedCases] = useState<UseCase[]>([]);
  const [newCases, setNewCases] = useState<UseCase[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const statsRes = await fetch('/api/stats');
        if (statsRes.ok) {
          const statsData = await statsRes.json();
          setStats(statsData);
        }

        const newRes = await fetch('/api/usecases?isNew=true&limit=3');
        if (newRes.ok) {
          const newData = await newRes.json();
          setNewCases(newData.data);
        }

        const allRes = await fetch('/api/usecases?limit=50');
        if (allRes.ok) {
          const allData = await allRes.json();
          const withMetrics = allData.data.filter((uc: UseCase) => uc.metrics).slice(0, 3);
          setFeaturedCases(withMetrics);
        }
      } catch (error) {
        console.error('Failed to fetch data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const industryStats: Record<string, number> = {};
  const agentStats: Record<string, number> = {};

  if (stats) {
    stats.industries.forEach((i) => {
      industryStats[i.id] = i.count;
    });
    stats.agentTypes.forEach((a) => {
      agentStats[a.id] = a.count;
    });
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 px-4 overflow-hidden">
        <div
          className="absolute top-10 left-10 w-32 h-32 bg-[var(--paper-pink)] rounded-lg opacity-60"
          style={{ transform: 'rotate(-12deg)' }}
        />
        <div
          className="absolute top-20 right-20 w-24 h-24 bg-[var(--paper-mint)] rounded-lg opacity-60"
          style={{ transform: 'rotate(8deg)' }}
        />
        <div
          className="absolute bottom-10 left-1/4 w-20 h-20 bg-[var(--paper-lavender)] rounded-lg opacity-60"
          style={{ transform: 'rotate(-5deg)' }}
        />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="mb-8">
            <h1
              className="text-4xl md:text-5xl lg:text-6xl mb-4 leading-tight"
              style={{ fontFamily: 'Jua, sans-serif' }}
            >
              <span
                className="inline-block bg-[var(--accent-coral)] text-white px-4 py-2 shadow-[4px_4px_0px_rgba(0,0,0,0.2)]"
                style={{ transform: 'rotate(-2deg)' }}
              >
                {t('heroTitle1')}
              </span>{' '}
              <br className="md:hidden" />
              <span className="text-[var(--text-dark)]">{t('heroTitle2')}</span>
              <br />
              <span
                className="inline-block bg-[var(--accent-teal)] text-white px-4 py-2 mt-2 shadow-[4px_4px_0px_rgba(0,0,0,0.2)]"
                style={{ transform: 'rotate(1deg)' }}
              >
                {t('heroTitle3')}
              </span>
              <span className="text-[var(--text-dark)]">{t('heroTitle4')}</span>
            </h1>

            <p
              className="text-xl md:text-2xl text-[var(--text-medium)] mt-6"
              style={{ fontFamily: 'Gaegu, cursive' }}
            >
              {t('heroSubtitle')}
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link href="/explore">
              <button
                className="paper-button paper-button-accent text-lg"
                style={{ '--btn-rotation': '-2deg' } as React.CSSProperties}
              >
                🔍 {t('startExplore')}
              </button>
            </Link>
            <Link href="/dashboard">
              <button
                className="paper-button paper-button-teal text-lg"
                style={{ '--btn-rotation': '1deg' } as React.CSSProperties}
              >
                📊 {t('viewDashboard')}
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: stats ? stats.total.toLocaleString() : '...', label: t('totalCases'), color: 'coral' },
              { number: '11', label: t('industries'), color: 'teal' },
              { number: '6', label: t('agentTypes'), color: 'purple' },
              { number: stats ? `${stats.newCases}+` : '...', label: t('newCases'), color: 'orange' },
            ].map((stat, idx) => (
              <PaperCard
                key={stat.label}
                color="white"
                rotation={(idx - 1.5) * 2}
                withPin={idx === 0}
                className="text-center"
              >
                <div
                  className="cutout-number mb-2"
                  style={{
                    '--num-rotation': `${(idx - 1) * 2}deg`,
                    background: `var(--accent-${stat.color})`,
                  } as React.CSSProperties}
                >
                  {stat.number}
                </div>
                <p
                  className="text-lg text-[var(--text-dark)]"
                  style={{ fontFamily: 'Jua, sans-serif' }}
                >
                  {stat.label}
                </p>
              </PaperCard>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Exploration */}
      <section className="py-12 px-4 bg-[var(--paper-mint)]/30">
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-3xl text-center mb-8"
            style={{ fontFamily: 'Jua, sans-serif' }}
          >
            <span
              className="inline-block bg-white px-4 py-2 shadow-[3px_3px_0px_rgba(0,0,0,0.15)]"
              style={{ transform: 'rotate(-1deg)' }}
            >
              🏭 {t('industryExplore')}
            </span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {industries.map((industry, idx) => (
              <Link key={industry.id} href={`/explore?industry=${industry.id}`}>
                <PaperCard
                  color="white"
                  rotation={(idx % 5) - 2}
                  className="text-center hover:scale-105 transition-transform"
                >
                  <div className="text-4xl mb-2">{industry.icon}</div>
                  <h3
                    className="text-lg"
                    style={{
                      fontFamily: 'Jua, sans-serif',
                      color: industry.color,
                    }}
                  >
                    {tIndustries(industry.id)}
                  </h3>
                  <p className="text-sm text-[var(--text-light)] mt-1">
                    {industryStats[industry.id] || 0} {tCommon('cases')}
                  </p>
                </PaperCard>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Agent Type Exploration */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-3xl text-center mb-8"
            style={{ fontFamily: 'Jua, sans-serif' }}
          >
            <span
              className="inline-block bg-[var(--paper-lavender)] px-4 py-2 shadow-[3px_3px_0px_rgba(0,0,0,0.15)]"
              style={{ transform: 'rotate(1deg)' }}
            >
              🤖 {t('agentTypeExplore')}
            </span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {agentTypes.map((agent, idx) => (
              <Link key={agent.id} href={`/explore?agent=${agent.id}`}>
                <PaperCard
                  color={['pink', 'mint', 'lavender', 'sky', 'peach', 'yellow'][idx] as 'pink' | 'mint' | 'lavender' | 'sky' | 'peach' | 'yellow'}
                  rotation={(idx % 3) - 1}
                  withTape={idx % 2 === 0}
                  className="text-center h-full"
                >
                  <div className="text-3xl mb-2">{agent.icon}</div>
                  <h3
                    className="text-base leading-tight"
                    style={{ fontFamily: 'Jua, sans-serif' }}
                  >
                    {tAgentTypes(agent.id)}
                  </h3>
                  <p className="text-xs text-[var(--text-light)] mt-1">
                    {agentStats[agent.id] || 0}
                  </p>
                </PaperCard>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Cases */}
      <section className="py-12 px-4 bg-[var(--paper-yellow)]/30">
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-3xl text-center mb-8"
            style={{ fontFamily: 'Jua, sans-serif' }}
          >
            <span
              className="inline-block bg-[var(--accent-coral)] text-white px-4 py-2 shadow-[3px_3px_0px_rgba(0,0,0,0.2)]"
              style={{ transform: 'rotate(-1deg)' }}
            >
              ⭐ {t('featuredCases')}
            </span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {featuredCases.map((useCase, idx) => (
              <UseCaseCard key={useCase.id} useCase={useCase} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* New Cases */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-3xl text-center mb-8"
            style={{ fontFamily: 'Jua, sans-serif' }}
          >
            <span
              className="inline-block bg-[var(--paper-sky)] px-4 py-2 shadow-[3px_3px_0px_rgba(0,0,0,0.15)]"
              style={{ transform: 'rotate(1deg)' }}
            >
              🆕 {t('newAddedCases')}
            </span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {newCases.map((useCase, idx) => (
              <UseCaseCard key={useCase.id} useCase={useCase} index={idx + 10} />
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/explore?new=true">
              <button
                className="paper-button text-lg"
                style={{ '--btn-rotation': '0deg' } as React.CSSProperties}
              >
                {t('viewMoreNew')} →
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t-4 border-[var(--accent-teal)]">
        <div className="max-w-6xl mx-auto text-center">
          <p
            className="text-[var(--text-medium)]"
            style={{ fontFamily: 'Poor Story, cursive' }}
          >
            {t('footer')}
          </p>
          <p className="text-sm text-[var(--text-light)] mt-2">
            {t('dataSource')}
          </p>
        </div>
      </footer>
    </div>
  );
}
