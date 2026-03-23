# Implementation Plan: Portfolio Visual Enhancement

## Overview

Incrementally layer premium visual effects onto the existing Next.js portfolio site. New components (`CursorController`, `ParticleBackground`, `AmbientShapes`) are added and mounted in `layout.tsx`. A shared `useScrollParallax` hook is introduced and wired into each section's blob wrappers. Existing components are audited and minimally adjusted where needed. All enhancements respect `prefers-reduced-motion`.

## Tasks

- [x] 1. Create `useScrollParallax` hook
  - Create `hooks/useScrollParallax.ts` exporting the hook with signature `(ref, options?) => MotionValue<string>`
  - Use `useScroll` + `useTransform` to map scroll progress to a `%` string in the given range (default `[-8, 8]`)
  - When `useReducedMotion()` is true, return a static `MotionValue` of `"0%"` regardless of scroll position
  - _Requirements: 4.1, 4.2, 4.4_

  - [x] 1.1 Write property test for `useScrollParallax` reduced-motion behaviour
    - **Property 8: Scroll parallax returns zero offset in reduced motion**
    - **Validates: Requirements 4.4**

- [x] 2. Create `ParticleBackground` component
  - Create `components/ui/ParticleBackground.tsx` as a client-only component
  - Generate exactly 40 `Particle` objects on mount using a deterministic index-based seeded function (SSR-safe)
  - Render each particle as a `motion.div` positioned `fixed`, `z-index: 0`, `pointer-events: none`, with `will-change: transform`
  - Animate each particle with independent vertical drift (±20px) and horizontal drift (±10px), duration 4–12s
  - Keep each particle's opacity between 0.05 and 0.25
  - When `useReducedMotion()` is true, render particles as static dots (no `animate` prop)
  - Listen to `window.resize` (debounced 100ms) and recompute positions clamped to new viewport bounds
  - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7_

  - [x] 2.1 Write property test for particle count bounds
    - **Property 3: Particle count is within bounds**
    - **Validates: Requirements 2.1**

  - [x] 2.2 Write property test for particle opacity range
    - **Property 4: Particle opacity is within ambient range**
    - **Validates: Requirements 2.3**

  - [x] 2.3 Write property test for reduced-motion static particles
    - **Property 5: Reduced motion renders particles as static**
    - **Validates: Requirements 2.5**

- [x] 3. Create `AmbientShapes` component
  - Create `components/ui/AmbientShapes.tsx` as a client-only component
  - Define 5 `AmbientShape` objects (mix of `circle` and `rounded-rect` types) with opacity 0.03–0.08
  - Render each shape as a `motion.div` positioned `fixed`, `z-index: 0`, `pointer-events: none`
  - Animate each shape with a looping vertical float (±8–18px), duration 5–10s
  - When `useReducedMotion()` is true, render shapes as static elements (no `animate` prop)
  - _Requirements: 9.1, 9.2, 9.3, 9.4, 9.5_

  - [x] 3.1 Write property test for ambient shape pointer events
    - **Property 6: Ambient shapes never intercept pointer events**
    - **Validates: Requirements 9.4**

  - [x] 3.2 Write property test for ambient shape opacity range
    - **Property 7: Ambient shape opacity is within ambient range**
    - **Validates: Requirements 9.3**

- [-] 4. Create `CursorController` component
  - Create `components/ui/CursorController.tsx` as a client-only component
  - Guard all `window`/`document` access behind a `useEffect` mount guard (`isMounted` state) to prevent SSR hydration mismatches
  - Check `window.matchMedia('(pointer: fine)').matches` inside `useEffect`; return `null` immediately on touch/non-pointer devices
  - Listen to `mousemove` and lerp the orb position each `requestAnimationFrame` with factor `0.10`
  - Detect hover over interactive elements (`a`, `button`, `[role="button"]`) via `mouseover`/`mouseout` to toggle expanded state (≥1.5× diameter, increased opacity)
  - Return orb to default size/opacity within 200ms on `mouseout`
  - Apply `pointer-events: none` to the orb element at all times
  - When `useReducedMotion()` is true, return `null`
  - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 10.4_

  - [ ] 4.1 Write property test for cursor orb pointer events
    - **Property 1: Cursor orb never intercepts pointer events**
    - **Validates: Requirements 1.6**

  - [ ] 4.2 Write property test for reduced-motion cursor orb
    - **Property 2: Reduced motion disables cursor orb**
    - **Validates: Requirements 1.5**

