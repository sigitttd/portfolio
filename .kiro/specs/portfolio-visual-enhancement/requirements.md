# Requirements Document

## Introduction

This feature enhances the existing Next.js portfolio website (Rahmat Sigit Hidayat) with high-end visual effects, immersive animations, and premium interactive elements — without altering any content, color identity, images, or responsive layout. The goal is to elevate the perceived quality of the site through layered motion design, ambient background effects, a custom cursor, scroll-driven animations, and polished micro-interactions, all built on top of the existing Framer Motion + Tailwind CSS stack.

## Glossary

- **Portfolio_Site**: The existing Next.js portfolio website being enhanced.
- **Animation_System**: The collection of Framer Motion variants, hooks, and components that drive all motion on the site.
- **Cursor_Controller**: The client-side component responsible for rendering and animating the custom cursor overlay.
- **Background_Layer**: The persistent canvas or DOM layer rendered behind all page content that displays ambient animated effects (particles, blobs, gradient shifts).
- **Scroll_Driver**: The Framer Motion `useScroll` / `useTransform` hook setup that maps scroll progress to visual properties.
- **Section**: Any of the seven page sections — Hero, Projects, Experience, Skills, About, KeyHighlights, Contact.
- **Micro_Interaction**: A small, contained animation triggered by a discrete user action (hover, tap, focus).
- **Reduced_Motion_Mode**: The operating mode activated when the user's OS preference `prefers-reduced-motion: reduce` is set.

---

## Requirements

### Requirement 1: Custom Cursor with Glow Orb and Lerp Follow

**User Story:** As a visitor, I want a smooth custom cursor that follows my mouse with a slight delay, so that the site feels premium and interactive.

#### Acceptance Criteria

1. THE Cursor_Controller SHALL render a circular glow orb that tracks the mouse pointer position across the entire viewport.
2. WHEN the mouse moves, THE Cursor_Controller SHALL interpolate the orb position using a lerp factor between 0.08 and 0.15 per animation frame, producing a smooth trailing delay.
3. WHEN the cursor hovers over an interactive element (links, buttons, cards), THE Cursor_Controller SHALL expand the orb diameter by at least 1.5× and increase its opacity.
4. WHEN the cursor leaves an interactive element, THE Cursor_Controller SHALL return the orb to its default size and opacity within 200ms.
5. IF Reduced_Motion_Mode is active, THEN THE Cursor_Controller SHALL hide the custom orb and restore the default system cursor.
6. THE Cursor_Controller SHALL not interfere with pointer events on underlying interactive elements (pointer-events: none on the orb layer).
7. THE Cursor_Controller SHALL only render on devices where a pointer (mouse) is the primary input, detected via the `(pointer: fine)` media query.

---

### Requirement 2: Animated Particle Background Layer

**User Story:** As a visitor, I want to see subtle floating particles in the background, so that the site feels alive and immersive without being distracting.

#### Acceptance Criteria

1. THE Background_Layer SHALL render between 30 and 60 particles distributed pseudo-randomly across the viewport.
2. WHEN the Background_Layer initialises, THE Background_Layer SHALL animate each particle with an independent floating trajectory (vertical drift ±20px, horizontal drift ±10px) and a cycle duration between 4s and 12s.
3. THE Background_Layer SHALL keep each particle's opacity between 0.05 and 0.25 to avoid visual noise.
4. WHEN the viewport is resized, THE Background_Layer SHALL recompute particle positions to remain within the new viewport bounds within one animation frame.
5. IF Reduced_Motion_Mode is active, THEN THE Background_Layer SHALL render particles as static dots with no animation.
6. THE Background_Layer SHALL use `will-change: transform` on animated particle elements to promote GPU compositing and avoid layout thrashing.
7. THE Background_Layer SHALL be positioned `fixed` with `z-index: 0` so it persists across all sections without affecting scroll.

---

### Requirement 3: Animated Gradient Blob Backgrounds per Section

