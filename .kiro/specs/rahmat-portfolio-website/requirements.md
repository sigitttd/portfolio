# Requirements Document

## Introduction

A modern, responsive personal portfolio website for Rahmat Sigit Hidayat, a Data Analyst and Data Science graduate. The site serves as a professional digital presence to showcase skills, projects, work experience, and contact information. Built with Next.js (App Router), React, TypeScript, Tailwind CSS, and Framer Motion. The design follows a dark, minimal, data-focused aesthetic with Electric Blue accents on an Orbit Navy background.

## Glossary

- **Portfolio_Site**: The complete Next.js web application being built
- **Hero_Section**: The top-of-page section displaying name, title, tagline, and CTA
- **About_Section**: The section displaying the professional summary
- **Skills_Section**: The section displaying categorized technical and soft skills
- **Projects_Section**: The section displaying a grid of project cards
- **Experience_Section**: The section displaying work experience and education in a vertical timeline
- **Contact_Section**: The section displaying contact information and an optional contact form
- **Project_Card**: A UI component displaying a single project's image, title, description, tech tags, and links
- **Timeline_Item**: A UI component representing a single work experience or education entry
- **Skill_Badge**: A UI component representing a single skill or tool label
- **portfolioData**: The TypeScript module at `/data/portfolioData.ts` that holds all site content
- **Scroll_Animation**: A Framer Motion animation triggered when an element enters the viewport (fade-in, y: 20 → 0)
- **CTA**: Call-to-action button or link
- **App_Router**: Next.js App Router architecture using the `/app` directory

---

## Requirements

### Requirement 1: Project Structure and Technology Stack

**User Story:** As a developer, I want a well-organized Next.js project structure, so that the codebase is maintainable and scalable.

#### Acceptance Criteria

1. THE Portfolio_Site SHALL be built using Next.js with App_Router, React, TypeScript, Tailwind CSS, and Framer Motion.
2. THE Portfolio_Site SHALL organize source code into the following top-level directories: `/app`, `/components`, `/data`, `/types`.
3. THE Portfolio_Site SHALL store all displayable content (personal info, skills, projects, experience, education) in `/data/portfolioData.ts`.
4. THE Portfolio_Site SHALL define all data shapes as TypeScript interfaces with strict typing in `/types`.
5. THE Portfolio_Site SHALL use reusable components for repeated UI patterns such as Project_Card, Timeline_Item, and Skill_Badge.

---

### Requirement 2: Design System and Theme

**User Story:** As a visitor, I want a visually consistent dark-themed interface, so that the site feels professional and modern.

#### Acceptance Criteria

1. THE Portfolio_Site SHALL apply a dark theme using `#0A1024` (Orbit Navy) as the primary background color throughout all sections.
2. THE Portfolio_Site SHALL use `#0066FF` (Electric Blue) as the primary accent color for interactive elements, highlights, and CTAs.
3. THE Portfolio_Site SHALL use Inter or Geist as the primary typeface across all text elements.
4. THE Portfolio_Site SHALL apply only subtle animations: fade-in on scroll, y-axis translate (20px → 0px), and hover glow or lift effects.
5. IF a user's operating system preference is set to reduced motion, THEN THE Portfolio_Site SHALL disable or minimize Framer Motion animations.

---

### Requirement 3: Hero Section

**User Story:** As a visitor, I want to immediately see who Rahmat is and what he does, so that I can quickly understand the purpose of the site.

#### Acceptance Criteria

1. THE Hero_Section SHALL display the full name "Rahmat Sigit Hidayat" as the primary heading.
2. THE Hero_Section SHALL display the professional title "Data Analyst" beneath the name.
3. THE Hero_Section SHALL display a short tagline that communicates Rahmat's value proposition.
4. THE Hero_Section SHALL include a CTA button labeled "View Projects" that scrolls the page to the Projects_Section.
5. THE Hero_Section SHALL render above the fold on desktop viewports of 1280px width and above.
6. WHEN the Hero_Section mounts, THE Hero_Section SHALL animate its content in using a Scroll_Animation (fade-in, y: 20 → 0).

---

### Requirement 4: About Me Section

**User Story:** As a visitor, I want to read a professional summary about Rahmat, so that I can understand his background and expertise.

#### Acceptance Criteria

1. THE About_Section SHALL display a professional summary sourced from portfolioData.
2. THE About_Section SHALL highlight key attributes including data analysis, machine learning, data visualization, and storytelling.
3. WHEN the About_Section enters the viewport, THE About_Section SHALL trigger a Scroll_Animation on its content.

---

### Requirement 5: Skills and Tools Section

**User Story:** As a visitor, I want to see Rahmat's skills organized by category, so that I can quickly assess his technical capabilities.

#### Acceptance Criteria

1. THE Skills_Section SHALL display skills grouped into at least the following categories: Technical Skills, Programming & Libraries, Tools, and Soft Skills.
2. THE Skills_Section SHALL render each skill as a Skill_Badge within a responsive grid or flex-wrap layout.
3. THE Skills_Section SHALL source all skill data from portfolioData.
4. WHEN a visitor hovers over a Skill_Badge, THE Skill_Badge SHALL apply a hover glow or lift effect using the Electric Blue accent color.
5. WHEN the Skills_Section enters the viewport, THE Skills_Section SHALL trigger a Scroll_Animation on its content.

