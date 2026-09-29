# Phase 4 — Visual Direction (OpenDesign-informed)

## Design systems reviewed

| System | Fit | Notes |
|--------|-----|-------|
| **warm-editorial** | Primary structure | Best editorial spacing, serif hierarchy, restraint, anti-glass rules |
| editorial | Supporting | Magazine grids, Gelasio-like serif thinking |
| luxury | Partial | Dark cinematic sections only — not full-site dark |
| premium / elegant | Rejected palette | Blue/purple SaaS accents |
| publication | Rejected | Purple primary |
| storytelling | Partial | Narrative journey idea only |

## Skills / motion guidance used

- `web-artifacts-builder` — componentized web structure
- `emilkowalski-motion` — restrained transform/opacity motion, reduced-motion
- `web-design-guidelines` — a11y, focus, typography discipline

## Adapted brand system (not a literal warm-editorial clone)

Warm-editorial’s terracotta accent is intentionally replaced (avoids the common cream+terracotta AI look). Structure kept; brand remapped:

| Token | Value | Role |
|-------|-------|------|
| `--color-paper` | `#F7F3EC` | Page background (warm ivory) |
| `--color-ink` | `#141210` | Primary type |
| `--color-ink-soft` | `#3F3A34` | Secondary type |
| `--color-muted` | `#8A8278` | Meta / captions |
| `--color-bronze` | `#8C6A3D` | Single accent (CTAs, rules, focus) |
| `--color-bronze-deep` | `#6E5230` | Accent hover |
| `--color-cinema` | `#141210` | Dark video sections |
| `--color-cinema-ink` | `#F7F3EC` | Type on cinema |
| `--color-line` | `rgba(20,18,16,0.12)` | Hairlines |

### Typography

- Display: **Cormorant Garamond** (expressive editorial serif)
- Body / UI: **Source Sans 3** (clean, professional, bilingual-friendly)

### Geometry

- Radius: 4 / 8 / 10px (buttons, cards) — never pill
- Max content width: 1200px; editorial measure ~68ch for bio
- Section padding: 80 / 56 / 40px by breakpoint

### Motion

- 160–220ms UI; 500–700ms section reveals
- Opacity + translateY only; no scroll hijack; respect `prefers-reduced-motion`

### Composition principles

1. Host photography dominates hero — type never covers face
2. One accent per viewport
3. Selective dark bands for showreel only
4. Asymmetric gallery, not generic masonry dump
5. No fake metrics, logos, or testimonials
