'use client';

interface StepIndicatorProps {
  total: number;
  current: number;
}

export default function StepIndicator({ total, current }: StepIndicatorProps) {
  return (
    <div className="flex gap-1.5 mb-8">
      {Array.from({ length: total }, (_, i) => (
        <div
          key={i}
          className={`h-1 rounded-full transition-all duration-500 ease-[cubic-bezier(0.43,0.195,0.02,1)] ${
            i <= current ? 'bg-accent flex-[2]' : 'bg-white/[0.06] flex-1'
          }`}
        />
      ))}
    </div>
  );
}
