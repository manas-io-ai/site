import Image from 'next/image';
import { products } from '@/data/products';
import { services } from '@/data/services';

const socials = [
  { name: 'LinkedIn', href: '#' },
  { name: 'X / Twitter', href: '#' },
  { name: 'GitHub', href: '#' },
];

const more = [
  { name: 'Careers', href: '#' },
  { name: 'Privacy', href: '#' },
  { name: 'Terms', href: '#' },
];

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] px-[2.4rem] pt-[6rem] pb-[3rem]">
      {/* Brand */}
      <div className="mb-16 flex items-center gap-6">
        <Image src="/images/manas-logo.png" alt="Manas AI" width={72} height={72} />
        <span className="text-[clamp(3rem,6vw,6rem)] font-pixel uppercase leading-[0.9] tracking-[-0.02em]">
          MANAS AI
        </span>
      </div>

      {/* 4-column grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 max-w-4xl mx-auto">
        <div>
          <span className="text-[11px] font-mono uppercase tracking-[0.15em] text-white/40 block mb-4">
            Products
          </span>
          <div className="flex flex-col gap-2">
            {products.map((p) => (
              <a key={p.name} href="#" className="text-[13px] text-white/60 hover:text-white transition-colors duration-300">
                {p.name}
              </a>
            ))}
          </div>
        </div>

        <div>
          <span className="text-[11px] font-mono uppercase tracking-[0.15em] text-white/40 block mb-4">
            Services
          </span>
          <div className="flex flex-col gap-2">
            {services.map((s) => (
              <a key={s.name} href="#" className="text-[13px] text-white/60 hover:text-white transition-colors duration-300">
                {s.name}
              </a>
            ))}
          </div>
        </div>

        <div>
          <span className="text-[11px] font-mono uppercase tracking-[0.15em] text-white/40 block mb-4">
            Socials
          </span>
          <div className="flex flex-col gap-2">
            {socials.map((link) => (
              <a key={link.name} href={link.href} className="text-[13px] text-white/60 hover:text-white transition-colors duration-300">
                {link.name}
              </a>
            ))}
          </div>
        </div>

        <div>
          <span className="text-[11px] font-mono uppercase tracking-[0.15em] text-white/40 block mb-4">
            More
          </span>
          <div className="flex flex-col gap-2">
            {more.map((link) => (
              <a key={link.name} href={link.href} className="text-[13px] text-white/60 hover:text-white transition-colors duration-300">
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="flex flex-col sm:flex-row justify-between items-center border-t border-white/[0.06] pt-6 gap-2">
        <span className="text-white/40 text-[11px] font-mono uppercase tracking-[0.1em]">
          &copy; 2025
        </span>
        <span className="text-white/40 text-[11px] font-mono uppercase tracking-[0.1em]">
          Manas AI LLC, All Rights Reserved
        </span>
      </div>
    </footer>
  );
}
