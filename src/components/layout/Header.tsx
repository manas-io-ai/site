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
          <path d="M28 16 C28 24, 22 27.5, 13.5 27.5" stroke="white" strokeWidth="2.8" strokeLinecap="round" fill="none"/>
          <path d="M18.5 4.5 C10 4.5, 4 8, 4 16 C4 24, 10 27.5, 18.5 27.5" stroke="white" strokeWidth="2.8" strokeLinecap="round" fill="none"/>
          <path d="M13.5 4.5 C22 4.5, 28 8, 28 16" stroke="white" strokeWidth="2.8" strokeLinecap="round" fill="none"/>
        </svg>
      </a>

      {/* Left spacer — larger to push nav right, aligning with content col 3 */}
      <div className="flex-[3]" />

      {/* Main nav items */}
      <nav className="flex items-center gap-6">
        {mainNavItems.map((item) => (
          <span key={item.label} className="flex items-center">
            {item.label === 'Control' ? (
              <a
                href={item.href}
                className="flex items-center gap-1.5 font-mono-alt text-[13px] uppercase tracking-[0.1rem] text-white/60 hover:text-white transition-colors duration-300"
              >
                <span className="w-2 h-2 bg-accent flex-shrink-0" />
                {item.label}
              </a>
            ) : (
              <a
                href={item.href}
                className={`font-mono-alt text-[13px] uppercase tracking-[0.1rem] transition-colors duration-300 ${
                  item.variant === 'accent'
                    ? 'text-accent hover:text-accent/80'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                {item.label}
              </a>
            )}
          </span>
        ))}
      </nav>

      {/* Right spacer */}
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
