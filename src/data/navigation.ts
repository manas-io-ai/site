import { NavItem, SocialLink } from '@/types';

export const navItems: NavItem[] = [
  { label: 'Control', href: '/#control', variant: 'default' },
  { label: 'About', href: '/about', variant: 'default' },
  { label: 'INQUIRE', href: '/#discovery', variant: 'cta' },
];

export const socialLinks: SocialLink[] = [
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com',
    icon: 'linkedin',
  },
  {
    name: 'Dribbble',
    href: 'https://dribbble.com',
    icon: 'dribbble',
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com',
    icon: 'instagram',
  },
];
