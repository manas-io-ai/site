'use client';

import { ArchiveProject } from '@/types';

interface ArchiveItemProps {
  project: ArchiveProject;
  index: number;
}

export default function ArchiveItem({ project, index }: ArchiveItemProps) {
  const hue = (index * 37) % 360;
  const bg = `hsl(${hue}, 20%, 12%)`;

  return (
    <div
      className="relative aspect-square overflow-hidden rounded group cursor-pointer"
      style={{ backgroundColor: bg }}
    >
      {/* Placeholder letter */}
      <div className="absolute inset-0 flex items-center justify-center text-white/10 text-2xl font-semibold">
        {project.name.charAt(0)}
      </div>

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3">
        <span className="text-white text-xs font-medium truncate">
          {project.name}
        </span>
        <span className="text-white/40 text-[10px] font-mono uppercase tracking-[0.05em] mt-1">
          {project.category}
        </span>
      </div>
    </div>
  );
}
