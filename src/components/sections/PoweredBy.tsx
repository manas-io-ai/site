'use client';

import { useState } from 'react';
import Marquee from '@/components/animations/Marquee';
import ScrollReveal from '@/components/animations/ScrollReveal';
import { partners } from '@/data/partners';

function PartnerItem({ name, src }: { name: string; src: string }) {
  const [showImg, setShowImg] = useState(true);

  if (!showImg) {
    return (
      <span className="inline-flex items-center mx-8 text-white/60">
        <span className="font-mono text-[14px] uppercase tracking-[0.1em]">{name}</span>
      </span>
    );
  }

  return (
    <span className="inline-flex items-center mx-8 text-white/60">
      <img
        src={src}
        alt={name}
        className="h-8 w-auto max-w-none shrink-0 object-contain opacity-70"
        onError={() => setShowImg(false)}
      />
    </span>
  );
}

export default function PoweredBy() {
  return (
    <section className="py-20 px-[2.4rem]">
      <ScrollReveal>
        <span className="text-[14px] font-pixel uppercase tracking-[0.2em] text-white/40 block mb-8">
          Powered By
        </span>

        <div className="border border-white/[0.06] rounded-xl overflow-hidden py-8" style={{ perspective: '1000px' }}>
          <div style={{ transform: 'rotateX(2deg)' }}>
            <Marquee speed={60} pauseOnHover={false}>
              {partners.map((partner) => (
                <PartnerItem key={partner.name} name={partner.name} src={partner.src} />
              ))}
            </Marquee>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
