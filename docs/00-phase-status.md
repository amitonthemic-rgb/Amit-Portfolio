# Phase status

| Phase | Status | Notes |
|-------|--------|-------|
| 1 Audit & setup | Done | Next.js 16 + TS + Tailwind + Framer Motion + Lucide + Prettier |
| 2 Content inventory | Done | `docs/02-content-inventory.md` + `src/content/site.ts` |
| 3 IA | Done | Routes + journey documented |
| 4 OpenDesign research | Done | warm-editorial adapted; bronze accent; OD artifact `design-direction.html`; agent run failed on API key |
| 5 Design system | Done | Tokens in `globals.css` |
| 6–8 Homepage | Done | Full section stack + components |
| 9 Secondary pages | Done | About, Showreel, Events, Gallery, Contact, Privacy, Terms, 404 |
| 10–11 Real media/content | Blocked | Awaiting client assets & verified copy |
| 12 Motion | Done (baseline) | Reveal + hero + hover; reduced-motion supported |
| 13 Responsive | Done (baseline) | Mobile booking bar; fluid grids |
| 14 Accessibility | Done (baseline) | Labels, focus, semantic structure |
| 15 Performance | Done (baseline) | Font swap, lazy iframes, static generation |
| 16 SEO | Done (baseline) | Metadata, sitemap, robots, Person JSON-LD |
| 17 Functional QA | Partial | Build passes; form accepts without Resend |
| 18 Visual QA | Needs client photos | Placeholders intentional |
| 19 Legal / production | Partial | Policies present; domain + verified contacts pending |
| 20 Launch | Not ready | See `docs/20-launch-checklist.md` |

## Production build

`npm run build` — succeeded (all routes generated).
