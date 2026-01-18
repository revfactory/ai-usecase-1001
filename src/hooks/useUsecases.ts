'use client';

import { useState, useEffect } from 'react';
import { UseCase } from '@/types';

interface UsecasesResponse {
  data: UseCase[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

interface StatsResponse {
  total: number;
  newCases: number;
  industries: Array<{
    id: string;
    name: string;
    color: string;
    icon: string;
    count: number;
  }>;
  agentTypes: Array<{
    id: string;
    name: string;
    icon: string;
    description: string;
    count: number;
  }>;
  topTechnologies: Array<{
    name: string;
    count: number;
  }>;
  matrix: Array<{
    industry: string;
    agentType: string;
    count: number;
  }>;
}

export function useUsecases(filters?: {
  industry?: string;
  agentType?: string;
  isNew?: boolean;
  search?: string;
  limit?: number;
}) {
  const [data, setData] = useState<UseCase[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const params = new URLSearchParams();
        if (filters?.industry) params.set('industry', filters.industry);
        if (filters?.agentType) params.set('agentType', filters.agentType);
        if (filters?.isNew) params.set('isNew', 'true');
        if (filters?.search) params.set('search', filters.search);
        params.set('limit', String(filters?.limit || 1500));

        const response = await fetch(`/api/usecases?${params.toString()}`);
        if (!response.ok) throw new Error('Failed to fetch usecases');

        const result: UsecasesResponse = await response.json();
        setData(result.data);
        setTotal(result.pagination.total);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [filters?.industry, filters?.agentType, filters?.isNew, filters?.search, filters?.limit]);

  return { data, total, loading, error };
}

export function useStats() {
  const [stats, setStats] = useState<StatsResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch('/api/stats');
        if (!response.ok) throw new Error('Failed to fetch stats');

        const result: StatsResponse = await response.json();
        setStats(result);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  return { stats, loading, error };
}
