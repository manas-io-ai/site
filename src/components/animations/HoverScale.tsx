'use client';

interface HoverScaleProps {
  children: React.ReactNode;
  scale?: number;
  className?: string;
}

export default function HoverScale({
  children,
  scale = 1.05,
  className = '',
}: HoverScaleProps) {
  return (
    <div
      className={className}
      style={{
        transition: 'transform 0.6s cubic-bezier(0.25, 0.1, 0.25, 1)',
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.transform = `scale(${scale})`;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.transform = 'scale(1)';
      }}
    >
      {children}
    </div>
  );
}
