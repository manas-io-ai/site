'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';

export default function AboutHero() {
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
    <section ref={sectionRef} className="min-h-[30vh] sm:min-h-[40vh] pt-24 sm:pt-36 pb-8 sm:pb-0 px-[2.4rem]">
      <div className="grid grid-cols-4 md:grid-cols-12 gap-x-4 sm:gap-x-[2.4rem] lg:gap-x-[3.6rem]">
        {/* Col 1: Name + Sanskrit note */}
        <div className="hero-fade col-span-2 md:col-span-3">
          <h1 className="text-[clamp(1.4rem,2.5vw,2.8rem)] font-medium uppercase leading-[1] tracking-[0.02em]">
            <span className="block">MANAS</span>
            <span className="block font-pixel">AI</span>
          </h1>
        </div>

        {/* Col 2: Agency heading */}
        <div className="hero-fade col-span-2 md:col-span-3 text-right md:text-left">
          <span className="text-[clamp(1.4rem,2vw,2.4rem)] font-pixel font-semibold uppercase leading-[1.1] tracking-[0.02em] block">
            Agency &amp;
          </span>
          <span className="text-[clamp(1.4rem,2vw,2.4rem)] font-pixel font-semibold uppercase leading-[1.1] tracking-[0.02em] block">
            Studio
          </span>
        </div>
      </div>
    </section>
  );
}
