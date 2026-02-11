'use client';

import { useState, useEffect } from 'react';
import { navItems } from '@/data/navigation';

const mainNavItems = navItems.filter((item) => item.variant !== 'cta');
const ctaItem = navItems.find((item) => item.variant === 'cta')!;

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCtaClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.querySelector('#discovery');
    target?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`fixed top-0 z-50 w-full px-[2.4rem] py-[2.4rem] flex items-center border-b border-white/[0.06] transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md' : ''}`}>
      {/* Manas AI Logo */}
      <a href="#" aria-label="Home">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.5 6C9.4 6 6 10.5 6 16s3.4 10 7.5 10" stroke="white" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
          <path d="M18.5 6c4.1 0 7.5 4.5 7.5 10s-3.4 10-7.5 10" stroke="white" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
        </svg>
      </a>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Main nav items */}
      <nav className="flex items-center">
        {mainNavItems.map((item, index) => (
          <span key={item.label} className="flex items-center">
            {index > 0 && (
              <span className="text-white/20 mx-3 text-[13px] select-none">&middot;</span>
            )}
            {item.label === 'Control' ? (
              <a
                href={item.href}
                className="flex items-center gap-1.5 font-mono-alt text-[13px] uppercase tracking-[0.1rem] text-white/60 hover:text-white transition-colors duration-300"
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="flex-shrink-0">
                  <rect x="1" y="1" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="1.2"/>
                  <path d="M3.5 6L5.5 8L8.5 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                {item.label}
              </a>
            ) : (
              <a
                href={item.href}
                className={`font-mono-alt text-[13px] tracking-[0.1rem] transition-colors duration-300 ${
                  item.variant === 'accent'
                    ? 'text-accent hover:text-accent/80'
                    : 'text-white/60 hover:text-white uppercase'
                }`}
              >
                {item.label}
              </a>
            )}
          </span>
        ))}
      </nav>

      {/* Spacer */}
      <div className="flex-1" />

      {/* INQUIRE CTA */}
      <a
        href={ctaItem.href}
        onClick={handleCtaClick}
        className="font-mono-alt text-[13px] uppercase tracking-[0.1rem] text-white/60 hover:text-white transition-colors duration-300"
      >
        {ctaItem.label}
      </a>
    </header>
  );
}
