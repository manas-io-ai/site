interface ButtonProps {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  type?: 'button' | 'submit';
}

const shared =
  'relative inline-flex items-center justify-center font-mono-alt text-[14px] uppercase tracking-[0.1em] px-8 py-3 sm:px-[3.6rem] sm:py-[1.6rem] rounded-full overflow-hidden transition-all duration-[800ms] ease-[cubic-bezier(0.43,0.195,0.02,1)] cursor-pointer';

const variants = {
  primary: 'bg-accent text-white hover:bg-accent/90',
  secondary:
    'bg-transparent border border-white/[0.12] text-white hover:border-white/40 backdrop-blur-[8px]',
} as const;

export default function Button({
  variant = 'primary',
  children,
  className = '',
  onClick,
  href,
  type = 'button',
}: ButtonProps) {
  const classes = `${shared} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
