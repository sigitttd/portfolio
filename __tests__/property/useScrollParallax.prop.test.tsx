// Feature: portfolio-visual-enhancement, Property 8: scroll parallax returns zero offset in reduced motion
import { describe, it, expect, vi } from 'vitest'
import { renderHook } from '@testing-library/react'
import * as fc from 'fast-check'
import React from 'react'

vi.mock('framer-motion', async () => {
  const actual = await vi.importActual<typeof import('framer-motion')>('framer-motion')
  return {
    ...actual,
    useReducedMotion: () => true,
  }
})

import { useScrollParallax } from '@/hooks/useScrollParallax'

/**
 * Property 8: Scroll parallax returns zero offset in reduced motion
 * Validates: Requirements 4.4
 */
describe('Property 8: Scroll parallax returns zero offset in reduced motion', () => {
  it('always returns "0%" MotionValue when useReducedMotion is true, for any range option', () => {
    fc.assert(
      fc.property(
        fc.tuple(
          fc.integer({ min: -50, max: -1 }),
          fc.integer({ min: 1, max: 50 })
        ),
        ([min, max]) => {
          const ref = React.createRef<HTMLElement>()
          const { result, unmount } = renderHook(() =>
            useScrollParallax(ref, { range: [min, max] })
          )
          expect(result.current.get()).toBe('0%')
          unmount()
        }
      ),
      { numRuns: 100 }
    )
  })

  it('returns "0%" with default options when reduced motion is active', () => {
    fc.assert(
      fc.property(fc.constant(null), () => {
        const ref = React.createRef<HTMLElement>()
        const { result, unmount } = renderHook(() => useScrollParallax(ref))
        expect(result.current.get()).toBe('0%')
        unmount()
      }),
      { numRuns: 100 }
    )
  })
})
