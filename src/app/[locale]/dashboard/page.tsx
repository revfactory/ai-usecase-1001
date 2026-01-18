'use client';

import { useMemo, useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import PaperCard from '@/components/PaperCard';
import { industries, agentTypes } from '@/data/constants';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts';

interface StatsData {
  total: number;
  newCases: number;
  industries: Array<{ id: string; name: string; color: string; icon: string; count: number }>;
  agentTypes: Array<{ id: string; name: string; icon: string; description: string; count: number }>;
  topTechnologies: Array<{ name: string; count: number }>;
  matrix: Array<{ industry: string; agentType: string; count: number }>;
}

export default function DashboardPage() {
  const t = useTranslations('dashboard');
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

  const industryData = useMemo(() => {
    if (!stats) return [];
    return stats.industries.map((ind) => ({
      id: ind.id,
      name: tIndustries(ind.id),
      count: ind.count,
      color: ind.color,
      icon: ind.icon,
    })).sort((a, b) => b.count - a.count);
  }, [stats, tIndustries]);

  const agentData = useMemo(() => {
    if (!stats) return [];
    return stats.agentTypes.map((agent) => ({
      id: agent.id,
      name: tAgentTypes(agent.id),
      count: agent.count,
      icon: agent.icon,
    }));
  }, [stats, tAgentTypes]);

  const matrixStats = useMemo(() => {
    if (!stats) return {};
    const result: Record<string, Record<string, number>> = {};
    stats.matrix.forEach((m) => {
      if (!result[m.industry]) result[m.industry] = {};
      result[m.industry][m.agentType] = m.count;
    });
    return result;
  }, [stats]);

  const technologies = useMemo(() => {
    if (!stats) return [];
    return stats.topTechnologies.map((tech) => tech.name);
  }, [stats]);

  const COLORS = ['#FF6B6B', '#4ECDC4', '#9B5DE5', '#FF9F1C', '#00C49A', '#45B7D1'];

  if (loading) {
    return (
      <div className="min-h-screen py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-6xl animate-bounce mb-4">📊</div>
          <p className="text-xl text-[var(--text-medium)]" style={{ fontFamily: 'Gaegu, cursive' }}>
            {t('loading') || 'Loading...'}
          </p>
          <div className="mt-8 flex justify-center gap-2">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-4 h-4 rounded-full bg-[var(--accent-teal)] animate-pulse"
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
        <div className="text-center mb-12">
          <h1
            className="text-4xl mb-4"
            style={{ fontFamily: 'Jua, sans-serif' }}
          >
            <span
              className="inline-block bg-[var(--accent-teal)] text-white px-4 py-2 shadow-[4px_4px_0px_rgba(0,0,0,0.2)]"
              style={{ transform: 'rotate(-1deg)' }}
            >
              📊 {t('title')}
            </span>
          </h1>
          <p
            className="text-xl text-[var(--text-medium)]"
            style={{ fontFamily: 'Gaegu, cursive' }}
          >
            {t('subtitle')}
          </p>
        </div>

        {/* Stat Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { label: t('totalCases'), value: stats?.total || 0, color: 'coral', icon: '📑' },
            { label: t('newCases'), value: stats?.newCases || 0, color: 'teal', icon: '🆕' },
            { label: t('techStack'), value: technologies.length, color: 'purple', icon: '🛠️' },
            { label: t('industries'), value: industries.length, color: 'orange', icon: '🏭' },
          ].map((stat, idx) => (
            <PaperCard
              key={stat.label}
              color="white"
              rotation={(idx - 1.5) * 1.5}
              className="text-center"
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div
                className="cutout-number text-3xl mb-1"
                style={{
                  '--num-rotation': `${(idx - 1) * 2}deg`,
                  background: `var(--accent-${stat.color})`,
                } as React.CSSProperties}
              >
                {stat.value}
              </div>
              <p
                className="text-base text-[var(--text-dark)]"
                style={{ fontFamily: 'Jua, sans-serif' }}
              >
                {stat.label}
              </p>
            </PaperCard>
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Industry Distribution */}
          <PaperCard color="white" rotation={-1} className="p-6">
            <h2
              className="text-xl mb-4"
              style={{ fontFamily: 'Jua, sans-serif' }}
            >
              <span className="inline-block bg-[var(--paper-pink)] px-3 py-1">
                🏭 {t('industryChart')}
              </span>
            </h2>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={industryData} layout="vertical">
                  <XAxis type="number" />
                  <YAxis
                    dataKey="name"
                    type="category"
                    width={100}
                    tick={{ fontSize: 12, fontFamily: 'Jua, sans-serif' }}
                  />
                  <Tooltip
                    contentStyle={{
                      fontFamily: 'Gaegu, cursive',
                      borderRadius: '4px',
                      boxShadow: '3px 3px 0px rgba(0,0,0,0.15)',
                    }}
                  />
                  <Bar dataKey="count" radius={[0, 4, 4, 0]}>
                    {industryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </PaperCard>

          {/* Agent Type Distribution */}
          <PaperCard color="white" rotation={1} className="p-6">
            <h2
              className="text-xl mb-4"
              style={{ fontFamily: 'Jua, sans-serif' }}
            >
              <span className="inline-block bg-[var(--paper-mint)] px-3 py-1">
                🤖 {t('agentChart')}
              </span>
            </h2>
            <div className="h-80 flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={agentData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={3}
                    dataKey="count"
                    label={({ name, value }) => `${name}: ${value}`}
                    labelLine={{ stroke: '#718096' }}
                  >
                    {agentData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      fontFamily: 'Gaegu, cursive',
                      borderRadius: '4px',
                      boxShadow: '3px 3px 0px rgba(0,0,0,0.15)',
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </PaperCard>
        </div>

        {/* Heatmap Matrix Mini */}
        <PaperCard color="white" rotation={0} className="p-6 mb-12">
          <div className="flex justify-between items-center mb-4">
            <h2
              className="text-xl"
              style={{ fontFamily: 'Jua, sans-serif' }}
            >
              <span className="inline-block bg-[var(--paper-lavender)] px-3 py-1">
                🔥 {t('heatmap')}
              </span>
            </h2>
            <Link href="/matrix">
              <button className="paper-button text-sm">
                {t('viewAll')} →
              </button>
            </Link>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="p-2 text-left" style={{ fontFamily: 'Jua, sans-serif' }}>{t('industries')}</th>
                  {agentTypes.map((agent) => (
                    <th
                      key={agent.id}
                      className="p-2 text-center text-sm"
                      style={{ fontFamily: 'Jua, sans-serif' }}
                    >
                      {agent.icon}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {industries.slice(0, 6).map((industry) => (
                  <tr key={industry.id}>
                    <td
                      className="p-2 text-sm"
                      style={{ fontFamily: 'Jua, sans-serif', color: industry.color }}
                    >
                      {industry.icon} {tIndustries(industry.id)}
                    </td>
                    {agentTypes.map((agent) => {
                      const count = matrixStats[industry.id]?.[agent.id] || 0;
                      const intensity = Math.min(count / 5, 1);
                      return (
                        <td key={agent.id} className="p-1 text-center">
                          <Link href={`/explore?industry=${industry.id}&agent=${agent.id}`}>
                            <div
                              className="w-10 h-10 mx-auto rounded flex items-center justify-center text-sm font-bold cursor-pointer hover:scale-110 transition-transform"
                              style={{
                                backgroundColor: count > 0
                                  ? `rgba(78, 205, 196, ${0.2 + intensity * 0.8})`
                                  : 'rgba(0,0,0,0.05)',
                                color: count > 0 ? '#2D3748' : '#A0AEC0',
                                fontFamily: 'Jua, sans-serif',
                              }}
                            >
                              {count || '-'}
                            </div>
                          </Link>
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </PaperCard>

        {/* Top Technologies */}
        <PaperCard color="white" rotation={-0.5} className="p-6">
          <h2
            className="text-xl mb-4"
            style={{ fontFamily: 'Jua, sans-serif' }}
          >
            <span className="inline-block bg-[var(--paper-sky)] px-3 py-1">
              🛠️ {t('topTech')}
            </span>
          </h2>
          <div className="flex flex-wrap gap-2">
            {technologies.slice(0, 20).map((tech, idx) => (
              <span
                key={tech}
                className="paper-tag px-3 py-1.5"
                style={{
                  backgroundColor: COLORS[idx % COLORS.length] + '30',
                  '--tag-rotation': `${(idx % 5) - 2}deg`,
                  fontFamily: 'Poor Story, cursive',
                } as React.CSSProperties}
              >
                {tech}
              </span>
            ))}
          </div>
        </PaperCard>
      </div>
    </div>
  );
}
