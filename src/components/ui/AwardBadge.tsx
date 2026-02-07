interface AwardBadgeProps {
  name: string;
  count: number;
  className?: string;
}

function AwardIcon({ name }: { name: string }) {
  if (name === 'FWA') {
    return (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <line x1="7" y1="2" x2="7" y2="12" stroke="white" strokeOpacity="0.6" strokeWidth="1.5" />
        <line x1="2" y1="7" x2="12" y2="7" stroke="white" strokeOpacity="0.6" strokeWidth="1.5" />
      </svg>
    );
  }
  if (name === 'Webby') {
    return (
      <span className="text-[10px] font-mono text-white/60 leading-none">W.</span>
    );
  }
  // CSSDesignAwards
  return (
    <span className="text-[9px] font-mono-alt text-white/60 leading-none">CSS</span>
  );
}

export function AwardBadge({ name, count, className = '' }: AwardBadgeProps) {
  return (
    <div className={`flex items-center gap-3 px-4 py-3 border border-white/[0.06] rounded ${className}`}>
      <div className="w-4 h-4 flex items-center justify-center flex-shrink-0">
        <AwardIcon name={name} />
      </div>
      <span className="text-[12px] font-mono uppercase tracking-[0.08em] text-white/60 whitespace-nowrap">
        {name}
      </span>
      <span className="text-[12px] font-mono text-white/60 whitespace-nowrap">X{count}</span>
    </div>
  );
}
