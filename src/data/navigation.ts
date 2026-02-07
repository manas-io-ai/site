import { NavItem, SocialLink } from '@/types';

export const navItems: NavItem[] = [
  { label: 'PROJECTS', href: '#projects', isActive: true },
  { label: 'ABOUT', href: '#about' },
  { label: 'D.O.T', href: '#dot' },
  { label: 'TALK', href: '#talk' },
];

export const socialLinks: SocialLink[] = [
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com',
    icon: 'linkedin',
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com',
    icon: 'instagram',
  },
  {
    name: 'Dribbble',
    href: 'https://dribbble.com',
    icon: 'dribbble',
  },
];
