// Feature: portfolio-visual-enhancement, Property 6: ambient shapes never intercept pointer events
// Feature: portfolio-visual-enhancement, Property 7: ambient shape opacity is within ambient range
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render } from '@testing-library/react'
import * as fc from 'fast-check'

// ---------------------------------------------------------------------------
// Shared framer-motion mock — overridden per describe block
// ---------------------------------------------------------------------------
let mockReducedMotion = false

vi.mock('framer-motion', async () => {
  const actual = await vi.importActual<typeof import('framer-motion')>('framer-motion')
  return {
    ...actual,
    useReducedMotion: () => mockReducedMotion,
    motion: {
      ...((actual as any).motion ?? {}),
      div: ({
        children,
        animate,
        transition,
        'data-testid': testId,
        'data-opacity': dataOpacity,
        style,
        ...rest
      }: React.HTMLAttributes<HTMLDivElement> & {
        animate?: unknown
        transition?: unknown
        'data-testid'?: string
        'data-opacity'?: number
        style?: React.CSSProperties
        children?: React.ReactNode
      }) => (
        <div
          data-testid={testId}
          data-opacity={dataOpacity}
          data-pointer-events={(style as React.CSSProperties | undefined)?.pointerEvents ?? ''}
          style={style}
          {...rest}
        >
          {children}
        </div>
      ),
    },
  }
})

import AmbientShapes from '@/components/ui/AmbientShapes'

// ---------------------------------------------------------------------------
// Property 6: Ambient shapes never intercept pointer events
// Validates: Requirements 9.4
// ---------------------------------------------------------------------------
describe('Property 6: Ambient shapes never intercept pointer events', () => {
  beforeEach(() => {
    mockReducedMotion = false
  })

  it('every shape element has pointerEvents: none', () => {
    fc.assert(
      fc.property(fc.constant(null), () => {
        const { getAllByTestId, unmount } = render(<AmbientShapes />)
        const shapes = getAllByTestId('ambient-shape')
        for (const el of shapes) {
          expect(el.getAttribute('data-pointer-events')).toBe('none')
        }
        unmount()
      }),
      { numRuns: 50 }
    )
  })

  it('every shape element has pointerEvents: none in reduced motion mode', () => {
    mockReducedMotion = true
    fc.assert(
      fc.property(fc.constant(null), () => {
        const { getAllByTestId, unmount } = render(<AmbientShapes />)
        const shapes = getAllByTestId('ambient-shape')
        for (const el of shapes) {
          expect(el.getAttribute('data-pointer-events')).toBe('none')
        }
        unmount()
      }),
      { numRuns: 50 }
    )
  })
})

// ---------------------------------------------------------------------------
// Property 7: Ambient shape opacity is within ambient range
// Validates: Requirements 9.3
// ---------------------------------------------------------------------------
describe('Property 7: Ambient shape opacity is within ambient range', () => {
  beforeEach(() => {
    mockReducedMotion = false
  })

  it('every shape has opacity between 0.03 and 0.08 inclusive', () => {
    fc.assert(
      fc.property(fc.constant(null), () => {
        const { getAllByTestId, unmount } = render(<AmbientShapes />)
        const shapes = getAllByTestId('ambient-shape')
        for (const el of shapes) {
          const opacity = parseFloat(el.getAttribute('data-opacity') ?? 'NaN')
          expect(opacity).toBeGreaterThanOrEqual(0.03)
          expect(opacity).toBeLessThanOrEqual(0.08)
        }
        unmount()
      }),
      { numRuns: 50 }
    )
  })
})
