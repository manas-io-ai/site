'use client';

import { Project } from '@/types';
import TagPill from '@/components/ui/TagPill';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const marqueeText = Array(10)
    .fill(project.displayName)
    .join(' · ');

  return (
    <div className="border border-white/[0.06] rounded-xl p-6 md:p-8 bg-white/[0.02]">
      {/* Controls bar */}
      <div className="flex justify-between items-center py-4 border-b border-white/[0.06]">
        <button className="text-[11px] font-mono-alt uppercase tracking-[0.1em] text-white/40 cursor-pointer hover:text-white transition-colors">
          ▶ QUICK BREAKDOWN
        </button>
        <a
          href={project.caseStudyUrl}
          className="text-[11px] font-mono-alt uppercase tracking-[0.1em] text-white hover:text-accent transition-colors"
        >
          VIEW CASESTUDY →
        </a>
      </div>

      {/* Hero image area */}
      <div
        className="relative aspect-[16/10] overflow-hidden rounded-lg mt-4 group cursor-pointer"
        style={{ background: project.gradient }}
      >
        <div className="absolute inset-0 flex items-center justify-center transition-transform duration-[600ms] ease-[cubic-bezier(0.5,0,0,1)] group-hover:scale-[1.1]">
          <span className="text-[clamp(3rem,10vw,6rem)] font-semibold uppercase text-white/[0.03] select-none">
            {project.name}
          </span>
        </div>
      </div>

      {/* Marquee band */}
      <div className="py-4 overflow-hidden border-y border-white/[0.06] mt-4">
        <div className="whitespace-nowrap overflow-hidden">
          <div
            className="inline-block"
            style={{ animation: 'marquee-scroll 30s linear infinite' }}
          >
            <span className="font-mono text-[clamp(1rem,3vw,1.5rem)] uppercase tracking-[0.2em] text-white/60">
              {marqueeText} · {marqueeText} ·{' '}
            </span>
          </div>
        </div>
      </div>

      {/* Tags area */}
      <div className="flex flex-wrap gap-2 mt-4">
        {project.tags.map((tag) => (
          <TagPill key={tag.label} label={tag.label} />
        ))}
      </div>

      {/* Tagline */}
      <p className="mt-6 mb-4 text-white/40 text-sm">{project.tagline}</p>
    </div>
  );
}
