// Feature: rahmat-portfolio-website, Property 1: Reduced Motion Compliance
import { describe, it, expect, vi } from 'vitest'
import { render } from '@testing-library/react'
import * as fc from 'fast-check'

vi.mock('framer-motion', async () => {
  const actual = await vi.importActual<typeof import('framer-motion')>('framer-motion')
  return { ...actual, useReducedMotion: () => true, useInView: () => true }
})

import AnimatedSection from '@/components/ui/AnimatedSection'

/** Property 1: Reduced Motion Compliance - Validates: Requirements 2.5 */
describe('Property 1: Reduced Motion Compliance', () => {
  it('renders children in visible state when reduced motion is preferred', () => {
    fc.assert(
      fc.property(fc.string({ minLength: 1 }), (childText) => {
        const { container, unmount } = render(<AnimatedSection><span>{childText}</span></AnimatedSection>)
        const wrapper = container.firstChild as HTMLElement
        expect(wrapper).toBeTruthy()
        expect(wrapper.getAttribute('data-animate')).toBe('visible')
        unmount()
      }),
      { numRuns: 100 }
    )
  })
})
