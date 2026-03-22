// Feature: rahmat-portfolio-website, Property 3: Projects Data Round-Trip
import { describe, it, expect, vi } from 'vitest'
import { render } from '@testing-library/react'
import * as fc from 'fast-check'

vi.mock('framer-motion', async () => {
  const actual = await vi.importActual<typeof import('framer-motion')>('framer-motion')
  return {
    ...actual,
    useInView: () => true,
    useReducedMotion: () => false,
    motion: {
      ...((actual as any).motion ?? {}),
      div: ({ children, ...props }: React.HTMLAttributes<HTMLDivElement> & { children?: React.ReactNode }) => (
        <div {...props}>{children}</div>
      ),
    },
  }
})

vi.mock('next/image', () => ({
  default: ({ src, alt, ...props }: { src: string; alt: string; [key: string]: unknown }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} />
  ),
}))

import ProjectsSection from '@/components/sections/ProjectsSection'

/** Property 3: Projects Data Round-Trip - Validates: Requirements 6.1, 6.2, 11.3 */
describe('Property 3: Projects Data Round-Trip', () => {
  it('renders every project title, description, techTags, and URLs passed via the projects prop', () => {
    fc.assert(
      fc.property(
        fc.array(
          fc.record({
            id: fc.uuid(),
            title: fc.string({ minLength: 1 }),
            description: fc.string({ minLength: 1 }),
            techTags: fc.array(fc.string({ minLength: 1 })),
            githubUrl: fc.option(fc.webUrl(), { nil: undefined }),
            liveUrl: fc.option(fc.webUrl(), { nil: undefined }),
            publicationUrl: fc.option(fc.webUrl(), { nil: undefined }),
          })
        ),
        (projects) => {
          const { container, unmount } = render(<ProjectsSection projects={projects} />)
          const text = container.textContent ?? ''
          const anchors = Array.from(container.querySelectorAll('a'))
          const hrefs = anchors.map((a) => a.getAttribute('href') ?? '')

          for (const project of projects) {
            // title and description must appear in text content
            expect(text).toContain(project.title)
            expect(text).toContain(project.description)

            // all techTags must appear in text content
            for (const tag of project.techTags) {
              expect(text).toContain(tag)
            }

            // non-undefined URLs must appear as anchor hrefs
            if (project.githubUrl !== undefined) {
              expect(hrefs).toContain(project.githubUrl)
            }
            if (project.liveUrl !== undefined) {
              expect(hrefs).toContain(project.liveUrl)
            }
            if (project.publicationUrl !== undefined) {
              expect(hrefs).toContain(project.publicationUrl)
            }
          }

          unmount()
        }
      ),
      { numRuns: 100 }
    )
  })
})
