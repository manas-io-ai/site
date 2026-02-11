import { forwardRef, type InputHTMLAttributes, type SelectHTMLAttributes } from 'react';

const labelClasses =
  'block text-[11px] font-mono-alt uppercase tracking-[0.15em] text-white/40 mb-2';

const inputClasses =
  'w-full bg-transparent border border-white/[0.06] rounded-xl px-4 py-3 text-white font-sans text-[15px] placeholder:text-white/20 outline-none transition-colors duration-200 focus:border-accent';

const errorClasses = 'border-accent';

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label: string;
  as?: 'input' | 'textarea';
  error?: string;
}

export const TextInput = forwardRef<HTMLInputElement | HTMLTextAreaElement, TextInputProps>(
  function TextInput({ label, as = 'input', error, className = '', ...props }, ref) {
    const Tag = as;
    return (
      <div className={className}>
        <label className={labelClasses}>{label}</label>
        <Tag
          ref={ref as never}
          className={`${inputClasses} ${error ? errorClasses : ''} ${as === 'textarea' ? 'min-h-[100px] resize-none' : ''}`}
          {...(props as Record<string, unknown>)}
        />
        {error && <p className="text-accent text-[12px] mt-1">{error}</p>}
      </div>
    );
  }
);

interface SelectInputProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: { value: string; label: string }[];
  error?: string;
}

export const SelectInput = forwardRef<HTMLSelectElement, SelectInputProps>(
  function SelectInput({ label, options, error, className = '', ...props }, ref) {
    return (
      <div className={className}>
        <label className={labelClasses}>{label}</label>
        <select
          ref={ref}
          className={`${inputClasses} ${error ? errorClasses : ''} appearance-none cursor-pointer`}
          {...props}
        >
          <option value="" className="bg-black">Select...</option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value} className="bg-black">
              {opt.label}
            </option>
          ))}
        </select>
        {error && <p className="text-accent text-[12px] mt-1">{error}</p>}
      </div>
    );
  }
);
