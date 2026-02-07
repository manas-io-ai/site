'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface UseScrollRevealOptions {
  y?: number;
  opacity?: number;
  duration?: number;
  delay?: number;
  stagger?: number;
  start?: string;
  once?: boolean;
}

export function useScrollReveal<T extends HTMLElement>(
  options?: UseScrollRevealOptions
) {
  const ref = useRef<T>(null);
  const {
    y = 40,
    opacity = 0,
    duration = 0.6,
    delay = 0,
    stagger = 0.1,
    start = 'top 85%',
    once = true,
  } = options || {};

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const children = el.children.length > 1 ? Array.from(el.children) : el;

    gsap.set(children, { opacity, y });

    const trigger = ScrollTrigger.create({
      trigger: el,
      start,
      once,
      onEnter: () => {
        gsap.to(children, {
          opacity: 1,
          y: 0,
          duration,
          delay,
          stagger,
          ease: 'power3.out',
        });
      },
    });

    return () => {
      trigger.kill();
    };
  }, [y, opacity, duration, delay, stagger, start, once]);

  return ref;
}
