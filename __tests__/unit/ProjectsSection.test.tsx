import { describe, it, expect, vi } from 'vitest'
import { render } from '@testing-library/react'
import ProjectsSection from '@/components/sections/ProjectsSection'

// Mock framer-motion to avoid animation issues in jsdom
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, className }: { children: React.ReactNode; className?: string }) => (
      <div className={className}>{children}</div>
    ),
  },
  useInView: () => true,
  useReducedMotion: () => false,
}))

// Mock next/image
vi.mock('next/image', () => ({
  default: ({ src, alt }: { src: string; alt: string }) => <img src={src} alt={alt} />,
}))

describe('ProjectsSection', () => {
  it('renders grid container with responsive column classes', () => {
    // Validates: Requirements 6.7
    const { container } = render(<ProjectsSection projects={[]} />)
    const grid = container.querySelector('.grid-cols-1')
    expect(grid).toBeTruthy()
    expect(grid?.className).toContain('grid-cols-1')
    expect(grid?.className).toContain('md:grid-cols-2')
    expect(grid?.className).toContain('xl:grid-cols-3')
  })
})
