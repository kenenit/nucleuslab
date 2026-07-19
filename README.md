# Nucleus Labs — Website & Admin Platform

Next.js 14 (App Router) + TypeScript + Tailwind CSS + Prisma/PostgreSQL, built from the approved
HTML design prototype (Home, About, Services).

## Stack

- **Frontend:** Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS, Framer-Motion-ready, Lucide icons
- **Backend:** Next.js Route Handlers, Prisma ORM, PostgreSQL
- **Auth:** Auth.js v5 (`next-auth@5`), Credentials provider, JWT sessions
- **Forms:** react-hook-form + zod, honeypot spam protection, in-memory rate limiting

## A note on versions

This project was originally scaffolded on Next.js 14. It has since been upgraded to **Next.js 16.2.10**
and **React 19** because Next 14 reached end-of-life in October 2025 and its final patch (14.2.35, Dec
2025) does not include fixes for several React Server Components vulnerabilities disclosed afterward —
only the 15.x and 16.x lines continue receiving security patches. Auth was migrated from NextAuth v4 to
**Auth.js v5** in the same pass, since v4's dependency chain had its own unpatched `uuid` advisory, and
v5 is the version actually supported on Next.js 16.

If `npm install` complains with an `ERESOLVE` peer-dependency error (there's a known upstream issue with
`next-auth`'s peer range and Next 16 — see nextauthjs/next-auth#13302), install with:
```bash
npm install --legacy-peer-deps
```

## Getting started

```bash
npm install
cp .env.example .env        # fill in DATABASE_URL, NEXTAUTH_SECRET, etc.
npm run db:push             # creates tables from prisma/schema.prisma
npm run db:seed             # seeds services, products, industries, and an admin user
npm run dev
```

Default seeded admin login (change the password immediately after first login):
- **Email:** `admin@nucleuslabs.com`
- **Password:** `changeme123`

Admin dashboard: `/admin/login`

Generate a real `NEXTAUTH_SECRET` with:
```bash
openssl rand -base64 32
```

## What's fully built

- **Design system** — colors, type scale, spacing, radii, shadows, and the "orbit" signature mark, all as
  Tailwind tokens + CSS variables in `tailwind.config.ts` / `src/app/globals.css`. Light/dark mode via a
  React context (`ThemeProvider`), no external state library.
- **Pages:** Home, About, Services (all six service lines with benefits/process/tech/CTA), Contact (working
  form wired to the database).
- **Components:** Header (mega menu, mobile nav, scroll-aware transparency over the hero), Footer, Hero
  (dark gradient + glow + grid + particles + glassmorphism), reusable cards, scroll-reveal, animated
  counters.
- **Backend:** Full Prisma schema covering every content type from the brief (services, products, portfolio
  projects, testimonials, team, blog, careers, contact submissions, newsletter, SEO settings, industries) —
  see `prisma/schema.prisma`.
- **APIs:** `/api/contact` and `/api/newsletter` (validated, rate-limited, honeypot-protected, persisted to
  Postgres). `/api/admin/services` demonstrates the full CRUD pattern (auth-gated POST/PATCH/DELETE, public
  GET) — duplicate this file for the other content types.
- **Auth & admin:** Auth.js v5 credentials login (JWT sessions, no adapter — see the comment in
  `src/auth.ts` for why), `src/proxy.ts` (Next 16's renamed `middleware.ts`) protecting everything under
  `/admin`, and a dashboard with a real sidebar, an overview page pulling live counts from the database, a
  full CRUD screen for Services, and read views for Contact Submissions and Newsletter subscribers.
- **SEO:** per-page `generateMetadata`/`Metadata` via `src/lib/seo.ts`, Open Graph + Twitter cards,
  canonical URLs, `robots.ts` and `sitemap.ts` (App Router conventions), Organization JSON-LD.
- **Security:** security headers in `next.config.mjs`, zod input validation everywhere user input is
  accepted, honeypot fields, in-memory rate limiting (swap for Upstash Redis in production — see the comment
  in `src/lib/rate-limit.ts`).

## What's scaffolded, not finished

This is a large brief (14 pages + a full CMS) — rather than generate dozens of shallow, untested pages, the
priority was making Home/About/Services and the underlying architecture genuinely solid so the rest can be
extended quickly and consistently:

- **Pages not yet built:** Portfolio, Products, Industries, Process, Team, Testimonials (dedicated page),
  FAQ, Blog, Careers, Privacy, Terms. The Prisma models, nav links, and footer links for all of these
  already exist — each page is a matter of writing a `page.tsx` that queries the matching Prisma model and
  reuses `PageHero` + the existing card components, following the same pattern as `about/page.tsx`.
- **Admin CRUD:** Services has a complete management screen. Products, Portfolio, Testimonials, Team,
  Blog, and Careers have full Prisma models and are listed in the dashboard overview, but don't have their
  own management screens yet — copy `src/app/api/admin/services/route.ts` and
  `src/app/admin/(dashboard)/services/page.tsx` as the template.
- **File uploads:** not wired up. `.env.example` has placeholders for an S3-compatible bucket
  (Cloudflare R2, AWS S3, Supabase Storage); the `screenshots`/`coverImage`/`photoUrl` fields in
  `prisma/schema.prisma` expect URLs once that's connected.
- **Email:** contact form submissions save to the database; sending a notification/auto-reply email is a
  `TODO` in `src/app/api/contact/route.ts` — plug in Resend, Postmark, or SES.
- **Dark/light hero:** the hero is intentionally always-dark (matches the approved design), independent of
  the site-wide theme toggle.

## Project structure

```
src/
  auth.ts              # Auth.js v5 config (handlers, signIn, signOut, auth)
  proxy.ts             # Next 16's renamed middleware.ts — protects /admin
  app/                # routes (App Router)
    admin/             # dashboard (route-grouped: (dashboard) has the sidebar, login doesn't)
    api/               # route handlers (contact, newsletter, auth, admin/services)
    about/ services/ contact/
    layout.tsx globals.css page.tsx sitemap.ts robots.ts
  components/
    layout/            # Header, Footer, ThemeProvider
    sections/           # Hero, PageHero, ServicesGrid, WhyChooseUs, etc.
    cards/              # ServiceCard, IconCard
    ui/                 # Button, Reveal, OrbitMark, StatCounter
    admin/               # AdminSidebar, AdminSessionProvider
  data/                # static content (mirrors the seed — swap for Prisma queries as pages go live)
  lib/                 # prisma client, zod schemas, seo helpers, rate limiter
  types/
prisma/
  schema.prisma
  seed.ts
```

## Deployment notes

- Any Node host works (Vercel is the path of least resistance for Next.js). Provision a PostgreSQL
  instance (Neon, Supabase, Railway, RDS) and set `DATABASE_URL`.
- Run `npm run db:push` (or set up `prisma migrate deploy` in your CI) against production before first
  deploy, then `npm run db:seed` once if you want the starter content.
- Set `NEXTAUTH_URL` to your production URL and generate a fresh `NEXTAUTH_SECRET`.
- Change the seeded admin password immediately, or delete the seeded user and create your own via
  `prisma studio`.
