'use client';

import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import PaperCard from '@/components/PaperCard';
import UseCaseCard from '@/components/UseCaseCard';
import { industries, agentTypes } from '@/data/constants';
import { IndustryId, AgentTypeId, UseCase } from '@/types';

export default function ExploreContent() {
  const searchParams = useSearchParams();
  const t = useTranslations('explore');
  const tCommon = useTranslations('common');
  const tIndustries = useTranslations('industries');
  const tAgentTypes = useTranslations('agentTypes');

  const [allUsecases, setAllUsecases] = useState<UseCase[]>([]);
  const [loading, setLoading] = useState(true);

  const [selectedIndustries, setSelectedIndustries] = useState<IndustryId[]>([]);
  const [selectedAgents, setSelectedAgents] = useState<AgentTypeId[]>([]);
  const [showNewOnly, setShowNewOnly] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/usecases?limit=2000');
        if (response.ok) {
          const result = await response.json();
          setAllUsecases(result.data);
        }
      } catch (error) {
        console.error('Failed to fetch usecases:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const industryParam = searchParams.get('industry');
    const agentParam = searchParams.get('agent');
    const newParam = searchParams.get('new');

    if (industryParam) {
      setSelectedIndustries([industryParam as IndustryId]);
    }
    if (agentParam) {
      setSelectedAgents([agentParam as AgentTypeId]);
    }
    if (newParam === 'true') {
      setShowNewOnly(true);
    }
  }, [searchParams]);

  const filteredCases = useMemo(() => {
    return allUsecases.filter((uc) => {
      if (selectedIndustries.length > 0 && !selectedIndustries.includes(uc.industry as IndustryId)) {
        return false;
      }
      if (selectedAgents.length > 0 && !selectedAgents.includes(uc.agentType as AgentTypeId)) {
        return false;
      }
      if (showNewOnly && !uc.isNew) {
        return false;
      }
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        return (
          uc.company.toLowerCase().includes(query) ||
          uc.summary.toLowerCase().includes(query) ||
          uc.technologies.some((tech) => tech.toLowerCase().includes(query))
        );
      }
      return true;
    });
  }, [allUsecases, selectedIndustries, selectedAgents, showNewOnly, searchQuery]);

  const toggleIndustry = (id: IndustryId) => {
    setSelectedIndustries((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const toggleAgent = (id: AgentTypeId) => {
    setSelectedAgents((prev) =>
      prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id]
    );
  };

  const clearFilters = () => {
    setSelectedIndustries([]);
    setSelectedAgents([]);
    setShowNewOnly(false);
    setSearchQuery('');
  };

  const hasFilters = selectedIndustries.length > 0 || selectedAgents.length > 0 || showNewOnly || searchQuery;

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
              className="inline-block bg-[var(--accent-coral)] text-white px-4 py-2 shadow-[4px_4px_0px_rgba(0,0,0,0.2)]"
              style={{ transform: 'rotate(-1deg)' }}
            >
              🔍 {t('title')}
            </span>
          </h1>
          <p
            className="text-xl text-[var(--text-medium)]"
            style={{ fontFamily: 'Gaegu, cursive' }}
          >
            {t('subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Filter Sidebar */}
          <div className="lg:col-span-1">
            <PaperCard color="white" rotation={-1} className="sticky top-24">
              <div className="space-y-6">
                {/* Search */}
                <div>
                  <label
                    className="block text-lg mb-2"
                    style={{ fontFamily: 'Jua, sans-serif' }}
                  >
                    🔎 {tCommon('search')}
                  </label>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder={t('searchPlaceholder')}
                    className="w-full px-4 py-2 border-2 border-[var(--text-light)] rounded-lg focus:border-[var(--accent-coral)] outline-none"
                    style={{ fontFamily: 'Gaegu, cursive' }}
                  />
                </div>

                {/* New Only Filter */}
                <div>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={showNewOnly}
                      onChange={(e) => setShowNewOnly(e.target.checked)}
                      className="w-5 h-5 accent-[var(--accent-coral)]"
                    />
                    <span style={{ fontFamily: 'Jua, sans-serif' }}>🆕 {t('newOnly')}</span>
                  </label>
                </div>

                {/* Industry Filter */}
                <div>
                  <h3
                    className="text-lg mb-3"
                    style={{ fontFamily: 'Jua, sans-serif' }}
                  >
                    🏭 {t('industryFilter')}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {industries.map((industry) => (
                      <button
                        key={industry.id}
                        onClick={() => toggleIndustry(industry.id)}
                        className={`paper-tag text-xs px-2 py-1 transition-all ${
                          selectedIndustries.includes(industry.id)
                            ? 'ring-2 ring-[var(--accent-coral)] scale-105'
                            : ''
                        }`}
                        style={{
                          backgroundColor: selectedIndustries.includes(industry.id)
                            ? industry.color
                            : industry.color + '40',
                          color: selectedIndustries.includes(industry.id) ? 'white' : 'inherit',
                          '--tag-rotation': '0deg',
                        } as React.CSSProperties}
                      >
                        {industry.icon} {tIndustries(industry.id)}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Agent Filter */}
                <div>
                  <h3
                    className="text-lg mb-3"
                    style={{ fontFamily: 'Jua, sans-serif' }}
                  >
                    🤖 {t('agentFilter')}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {agentTypes.map((agent) => (
                      <button
                        key={agent.id}
                        onClick={() => toggleAgent(agent.id)}
                        className={`paper-tag text-xs px-2 py-1 transition-all ${
                          selectedAgents.includes(agent.id)
                            ? 'ring-2 ring-[var(--accent-teal)] scale-105 bg-[var(--accent-teal)] text-white'
                            : 'bg-[var(--paper-lavender)]'
                        }`}
                        style={{
                          '--tag-rotation': '0deg',
                        } as React.CSSProperties}
                      >
                        {agent.icon} {tAgentTypes(agent.id)}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Clear Filters */}
                {hasFilters && (
                  <button
                    onClick={clearFilters}
                    className="w-full paper-button text-sm"
                    style={{ '--btn-rotation': '0deg' } as React.CSSProperties}
                  >
                    ✕ {t('clearFilters')}
                  </button>
                )}
              </div>
            </PaperCard>
          </div>

          {/* Results Grid */}
          <div className="lg:col-span-3">
            {/* Result Count */}
            <div className="mb-6 flex items-center justify-between">
              <p style={{ fontFamily: 'Gaegu, cursive' }}>
                <span
                  className="cutout-number text-xl px-2 py-1"
                  style={{
                    '--num-rotation': '0deg',
                    background: 'var(--accent-teal)',
                  } as React.CSSProperties}
                >
                  {loading ? '...' : filteredCases.length}
                </span>
                <span className="ml-2">{t('foundCases')}</span>
              </p>
            </div>

            {/* Loading State */}
            {loading ? (
              <div className="text-center py-12">
                <div className="text-4xl mb-4 animate-bounce">🔍</div>
                <p style={{ fontFamily: 'Gaegu, cursive' }}>{tCommon('loading')}</p>
              </div>
            ) : filteredCases.length > 0 ? (
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredCases.map((useCase, idx) => (
                  <UseCaseCard key={useCase.id} useCase={useCase} index={idx} />
                ))}
              </div>
            ) : (
              <PaperCard color="yellow" rotation={0} className="text-center py-12">
                <div className="text-6xl mb-4">🔍</div>
                <h3
                  className="text-xl mb-2"
                  style={{ fontFamily: 'Jua, sans-serif' }}
                >
                  {t('noResults')}
                </h3>
                <p style={{ fontFamily: 'Gaegu, cursive' }}>
                  {t('tryOther')}
                </p>
              </PaperCard>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
