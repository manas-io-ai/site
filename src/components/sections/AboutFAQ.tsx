'use client';

import { useState } from 'react';
import ScrollReveal from '@/components/animations/ScrollReveal';
import { faqItems } from '@/data/faq';

export default function AboutFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="px-[2.4rem] py-12 sm:py-20 border-t border-white/[0.06]">
      <ScrollReveal>
        <h2 className="font-pixel text-[clamp(1.4rem,2.5vw,2.8rem)] uppercase tracking-[0.02em] mb-12 sm:mb-16">
          Questions <span className="text-white/40">*</span> Answers
        </h2>
      </ScrollReveal>

      <div className="max-w-3xl">
        {faqItems.map((item, index) => (
          <ScrollReveal key={index} delay={index * 0.03}>
            <div className="border-b border-white/[0.06]">
              <button
                type="button"
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between py-5 sm:py-6 text-left cursor-pointer group"
              >
                <span className="text-[14px] sm:text-[16px] text-white/80 group-hover:text-white transition-colors duration-300 pr-4">
                  {item.question}
                </span>
                <span className="text-[18px] text-white/40 group-hover:text-white transition-colors duration-300 flex-shrink-0 font-mono">
                  {openIndex === index ? '\u2212' : '+'}
                </span>
              </button>
              <div className={`accordion-content ${openIndex === index ? 'open' : ''}`}>
                <div>
                  <p className="text-[14px] text-white/50 leading-relaxed pb-5 sm:pb-6">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