**User Story:** As a visitor, I want each section to have a distinct ambient glow that shifts subtly, so that the page feels layered and visually rich.

#### Acceptance Criteria

1. EACH Section SHALL contain at least one animated radial gradient blob rendered as a `motion.div` with `blur-[80px]` or greater.
2. WHEN a Section enters the viewport, THE Animation_System SHALL animate the blob's opacity from 0 to its target value over 1.2s using an ease-in-out curve.
3. WHILE a Section is visible, THE Animation_System SHALL cycle the blob's scale between 1.0 and 1.1 with a period between 8s and 14s.
4. THE Animation_System SHALL use the existing `electric-blue` (#0066FF) and `cyan-accent` (#00D4FF) color tokens exclusively for blob fills to preserve color identity.
5. IF Reduced_Motion_Mode is active, THEN THE Animation_System SHALL render blobs as static, non-animated elements.

---

### Requirement 4: Scroll-Driven Parallax per Section

**User Story:** As a visitor, I want background elements to move at a different speed than the foreground as I scroll, so that the page has a sense of depth.

#### Acceptance Criteria

1. THE Scroll_Driver SHALL apply a vertical parallax offset to background blob elements in each Section, with a travel range of ±5% to ±15% of the section height.
2. WHEN the user scrolls, THE Scroll_Driver SHALL update parallax transforms using `useTransform` mapped to `useScroll` progress, with no JavaScript-driven `requestAnimationFrame` loop (Framer Motion spring/transform pipeline only).
3. THE Scroll_Driver SHALL not apply parallax to text content or interactive elements to preserve readability and click targets.
4. IF Reduced_Motion_Mode is active, THEN THE Scroll_Driver SHALL apply zero parallax offset to all elements.

---

### Requirement 5: Hero Section Cinematic Entrance Animation

**User Story:** As a visitor, I want the hero section to reveal itself with a cinematic staggered animation on first load, so that the site makes a strong first impression.

#### Acceptance Criteria

1. WHEN the Portfolio_Site first loads, THE Animation_System SHALL animate the hero badge, headline words, sub-headline, description, and CTA buttons as a staggered sequence with a total duration not exceeding 1.8s.
2. EACH hero text element SHALL enter with a combined opacity (0→1), vertical translate (24px→0), and blur (6px→0px) transition.
3. THE Animation_System SHALL stagger child elements with a delay increment of 0.07s to 0.12s between each item.
4. WHEN the hero section scrolls out of view, THE Animation_System SHALL fade and translate the hero content upward using `useTransform` on scroll progress (opacity 1→0 over the first 65% of scroll travel).
5. IF Reduced_Motion_Mode is active, THEN THE Animation_System SHALL skip blur and translate transitions and only animate opacity.

---

### Requirement 6: Section Reveal Animations with Stagger

**User Story:** As a visitor, I want each section's content to animate into view as I scroll down, so that the page feels dynamic and engaging.

#### Acceptance Criteria

1. WHEN a Section enters the viewport (intersection margin of −60px), THE Animation_System SHALL trigger a reveal animation for all direct child content blocks.
2. EACH content block SHALL animate with fadeSlideUp (opacity 0→1, y 32px→0, blur 4px→0) over 0.7s using the `[0.22, 1, 0.36, 1]` cubic-bezier easing.
3. THE Animation_System SHALL stagger sibling content blocks within a section with a delay increment of 0.08s per item.
4. THE Animation_System SHALL trigger each section's reveal animation only once (viewport `once: true`).
5. IF Reduced_Motion_Mode is active, THEN THE Animation_System SHALL render all section content as immediately visible without animation.

---

### Requirement 7: Card and Button Micro-Interactions

**User Story:** As a visitor, I want cards and buttons to respond visually when I hover or click them, so that the interface feels tactile and responsive.

#### Acceptance Criteria

1. WHEN the cursor hovers over a ProjectCard, THE Animation_System SHALL translate the card −6px on the Y axis and apply `shadow-card-hover` within 200ms using a spring transition (stiffness 300, damping 22).
2. WHEN the cursor hovers over a SkillBadge or highlight chip, THE Animation_System SHALL scale the element to 1.07 and translate −2px on the Y axis.
3. WHEN a primary CTA button is pressed (mousedown / tap), THE Animation_System SHALL scale the button to 0.97 within 100ms.
4. WHEN the cursor hovers over a primary CTA button, THE Animation_System SHALL translate the button −3px on the Y axis and apply `shadow-glow-md`.
5. WHEN the cursor hovers over a card, THE Animation_System SHALL animate a shimmer highlight (translucent white gradient) sweeping left-to-right across the card surface over 700ms.
6. IF Reduced_Motion_Mode is active, THEN THE Animation_System SHALL disable translate and scale micro-interactions, retaining only color/border transitions.

---

### Requirement 8: Smooth Scroll and Section Transition Dividers

**User Story:** As a visitor, I want smooth scrolling and visual separators between sections, so that the page flows naturally and sections feel distinct.

#### Acceptance Criteria

1. THE Portfolio_Site SHALL enable CSS `scroll-behavior: smooth` globally via `html { scroll-behavior: smooth }`.
2. EACH Section boundary SHALL render a horizontal gradient divider (`h-px`, `bg-gradient-to-r from-transparent via-border-subtle to-transparent`) at the top edge.
3. WHERE a Section has a visually heavy background, THE Animation_System SHALL render a soft blur-gradient fade (`backdrop-blur` or gradient overlay) at the top and bottom edges of the section to blend into adjacent sections.
4. THE Portfolio_Site SHALL maintain all existing section `id` attributes unchanged so that Navbar anchor links continue to function correctly.

---

### Requirement 9: Floating Ambient Shapes

**User Story:** As a visitor, I want to see subtle floating geometric shapes in the background of sections, so that the site has visual depth and personality.

#### Acceptance Criteria

1. THE Background_Layer SHALL render between 3 and 7 abstract floating shapes (circles, rounded rectangles) per page, distributed across different sections.
2. WHEN rendered, EACH floating shape SHALL animate with a looping vertical float (±8px to ±18px) and a cycle duration between 5s and 10s.
3. THE Background_Layer SHALL keep each shape's opacity between 0.03 and 0.08 to remain ambient and non-distracting.
4. THE Background_Layer SHALL apply `pointer-events: none` to all floating shapes so they do not intercept user interactions.
5. IF Reduced_Motion_Mode is active, THEN THE Background_Layer SHALL render shapes as static, non-animated elements.

---

### Requirement 10: Performance and Responsiveness Constraints

**User Story:** As a visitor on any device, I want the visual enhancements to not degrade page performance or break the layout, so that I have a smooth experience regardless of device.

#### Acceptance Criteria

1. THE Animation_System SHALL use only CSS `transform` and `opacity` properties for all animations to avoid layout recalculation (no animation of `width`, `height`, `top`, `left`, `margin`, or `padding`).
2. THE Background_Layer SHALL cap the total number of simultaneously animating DOM elements at 80 to avoid excessive compositor layers.
3. THE Portfolio_Site SHALL preserve all existing responsive breakpoints (`sm`, `md`, `lg`, `xl`) and Tailwind layout classes without modification.
4. THE Cursor_Controller SHALL be conditionally rendered only on the client side using a `useEffect` mount guard to prevent SSR hydration mismatches.
5. THE Animation_System SHALL not introduce any new npm packages beyond those already present (`framer-motion`, `next`, `react`, `tailwindcss`) unless a canvas/WebGL background is explicitly chosen, in which case only one additional lightweight library (e.g., `tsparticles` or a custom canvas hook) is permitted.
6. WHEN the Portfolio_Site is built with `next build`, THE Portfolio_Site SHALL produce zero TypeScript type errors related to the new visual enhancement components.
