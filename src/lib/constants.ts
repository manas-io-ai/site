// Design tokens from grilledpixels.com

export const COLORS = {
  black: '#000000',
  white: '#FFFFFF',
  accent: '#EE344A',
  white6: 'rgba(255, 255, 255, 0.06)',
  white12: 'rgba(255, 255, 255, 0.12)',
  white40: 'rgba(255, 255, 255, 0.40)',
  white60: 'rgba(255, 255, 255, 0.60)',
} as const;

export const PROJECT_GRADIENTS = {
  finkee: 'linear-gradient(180deg, #1a1a2e 0%, #16213e 100%)',
  otherside: 'linear-gradient(180deg, #0f0f23 0%, #1a0a2e 100%)',
  eiger: 'linear-gradient(180deg, #1e1e1e 0%, #2d2d2d 100%)',
  supervoice: 'linear-gradient(180deg, #0a1628 0%, #1a2744 100%)',
  retreater: 'linear-gradient(180deg, #1a2e1a 0%, #0f2010 100%)',
  liquidCrystal: 'linear-gradient(180deg, #2e1a2e 0%, #1a0f2e 100%)',
} as const;

export const EASING = {
  textReveal: 'cubic-bezier(0.430, 0.195, 0.020, 1)',
  smooth: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
  snappy: 'cubic-bezier(0.19, 1, 0.22, 1)',
} as const;

export const BREAKPOINTS = {
  xs: 320,
  sm: 700,
  md: 1024,
  lg: 1200,
  xl: 1400,
} as const;

export const ANIMATION_DURATION = {
  textReveal: 0.4,
  stagger: 0.05,
  fadeIn: 0.6,
  marquee: 200,
  hoverScale: 0.6,
} as const;

export const GSAP_EASING = 'power3.out' as const;
