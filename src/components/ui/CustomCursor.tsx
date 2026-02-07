'use client';

import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return;

    const el = cursorRef.current;
    const dot = dotRef.current;
    if (!el || !dot) return;

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let rafId = 0;
    const ease = 0.15;

    const tick = () => {
      currentX += (targetX - currentX) * ease;
      currentY += (targetY - currentY) * ease;
      el.style.transform = `translate(-50%, -50%) translate(${currentX}px, ${currentY}px)`;
      rafId = requestAnimationFrame(tick);
    };

    const onMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      if (!rafId) {
        currentX = targetX;
        currentY = targetY;
        rafId = requestAnimationFrame(tick);
      }
    };

    const onMouseLeave = () => {
      el.style.opacity = '0';
    };

    const onMouseEnter = () => {
      el.style.opacity = '1';
    };

    // Hide dot when hovering interactive elements
    const onOverInteractive = (e: Event) => {
      const target = (e.target as HTMLElement).closest(
        'a, button, [role="button"], input, textarea, select, [data-cursor]'
      );
      if (target) {
        dot.style.opacity = '0';
      }
    };

    const onOutInteractive = (e: Event) => {
      const target = (e.target as HTMLElement).closest(
        'a, button, [role="button"], input, textarea, select, [data-cursor]'
      );
      if (target) {
        dot.style.opacity = '1';
      }
    };

    el.style.opacity = '1';

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('mouseover', onOverInteractive);
    document.addEventListener('mouseout', onOutInteractive);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseover', onOverInteractive);
      document.removeEventListener('mouseout', onOutInteractive);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed left-0 top-0 z-[2147483647] h-[1.2rem] w-[1.2rem] overflow-visible rounded-full"
      style={{ opacity: 0, transition: 'opacity 0.25s ease-out' }}
    >
      <div
        ref={dotRef}
        className="absolute inset-0 bg-white"
        style={{ transition: 'opacity 0.25s ease-out' }}
      />
    </div>
  );
}
