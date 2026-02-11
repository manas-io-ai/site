'use client';

const KEYS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

interface CheckboxCardGroupProps {
  options: string[];
  value: string[];
  onChange: (value: string[]) => void;
}

export default function CheckboxCardGroup({ options, value, onChange }: CheckboxCardGroupProps) {
  function toggle(opt: string) {
    if (value.includes(opt)) {
      onChange(value.filter((v) => v !== opt));
    } else {
      onChange([...value, opt]);
    }
  }

  return (
    <div className="flex flex-col gap-2">
      {options.map((opt, i) => {
        const selected = value.includes(opt);
        return (
          <button
            key={opt}
            type="button"
            onClick={() => toggle(opt)}
            className={`group flex items-center gap-3 rounded-md border px-4 py-2.5 text-left transition-all duration-200 cursor-pointer w-fit min-w-[240px] ${
              selected
                ? 'border-accent bg-accent/10'
                : 'border-white/[0.12] hover:border-accent/60'
            }`}
          >
            <span
              className={`flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-[4px] border text-[11px] font-mono-alt font-medium transition-colors duration-200 ${
                selected
                  ? 'border-accent bg-accent text-white'
                  : 'border-white/20 text-white/40 group-hover:border-accent/60 group-hover:text-accent/60'
              }`}
            >
              {selected ? (
                <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                  <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ) : (
                KEYS[i]
              )}
            </span>
            <span className={`text-[15px] transition-colors duration-200 ${
              selected ? 'text-accent' : 'text-accent/80'
            }`}>
              {opt}
            </span>
          </button>
        );
      })}
    </div>
  );
}
