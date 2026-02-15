'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navItems } from '@/data/navigation';

const mainNavItems = navItems.filter((item) => item.variant !== 'cta');
const ctaItem = navItems.find((item) => item.variant === 'cta')!;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      if (menuOpen) setMenuOpen(false);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [menuOpen]);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  // Close on outside tap
  useEffect(() => {
    if (!menuOpen) return;
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('[data-header]')) setMenuOpen(false);
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [menuOpen]);

  const isAboutPage = pathname === '/about';

  const renderNavLink = (item: typeof mainNavItems[number], className: string, onClick?: () => void) => {
    // About uses Link for client-side navigation
    if (item.label === 'About') {
      return (
        <Link
          href={item.href}
          onClick={onClick}
          className={`${className} ${isAboutPage ? 'text-white' : ''}`}
        >
          {item.label}
        </Link>
      );
    }
    // Control and other hash-based links use <a>
    return (
      <a href={item.href} onClick={onClick} className={className}>
        {item.label === 'Control' && <span className="w-2 h-2 bg-accent flex-shrink-0" />}
        {item.label}
      </a>
    );
  };

  return (
    <header
      data-header
      className={`fixed top-0 z-50 w-full px-[2.4rem] py-4 sm:py-[2.4rem] flex items-center border-b border-white/[0.06] transition-all duration-300 ${scrolled || menuOpen ? 'bg-black/80 backdrop-blur-md' : ''}`}
    >
      {/* Manas AI Logo */}
      <Link href="/" aria-label="Home">
        <Image src="/images/manas-logo.png" alt="Manas AI" width={36} height={36} />
      </Link>

      {/* Left spacer — larger to push nav right (desktop only) */}
      <div className="hidden md:block flex-[3]" />

      {/* Desktop nav */}
      <nav className="hidden md:flex items-center gap-6">
        {mainNavItems.map((item) => (
          <span key={item.label} className="flex items-center">
            {renderNavLink(
              item,
              `${item.label === 'Control' ? 'flex items-center gap-1.5 ' : ''}font-mono-alt text-[13px] uppercase tracking-[0.1rem] ${
                item.variant === 'accent'
                  ? 'text-accent hover:text-accent/80'
                  : 'text-white/60 hover:text-white'
              } transition-colors duration-300`
            )}
          </span>
        ))}
      </nav>

      {/* Right spacer (desktop only) */}
      <div className="hidden md:block flex-1" />

      {/* INQUIRE CTA (desktop only) */}
      <a
        href={ctaItem.href}
        className="hidden md:inline font-mono-alt text-[13px] uppercase tracking-[0.1rem] text-white/60 hover:text-white transition-colors duration-300"
      >
        {ctaItem.label}
      </a>

      {/* Mobile spacer */}
      <div className="flex-1 md:hidden" />

      {/* Hamburger button (mobile only) */}
      <button
        type="button"
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-[5px] cursor-pointer"
        onClick={() => setMenuOpen((v) => !v)}
      >
        <span className={`block w-5 h-[1.5px] bg-white transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-[6.5px]' : ''}`} />
        <span className={`block w-5 h-[1.5px] bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
        <span className={`block w-5 h-[1.5px] bg-white transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-[6.5px]' : ''}`} />
      </button>

      {/* Mobile menu panel */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-md border-b border-white/[0.06] md:hidden">
          <nav className="flex flex-col px-[2.4rem] py-6 gap-4">
            {mainNavItems.map((item) => (
              <span key={item.label}>
                {renderNavLink(
                  item,
                  `font-mono-alt text-[14px] uppercase tracking-[0.1rem] transition-colors duration-300 ${
                    item.variant === 'accent'
                      ? 'text-accent hover:text-accent/80'
                      : item.label === 'Control'
                        ? 'text-white/60 hover:text-white flex items-center gap-1.5'
                        : 'text-white/60 hover:text-white'
                  }`,
                  closeMenu
                )}
              </span>
            ))}
            <a
              href={ctaItem.href}
              onClick={closeMenu}
              className="font-mono-alt text-[14px] uppercase tracking-[0.1rem] text-accent hover:text-accent/80 transition-colors duration-300 mt-2"
            >
              {ctaItem.label}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
