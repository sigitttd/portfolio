import { describe, it, expect, vi } from 'vitest'
import { render } from '@testing-library/react'
import HeroSection from '@/components/sections/HeroSection'

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

describe('HeroSection', () => {
  it('renders the name "Rahmat Sigit Hidayat"', () => {
    // Validates: Requirements 3.1
    const { getByText } = render(<HeroSection />)
    expect(getByText('Rahmat Sigit Hidayat')).toBeTruthy()
  })

  it('renders the title "Data Analyst"', () => {
    // Validates: Requirements 3.2
    const { getByText } = render(<HeroSection />)
    expect(getByText('Data Analyst')).toBeTruthy()
  })

  it('renders CTA link with href="#projects"', () => {
    // Validates: Requirements 3.4
    const { getByText } = render(<HeroSection />)
    const link = getByText('View Projects').closest('a')
    expect(link?.getAttribute('href')).toBe('#projects')
  })
})
