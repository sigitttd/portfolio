# Implementation Plan: rahmat-portfolio-website

## Overview

Incremental build of a Next.js 14 App Router portfolio site for Rahmat Sigit Hidayat. Each task produces working, integrated code — no orphaned modules. TypeScript strict mode throughout.

## Tasks

- [x] 1. Scaffold project and configure tooling
  - Initialize Next.js 14 App Router project with TypeScript strict mode, Tailwind CSS v3, and Framer Motion v11
  - Configure `tailwind.config.ts` with custom color tokens: `orbit-navy`, `electric-blue`, `surface`, `text-primary`, `text-muted`
  - Set up `app/globals.css` with Tailwind base directives and `scroll-behavior: smooth`
  - Configure `next/font/google` for Geist in `app/layout.tsx` (stub layout — full layout in task 7)
  - Install and configure Vitest + React Testing Library + fast-check (`vitest.config.ts`, `setupTests.ts`)
  - _Requirements: 1.1, 1.2, 2.1, 2.2, 2.3_

- [x] 2. Define TypeScript interfaces
  - [x] 2.1 Create `/types/index.ts` with all interfaces: `PersonalInfo`, `SkillCategory`, `Project`, `Experience`, `Education`, `TimelineEntry`
    - Include all fields exactly as specified in the design (optional fields typed as `string | undefined`)
    - Export `TimelineEntry` as `Experience | Education` discriminated union via `type` field
    - _Requirements: 1.4, 11.2_

  - [x] 2.2 Write unit test for type shapes
    - Assert that a valid `Project` object satisfies the interface (compile-time check via `satisfies`)
    - Assert that `TimelineEntry` discriminated union narrows correctly
    - _Requirements: 1.4_

- [x] 3. Build the data layer
  - [x] 3.1 Create `/data/portfolioData.ts` with all real content from Rahmat's CV
    - `personalInfo`: name, title, tagline, about, email, phone, location, linkedin, github, tableau
    - `skills`: at minimum four categories — Technical Skills, Programming & Libraries, Tools, Soft Skills
    - `projects`: at minimum six entries — Sentiment and Social Network Analysis, Citation Network Analysis, Dashboard for Location Segmentation, Asset Monitoring Dashboard, Data Warehouse Design, Strategies Analysis for UMKM Enterprises
    - `workExperience`: at minimum five entries — Junior BI at Marketing Agency, Freelance Data Analyst, Data Analyst Intern at Kuanta Indonesia, Assistant Lecturer at Telkom University, Student Staff at Telkom University
    - `education`: at minimum two entries — Bachelor of Data Science at Telkom University (GPA 3.96, summa cum laude), SMA Negeri 6 Surabaya
    - _Requirements: 1.3, 6.4, 7.3, 7.4, 11.1, 11.3_

  - [x] 3.2 Write unit tests for portfolioData (`/__tests__/unit/portfolioData.test.ts`)
    - Assert required projects exist by title
    - Assert required work entries exist by role
    - Assert required education entries exist by degree/institution
    - _Requirements: 6.4, 7.3, 7.4, 11.1_

- [x] 4. Build atomic UI components
  - [x] 4.1 Create `SectionWrapper` (`/components/ui/SectionWrapper.tsx`)
    - Server Component; accepts `id`, `children`, optional `className`
    - Applies `max-w-6xl mx-auto px-4 py-20` and passes `id` for scroll targeting
    - _Requirements: 1.5, 9.3_

  - [x] 4.2 Create `AnimatedSection` (`/components/ui/AnimatedSection.tsx`)
    - Client Component; wraps children in Framer Motion `motion.div`
    - Implements `fadeSlide` variant: `hidden: { opacity: 0, y: 20 }`, `visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }`
    - Uses `useInView` with `once: true` and `useReducedMotion()` — when reduced motion is preferred, renders immediately in visible state
    - Accepts `delay` and optional `className` props
    - _Requirements: 2.4, 2.5_

  - [x] 4.3 Write property test P1: Reduced Motion Compliance (`/__tests__/property/AnimatedSection.prop.test.tsx`)
    - `// Feature: rahmat-portfolio-website, Property 1: Reduced Motion Compliance`
    - Mock `useReducedMotion` to return `true`; render `AnimatedSection` with `fc.anything()` children; assert rendered output is in final visible state
    - `numRuns: 100`
    - **Property 1: Reduced Motion Compliance**
    - **Validates: Requirements 2.5**

  - [x] 4.4 Create `SkillBadge` (`/components/ui/SkillBadge.tsx`)
    - Client Component; accepts `label: string`
    - Pill-shaped badge with `hover:shadow-[0_0_8px_#0066FF]` and `hover:scale-105` transition
    - _Requirements: 5.2, 5.4_

  - [x] 4.5 Create `ProjectCard` (`/components/ui/ProjectCard.tsx`)
    - Client Component; accepts `project: Project`
    - Renders title, description, tech tag list, and conditional link buttons (GitHub / Live Demo / Publication)
    - Renders `next/image` thumbnail only when `project.imageUrl` is defined; uses `project.title` as `alt`
    - Applies `hover:-translate-y-1` and Electric Blue border glow on hover
    - _Requirements: 6.2, 6.3, 6.5_

  - [x] 4.6 Write unit tests for ProjectCard (`/__tests__/unit/ProjectCard.test.tsx`)
    - Assert image renders when `imageUrl` is defined
    - Assert no `<img>` element when `imageUrl` is undefined
    - _Requirements: 6.3_

  - [x] 4.7 Create `TimelineItem` (`/components/ui/TimelineItem.tsx`)
    - Client Component; accepts `item: TimelineEntry`, `index: number`
    - Renders vertical connector line (Electric Blue left border), dot marker, role/degree, organization, date range, location, description bullets
    - _Requirements: 7.1, 7.2_

