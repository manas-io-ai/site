'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { AwardBadge } from '@/components/ui/AwardBadge';
import { VideoPlayer } from '@/components/ui/VideoPlayer';

const awards = [
  { name: 'FWA', count: 1 },
  { name: 'Webby', count: 7 },
  { name: 'CSSDesignAwards', count: 22 },
];

const heroServices = [
  'Branding',
  'Creative Direction & Strategy',
  'UX / UI Design',
  'Web Development (React/Nextjs)',
  'eCommerce, Product, 3D, WebGL',
  'Video & Animation',
];

const headlineElements = [
  { text: 'I BRING THE', font: 'font-sans' },
  { text: 'UNEXPECTED', font: 'font-pixel' },
  { text: 'TO BRAND & DIGITAL', font: 'font-sans' },
  { text: 'EXPERIENCES', font: 'font-pixel' },
];

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const items = el.querySelectorAll<HTMLElement>('.hero-fade');
    gsap.set(items, { opacity: 0, y: 20 });
    gsap.to(items, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.08,
      ease: 'power3.out',
      delay: 0.3,
    });
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen pt-[72px] px-[2.4rem]">
      <div className="h-[calc(100vh-72px)] grid grid-cols-4 md:grid-cols-12 grid-rows-[auto_1fr_auto] gap-x-[2.4rem] lg:gap-x-[3.6rem]">

        {/* === Row 1: Top metadata === */}

        {/* Name + brand quote */}
        <div className="hero-fade col-span-4 md:col-span-3 pt-[2.4rem]">
          <h1 className="text-[clamp(1.4rem,2.5vw,2.8rem)] font-medium uppercase leading-[1] tracking-[0.02em]">
            <span className="block">Adam</span>
            <span className="block">Roberts</span>
          </h1>
          <p className="text-[12px] text-white/40 mt-4 leading-relaxed max-w-[200px]">
            <span className="inline-block mr-1">↑</span>Grilled Pixels is my personal brand - I came up with it in 2004 based on &ldquo;cooking up ideas&rdquo;
          </p>
        </div>

        {/* Design & Engineering heading */}
        <div className="hero-fade col-span-4 md:col-span-3 pt-[2.4rem]">
          <span className="inline-block w-[6px] h-[6px] bg-white mb-3" />
          <span className="text-[clamp(1.4rem,2vw,2.4rem)] font-semibold uppercase leading-[1.1] tracking-[0.02em] block">
            Design &amp;
          </span>
          <span className="text-[clamp(1.4rem,2vw,2.4rem)] font-semibold uppercase leading-[1.1] tracking-[0.02em] block">
            Engineering
          </span>
        </div>

        {/* What I Do */}
        <div className="hero-fade col-span-4 md:col-span-3 pt-[2.4rem]">
          <span className="text-[14px] font-mono uppercase tracking-[0.1em] text-white/40 block mb-3">
            What I Do
          </span>
          <p className="text-[14px] text-white/60 leading-relaxed max-w-[260px]">
            I create high-impact digital experiences for brands, websites and digital products
          </p>
        </div>

        {/* Services */}
        <div className="hero-fade col-span-4 md:col-span-3 pt-[2.4rem]">
          <span className="text-[14px] font-mono uppercase tracking-[0.1em] text-white/40 block mb-3">
            Services
          </span>
          <div className="flex flex-col gap-1">
            {heroServices.map((service) => (
              <span key={service} className="text-[13px] text-white/60 leading-tight">
                {service}
              </span>
            ))}
          </div>
        </div>

        {/* === Row 2: Video (centered) === */}
        <div className="hero-fade col-span-4 md:col-start-4 md:col-span-6 flex items-center justify-center">
          <VideoPlayer className="w-[60%] sm:w-[45%] lg:w-[35%] max-w-[500px]" />
        </div>

        {/* === Row 3: Headline + Awards === */}

        {/* Giant headline */}
        <div className="hero-fade col-span-4 md:col-span-8 pb-[2.4rem] flex items-end">
          <div>
            {headlineElements.map((line) => (
              <div
                key={line.text}
                className={`text-[clamp(2.4rem,4.2vw,4.8rem)] font-semibold uppercase leading-[0.95] tracking-[-0.02em] ${line.font}`}
              >
                {line.text}
              </div>
            ))}
          </div>
        </div>

        {/* Awards */}
        <div className="hero-fade col-span-4 md:col-span-4 pb-[2.4rem] flex flex-row flex-wrap justify-end items-end gap-2">
          {awards.map((award) => (
            <AwardBadge
              key={award.name}
              name={award.name}
              count={award.count}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
