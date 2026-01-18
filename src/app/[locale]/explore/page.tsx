'use client';

import { Suspense } from 'react';
import ExploreContent from './ExploreContent';
import PaperCard from '@/components/PaperCard';

function LoadingFallback() {
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <PaperCard color="white" rotation={0} className="py-12">
          <div className="text-4xl mb-4 animate-pulse">🔍</div>
          <p style={{ fontFamily: 'Gaegu, cursive' }}>로딩 중...</p>
        </PaperCard>
      </div>
    </div>
  );
}

export default function ExplorePage() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <ExploreContent />
    </Suspense>
  );
}
