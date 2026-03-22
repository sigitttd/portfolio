import { describe, it, expect, vi } from 'vitest'
import { render } from '@testing-library/react'
import ContactSection from '@/components/sections/ContactSection'

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

describe('ContactSection', () => {
  it('renders LinkedIn link with correct href', () => {
    // Validates: Requirements 8.1
    const { getAllByRole } = render(<ContactSection />)
    const links = getAllByRole('link') as HTMLAnchorElement[]
    const linkedinLink = links.find(a => a.href.includes('linkedin.com'))
    expect(linkedinLink).toBeTruthy()
    expect(linkedinLink?.href).toContain('https://linkedin.com/in/[linkedin-username]')
  })

  it('renders GitHub link with correct href', () => {
    // Validates: Requirements 8.2
    const { getAllByRole } = render(<ContactSection />)
    const links = getAllByRole('link') as HTMLAnchorElement[]
    const githubLink = links.find(a => a.href.includes('github.com'))
    expect(githubLink).toBeTruthy()
    expect(githubLink?.href).toContain('https://github.com/[github-username]')
  })

  it('renders Tableau link with correct href', () => {
    // Validates: Requirements 8.3
    const { getAllByRole } = render(<ContactSection />)
    const links = getAllByRole('link') as HTMLAnchorElement[]
    const tableauLink = links.find(a => a.href.includes('tableau.com'))
    expect(tableauLink).toBeTruthy()
    expect(tableauLink?.href).toContain('https://public.tableau.com/app/profile/[tableau-username]')
  })

  it('renders name input field', () => {
    // Validates: Requirements 8.4
    const { getByPlaceholderText } = render(<ContactSection />)
    expect(getByPlaceholderText('Your Name')).toBeTruthy()
  })

  it('renders email input field', () => {
    // Validates: Requirements 8.4
    const { getByPlaceholderText } = render(<ContactSection />)
    expect(getByPlaceholderText('Your Email')).toBeTruthy()
  })

  it('renders message textarea field', () => {
    // Validates: Requirements 8.4
    const { getByPlaceholderText } = render(<ContactSection />)
    expect(getByPlaceholderText('Your Message')).toBeTruthy()
  })
})
