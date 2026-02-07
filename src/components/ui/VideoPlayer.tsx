'use client';

interface VideoPlayerProps {
  className?: string;
}

// Mosaic cell colors from project gradients
const mosaicColors = [
  '#1a1a2e', '#16213e', '#0f0f23', '#1a0a2e',
  '#1e1e1e', '#2d2d2d', '#0a1628', '#1a2744',
  '#1a2e1a', '#0f2010', '#2e1a2e', '#1a0f2e',
  '#1a1a2e', '#16213e', '#1e1e1e', '#0a1628',
  '#2e1a2e', '#0f0f23', '#1a2744', '#2d2d2d',
  '#1a0a2e', '#1a2e1a', '#0f2010', '#1a0f2e',
];

export function VideoPlayer({ className = '' }: VideoPlayerProps) {
  return (
    <div className={`relative ${className}`}>
      <div className="relative aspect-video overflow-hidden">
        {/* Image mosaic grid */}
        <div className="absolute inset-0 grid grid-cols-6 grid-rows-4">
          {mosaicColors.map((color, i) => (
            <div
              key={i}
              className="w-full h-full"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>

        {/* Overlaid rectangular play button at bottom-right */}
        <button
          type="button"
          className="absolute bottom-0 right-0 flex items-center gap-3 border border-white/[0.12] px-6 py-4 bg-black/60 backdrop-blur-sm text-[11px] font-mono uppercase tracking-[0.1em] text-white/60 hover:border-white/40 transition-colors cursor-pointer"
          aria-label="Play showreel"
        >
          <svg width="12" height="14" viewBox="0 0 12 14" fill="none">
            <path d="M1 1L11 7L1 13V1Z" fill="white" fillOpacity="0.6" />
          </svg>
          PLAY SHOWREEL
        </button>
      </div>
    </div>
  );
}
