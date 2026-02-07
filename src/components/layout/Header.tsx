'use client';

import { useState, useEffect } from 'react';
import { navItems } from '@/data/navigation';
import { NavLink } from '@/components/ui/NavLink';

const mainNavItems = navItems.filter((item) => item.label !== 'TALK');
const talkItem = navItems.find((item) => item.label === 'TALK')!;

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 z-50 w-full px-[2.4rem] py-[2.4rem] flex items-center border-b border-white/[0.06] transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md' : ''}`}>
      {/* Pixel-art G logo */}
      <a href="#" aria-label="Home">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="8" y="4" width="4" height="4" fill="white" />
          <rect x="12" y="4" width="4" height="4" fill="white" />
          <rect x="16" y="4" width="4" height="4" fill="white" />
          <rect x="20" y="4" width="4" height="4" fill="white" />
          <rect x="4" y="8" width="4" height="4" fill="white" />
          <rect x="4" y="12" width="4" height="4" fill="white" />
          <rect x="4" y="16" width="4" height="4" fill="white" />
          <rect x="4" y="20" width="4" height="4" fill="white" />
          <rect x="8" y="24" width="4" height="4" fill="white" />
          <rect x="12" y="24" width="4" height="4" fill="white" />
          <rect x="16" y="24" width="4" height="4" fill="white" />
          <rect x="20" y="24" width="4" height="4" fill="white" />
          <rect x="16" y="16" width="4" height="4" fill="white" />
          <rect x="20" y="16" width="4" height="4" fill="white" />
          <rect x="24" y="16" width="4" height="4" fill="white" />
          <rect x="24" y="20" width="4" height="4" fill="white" />
          <rect x="24" y="8" width="4" height="4" fill="white" />
          <rect x="24" y="12" width="4" height="4" fill="white" />
        </svg>
      </a>

      {/* Spacer — push nav toward center-right */}
      <div className="flex-1" />

      {/* Main nav items */}
      <nav className="flex items-center">
        {mainNavItems.map((item, index) => (
          <span key={item.label} className="flex items-center">
            {index > 0 && (
              <span className="text-white/20 mx-3 text-[13px] select-none">·</span>
            )}
            <NavLink label={item.label} href={item.href} isActive={item.isActive} />
          </span>
        ))}
      </nav>

      {/* Spacer — push TALK to far right */}
      <div className="flex-1" />

      {/* TALK nav item (far right) */}
      <NavLink label={talkItem.label} href={talkItem.href} isActive={talkItem.isActive} />
    </header>
  );
}
