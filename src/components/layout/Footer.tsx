import { socialLinks } from '@/data/navigation';
import { SocialIcon } from '@/components/ui/SocialIcon';

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] px-[2.4rem] py-[10rem] flex justify-between items-center">
      <span className="text-white/40 text-[11px] font-mono uppercase tracking-[0.1em]">
        COPYRIGHT 2025 · ALL RIGHTS RESERVED
      </span>
      <div className="flex gap-4">
        {socialLinks.map((link) => (
          <SocialIcon
            key={link.name}
            name={link.name}
            href={link.href}
            icon={link.icon as 'linkedin' | 'instagram' | 'dribbble'}
          />
        ))}
      </div>
    </footer>
  );
}
