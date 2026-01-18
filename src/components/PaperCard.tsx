'use client';

import { ReactNode } from 'react';

interface PaperCardProps {
  children: ReactNode;
  className?: string;
  color?: 'pink' | 'mint' | 'lavender' | 'sky' | 'peach' | 'yellow' | 'white';
  rotation?: number;
  withTape?: boolean;
  withPin?: boolean;
  onClick?: () => void;
}

const colorClasses = {
  pink: 'bg-[var(--paper-pink)]',
  mint: 'bg-[var(--paper-mint)]',
  lavender: 'bg-[var(--paper-lavender)]',
  sky: 'bg-[var(--paper-sky)]',
  peach: 'bg-[var(--paper-peach)]',
  yellow: 'bg-[var(--paper-yellow)]',
  white: 'bg-white',
};

export default function PaperCard({
  children,
  className = '',
  color = 'white',
  rotation = 0,
  withTape = false,
  withPin = false,
  onClick,
}: PaperCardProps) {
  return (
    <div
      className={`paper-card ${colorClasses[color]} p-5 ${className} ${onClick ? 'cursor-pointer' : ''}`}
      style={{ '--rotation': `${rotation}deg` } as React.CSSProperties}
      onClick={onClick}
    >
      {withTape && (
        <>
          <div className="tape tape-top-left" />
          <div className="tape tape-top-right" />
        </>
      )}
      {withPin && <div className="pin" />}
      {children}
    </div>
  );
}
