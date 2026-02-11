'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
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
        <Image src="/images/manas-logo.png" alt="Manas AI" width={36} height={36} />
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
