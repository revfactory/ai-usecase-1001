'use client';

import { useLocale, useTranslations } from 'next-intl';
import { Link, usePathname, useRouter } from '@/i18n/navigation';

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale();
  const t = useTranslations('nav');

  const navItems = [
    { href: '/', label: t('home') },
    { href: '/dashboard', label: t('dashboard') },
    { href: '/explore', label: t('explore') },
    { href: '/matrix', label: t('matrix') },
  ];

  const switchLocale = (newLocale: 'ko' | 'en') => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <header className="sticky top-0 z-50 bg-[var(--paper-cream)] border-b-4 border-[var(--accent-coral)]">
      <nav className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div
              className="w-12 h-12 bg-[var(--accent-coral)] rounded-lg flex items-center justify-center text-white text-2xl shadow-[3px_3px_0px_rgba(0,0,0,0.2)]"
              style={{ transform: 'rotate(-3deg)' }}
            >
              AI
            </div>
            <div>
              <h1
                className="text-xl font-bold text-[var(--text-dark)] leading-tight"
                style={{ fontFamily: 'Jua, sans-serif' }}
              >
                {locale === 'ko' ? 'AI 활용 사례' : 'AI Use Cases'}
              </h1>
              <span
                className="text-sm text-[var(--text-medium)]"
                style={{ fontFamily: 'Poor Story, cursive' }}
              >
                {locale === 'ko' ? '1,001가지 인사이트' : '1,001 Insights'}
              </span>
            </div>
          </Link>

          {/* Navigation */}
          <div className="flex items-center gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link text-lg ${
                  pathname === item.href ? 'active text-[var(--accent-coral)]' : 'text-[var(--text-dark)]'
                }`}
              >
                {item.label}
              </Link>
            ))}

            {/* Language Switcher */}
            <div className="ml-4 flex items-center gap-1 bg-white rounded-lg shadow-[2px_2px_0px_rgba(0,0,0,0.1)] p-1">
              <button
                onClick={() => switchLocale('ko')}
                className={`px-2 py-1 rounded text-sm font-medium transition-colors ${
                  locale === 'ko'
                    ? 'bg-[var(--accent-coral)] text-white'
                    : 'text-[var(--text-medium)] hover:bg-[var(--paper-cream)]'
                }`}
                style={{ fontFamily: 'Jua, sans-serif' }}
              >
                한국어
              </button>
              <button
                onClick={() => switchLocale('en')}
                className={`px-2 py-1 rounded text-sm font-medium transition-colors ${
                  locale === 'en'
                    ? 'bg-[var(--accent-coral)] text-white'
                    : 'text-[var(--text-medium)] hover:bg-[var(--paper-cream)]'
                }`}
                style={{ fontFamily: 'Jua, sans-serif' }}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
