# Harshit Agarwal — Portfolio

A minimal, white, recruiter-friendly portfolio built with **Next.js 14 (App Router)**,
**TypeScript**, **Tailwind CSS**, and **Framer Motion**, using **lucide-react** for icons.

## Stack

- Next.js 14 (App Router, React Server Components where possible)
- TypeScript
- Tailwind CSS (custom design tokens in `tailwind.config.ts`)
- Framer Motion (scroll reveals, rotating hero text, mobile menu, animated counters)
- lucide-react (icon set)

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Project structure

```
app/
  layout.tsx        # fonts, metadata/SEO
  page.tsx           # assembles all sections
  globals.css        # Tailwind base + a11y/reduced-motion rules
components/
  Navbar.tsx          Hero.tsx           About.tsx
  Skills.tsx          Experience.tsx     Projects.tsx
  Education.tsx       Achievements.tsx   Contact.tsx
  ContactForm.tsx     Footer.tsx         BackToTop.tsx
  Reveal.tsx          SectionHeading.tsx AnimatedCounter.tsx
lib/
  data.ts             # ALL content lives here (see below)
```

## Editing content

Everything you'd want to change — skills, projects, experience, education,
achievements, contact details, nav links, hero role list — lives in **`lib/data.ts`**,
fully typed. Components just map over these arrays, so you can:

- **Add a project**: push a new object into the `projects` array. The grid
  automatically reflows and a new card appears (the "more projects coming
  soon" placeholder always stays last).
- **Add a skill category**: push a new object into `skillCategories`. A new
  card renders automatically.
- **Add an experience/education entry**: push into `experience` or `education`.
  The timeline extends automatically.
- **Add an achievement**: push into `achievements`.

No component code needs to change for any of the above

## Things to wire up before deploying

1. **Profile photo** — replace the "HA" initials block in `components/Hero.tsx`
   with a Next.js `<Image>` pointing at a photo in `/public`.
2. **Resume** — drop your PDF at `public/resume.pdf` (the Download Resume
   button already links to `/resume.pdf`).
3. **Real social links** — update `github`, `linkedin`, `leetcode`, `email`,
   `phone`, and `location` in `lib/data.ts`.
4. **Contact form** — `components/ContactForm.tsx` currently simulates a
   submission client-side only. Wire it to a real endpoint, e.g.:
   - A Next.js Route Handler (`app/api/contact/route.ts`) that sends mail via
     [Resend](https://resend.com) or [Nodemailer](https://nodemailer.com), or
   - A form service like [Formspree](https://formspree.io).
5. **Metadata** — update `metadataBase`/OpenGraph URLs in `app/layout.tsx` to
   your real domain once deployed, and add an `opengraph-image` if desired.

## Deployment

Deploys cleanly to [Vercel](https://vercel.com) (recommended for Next.js),
Netlify, or any Node hosting that supports Next.js. For Vercel:

```bash
npm i -g vercel
vercel
```

## Accessibility & performance notes

- Respects `prefers-reduced-motion` (see `app/globals.css`).
- Visible keyboard focus rings on all interactive elements.
- Semantic headings and landmark elements (`header`, `main`, `footer`).
- Fonts loaded via `next/font/google` (self-hosted, no layout shift).
