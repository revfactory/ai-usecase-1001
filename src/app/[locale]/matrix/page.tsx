'use client';

import { useMemo, useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import PaperCard from '@/components/PaperCard';
import { industries, agentTypes } from '@/data/constants';

interface StatsData {
  total: number;
  matrix: Array<{ industry: string; agentType: string; count: number }>;
}

export default function MatrixPage() {
  const t = useTranslations('matrix');
  const tIndustries = useTranslations('industries');
  const tAgentTypes = useTranslations('agentTypes');

  const [stats, setStats] = useState<StatsData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await fetch('/api/stats');
        if (res.ok) {
          const data = await res.json();
          setStats(data);
        }
      } catch (error) {
        console.error('Failed to fetch stats:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchStats();
  }, []);

  const matrixStats = useMemo(() => {
    if (!stats) return {};
    const result: Record<string, Record<string, number>> = {};
    stats.matrix.forEach((m) => {
      if (!result[m.industry]) result[m.industry] = {};
      result[m.industry][m.agentType] = m.count;
    });
    return result;
  }, [stats]);

  const maxCount = useMemo(() => {
    let max = 0;
    Object.values(matrixStats).forEach((agents) => {
      Object.values(agents).forEach((count) => {
        if (count > max) max = count;
      });
    });
    return max || 1;
  }, [matrixStats]);

  if (loading) {
    return (
      <div className="min-h-screen py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-6xl animate-bounce mb-4">🔢</div>
          <p className="text-xl text-[var(--text-medium)]" style={{ fontFamily: 'Gaegu, cursive' }}>
            {t('loading') || 'Loading...'}
          </p>
          <div className="mt-8 flex justify-center gap-2">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-4 h-4 rounded-full bg-[var(--accent-purple)] animate-pulse"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1
            className="text-4xl mb-4"
            style={{ fontFamily: 'Jua, sans-serif' }}
          >
            <span
              className="inline-block bg-[var(--accent-purple)] text-white px-4 py-2 shadow-[4px_4px_0px_rgba(0,0,0,0.2)]"
              style={{ transform: 'rotate(-1deg)' }}
            >
              🔢 {t('title')}
            </span>
          </h1>
          <p
            className="text-xl text-[var(--text-medium)]"
            style={{ fontFamily: 'Gaegu, cursive' }}
          >
            {t('subtitle')}
          </p>
        </div>

        {/* Matrix */}
        <PaperCard color="white" rotation={0} className="overflow-x-auto mb-8">
          <table className="w-full border-collapse min-w-[800px]">
            <thead>
              <tr>
                <th
                  className="p-3 text-left bg-[var(--paper-cream)]"
                  style={{ fontFamily: 'Jua, sans-serif' }}
                >
                  {t('industryAgent')}
                </th>
                {agentTypes.map((agent) => (
                  <th
                    key={agent.id}
                    className="p-3 text-center bg-[var(--paper-lavender)]"
                    style={{ fontFamily: 'Jua, sans-serif' }}
                  >
                    <div className="text-2xl mb-1">{agent.icon}</div>
                    <div className="text-sm">{tAgentTypes(agent.id)}</div>
                  </th>
                ))}
                <th
                  className="p-3 text-center bg-[var(--paper-cream)]"
                  style={{ fontFamily: 'Jua, sans-serif' }}
                >
                  {t('total')}
                </th>
              </tr>
            </thead>
            <tbody>
              {industries.map((industry) => {
                const rowTotal = Object.values(matrixStats[industry.id] || {}).reduce(
                  (sum, count) => sum + count,
                  0
                );

                return (
                  <tr key={industry.id} className="border-t border-[var(--paper-cream)]">
                    <td
                      className="p-3 font-bold"
                      style={{
                        fontFamily: 'Jua, sans-serif',
                        backgroundColor: industry.color + '20',
                      }}
                    >
                      <span className="text-xl mr-2">{industry.icon}</span>
                      <span style={{ color: industry.color }}>{tIndustries(industry.id)}</span>
                    </td>
                    {agentTypes.map((agent) => {
                      const count = matrixStats[industry.id]?.[agent.id] || 0;
                      const intensity = count / maxCount;

                      return (
                        <td key={agent.id} className="p-2 text-center">
                          {count > 0 ? (
                            <Link
                              href={`/explore?industry=${industry.id}&agent=${agent.id}`}
                              className="w-16 h-16 rounded-lg flex items-center justify-center text-lg font-bold transition-all hover:scale-110 hover:ring-4 hover:ring-[var(--accent-coral)]"
                              style={{
                                backgroundColor: `rgba(78, 205, 196, ${0.15 + intensity * 0.85})`,
                                color: '#2D3748',
                                fontFamily: 'Jua, sans-serif',
                                boxShadow: '2px 2px 0px rgba(0,0,0,0.1)',
                              }}
                            >
                              {count}
                            </Link>
                          ) : (
                            <div
                              className="w-16 h-16 rounded-lg flex items-center justify-center text-lg font-bold"
                              style={{
                                backgroundColor: 'rgba(0,0,0,0.03)',
                                color: '#CBD5E0',
                                fontFamily: 'Jua, sans-serif',
                              }}
                            >
                              -
                            </div>
                          )}
                        </td>
                      );
                    })}
                    <td
                      className="p-3 text-center font-bold"
                      style={{
                        fontFamily: 'Jua, sans-serif',
                        backgroundColor: industry.color + '10',
                        color: industry.color,
                      }}
                    >
                      {rowTotal}
                    </td>
                  </tr>
                );
              })}
              {/* Column Totals */}
              <tr className="border-t-2 border-[var(--accent-teal)]">
                <td
                  className="p-3 font-bold bg-[var(--paper-cream)]"
                  style={{ fontFamily: 'Jua, sans-serif' }}
                >
                  {t('total')}
                </td>
                {agentTypes.map((agent) => {
                  const colTotal = industries.reduce(
                    (sum, ind) => sum + (matrixStats[ind.id]?.[agent.id] || 0),
                    0
                  );
                  return (
                    <td
                      key={agent.id}
                      className="p-3 text-center font-bold bg-[var(--paper-lavender)]"
                      style={{ fontFamily: 'Jua, sans-serif' }}
                    >
                      {colTotal}
                    </td>
                  );
                })}
                <td
                  className="p-3 text-center font-bold bg-[var(--accent-teal)] text-white"
                  style={{ fontFamily: 'Jua, sans-serif' }}
                >
                  {stats?.total || 0}
                </td>
              </tr>
            </tbody>
          </table>
        </PaperCard>

        {/* Legend */}
        <div className="flex justify-center gap-4 mb-8">
          <div className="flex items-center gap-2" style={{ fontFamily: 'Gaegu, cursive' }}>
            <div
              className="w-6 h-6 rounded"
              style={{ backgroundColor: 'rgba(78, 205, 196, 0.15)' }}
            />
            <span>{t('low')}</span>
          </div>
          <div className="flex items-center gap-2" style={{ fontFamily: 'Gaegu, cursive' }}>
            <div
              className="w-6 h-6 rounded"
              style={{ backgroundColor: 'rgba(78, 205, 196, 0.5)' }}
            />
            <span>{t('medium')}</span>
          </div>
          <div className="flex items-center gap-2" style={{ fontFamily: 'Gaegu, cursive' }}>
            <div
              className="w-6 h-6 rounded"
              style={{ backgroundColor: 'rgba(78, 205, 196, 1)' }}
            />
            <span>{t('high')}</span>
          </div>
        </div>

        {/* Info Text */}
        <p className="text-center text-[var(--text-medium)]" style={{ fontFamily: 'Gaegu, cursive' }}>
          {t('clickInfo')}
        </p>
      </div>
    </div>
  );
}
