import gsap from 'gsap';

export const EASE_TEXT_REVEAL = 'power3.out';

export function createTextReveal(
  elements: HTMLElement | HTMLElement[],
  options?: {
    stagger?: number;
    duration?: number;
    delay?: number;
  }
) {
  const { stagger = 0.05, duration = 0.4, delay = 0 } = options || {};

  return gsap.fromTo(
    elements,
    {
      yPercent: 110,
    },
    {
      yPercent: 0,
      duration,
      stagger,
      delay,
      ease: 'power3.out',
    }
  );
}

export function createFadeIn(
  elements: HTMLElement | HTMLElement[],
  options?: {
    y?: number;
    duration?: number;
    stagger?: number;
    delay?: number;
  }
) {
  const { y = 40, duration = 0.6, stagger = 0.1, delay = 0 } = options || {};

  return gsap.fromTo(
    elements,
    {
      opacity: 0,
      y,
    },
    {
      opacity: 1,
      y: 0,
      duration,
      stagger,
      delay,
      ease: 'power3.out',
    }
  );
}

export function createScaleIn(
  elements: HTMLElement | HTMLElement[],
  options?: {
    scale?: number;
    duration?: number;
    delay?: number;
  }
) {
  const { scale = 0.95, duration = 0.6, delay = 0 } = options || {};

  return gsap.fromTo(
    elements,
    {
      opacity: 0,
      scale,
    },
    {
      opacity: 1,
      scale: 1,
      duration,
      delay,
      ease: 'power3.out',
    }
  );
}
