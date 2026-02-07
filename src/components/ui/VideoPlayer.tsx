'use client';

interface VideoPlayerProps {
  className?: string;
}

function CornerCross({ className }: { className: string }) {
  return (
    <svg
      width="8"
      height="8"
      viewBox="0 0 8 8"
      fill="none"
      className={`absolute ${className}`}
    >
      <line x1="4" y1="0" x2="4" y2="8" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
      <line x1="0" y1="4" x2="8" y2="4" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
    </svg>
  );
}

export function VideoPlayer({ className = '' }: VideoPlayerProps) {
  return (
    <div className={`relative ${className}`}>
      <div className="relative aspect-video bg-white/[0.03] rounded-lg overflow-hidden">
        <CornerCross className="top-3 left-3" />
        <CornerCross className="top-3 right-3" />
        <CornerCross className="bottom-3 left-3" />
        <CornerCross className="bottom-3 right-3" />

        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <button
            type="button"
            className="w-16 h-16 rounded-full border-2 border-white/20 flex items-center justify-center hover:border-white/40 transition-colors cursor-pointer"
            aria-label="Play showreel"
          >
            <svg
              width="20"
              height="24"
              viewBox="0 0 20 24"
              fill="none"
              className="ml-1"
            >
              <path
                d="M2 2L18 12L2 22V2Z"
                fill="white"
                fillOpacity="0.6"
              />
            </svg>
          </button>
          <span className="text-[11px] font-mono uppercase tracking-[0.1em] text-white/40 mt-4">
            Play Showreel
          </span>
        </div>
      </div>
    </div>
  );
}
