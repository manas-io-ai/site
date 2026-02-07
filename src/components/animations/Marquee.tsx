'use client';

interface MarqueeProps {
  children: React.ReactNode;
  speed?: number;
  pauseOnHover?: boolean;
  className?: string;
  direction?: 'left' | 'right';
}

export default function Marquee({
  children,
  speed = 200,
  pauseOnHover = true,
  className = '',
  direction = 'left',
}: MarqueeProps) {
  const animationDirection = direction === 'right' ? 'reverse' : 'normal';

  return (
    <div
      className={`overflow-hidden whitespace-nowrap ${pauseOnHover ? 'group' : ''} ${className}`}
    >
      <div
        className={`inline-flex ${pauseOnHover ? 'group-hover:[animation-play-state:paused]' : ''}`}
        style={{
          animation: `marquee-scroll ${speed}s linear infinite`,
          animationDirection,
        }}
      >
        <div className="inline-flex">{children}</div>
        <div className="inline-flex">{children}</div>
      </div>
    </div>
  );
}
