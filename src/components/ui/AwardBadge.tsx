interface AwardBadgeProps {
  name: string;
  count: number;
  className?: string;
}

const displayNames: Record<string, string> = {
  FWA: 'FWA',
  Webby: 'W.',
  CSSDesignAwards: 'CSSDesignAwards',
};

function AwardIcon({ name }: { name: string }) {
  if (name === 'FWA') {
    // Starburst / asterisk style icon matching FWA logomark
    return (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M7 0L8.5 5.5L14 7L8.5 8.5L7 14L5.5 8.5L0 7L5.5 5.5L7 0Z" fill="white" fillOpacity="0.6" />
      </svg>
    );
  }
  if (name === 'Webby') {
    return (
      <span className="text-[11px] font-mono font-bold text-white/60 leading-none">W.</span>
    );
  }
  // CSSDesignAwards - spiral/circular icon
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <circle cx="7" cy="7" r="6" stroke="white" strokeOpacity="0.6" strokeWidth="1.2" fill="none" />
      <path d="M7 3C9.2 3 11 4.8 11 7C11 9.2 9.2 11 7 11C5.3 11 4 9.7 4 8" stroke="white" strokeOpacity="0.6" strokeWidth="1.2" fill="none" strokeLinecap="round" />
    </svg>
  );
}

export function AwardBadge({ name, count, className = '' }: AwardBadgeProps) {
  const label = displayNames[name] || name;

  return (
    <div className={`flex items-center gap-3 px-4 py-3 border border-white/[0.06] rounded ${className}`}>
      <div className="w-4 h-4 flex items-center justify-center flex-shrink-0">
        <AwardIcon name={name} />
      </div>
      <span className="text-[12px] font-mono tracking-[0.08em] text-white/60 whitespace-nowrap">
        {label}
      </span>
      <span className="text-[12px] font-mono text-white/60 whitespace-nowrap">X{count}</span>
    </div>
  );
}
