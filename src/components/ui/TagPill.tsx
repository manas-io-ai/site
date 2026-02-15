interface TagPillProps {
  label: string;
}

export function TagPill({ label }: TagPillProps) {
  return (
    <span className="inline-flex items-center px-2.5 py-2 sm:py-1 border border-white/20 text-[12px] font-mono-alt text-white/70 hover:text-white hover:border-white/40 transition-colors duration-300">
      {label}
    </span>
  );
}
