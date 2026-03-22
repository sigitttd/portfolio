// Feature: rahmat-portfolio-website, Property 2: Skills Data Round-Trip
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

import SkillsSection from '@/components/sections/SkillsSection'

/** Property 2: Skills Data Round-Trip - Validates: Requirements 5.1, 5.2, 11.3 */
describe('Property 2: Skills Data Round-Trip', () => {
  it('renders every category name and skill string passed via the skills prop', () => {
    fc.assert(
      fc.property(
        fc.array(
          fc.record({
            category: fc.string({ minLength: 1 }),
            skills: fc.array(fc.string({ minLength: 1 })),
          })
        ),
        (skillCategories) => {
          const { container, unmount } = render(<SkillsSection skills={skillCategories} />)
          const text = container.textContent ?? ''

          for (const cat of skillCategories) {
            expect(text).toContain(cat.category)
            for (const skill of cat.skills) {
              expect(text).toContain(skill)
            }
          }

          unmount()
        }
      ),
      { numRuns: 100 }
    )
  })
})
