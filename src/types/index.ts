export interface NavItem {
  label: string;
  href: string;
  isActive?: boolean;
  variant?: 'default' | 'accent' | 'cta';
}

export interface SocialLink {
  name: string;
  href: string;
  icon: string; // SVG path or component name
}

export interface Service {
  name: string;
  category?: string;
}

export interface Product {
  name: string;
}

export interface PartnerLogo {
  name: string;
  src: string;
}
