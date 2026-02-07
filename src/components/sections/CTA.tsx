'use client';

import Button from '@/components/ui/Button';

const MARQUEE_TEXT = Array(8).fill('LET\u2019S WORK').join(' \u00b7 ');

export default function CTA() {
  return (
    <section id="talk" className="py-32 px-[2.4rem]">
      {/* Marquee */}
      <div className="overflow-hidden whitespace-nowrap py-8 border-y border-white/[0.06]">
        <div
          className="inline-block font-mono text-accent text-[clamp(4.8rem,10vw,14rem)] tracking-[-1px] lg:tracking-[-2px]"
          style={{ animation: 'marquee-scroll 200s linear infinite' }}
        >
          <span>{MARQUEE_TEXT} &middot;&nbsp;</span>
          <span>{MARQUEE_TEXT} &middot;&nbsp;</span>
        </div>
      </div>

      {/* Video area */}
      <div className="mt-20 flex justify-center">
        <div className="relative max-w-[600px] w-full mx-auto">
          <div className="aspect-square bg-white/[0.03] rounded-lg overflow-hidden relative">
            <span className="absolute inset-0 flex items-center justify-center text-white/10 text-4xl font-semibold">
              VIDEO
            </span>

            {/* Pixel-art corner decorations */}
            {/* Top-left */}
            <div className="absolute top-2 left-2">
              <div className="w-1 h-1 bg-white absolute top-0 left-0" />
              <div className="w-1 h-1 bg-white absolute top-0 left-1" />
              <div className="w-1 h-1 bg-white absolute top-0 left-2" />
              <div className="w-1 h-1 bg-white absolute top-1 left-0" />
              <div className="w-1 h-1 bg-white absolute top-2 left-0" />
            </div>
            {/* Top-right */}
            <div className="absolute top-2 right-2">
              <div className="w-1 h-1 bg-white absolute top-0 right-0" />
              <div className="w-1 h-1 bg-white absolute top-0 right-1" />
              <div className="w-1 h-1 bg-white absolute top-0 right-2" />
              <div className="w-1 h-1 bg-white absolute top-1 right-0" />
              <div className="w-1 h-1 bg-white absolute top-2 right-0" />
            </div>
            {/* Bottom-left */}
            <div className="absolute bottom-2 left-2">
              <div className="w-1 h-1 bg-white absolute bottom-0 left-0" />
              <div className="w-1 h-1 bg-white absolute bottom-0 left-1" />
              <div className="w-1 h-1 bg-white absolute bottom-0 left-2" />
              <div className="w-1 h-1 bg-white absolute bottom-1 left-0" />
              <div className="w-1 h-1 bg-white absolute bottom-2 left-0" />
            </div>
            {/* Bottom-right */}
            <div className="absolute bottom-2 right-2">
              <div className="w-1 h-1 bg-white absolute bottom-0 right-0" />
              <div className="w-1 h-1 bg-white absolute bottom-0 right-1" />
              <div className="w-1 h-1 bg-white absolute bottom-0 right-2" />
              <div className="w-1 h-1 bg-white absolute bottom-1 right-0" />
              <div className="w-1 h-1 bg-white absolute bottom-2 right-0" />
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <Button variant="secondary">UNMUTE</Button>
            <Button variant="primary">SAY HI</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
