'use client';

import ScrollReveal from '@/components/animations/ScrollReveal';
import IntakeFunnel from '@/components/ui/IntakeFunnel';

export default function DiscoveryCall() {
  return (
    <section id="discovery" className="py-20 px-[2.4rem]">
      <ScrollReveal>
        <h2 className="text-[clamp(2rem,4vw,4rem)] font-pixel uppercase leading-[1.05] tracking-[-0.02em] mb-16 text-center">
          Schedule a Discovery Call
        </h2>
        <IntakeFunnel />
      </ScrollReveal>
    </section>
  );
}
