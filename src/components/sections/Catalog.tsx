'use client';

import { archiveProjects } from '@/data/archive';
import ArchiveItem from '@/components/ui/ArchiveItem';

const marqueeText = Array(10)
  .fill('CATALOG')
  .join(' · ');

export default function Catalog() {
  return (
    <section id="catalog" className="py-20 px-[2.4rem]">
      {/* Marquee Header */}
      <div className="overflow-hidden whitespace-nowrap py-8 border-y border-white/[0.06]">
        <div
          className="inline-block font-mono text-[clamp(4.8rem,10vw,14rem)] text-accent tracking-[-1px] lg:tracking-[-2px]"
          style={{ animation: 'marquee-scroll 200s linear infinite' }}
        >
          <span>{marqueeText} · </span>
          <span>{marqueeText} · </span>
        </div>
      </div>

      {/* Archive Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2 md:gap-3 mt-10">
        {archiveProjects.map((project, index) => (
          <ArchiveItem key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
