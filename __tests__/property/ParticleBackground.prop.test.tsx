// Feature: portfolio-visual-enhancement, Property 3: particle count is within bounds
// Feature: portfolio-visual-enhancement, Property 4: particle opacity is within ambient range
// Feature: portfolio-visual-enhancement, Property 5: reduced motion renders particles as static
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render } from '@testing-library/react'
import * as fc from 'fast-check'

// ---------------------------------------------------------------------------
// Shared framer-motion mock factory — overridden per describe block
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
        ...rest
      }: React.HTMLAttributes<HTMLDivElement> & {
        animate?: unknown
        transition?: unknown
        'data-testid'?: string
        'data-opacity'?: number
        children?: React.ReactNode
      }) => (
        <div
          data-testid={testId}
          data-opacity={dataOpacity}
          data-has-animate={animate !== undefined ? 'true' : 'false'}
          {...rest}
        >
          {children}
        </div>
      ),
    },
  }
})

import ParticleBackground from '@/components/ui/ParticleBackground'

// ---------------------------------------------------------------------------
// Property 3: Particle count is within bounds
// Validates: Requirements 2.1
// ---------------------------------------------------------------------------
describe('Property 3: Particle count is within bounds', () => {
  beforeEach(() => {
    mockReducedMotion = false
  })

  it('always renders between 30 and 60 particle elements', () => {
    fc.assert(
      fc.property(fc.constant(null), () => {
        const { getAllByTestId, unmount } = render(<ParticleBackground />)
        const particles = getAllByTestId('particle')
        expect(particles.length).toBeGreaterThanOrEqual(30)
        expect(particles.length).toBeLessThanOrEqual(60)
        unmount()
      }),
      { numRuns: 50 }
    )
  })
})

// ---------------------------------------------------------------------------
// Property 4: Particle opacity is within ambient range
// Validates: Requirements 2.3
// ---------------------------------------------------------------------------
describe('Property 4: Particle opacity is within ambient range', () => {
  beforeEach(() => {
    mockReducedMotion = false
  })

  it('every particle has opacity between 0.05 and 0.25 inclusive', () => {
    fc.assert(
      fc.property(fc.constant(null), () => {
        const { getAllByTestId, unmount } = render(<ParticleBackground />)
        const particles = getAllByTestId('particle')
        for (const el of particles) {
          const opacity = parseFloat(el.getAttribute('data-opacity') ?? 'NaN')
          expect(opacity).toBeGreaterThanOrEqual(0.05)
          expect(opacity).toBeLessThanOrEqual(0.25)
        }
        unmount()
      }),
      { numRuns: 50 }
    )
  })
})

// ---------------------------------------------------------------------------
// Property 5: Reduced motion renders particles as static
// Validates: Requirements 2.5
// ---------------------------------------------------------------------------
describe('Property 5: Reduced motion renders particles as static', () => {
  beforeEach(() => {
    mockReducedMotion = true
  })

  it('no particle has an animate prop when reduced motion is active', () => {
    fc.assert(
      fc.property(fc.constant(null), () => {
        const { getAllByTestId, unmount } = render(<ParticleBackground />)
        const particles = getAllByTestId('particle')
        for (const el of particles) {
          expect(el.getAttribute('data-has-animate')).toBe('false')
        }
        unmount()
      }),
      { numRuns: 50 }
    )
  })
})
