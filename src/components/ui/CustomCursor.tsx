'use client';

import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only show on devices with a fine pointer (no touch)
    if (!window.matchMedia('(pointer: fine)').matches) return;

    const el = cursorRef.current;
    if (!el) return;

    let x = 0;
    let y = 0;
    let rafId: number;

    const update = () => {
      el.style.transform = `translate(-50%, -50%) translate(${x}px, ${y}px)`;
      rafId = 0;
    };

    const onMouseMove = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
      if (!rafId) {
        rafId = requestAnimationFrame(update);
      }
    };

    const onMouseLeave = () => {
      el.style.opacity = '0';
    };

    const onMouseEnter = () => {
      el.style.opacity = '1';
    };

    // Make visible once we know it's a pointer device
    el.style.opacity = '1';

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed left-0 top-0 z-[2147483647] h-[1.2rem] w-[1.2rem] overflow-visible rounded-full after:absolute after:inset-0 after:bg-white"
      style={{ opacity: 0, transition: 'opacity 0.25s ease-out' }}
    />
  );
}
