'use client';

interface TagPillProps {
  label: string;
  className?: string;
}

export default function TagPill({ label, className = '' }: TagPillProps) {
  return (
    <span
      className={`inline-flex border border-white/[0.2] hover:border-white transition-colors duration-300 rounded-full px-3 py-1.5 font-mono-alt text-[11px] uppercase tracking-[0.05em] text-white/60 backdrop-blur-[3px] ${className}`}
    >
      {label}
    </span>
  );
}
