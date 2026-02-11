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

This is the **Manas AI** website — an AI agency & studio single-page site. Design language (dark theme, accent red, mixed fonts, smooth scroll, custom cursor) originates from a Grilled Pixels design system, now fully rebranded.

**Stack:** Next.js 16 (App Router) + Tailwind CSS v4 + GSAP + Lenis smooth scroll

### Page Structure

`src/app/page.tsx` assembles all sections in order. The entire site is one page with scroll sections:

```
Header (fixed)  →  Hero  →  PoweredBy  →  DiscoveryCall  →  Footer
```

### Component Organization

- **`src/components/layout/`** — Fixed chrome: Header, Footer, LenisProvider
- **`src/components/sections/`** — Full-width scroll sections: Hero, PoweredBy, DiscoveryCall
- **`src/components/ui/`** — Reusable pieces: Button, FormInput, CalEmbed, CustomCursor
- **`src/components/animations/`** — GSAP/CSS animation wrappers: Marquee, ScrollReveal

### Data Layer

All content lives in static TypeScript files under `src/data/`:
- `products.ts` — 3 AI products (Personal Assistant, Executive Assistant, Agent Workforce)
- `services.ts` — 7 service offerings
- `partners.ts` — 9 technology partners with logo paths
- `navigation.ts` — Nav items (with variant support: default/accent/cta) and social links

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

Real fonts downloaded into `public/fonts/`. `src/lib/fonts.ts` has `next/font/local` declarations for four families: untitledSans (display/body), tronicaMono (labels/marquees), atHaussMono (tags), pixelFont (headings/brand). CSS variables applied via `<html>` className in layout.tsx.

### Logo

The Manas AI logo (two interlocking curves) lives at `public/images/manas-logo.png` (cropped tight, ~407x414). Used via `next/image` in both Header (36px) and Footer (72px). An SVG version exists at `public/svg/logo.svg` but is not used in components — the PNG renders the interlocking detail better at small sizes.

### Header Layout

Nav is pushed right (not centered) using asymmetric flex spacers (`flex-[3]` left, `flex-1` right) to align with the hero's column 3. Nav items use `gap-6` spacing (no bullet separators). All items are uppercase. The "Control" item has a small red square indicator (`w-2 h-2 bg-accent`).

### Hero Row 1 Typography

Column 1 name alternates fonts: "MANAS" in sans-serif, "AI" in pixel font. Description uses `font-mono`. Column 2 heading ("Agency & Studio") uses `font-pixel`. Column labels ("Products", "Services") are 11px with 0.15em tracking. Content text is `text-white/80`. Both products and services list one item per line with `gap-1.5`.

### Export Style Inconsistency

Components use mixed export styles — some `export default function`, others `export function` (named). Check the actual export before importing. Layout components use named exports; animation/section components mostly use default exports.