- [ ] 5. Mount background and cursor layers in `app/layout.tsx`
  - Import and render `<ParticleBackground />` and `<AmbientShapes />` before `<Navbar />` in the layout body
  - Import and render `<CursorController />` after `<Footer />` (top of stacking order)
  - Ensure both layers are client components and do not affect SSR output
  - _Requirements: 2.7, 9.4, 10.4_

- [ ] 6. Checkpoint — Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

- [ ] 7. Add scroll-driven parallax to section blob wrappers
  - In each of the 7 section components (`HeroSection`, `ProjectsSection`, `ExperienceSection`, `SkillsSection`, `AboutSection`, `KeyHighlightsSection`, `ContactSection`), attach a `ref` to the section's outer `div`
  - Call `useScrollParallax(ref)` and apply the returned `MotionValue` as the `y` style on each section's ambient blob `motion.div` wrapper
  - Do not apply parallax to any text content or interactive elements
  - _Requirements: 4.1, 4.2, 4.3, 4.4_

  - [ ] 7.1 Write property test for AnimatedSection reveal-once behaviour
    - **Property 9: AnimatedSection reveals only once**
    - **Validates: Requirements 6.4**

- [ ] 8. Audit and tune `HeroSection` entrance animation
  - Verify the badge `motion.div` is included in the stagger sequence (currently it animates independently — wire it into the stagger container or confirm its delay fits within the 0.07–0.12s increment rule)
  - Confirm total stagger duration does not exceed 1.8s (badge + 4 headline spans + sub-headline + description + CTA group)
  - Confirm each element uses opacity 0→1, y translate, and blur 6px→0px transitions
  - Confirm `useTransform` scroll fade covers opacity 1→0 over the first 65% of scroll travel (already present — verify the `[0, 0.65]` input range)
  - _Requirements: 5.1, 5.2, 5.3, 5.4, 5.5_

- [ ] 9. Verify section reveal animations and dividers
  - Confirm every section's outer wrapper has the `h-px` gradient divider at its top edge (already present in most sections — add to any missing)
  - Confirm `AnimatedSection` uses `margin: '-60px'`, `once: true`, `fadeSlideUp` (opacity 0→1, y 32→0, blur 4→0, 0.7s, `[0.22, 1, 0.36, 1]`) — no changes needed if already correct
  - Confirm stagger delay increments of 0.08s per sibling block are applied in each section
  - _Requirements: 6.1, 6.2, 6.3, 6.4, 8.1, 8.2_

  - [ ] 9.1 Write property test for section dividers
    - **Property 10: Section dividers are present at every section boundary**
    - **Validates: Requirements 8.2**

- [ ] 10. Verify card and button micro-interactions
  - Confirm `ProjectCard` has `whileHover={{ y: -6 }}` with spring (stiffness 300, damping 22) and shimmer sweep — already present, no changes needed
  - Confirm `SkillBadge` has `whileHover={{ scale: 1.07, y: -2 }}` — currently `scale: 1.08`, adjust to `1.07` to match Requirement 7.2 exactly
  - Confirm CTA buttons in `HeroSection` have `whileHover={{ y: -3 }}` and `whileTap={{ scale: 0.97 }}` — already present
  - Confirm `shadow-glow-md` is applied on CTA button hover (already in Tailwind config via `hover:shadow-glow-md`)
  - _Requirements: 7.1, 7.2, 7.3, 7.4, 7.5, 7.6_

- [ ] 11. TypeScript and build validation
  - Run `getDiagnostics` on all new and modified files to confirm zero TypeScript errors
  - Ensure no `any` casts are present in new components or hooks
  - Verify all new components and the hook are fully typed
  - _Requirements: 10.6_

- [ ] 12. Final checkpoint — Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

## Notes

- Tasks marked with `*` are optional and can be skipped for a faster MVP
- Each task references specific requirements for traceability
- Property tests use `fast-check` (already a dev dependency at v3.20.0)
- Tag format for property tests: `Feature: portfolio-visual-enhancement, Property {N}: {property_text}`
- The `useScrollParallax` hook must be created before wiring it into sections (task 1 before task 7)
- `ParticleBackground`, `AmbientShapes`, and `CursorController` must be created before mounting them in layout (tasks 2–4 before task 5)
