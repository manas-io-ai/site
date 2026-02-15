'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ScrollReveal from '@/components/animations/ScrollReveal';
import { TagPill } from '@/components/ui/TagPill';
import { bio, beliefs, contact } from '@/data/about';
import { skills, tools } from '@/data/expertise';
import { socialLinks } from '@/data/navigation';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AboutContent() {
  const tagsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = tagsRef.current;
    if (!container) return;

    const tags = container.querySelectorAll<HTMLElement>('.tag-item');
    gsap.set(tags, { opacity: 0, y: 12 });

    const trigger = ScrollTrigger.create({
      trigger: container,
      start: 'top 85%',
      once: true,
      onEnter: () => {
        gsap.to(tags, {
          opacity: 1,
          y: 0,
          duration: 0.4,
          stagger: 0.015,
          ease: 'power3.out',
        });
      },
    });

    return () => {
      trigger.kill();
    };
  }, []);

  return (
    <section className="px-[2.4rem] py-12 sm:py-20">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-x-4 sm:gap-x-[2.4rem] lg:gap-x-[3.6rem] gap-y-12">
        {/* Col 1: Number label — spans 3 cols to match hero MANAS AI column */}
        <div className="hidden md:block md:col-span-3">
          <ScrollReveal>
            <span className="text-[11px] font-mono uppercase tracking-[0.15em] text-white/40">
              001
            </span>
          </ScrollReveal>
        </div>

        {/* Col 2: Bio + Beliefs — starts at col 4 to align with "Agency & Studio" */}
        <div className="md:col-start-4 md:col-span-5">
          <ScrollReveal stagger={0.05}>
            {bio.map((paragraph, i) => (
              <p key={i} className="text-[15px] sm:text-[16px] text-white/80 leading-relaxed mb-6 last:mb-0">
                {paragraph}
              </p>
            ))}
          </ScrollReveal>

          <div className="mt-12 sm:mt-16">
            <ScrollReveal stagger={0.04}>
              {beliefs.map((belief) => (
                <div key={belief.number} className="mb-8 last:mb-0">
                  <span className="text-[11px] font-mono uppercase tracking-[0.15em] text-white/40 block mb-2">
                    {belief.number}
                  </span>
                  <h3 className="text-[16px] sm:text-[18px] font-semibold text-white mb-2">
                    {belief.title}
                  </h3>
                  <p className="text-[14px] sm:text-[15px] text-white/60 leading-relaxed">
                    {belief.body}
                  </p>
                </div>
              ))}
            </ScrollReveal>
          </div>
        </div>

        {/* Col 3: Sticky sidebar — col 10-12, gap at col 9 for breathing room */}
        <div className="border-t border-white/[0.06] pt-10 md:border-t-0 md:pt-0 md:col-start-10 md:col-span-3 md:sticky md:top-[100px] md:self-start">
          {/* Contact */}
          <ScrollReveal delay={0.15}>
            <div className="mb-10">
              <span className="text-[11px] font-mono uppercase tracking-[0.15em] text-white/40 block mb-4">
                Contact
              </span>
              <div className="flex flex-col gap-2">
                <a
                  href={`mailto:${contact.email}`}
                  className="text-[13px] text-white/60 hover:text-white transition-colors duration-300"
                >
                  {contact.email}
                </a>
                <a
                  href={contact.scheduleHref}
                  className="text-[13px] text-accent hover:text-accent/80 transition-colors duration-300"
                >
                  {contact.scheduleLabel}
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Social */}
          <ScrollReveal delay={0.15}>
            <div className="mb-10">
              <span className="text-[11px] font-mono uppercase tracking-[0.15em] text-white/40 block mb-4">
                Social
              </span>
              <div className="flex flex-col gap-2">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[13px] text-white/60 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Expertise */}
          <div ref={tagsRef}>
            <div className="mb-6">
              <span className="text-[11px] font-mono uppercase tracking-[0.15em] text-white/40 block mb-4">
                Skills
              </span>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span key={skill} className="tag-item">
                    <TagPill label={skill} />
                  </span>
                ))}
              </div>
            </div>

            <div>
              <span className="text-[11px] font-mono uppercase tracking-[0.15em] text-white/40 block mb-4">
                Tools
              </span>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <span key={tool} className="tag-item">
                    <TagPill label={tool} />
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
