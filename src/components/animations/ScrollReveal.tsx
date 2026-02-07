'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  stagger?: number;
  className?: string;
}

export default function ScrollReveal({
  children,
  delay = 0,
  stagger = 0,
  className = '',
}: ScrollRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const targets = stagger > 0 ? container.children : container;

    gsap.set(targets, { opacity: 0, y: 40 });

    const trigger = ScrollTrigger.create({
      trigger: container,
      start: 'top 85%',
      once: true,
      onEnter: () => {
        gsap.to(targets, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power3.out',
          delay,
          stagger: stagger > 0 ? stagger : undefined,
        });
      },
    });

    return () => {
      trigger.kill();
    };
  }, [delay, stagger]);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}
