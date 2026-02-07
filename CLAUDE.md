# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Start dev server (localhost:3000)
npm run build        # Production build (also runs TypeScript type checking)
npm start            # Serve production build
```

No linter or test runner is configured. Use `npm run build` to catch type errors.

## Architecture

This is a **Grilled Pixels replica** — a single-page creative portfolio site built as a visual clone of grilledpixels.com.

**Stack:** Next.js 16 (App Router) + Tailwind CSS v4 + GSAP + Lenis smooth scroll

### Page Structure

`src/app/page.tsx` assembles all sections in order. The entire site is one page with scroll sections:

```
Header (fixed)  →  Hero  →  Projects  →  Catalog  →  CTA  →  Footer  →  BottomBar (fixed)
```

### Component Organization

- **`src/components/layout/`** — Fixed chrome: Header, BottomBar, Footer, LenisProvider
- **`src/components/sections/`** — Full-width scroll sections: Hero, Projects, Catalog, CTA
- **`src/components/ui/`** — Reusable pieces: Button, ProjectCard, TagPill, ArchiveItem, etc.
- **`src/components/animations/`** — GSAP/CSS animation wrappers: TextReveal, Marquee, ScrollReveal, HoverScale

### Data Layer

All content lives in static TypeScript files under `src/data/`:
- `projects.ts` — 6 featured projects with gradients, tags, taglines
- `archive.ts` — 76 archive items (generated from name array)
- `services.ts` — 12 service offerings
- `navigation.ts` — Nav items and social links

Types are centralized in `src/types/index.ts`.

### Design Token System

Design tokens are defined in two places that must stay in sync:
- **CSS:** `src/app/globals.css` `@theme inline` block — colors, fonts, easings, breakpoints for Tailwind
- **JS:** `src/lib/constants.ts` — same values as JS constants for programmatic use

Key values: accent `#EE344A`, bg `#000000`, borders `rgba(255,255,255,0.06)`, breakpoints 320/700/1024/1200/1400px.

### Animation Pattern

GSAP animations follow a consistent pattern: components register `ScrollTrigger` at module level (guarded by `typeof window !== 'undefined'`), use `useRef` + `useEffect` for setup, and clean up triggers on unmount. The shared easing is `power3.out`.

The `marquee-scroll` CSS keyframe in `globals.css` drives all marquee animations (translateX 0→-50% on duplicated content).

### Font System

Fonts are currently **system fallbacks** (defined as CSS variables in globals.css). The `src/lib/fonts.ts` file contains commented-out `next/font/local` declarations ready to activate when real woff2 files are added to `public/fonts/`. Four font families: untitledSans (display/body), tronicaMono (labels), atHaussMono (tags), pixel bitmap (marquees).

### Export Style Inconsistency

Components use mixed export styles — some `export default function`, others `export function` (named). Check the actual export before importing. Layout components use named exports; animation/section components mostly use default exports.