---

### Requirement 6: Projects Section

**User Story:** As a visitor, I want to browse Rahmat's projects in a structured grid, so that I can evaluate his practical experience and output quality.

#### Acceptance Criteria

1. THE Projects_Section SHALL display all projects sourced from portfolioData as a responsive grid of Project_Card components.
2. THE Project_Card SHALL display the project title, a short description, a list of technology tags, and relevant links (e.g., GitHub, live demo, publication).
3. THE Project_Card SHALL optionally display a project image or thumbnail when one is available in portfolioData.
4. THE Projects_Section SHALL include at minimum the following projects from portfolioData: Sentiment and Social Network Analysis, Citation Network Analysis, Dashboard for Location Segmentation, Asset Monitoring Dashboard, Data Warehouse Design, and Strategies Analysis for UMKM Enterprises.
5. WHEN a visitor hovers over a Project_Card, THE Project_Card SHALL apply a hover lift or glow effect.
6. WHEN the Projects_Section enters the viewport, THE Projects_Section SHALL trigger a Scroll_Animation on its content.
7. THE Projects_Section SHALL be fully responsive, displaying a single column on mobile, two columns on tablet, and three columns on desktop.

---

### Requirement 7: Experience and Education Section

**User Story:** As a visitor, I want to see Rahmat's work history and education in a clear timeline, so that I can understand his career progression.

#### Acceptance Criteria

1. THE Experience_Section SHALL display work experience and education entries as a vertical timeline using Timeline_Item components.
2. THE Experience_Section SHALL source all entries from portfolioData, including role/degree, organization, location, date range, and description.
3. THE Experience_Section SHALL include at minimum the following work entries: Junior Business Intelligence at Marketing Agency, Freelance Data Analyst, Data Analyst Intern at Kuanta Indonesia, Assistant Lecturer at Telkom University, and Student Staff at Telkom University.
4. THE Experience_Section SHALL include at minimum the following education entries: Bachelor of Data Science at Telkom University (GPA 3.96, summa cum laude) and SMA Negeri 6 Surabaya.
5. WHEN the Experience_Section enters the viewport, THE Experience_Section SHALL trigger a Scroll_Animation on each Timeline_Item sequentially (staggered).

---

### Requirement 8: Contact Section

**User Story:** As a visitor, I want to find Rahmat's contact details and social links easily, so that I can reach out to him for opportunities.

#### Acceptance Criteria

1. THE Contact_Section SHALL display the email address sourced from portfolioData.
2. THE Contact_Section SHALL display the phone number sourced from portfolioData.
3. THE Contact_Section SHALL display links to LinkedIn, GitHub, and Tableau Public profiles sourced from portfolioData.
4. WHERE a contact form is included, THE Contact_Section SHALL render fields for name, email, and message with client-side validation.
5. IF a visitor submits the contact form with an empty required field, THEN THE Contact_Section SHALL display an inline validation error for each empty field without submitting the form.
6. WHEN the Contact_Section enters the viewport, THE Contact_Section SHALL trigger a Scroll_Animation on its content.

---

### Requirement 9: Navigation

**User Story:** As a visitor, I want a persistent navigation bar, so that I can jump to any section of the page at any time.

#### Acceptance Criteria

1. THE Portfolio_Site SHALL include a navigation bar that remains visible as the visitor scrolls.
2. THE Portfolio_Site SHALL include navigation links for: Hero, About, Skills, Projects, Experience, and Contact sections.
3. WHEN a visitor clicks a navigation link, THE Portfolio_Site SHALL smoothly scroll to the corresponding section.
4. WHILE a visitor is scrolled within a section, THE Portfolio_Site SHALL highlight the corresponding navigation link as active using the Electric Blue accent color.

---

### Requirement 10: Responsiveness and SEO

**User Story:** As a visitor on any device, I want the site to display correctly, so that I can browse it comfortably on mobile, tablet, or desktop.

#### Acceptance Criteria

1. THE Portfolio_Site SHALL be fully responsive across mobile (≥ 375px), tablet (≥ 768px), and desktop (≥ 1280px) viewport widths.
2. THE Portfolio_Site SHALL include a `<title>` tag and `<meta name="description">` tag with relevant content for search engine optimization.
3. THE Portfolio_Site SHALL use semantic HTML elements (e.g., `<header>`, `<main>`, `<section>`, `<footer>`, `<nav>`) throughout the page structure.
4. THE Portfolio_Site SHALL include Open Graph meta tags (`og:title`, `og:description`, `og:type`) to support social media link previews.
5. THE Portfolio_Site SHALL achieve a Lighthouse performance score of 80 or above on desktop.

---

### Requirement 11: Data Layer

**User Story:** As a developer, I want all content centralized in a single data file, so that updating the portfolio requires changes in only one place.

#### Acceptance Criteria

1. THE portfolioData SHALL export a single typed object or set of typed arrays covering: personal info, about summary, skills by category, projects, work experience, and education.
2. THE portfolioData SHALL define and use TypeScript interfaces for each data shape (e.g., `Project`, `Experience`, `Education`, `Skill`, `PersonalInfo`).
3. WHEN a developer updates content in portfolioData, THE Portfolio_Site SHALL reflect those changes across all sections without requiring changes to component logic.
