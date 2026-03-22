// Feature: rahmat-portfolio-website, Property 4: Timeline Data Round-Trip
// Feature: rahmat-portfolio-website, Property 5: Timeline Stagger Ordering
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

import ExperienceSection from '@/components/sections/ExperienceSection'

const experienceArb = fc.record({
  type: fc.constant('work' as const),
  role: fc.string({ minLength: 1 }),
  organization: fc.string({ minLength: 1 }),
  location: fc.string({ minLength: 1 }),
  startDate: fc.string({ minLength: 1 }),
  endDate: fc.string({ minLength: 1 }),
  description: fc.array(fc.string()),
})

const educationArb = fc.record({
  type: fc.constant('education' as const),
  degree: fc.string({ minLength: 1 }),
  institution: fc.string({ minLength: 1 }),
  location: fc.string({ minLength: 1 }),
  startDate: fc.string({ minLength: 1 }),
  endDate: fc.string({ minLength: 1 }),
  gpa: fc.option(fc.string({ minLength: 1 }), { nil: undefined }),
  honors: fc.option(fc.string({ minLength: 1 }), { nil: undefined }),
  description: fc.option(fc.array(fc.string()), { nil: undefined }),
})

/** Property 4: Timeline Data Round-Trip - Validates: Requirements 7.1, 7.2, 11.3 */
describe('Property 4: Timeline Data Round-Trip', () => {
  it('renders every work and education field passed via props', () => {
    fc.assert(
      fc.property(
        fc.array(experienceArb),
        fc.array(educationArb),
        (workExperience, education) => {
          const { container, unmount } = render(
            <ExperienceSection workExperience={workExperience} education={education} />
          )
          const text = container.textContent ?? ''

          for (const item of workExperience) {
            expect(text).toContain(item.role)
            expect(text).toContain(item.organization)
            expect(text).toContain(item.startDate)
            expect(text).toContain(item.endDate)
            expect(text).toContain(item.location)
          }

          for (const item of education) {
            expect(text).toContain(item.degree)
            expect(text).toContain(item.institution)
            expect(text).toContain(item.startDate)
            expect(text).toContain(item.endDate)
            expect(text).toContain(item.location)
          }

          unmount()
        }
      ),
      { numRuns: 100 }
    )
  })
})

/** Property 5: Timeline Stagger Ordering - Validates: Requirements 7.5 */
describe('Property 5: Timeline Stagger Ordering', () => {
  it('assigns data-delay attributes in increments of 0.12 for each work item', () => {
    fc.assert(
      fc.property(
        fc.array(experienceArb, { minLength: 1, maxLength: 10 }),
        (workExperience) => {
          const { container, unmount } = render(
            <ExperienceSection workExperience={workExperience} education={[]} />
          )

          const workTimeline = container.querySelector('[data-testid="work-timeline"]')
          expect(workTimeline).not.toBeNull()

          const delayedItems = Array.from(workTimeline!.querySelectorAll('[data-delay]'))
          expect(delayedItems).toHaveLength(workExperience.length)

          delayedItems.forEach((el, i) => {
            const actual = parseFloat(el.getAttribute('data-delay') ?? '0')
            const expected = i * 0.12
            expect(actual).toBeCloseTo(expected, 10)
          })

          unmount()
        }
      ),
      { numRuns: 100 }
    )
  })
})
