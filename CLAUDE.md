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

This is the **Manas AI** website — an AI agency & studio site. Design language (dark theme, accent red, mixed fonts, smooth scroll, custom cursor) originates from a Grilled Pixels design system, now fully rebranded.

**Stack:** Next.js 16 (App Router) + Tailwind CSS v4 + GSAP + Lenis smooth scroll

### Page Structure

The site is multi-page with shared Header/Footer chrome:

```
/       (home)   Header → Hero → PoweredBy → DiscoveryCall → Footer
/about           Header → AboutHero → AboutContent → AboutFAQ → Footer
```

Home page (`src/app/page.tsx`) is a scroll-section single page. About page (`src/app/about/page.tsx`) is a standalone route with its own metadata.

### Component Organization

- **`src/components/layout/`** — Fixed chrome: Header, Footer, LenisProvider
- **`src/components/sections/`** — Full-width scroll sections: Hero, PoweredBy, DiscoveryCall, AboutHero, AboutContent, AboutFAQ
- **`src/components/ui/`** — Reusable pieces: Button, FormInput, CalEmbed, CustomCursor, TagPill
- **`src/components/animations/`** — GSAP/CSS animation wrappers: Marquee, ScrollReveal

### Data Layer

All content lives in static TypeScript files under `src/data/`:
- `products.ts` — 3 AI products (Personal Assistant, Executive Assistant, Agent Workforce)
- `services.ts` — 7 service offerings
- `partners.ts` — 9 technology partners with logo paths
- `navigation.ts` — Nav items (with variant support: default/accent/cta) and social links
- `about.ts` — Bio text, 8 core beliefs (title + body), contact info
- `expertise.ts` — 23 skills + 67 tools string arrays
- `faq.ts` — 8 FAQ items (questions + answers, currently "TBU" placeholders)

Types are centralized in `src/types/index.ts`. About/FAQ types are co-located in their data files.

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

Header is multi-page aware: Logo uses `<Link href="/">`, About uses `<Link href="/about">` with active state via `usePathname()`. Hash-based links (Control, INQUIRE) use `<a href="/#section">` for cross-page scroll navigation.

### Hero Row 1 Typography

Column 1 name alternates fonts: "MANAS" in sans-serif, "AI" in pixel font. Description uses `font-mono`. Column 2 heading ("Agency & Studio") uses `font-pixel`. Column labels ("Products", "Services") are 11px with 0.15em tracking. Content text is `text-white/80`. Both products and services list one item per line with `gap-1.5`.

### About Page Architecture

**AboutHero**: Mirrors main Hero Row 1 brand area (MANAS AI + Agency & Studio). 4-col mobile / 12-col desktop grid. GSAP `.hero-fade` stagger animation.

**AboutContent**: 3-column grid aligned to hero columns. Number label (col 1-3) → Bio + 8 beliefs (col 4-8, aligns with "Agency & Studio") → Sticky sidebar (col 10-12, gap at col 9). Sidebar: Contact, Social, Skills/Tools tag pills. Mobile: single column, sidebar gets a `border-t` separator. Tag pill GSAP cascade via ScrollTrigger.

**AboutFAQ**: "Questions * Answers" accordion. Single-open behavior. CSS `grid-template-rows: 0fr→1fr` height transition (`.accordion-content` class in globals.css). 8 placeholder items with "TBU" answers.

**TagPill**: Clean bordered pill (no background, no ×) matching Grilled Pixels reference. `border-white/20`, mono-alt font, 12px. Responsive touch targets (`py-2 sm:py-1`).

### Export Style Inconsistency

Components use mixed export styles — some `export default function`, others `export function` (named). Check the actual export before importing. Layout components and TagPill use named exports; animation/section components (including About sections) use default exports.
