interface NavLinkProps {
  label: string;
  href: string;
  isActive?: boolean;
  className?: string;
}

export function NavLink({ label, href, isActive, className = '' }: NavLinkProps) {
  return (
    <a
      href={href}
      className={`flex items-center gap-1.5 font-mono-alt text-[13px] uppercase tracking-[0.1rem] transition-colors duration-300 ${
        isActive ? 'text-accent' : 'text-white/60 hover:text-white'
      } ${className}`}
    >
      {isActive && (
        <span className="inline-block w-[6px] h-[6px] bg-accent rounded-full flex-shrink-0" />
      )}
      {label}
    </a>
  );
}
