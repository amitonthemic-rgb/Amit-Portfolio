# Phase 2 — Content & Brand Inventory

## Status legend

- **REAL** — verified client fact (usable in production)
- **INFERRED** — weak signal only; must be verified before launch
- **MISSING** — not provided; do not invent
- **DEV PLACEHOLDER** — clearly marked temporary string for development only

---

## Identity

| Field | Status | Value |
|-------|--------|-------|
| Full name | INFERRED / DEV PLACEHOLDER | `[TO REPLACE: Full Name]` — project folder suggests first name “Amit”; verify spelling and surname |
| Professional titles | REAL (brief) | Stage Host · Anchor · Presenter |
| Hosting languages | REAL (brief) | English & Hindi |
| Location | MISSING | `[TO REPLACE: City, India]` |
| Short positioning | DEV PLACEHOLDER | Hosts corporate events, weddings, award ceremonies and live shows in English and Hindi. |
| Full biography | MISSING | DEV PLACEHOLDER short bio only |

## Contact

| Field | Status | Value |
|-------|--------|-------|
| Email | MISSING | `bookings@example.invalid` (DEV — non-routable) |
| Phone | MISSING | `+91 XXXXX XXXXX` |
| WhatsApp | MISSING | Same as phone once verified |
| Booking process | DEV PLACEHOLDER | Enquiry form → confirmation email |

## Social

| Platform | Status |
|----------|--------|
| Instagram | MISSING — omit until URL provided |
| YouTube | MISSING — omit until URL provided |
| LinkedIn | MISSING — omit until URL provided |
| Facebook | MISSING — omit until URL provided |

## Media

| Asset | Status |
|-------|--------|
| Hero portrait / stage photo | MISSING — use framed placeholder, never AI imagery |
| About portrait | MISSING |
| Showreel video URL | MISSING |
| Featured event videos | MISSING |
| Gallery photographs | MISSING |
| Favicon / OG image | DEV PLACEHOLDER mark |

## Event categories (service intent from brief — confirm with client)

Include only as “services offered” pending client confirmation (not claimed past experience counts):

- Corporate Events
- Award Ceremonies
- Weddings
- Brand / Product Launches
- College & Institutional Events
- Live Shows

## Experience / achievements / clients / testimonials

| Item | Status |
|------|--------|
| Years of experience | MISSING — do not invent |
| Client list | MISSING — do not invent |
| Awards | MISSING — do not invent |
| Featured events timeline | MISSING — do not invent |
| Testimonials | MISSING — section hidden or marked DEV PLACEHOLDER block |

## Data model (TypeScript)

See `src/content/site.ts` — single source of truth for site copy and media slots.
