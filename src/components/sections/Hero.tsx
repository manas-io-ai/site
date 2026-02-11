'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { products } from '@/data/products';
import { services } from '@/data/services';

const headlineLines = [
  [{ text: 'WE DESIGN', font: 'font-sans' }],
  [{ text: 'ALIGNED ', font: 'font-pixel' }, { text: 'INTELLIGENCE', font: 'font-sans' }],
  [{ text: 'SYSTEMS FOR', font: 'font-sans' }],
  [{ text: 'HIGH-PERFORMERS', font: 'font-sans' }],
  [{ text: 'AND HUNGRY TEAMS WITH', font: 'font-sans' }],
  [{ text: 'PRECISION, LEVERAGE', font: 'font-pixel' }],
  [{ text: 'AND ', font: 'font-sans' }, { text: 'TASTE.', font: 'font-pixel' }],
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

  const handleScheduleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.querySelector('#discovery');
    target?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={sectionRef} className="relative min-h-screen pt-[72px] px-[2.4rem]">
      <div className="h-[calc(100vh-72px)] grid grid-cols-4 md:grid-cols-12 grid-rows-[auto_1fr_auto_auto] gap-x-[2.4rem] lg:gap-x-[3.6rem]">

        {/* === Row 1: Top metadata (4 equal columns) === */}

        {/* Col 1: Name + brand description */}
        <div className="hero-fade col-span-4 md:col-span-3 pt-[2.4rem]">
          <h1 className="text-[clamp(1.4rem,2.5vw,2.8rem)] font-medium uppercase leading-[1] tracking-[0.02em]">
            <span className="block">MANAS</span>
            <span className="block font-pixel">AI</span>
          </h1>
          <p className="text-[12px] text-white/40 font-mono mt-4 leading-relaxed max-w-[200px]">
            <span className="inline-block mr-1">↑</span>Manas (मनस) primarily means mind, intellect, or thought in Sanskrit
          </p>
        </div>

        {/* Col 2: Agency heading */}
        <div className="hero-fade col-span-4 md:col-span-3 pt-[2.4rem]">
          <span className="text-[clamp(1.4rem,2vw,2.4rem)] font-pixel font-semibold uppercase leading-[1.1] tracking-[0.02em] block">
            Agency &amp;
          </span>
          <span className="text-[clamp(1.4rem,2vw,2.4rem)] font-pixel font-semibold uppercase leading-[1.1] tracking-[0.02em] block">
            Studio
          </span>
        </div>

        {/* Col 3: Products */}
        <div className="hero-fade col-span-4 md:col-span-3 pt-[2.4rem]">
          <span className="text-[11px] font-mono uppercase tracking-[0.15em] text-white/40 block mb-3">
            Products
          </span>
          <div className="flex flex-col gap-1.5">
            {products.map((product) => (
              <span key={product.name} className="text-[14px] text-white/80 leading-tight">
                {product.name}
              </span>
            ))}
          </div>
        </div>

        {/* Col 4: Services */}
        <div className="hero-fade col-span-4 md:col-span-3 pt-[2.4rem]">
          <span className="text-[11px] font-mono uppercase tracking-[0.15em] text-white/40 block mb-3">
            Services
          </span>
          <div className="flex flex-col gap-1.5">
            {services.map((service) => (
              <span key={service.name} className="text-[14px] text-white/80 leading-tight">
                {service.name}
              </span>
            ))}
          </div>
        </div>

        {/* === Row 2: Center spacer (1fr — fills remaining viewport) === */}
        <div className="col-span-4 md:col-span-12" />

        {/* === Row 3: Giant headline (left) === */}

        <div className="hero-fade col-span-4 md:col-span-8 pb-[2.4rem] flex items-end">
          <div>
            {headlineLines.map((segments, i) => (
              <div
                key={i}
                className="text-[clamp(1.8rem,3.15vw,3.6rem)] font-semibold uppercase leading-[0.95] tracking-[-0.02em]"
              >
                {segments.map((seg, j) => (
                  <span key={j} className={seg.font}>{seg.text}</span>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Right side of headline row (aligned bottom-right) */}
        <div className="hero-fade col-span-4 md:col-span-4 pb-[2.4rem] flex items-end justify-end">
        </div>

        {/* === Row 4: Bottom strip === */}

        <div className="hero-fade col-span-2 md:col-span-6 pb-[1.2rem] flex items-end">
          <span className="text-[12px] text-white/40 font-mono">
            Tech moves fast...{' '}
            <a
              href="#discovery"
              onClick={handleScheduleClick}
              className="text-accent hover:text-accent/80 transition-colors duration-300"
            >
              Schedule a call
            </a>
          </span>
        </div>

        <div className="hero-fade col-span-2 md:col-span-6 pb-[1.2rem] flex items-end justify-end">
          <span className="text-[12px] text-white/40 font-mono">
            Now accepting Q2 2025 engagements
          </span>
        </div>

      </div>
    </section>
  );
}
