# Rahmat Sigit Hidayat — Portfolio Website

Personal portfolio website built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**. Showcases data analytics projects, work experience, skills, and contact information.

## Tech Stack

| Layer | Tech |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animation | Framer Motion |
| Font | Inter Variable (`@fontsource-variable/inter`) |
| Testing | Vitest + Testing Library |
| Build | Next.js built-in (SWC) |

## Project Structure

```
portfolio/
├── app/                        # Next.js App Router pages
│   ├── layout.tsx              # Root layout (Navbar, Footer, metadata)
│   ├── page.tsx                # Home page (all sections)
│   ├── globals.css             # Global styles & Tailwind directives
│   └── projects/
│       ├── page.tsx            # /projects — all projects listing
│       └── [slug]/
│           ├── page.tsx        # /projects/[slug] — SSG detail page
│           └── ProjectDetailClient.tsx  # Client-side detail component
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx          # Fixed top navigation with scroll detection
│   │   └── Footer.tsx          # Page footer
│   ├── sections/               # Full-page sections rendered on home
│   │   ├── HeroSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── ExperienceSection.tsx
│   │   ├── SkillsSection.tsx
│   │   ├── AboutSection.tsx    # Includes Download CV button
│   │   └── ContactSection.tsx
│   └── ui/                     # Reusable UI primitives
│       ├── AnimatedSection.tsx
│       ├── HashScrollHandler.tsx
│       ├── ProjectCard.tsx
│       ├── SectionHeading.tsx
│       ├── SectionWrapper.tsx
│       ├── SkillBadge.tsx
│       └── TimelineItem.tsx
│
├── data/
│   └── portfolioData.ts        # ★ ALL CONTENT LIVES HERE ★
│
├── types/
│   └── index.ts                # TypeScript type definitions
│
├── public/
│   ├── pictinporto/            # Project images (referenced in portfolioData.ts)
│   ├── cvporto/                # CV/Resume PDF file
│   └── favicon.svg
│
├── __tests__/
│   ├── unit/                   # Unit tests
│   └── property/               # Property-based tests (fast-check)
│
├── tailwind.config.ts          # Design tokens (colors, shadows, animations)
├── next.config.js              # Next.js configuration
├── vitest.config.ts            # Test configuration
└── setupTests.ts               # Test setup (jsdom polyfills)
```

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint

# Run tests (single run)
npm test

# Run tests in watch mode
npm run test:watch

# Clean .next build cache
npm run clean

# Clean build and restart dev
npm run dev:fresh
```

## Content Management

**All website content is managed from a single file:**

```
data/portfolioData.ts
```

See `DOCUMENTATION.md` for a detailed guide on how to add or edit projects, experience, skills, and personal info.

## CV / Resume

The CV PDF is stored at:
```
public/cvporto/Curriculum_Vitae_Rahmat_Sigit_Hidayat.pdf
```

To update the CV, replace this file with a new PDF (keep the same filename), or update the path in `components/sections/AboutSection.tsx` in the `contactLinks` array.

## Deployment

This project is ready for deployment on **Vercel** (recommended) or any Node.js hosting.

```bash
# Vercel CLI
vercel deploy
```

Static params for project detail pages are pre-generated at build time via `generateStaticParams()` in `app/projects/[slug]/page.tsx`.

## License

Personal portfolio — all rights reserved by Rahmat Sigit Hidayat.
