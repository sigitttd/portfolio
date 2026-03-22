// Feature: rahmat-portfolio-website, Property 7: Active Navigation Link
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, act } from '@testing-library/react'
import * as fc from 'fast-check'
import Navbar from '@/components/layout/Navbar'

const NAV_IDS = ['about', 'skills', 'projects', 'experience', 'contact'] as const

/** Property 7: Active Navigation Link
 * Validates: Requirements 9.4
 */
describe('Property 7: Active Navigation Link', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'scrollY', { value: 0, writable: true })
  })

  it('marks exactly the intersecting section link as active and no other', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...NAV_IDS),
        (sectionId) => {
          let capturedCallback: IntersectionObserverCallback | null = null

          // Override IntersectionObserver to capture the callback for this run
          vi.stubGlobal('IntersectionObserver', class MockIntersectionObserver {
            readonly root: Element | null = null
            readonly rootMargin: string = ''
            readonly thresholds: ReadonlyArray<number> = []

            constructor(callback: IntersectionObserverCallback) {
              capturedCallback = callback
            }
            observe() {}
            unobserve() {}
            disconnect() {}
            takeRecords(): IntersectionObserverEntry[] { return [] }
          })

          const { getAllByRole, unmount } = render(<Navbar />)

          // Fire the IntersectionObserver callback with the chosen section intersecting
          act(() => {
            if (capturedCallback) {
              const mockEntry = {
                isIntersecting: true,
                target: { id: sectionId } as Element,
                boundingClientRect: {} as DOMRectReadOnly,
                intersectionRatio: 1,
                intersectionRect: {} as DOMRectReadOnly,
                rootBounds: null,
                time: 0,
              } as IntersectionObserverEntry

              capturedCallback([mockEntry], {} as IntersectionObserver)
            }
          })

          const links = getAllByRole('link')

          // Exactly one link should be active (text-electric-blue)
          const activeLinks = links.filter((link) =>
            link.className.includes('text-electric-blue')
          )
          const inactiveLinks = links.filter((link) =>
            !link.className.includes('text-electric-blue')
          )

          // The active link should correspond to the intersecting section
          const activeLink = activeLinks[0]
          const expectedHref = `#${sectionId}`

          const result =
            activeLinks.length === 1 &&
            activeLink?.getAttribute('href') === expectedHref &&
            inactiveLinks.length === NAV_IDS.length - 1

          unmount()
          vi.unstubAllGlobals()
          return result
        }
      ),
      { numRuns: 100 }
    )
  })
})
