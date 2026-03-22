import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render } from '@testing-library/react'
import Navbar from '@/components/layout/Navbar'

// Mock window.scrollY
beforeEach(() => {
  Object.defineProperty(window, 'scrollY', { value: 0, writable: true })
})

describe('Navbar', () => {
  it('renders all 5 navigation links', () => {
    // Validates: Requirements 9.2
    const { getAllByRole } = render(<Navbar />)
    const links = getAllByRole('link')
    expect(links).toHaveLength(5)
  })

  it('renders About link with href="#about"', () => {
    // Validates: Requirements 9.2, 9.3
    const { getByText } = render(<Navbar />)
    const link = getByText('About').closest('a')
    expect(link?.getAttribute('href')).toBe('#about')
  })

  it('renders Skills link with href="#skills"', () => {
    // Validates: Requirements 9.2, 9.3
    const { getByText } = render(<Navbar />)
    const link = getByText('Skills').closest('a')
    expect(link?.getAttribute('href')).toBe('#skills')
  })

  it('renders Projects link with href="#projects"', () => {
    // Validates: Requirements 9.2, 9.3
    const { getByText } = render(<Navbar />)
    const link = getByText('Projects').closest('a')
    expect(link?.getAttribute('href')).toBe('#projects')
  })

  it('renders Experience link with href="#experience"', () => {
    // Validates: Requirements 9.2, 9.3
    const { getByText } = render(<Navbar />)
    const link = getByText('Experience').closest('a')
    expect(link?.getAttribute('href')).toBe('#experience')
  })

  it('renders Contact link with href="#contact"', () => {
    // Validates: Requirements 9.2, 9.3
    const { getByText } = render(<Navbar />)
    const link = getByText('Contact').closest('a')
    expect(link?.getAttribute('href')).toBe('#contact')
  })
})