- [x] 5. Checkpoint — Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

- [x] 6. Build section components
  - [x] 6.1 Create `HeroSection` (`/components/sections/HeroSection.tsx`)
    - Server Component; wraps content in `AnimatedSection`
    - Renders name "Rahmat Sigit Hidayat" as `<h1>`, title "Data Analyst", tagline from `personalInfo.tagline`
    - Renders CTA anchor `<a href="#projects">View Projects</a>` styled as a button
    - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.6_

  - [x] 6.2 Write unit tests for HeroSection (`/__tests__/unit/HeroSection.test.tsx`)
    - Assert name "Rahmat Sigit Hidayat" is present
    - Assert title "Data Analyst" is present
    - Assert CTA link has `href="#projects"`
    - _Requirements: 3.1, 3.2, 3.4_

  - [x] 6.3 Create `AboutSection` (`/components/sections/AboutSection.tsx`)
    - Server Component; wraps content in `AnimatedSection`
    - Renders section heading and `personalInfo.about` paragraph
    - _Requirements: 4.1, 4.2, 4.3_

  - [x] 6.4 Create `SkillsSection` (`/components/sections/SkillsSection.tsx`)
    - Server Component; wraps content in `AnimatedSection`
    - Iterates `skills` array; renders category label + flex-wrap row of `SkillBadge` per category
    - _Requirements: 5.1, 5.2, 5.3, 5.5_

  - [x] 6.5 Write property test P2: Skills Data Round-Trip (`/__tests__/property/SkillsSection.prop.test.tsx`)
    - `// Feature: rahmat-portfolio-website, Property 2: Skills Data Round-Trip`
    - Generate random `SkillCategory[]` via `fc.array(fc.record({ category: fc.string(), skills: fc.array(fc.string()) }))`; render `SkillsSection`; assert every category name and skill string appears in output
    - `numRuns: 100`
    - **Property 2: Skills Data Round-Trip**
    - **Validates: Requirements 5.1, 5.2, 11.3**

  - [x] 6.6 Create `ProjectsSection` (`/components/sections/ProjectsSection.tsx`)
    - Server Component; wraps content in `AnimatedSection`
    - Renders responsive grid: `grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3`
    - Maps `projects` array to `ProjectCard` components
    - _Requirements: 6.1, 6.6, 6.7_

  - [x] 6.7 Write unit test for ProjectsSection grid (`/__tests__/unit/ProjectsSection.test.tsx` — included in unit suite)
    - Assert grid container has classes `grid-cols-1`, `md:grid-cols-2`, `xl:grid-cols-3`
    - _Requirements: 6.7_

  - [x] 6.8 Write property test P3: Projects Data Round-Trip (`/__tests__/property/ProjectsSection.prop.test.tsx`)
    - `// Feature: rahmat-portfolio-website, Property 3: Projects Data Round-Trip`
    - Generate random `Project[]` via `fc.array(fc.record({ id: fc.uuid(), title: fc.string(), description: fc.string(), techTags: fc.array(fc.string()), githubUrl: fc.option(fc.webUrl()), liveUrl: fc.option(fc.webUrl()), publicationUrl: fc.option(fc.webUrl()) }))`; render `ProjectsSection`; assert each card contains title, description, all techTags, and all non-null URLs
    - `numRuns: 100`
    - **Property 3: Projects Data Round-Trip**
    - **Validates: Requirements 6.1, 6.2, 11.3**

  - [x] 6.9 Create `ExperienceSection` (`/components/sections/ExperienceSection.tsx`)
    - Server Component; renders "Work Experience" and "Education" sub-sections
    - Wraps each `TimelineItem` in `AnimatedSection` with `delay={index * 0.12}` for stagger effect
    - Uses `staggerContainer` variant on the list wrapper
    - _Requirements: 7.1, 7.2, 7.5_

  - [x] 6.10 Write property tests P4 and P5 (`/__tests__/property/ExperienceSection.prop.test.tsx`)
    - `// Feature: rahmat-portfolio-website, Property 4: Timeline Data Round-Trip`
    - Generate random `TimelineEntry[]` via `fc.array(fc.oneof(experienceArb, educationArb))`; render `ExperienceSection`; assert each item contains role/degree, organization, date range, location
    - `// Feature: rahmat-portfolio-website, Property 5: Timeline Stagger Ordering`
    - Generate list of N entries; assert item at index `i` receives `delay` prop equal to `i * 0.12`
    - `numRuns: 100` for each
    - **Property 4: Timeline Data Round-Trip**
    - **Property 5: Timeline Stagger Ordering**
    - **Validates: Requirements 7.1, 7.2, 7.5, 11.3**

  - [x] 6.11 Create `ContactSection` (`/components/sections/ContactSection.tsx`)
    - Client Component; renders contact details (email, phone, LinkedIn, GitHub, Tableau links from `personalInfo`)
    - Renders contact form with name, email, message fields
    - On submit: validates each field non-empty/non-whitespace; validates email against `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`; stores errors in `Record<string, string>` state; renders inline error below each invalid field; does not submit if any field is invalid
    - _Requirements: 8.1, 8.2, 8.3, 8.4, 8.5, 8.6_

  - [x] 6.12 Write unit tests for ContactSection (`/__tests__/unit/ContactSection.test.tsx`)
    - Assert all three social link URLs from `personalInfo` are rendered
    - Assert form renders name, email, message fields
    - _Requirements: 8.1, 8.2, 8.3, 8.4_

  - [x] 6.13 Write property test P6: Contact Form Validation (`/__tests__/property/ContactForm.prop.test.tsx`)
    - `// Feature: rahmat-portfolio-website, Property 6: Contact Form Validation`
    - Generate `fc.record({ name: fc.oneof(fc.constant(''), fc.string()), email: fc.oneof(fc.constant(''), fc.string()), message: fc.oneof(fc.constant(''), fc.string()) })` filtered to have at least one empty/whitespace field; submit form; assert inline errors shown and form not submitted
    - `numRuns: 100`
    - **Property 6: Contact Form Validation**
    - **Validates: Requirements 8.5**

