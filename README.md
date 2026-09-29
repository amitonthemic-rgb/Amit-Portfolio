# Amit Yadav — Stage Host Portfolio

Personal site for Amit Yadav, a Delhi-based stage host, anchor and presenter working in English and Hindi.

Built with Next.js. Booking enquiries open WhatsApp with the form details filled in.

**Live:** [https://amit-portfolio-omega-taupe.vercel.app](https://amit-portfolio-omega-taupe.vercel.app)

## Requirements

- Node.js 20+
- npm

## Setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

App runs at [http://localhost:3000](http://localhost:3000).

| Command | What it does |
|---------|----------------|
| `npm run dev` | Local development |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | ESLint |

## Project layout

```
src/
  app/           Pages, API routes, metadata
  components/    UI, layout, media, forms
  content/       Site copy and media paths (site.ts)
  lib/           Small helpers
public/
  logo/          Brand mark
  photos/        Event and portrait photos
  videos/        Showreel clips (mp4)
```

Site content lives in `src/content/site.ts`. Photos and videos are under `public/`.

## Environment

Copy `.env.example` to `.env.local`:

```
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

Set `NEXT_PUBLIC_SITE_URL` to the live domain before launch (used for sitemap, canonicals, Open Graph).

Resend variables in `.env.example` are optional. The live booking form sends enquiries over WhatsApp (`+91 82922 36990`), not email.

## Main features

- Home, About, Showreel, Events, Gallery, Contact
- Privacy Policy and Terms
- Local MP4 showreel players (one video at a time)
- Image gallery with lightbox
- Contact form → WhatsApp with prefilled enquiry
- India place suggestions on Event Location (`/api/places/india`)
- Floating WhatsApp button and mobile call / book bar

## Deploy

1. Push the repo to GitHub
2. Import the project in [Vercel](https://vercel.com)
3. Set `NEXT_PUBLIC_SITE_URL` to `https://amit-portfolio-omega-taupe.vercel.app` (or your custom domain later)
4. Optional: connect a custom domain in the Vercel project settings

## Notes

- Do not commit `.env.local`
- Keep testimonials and client lists out of the site unless Amit has approved them
- Large MP4s in `public/videos/` will affect clone and deploy size; compress or host on a CDN later if needed

Deployed with Vercel
