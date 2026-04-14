# Design Brief

## Purpose
Professional, trustworthy school & college uniform retail showcase. Builds customer confidence through clean editorial design and structured information hierarchy.

## Tone
Editorial, professional-minimal. Trust-building through typography, negative space, and visual organization. Not playful or decorative.

## Differentiation
Serif branding (Fraunces) paired with clean sans-serif body creates premium, reliable perception. Intentional navy/white/gold structural zones guide the eye. Product cards elevate subtly on hover with gold accents — precision interaction feedback.

## Color Palette

| Token | OKLCH | Light Purpose | Dark Purpose |
|-------|-------|---------------|--------------|
| Primary | `0.24 0.15 264` | Navy headings, CTAs | Gold CTAs, highlights |
| Secondary | `0.75 0.22 72` | Gold accents, buttons | Navy card backgrounds |
| Background | `0.98 0.02 300` | Off-white content area | Deep navy (`0.12 0.02 264`) |
| Foreground | Primary value | Navy text | Off-white text |
| Card | `1.0 0.01 280` | Slightly warm white | Dark navy card (`0.16 0.02 264`) |
| Muted | `0.88 0.04 264` | Light navy borders | Navy-grey borders |
| Accent | `0.75 0.22 72` | Gold hover states | Gold CTAs |
| Border | `0.88 0.04 264` | Light navy divider | Navy-grey divider |

## Typography
- **Display**: Fraunces (serif, premium editorial feel for brand name and section titles)
- **Body**: General Sans (clean, readable, professional, neutral)
- **Mono**: Geist Mono (technical, clean for prices/details)

## Elevation & Depth
Cards: subtle 0.5–1px shadow on hover. Header has gold accent line below (1px). Footer sits on navy background with white text. Depth created through layer separation (header navy, content off-white, footer navy), not glow or blur.

## Structural Zones

| Zone | Light Treatment | Dark Treatment | Intent |
|------|-----------------|-----------------|--------|
| Header | Navy `primary`, white text, gold `border-b` | Navy background, gold accent line, white text | Authority, clear navigation |
| Hero | Off-white `background`, serif brand name, navy/gold gradient CTA | Dark navy background, gold text, dark CTA | Brand presence, clear action |
| Product Cards | Off-white `card`, navy `primary` text, gold hover border | Dark card, light text, gold accent | Product clarity, interactive feedback |
| Content Sections | Alternating off-white & muted backgrounds | Dark navy with subtle grey dividers | Visual rhythm, readability |
| Footer | Navy `primary` background, white text | Navy background, light text | Closure, brand anchor |

## Spacing & Rhythm
Grid-based 4px increments: 24px, 32px, 48px sections. Tight product card padding (16px). Generous whitespace around hero and between sections. Section gaps of 48px–64px for rhythm.

## Component Patterns
- **Product cards**: Image + navy name + gold accent underline on hover + price in mono + Inquire button (primary styled)
- **Buttons**: Primary (navy bg, white text) hover → gold bg, navy text. Secondary (gold bg, navy text) hover → shadow elevation
- **Navigation**: Header nav links in white, gold underline on active/hover
- **Forms**: Input borders in muted navy, focus ring in gold, label text in primary

## Motion
Smooth transitions (0.3s cubic-bezier) on all interactive elements. No bounce or playful easing. Hover states: shadow lift (0 0 8px rgba primary/10%), border/text color shift to gold, scale 1.02 on product cards only.

## Constraints
- No full-page gradients
- No glow or neon shadows
- No rounded-full (only 8px radius)
- Navy, white, gold only — no secondary colors
- Serif restricted to display, headings, and brand name
- Mobile-first responsive: nav collapses to hamburger, product grid 1-col → 2-col (md) → 3-col (lg)

## Signature Detail
Gold 1px accent line below header and beneath product names on hover. Creates visual thread connecting premium brand identity throughout interface. Pairs serif brand name with editorial grid layout for trustworthy, curated feel.