- [x] 7. Build layout components and assemble page
  - [x] 7.1 Create `Navbar` (`/components/layout/Navbar.tsx`)
    - Client Component; renders fixed top nav with links: About, Skills, Projects, Experience, Contact
    - Sets up single `IntersectionObserver` with `threshold: 0.5` on mount; disconnects on unmount
    - Tracks active section ID in state; highlights matching link with Electric Blue
    - Applies backdrop blur + semi-transparent background on scroll
    - Falls back gracefully if `IntersectionObserver` is unavailable
    - _Requirements: 9.1, 9.2, 9.3, 9.4_

  - [x] 7.2 Write unit tests for Navbar (`/__tests__/unit/Navbar.test.tsx`)
    - Assert links for all 5 sections are rendered with correct `href` attributes
    - _Requirements: 9.2, 9.3_

  - [x] 7.3 Write property test P7: Active Navigation Link (`/__tests__/property/Navbar.prop.test.tsx`)
    - `// Feature: rahmat-portfolio-website, Property 7: Active Navigation Link`
    - Generate a section ID via `fc.constantFrom('about', 'skills', 'projects', 'experience', 'contact')`; simulate intersection for that ID; assert exactly that link is marked active and no other link is active
    - `numRuns: 100`
    - **Property 7: Active Navigation Link**
    - **Validates: Requirements 9.4**

  - [x] 7.4 Create `Footer` (`/components/layout/Footer.tsx`)
    - Server Component; renders copyright line with current year, name, and "Back to top" anchor `href="#"`
    - _Requirements: 10.3_

  - [x] 7.5 Complete `app/layout.tsx`
    - Configure Geist font via `next/font/google`; apply to `<body>`
    - Export `metadata` object: `title`, `description`, `openGraph.title`, `openGraph.description`, `openGraph.type`
    - Compose `<Navbar />` + `{children}` + `<Footer />` inside `<body>`
    - Use semantic `<header>`, `<main>`, `<footer>` elements
    - _Requirements: 10.2, 10.3, 10.4_

  - [x] 7.6 Write unit test for metadata export (`/__tests__/unit/metadata.test.ts`)
    - Assert `title`, `description`, `openGraph.title`, `openGraph.description`, `openGraph.type` are all non-empty strings
    - _Requirements: 10.2, 10.4_

  - [x] 7.7 Create `app/page.tsx`
    - Server Component; composes all sections in order: `HeroSection`, `AboutSection`, `SkillsSection`, `ProjectsSection`, `ExperienceSection`, `ContactSection`
    - Wraps sections in `<main>` with `bg-orbit-navy` background
    - _Requirements: 1.2, 10.3_

- [x] 8. Final checkpoint — Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

## Notes

- Tasks marked with `*` are optional and can be skipped for a faster MVP
- Each task references specific requirements for traceability
- Property tests use fast-check with `numRuns: 100` minimum
- Unit tests use Vitest + React Testing Library
- All content lives in `/data/portfolioData.ts` — component logic never needs to change when content is updated
