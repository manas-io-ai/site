'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ScrollReveal from '@/components/animations/ScrollReveal';
import { TagPill } from '@/components/ui/TagPill';
import { bio, beliefs, contact } from '@/data/about';
const partners = [
  'OpenAI', 'Anthropic', 'Letta', 'ElevenLabs', 'Google', 'Vercel',
  'AWS', 'Supabase', 'n8n', 'Warp', 'Higgsfield', 'FLORA', 'Cursor',
  'Stripe', 'Remotion', 'Replicate', 'Firecrawl', 'Apify', 'AgentMail',
];
import { socialLinks } from '@/data/navigation';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

function SocialIcon({ name }: { name: string }) {
  switch (name) {
    case 'linkedin':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      );
    case 'dribbble':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308a10.174 10.174 0 004.392-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.022c-5.79 2.015-7.86 6.025-8.04 6.4a10.15 10.15 0 006.29 2.166c1.42 0 2.77-.29 4.006-.818zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702A10.148 10.148 0 0012 1.86c-.83 0-1.634.1-2.4.192zm10.019 3.15c-.223.295-1.895 2.507-5.677 4.024.264.54.516 1.088.756 1.64.084.194.168.39.246.586 3.432-.432 6.84.283 7.18.353a10.104 10.104 0 00-2.505-6.603z" />
        </svg>
      );
    case 'instagram':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
        </svg>
      );
    default:
      return null;
  }
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
                  className="text-[13px] text-accent hover:text-accent/80 transition-colors duration-300"
                >
                  {contact.email} <span className="inline-block">↗</span>
                </a>
                <a
                  href={contact.scheduleHref}
                  className="text-[13px] text-accent hover:text-accent/80 transition-colors duration-300"
                >
                  {contact.scheduleLabel} <span className="inline-block">↗</span>
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
              <div className="flex gap-4 items-center">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 hover:text-white transition-colors duration-300"
                    aria-label={link.name}
                  >
                    <SocialIcon name={link.icon} />
                  </a>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Partners */}
          <div ref={tagsRef}>
            <div>
              <span className="text-[11px] font-mono uppercase tracking-[0.15em] text-white/40 block mb-4">
                Partners
              </span>
              <div className="flex flex-wrap gap-2">
                {partners.map((partner) => (
                  <span key={partner} className="tag-item">
                    <TagPill label={partner} />
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
