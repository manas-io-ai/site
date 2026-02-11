'use client';

import ScrollReveal from '@/components/animations/ScrollReveal';

export default function DiscoveryCall() {
  return (
    <section id="discovery" className="py-20 px-[2.4rem]">
      <ScrollReveal>
        <h2 className="text-[clamp(2rem,4vw,4rem)] font-pixel uppercase leading-[1.05] tracking-[-0.02em] mb-10">
          Schedule a Discovery Call
        </h2>

        <div className="border border-white/[0.06] rounded-xl overflow-hidden">
          <div data-lenis-prevent>
            <iframe
              src="https://form.typeform.com/to/PLACEHOLDER"
              title="Schedule a Discovery Call"
              className="w-full h-[600px] border-0"
              style={{ background: 'transparent' }}
            />
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
