'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface TextRevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: React.ElementType;
}

export default function TextReveal({
  children,
  delay = 0,
  className = '',
  as: Tag = 'div',
}: TextRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const lines = container.querySelectorAll('.text-reveal-line');
    if (lines.length === 0) return;

    gsap.set(lines, { yPercent: 110 });

    const trigger = ScrollTrigger.create({
      trigger: container,
      start: 'top 85%',
      once: true,
      onEnter: () => {
        gsap.to(lines, {
          yPercent: 0,
          duration: 0.4,
          stagger: 0.05,
          ease: 'power3.out',
          delay,
        });
      },
    });

    return () => {
      trigger.kill();
    };
  }, [delay]);

  return (
    <Tag
      ref={containerRef as React.Ref<never>}
      className={`overflow-hidden ${className}`}
    >
      {Array.isArray(children) ? (
        children.map((child, i) => (
          <div key={i} className="text-reveal-line" style={{ willChange: 'transform' }}>
            {child}
          </div>
        ))
      ) : (
        <div className="text-reveal-line" style={{ willChange: 'transform' }}>
          {children}
        </div>
      )}
    </Tag>
  );
}
