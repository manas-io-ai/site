'use client';

const KEYS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

interface RadioCardOption {
  value: string;
  label: string;
}

interface RadioCardGroupProps {
  options: RadioCardOption[];
  value: string;
  onChange: (value: string) => void;
}

export default function RadioCardGroup({ options, value, onChange }: RadioCardGroupProps) {
  return (
    <div className="flex flex-col gap-2">
      {options.map((opt, i) => {
        const selected = value === opt.value;
        return (
          <button
            key={opt.value}
            type="button"
            onClick={() => onChange(opt.value)}
            className={`group flex items-center gap-3 rounded-md border px-4 py-2.5 text-left transition-all duration-200 cursor-pointer w-fit min-w-[200px] ${
              selected
                ? 'border-accent bg-accent/10'
                : 'border-white/[0.12] hover:border-accent/60'
            }`}
          >
            <span
              className={`flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-[4px] border text-[11px] font-mono-alt font-medium transition-colors duration-200 ${
                selected
                  ? 'border-accent text-accent'
                  : 'border-white/20 text-white/40 group-hover:border-accent/60 group-hover:text-accent/60'
              }`}
            >
              {KEYS[i]}
            </span>
            <span className={`text-[15px] transition-colors duration-200 ${
              selected ? 'text-accent' : 'text-accent/80'
            }`}>
              {opt.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}
