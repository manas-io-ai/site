'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';

export function BottomBar() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = barRef.current;
    if (!el) return;

    gsap.set(el, { opacity: 0, y: 100 });
    gsap.to(el, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      delay: 0.5,
      ease: 'power3.out',
    });
  }, []);

  return (
    <div ref={barRef} className="fixed bottom-0 z-50 w-full bg-black border-t border-white/[0.06] py-4 px-[2.4rem] hidden md:flex justify-between items-center">
      {/* Left: availability text */}
      <div className="flex items-center gap-1.5">
        <span className="text-white/40 text-[12px] font-mono">
          Open to freelance, contract or full-time...
        </span>
        <a href="#talk" className="text-accent text-[12px] font-mono underline">
          Schedule a call
        </a>
      </div>

      {/* Right: stats + scroll indicator */}
      <div className="flex items-center gap-4">
        <span className="text-white/40 text-[12px] font-mono">
          6 full cases · 76 archive fragments
        </span>
        <div className="w-[6px] h-[6px] bg-white" />
      </div>
    </div>
  );
}
