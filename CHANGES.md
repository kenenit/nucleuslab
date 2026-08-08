# What changed — and what you need to do next

## 1. Run this first
```bash
npm install
npx prisma db push     # pushes the new SiteSettings model + new TeamMember fields to your DB
npm run dev
```
`db push` is safe — it only adds new columns/tables, nothing existing is touched or dropped.

## 2. Bugs fixed
- **Edit-modal overlap**: every admin modal (Products, Portfolio, Team, Blog, Services,
  Testimonials, Careers) now renders at `z-[200]`, well above anything else on the page.
  In this codebase the admin routes don't actually render the marketing `Header`, so if you
  still see it bleeding through on the live site, it's almost certainly serving an old cached
  build — redeploy and hard-refresh.
- **Logo invisible in dark mode**: the theme was defaulting to "light" for a frame before
  reading your saved preference, which could leave the wrong (near-invisible) logo variant
  rendered. Fixed by reading the resolved theme synchronously and forcing a clean remount when
  it changes, plus a blocking inline script in `<head>` that sets the correct theme class
  before first paint (also removes the old flash-of-wrong-theme on every page load).
- **Missing photo on Portfolio cards** (e.g. "Company Profile Website"): the Portfolio admin
  form had no image fields at all — `coverImage`, `gallery`, before/after images existed in
  the database but nothing in the UI could set them. Added them all, using the upload
  component below. **You'll still need to open each existing project in the admin panel and
  upload a cover image** — I can't reach your live database from here to do it for you.

## 3. Uploading images is now drag-and-drop everywhere
Products (screenshots), Team (photo), Portfolio (cover/gallery/before/after), Blog (cover),
and Testimonials (avatar) all now use the upload widget that was already built and working
(`ImageUpload` / `MultiImageUpload`, backed by Vercel Blob) — no more editing code or pasting
URLs manually.

## 4. New admin sections
- **Testimonials** (`/admin/testimonials`) — add/edit/delete. While empty, the site shows
  placeholder reviews; add real ones and they replace the placeholders automatically.
- **Careers** (`/admin/careers`) — add/edit/delete job listings that power the Careers page.
- **Settings** (`/admin/settings`) — contact email/phone/address/hours shown on the Contact
  page, and footer social links. Leave a social link blank to hide that icon in the footer.

## 5. Team page
- Placeholder "Founder name" / "Co-founder name" cards are **gone**. If no team members are
  in the database, the page now shows a plain "add team members in the admin dashboard"
  message instead.
- Team members now support **email, phone, GitHub, and portfolio links** in addition to
  photo and LinkedIn — all editable from `/admin/team`, all shown as small icon links on
  each team card when filled in.

## 6. Footer social links
Defaulted to a placeholder Biku Instagram link (`instagram.com/biku.et`) for now, everything
else blank/hidden — edit real links any time from `/admin/settings`.

## 7. Contact & Careers pages
Both now read from the database (via Settings and Careers respectively) instead of hardcoded
values, with your "we work remotely, no office" line as the default — editable from
`/admin/settings`.

## Not touched (as requested)
- Home page and About page — left exactly as they were.

## One thing I couldn't verify from here
I don't have access to your live Postgres database or a working Prisma engine binary in this
sandbox (network is restricted), so I couldn't run a full `next build` or click through the
actual admin UI. I did check every file by hand for matching prop names, import paths, and
balanced syntax, but please do a `npm run build` locally (or let Vercel build it) before
handing this off, just to be safe.
