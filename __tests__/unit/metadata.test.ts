import { describe, it, expect, vi } from 'vitest'

vi.mock('next/font/google', () => ({
  Geist: () => ({ className: 'mock-geist', variable: '--font-geist' }),
}))

import { metadata } from '@/app/layout'

// Validates: Requirements 10.2, 10.4

describe('metadata export', () => {
  it('title is a non-empty string', () => {
    expect(typeof metadata.title).toBe('string')
    expect((metadata.title as string).length).toBeGreaterThan(0)
  })

  it('description is a non-empty string', () => {
    expect(typeof metadata.description).toBe('string')
    expect((metadata.description as string).length).toBeGreaterThan(0)
  })

  it('openGraph.title is a non-empty string', () => {
    expect(typeof metadata.openGraph?.title).toBe('string')
    expect((metadata.openGraph?.title as string).length).toBeGreaterThan(0)
  })

  it('openGraph.description is a non-empty string', () => {
    expect(typeof metadata.openGraph?.description).toBe('string')
    expect((metadata.openGraph?.description as string).length).toBeGreaterThan(0)
  })

  it('openGraph.type is a non-empty string', () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const og = metadata.openGraph as any
    expect(typeof og?.type).toBe('string')
    expect((og?.type as string).length).toBeGreaterThan(0)
  })
})
