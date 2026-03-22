// Feature: rahmat-portfolio-website, Property 6: Contact Form Validation
import { describe, it, expect, vi } from 'vitest'
import { render, fireEvent } from '@testing-library/react'
import * as fc from 'fast-check'

vi.mock('framer-motion', async () => {
  const actual = await vi.importActual<typeof import('framer-motion')>('framer-motion')
  return {
    ...actual,
    useInView: () => true,
    useReducedMotion: () => false,
    motion: {
      ...((actual as any).motion ?? {}),
      div: ({ children, ...props }: React.HTMLAttributes<HTMLDivElement> & { children?: React.ReactNode }) => (
        <div {...props}>{children}</div>
      ),
    },
  }
})

import ContactSection from '@/components/sections/ContactSection'

/** Property 6: Contact Form Validation
 * **Validates: Requirements 8.5**
 */
describe('Property 6: Contact Form Validation', () => {
  it('shows at least one inline error when at least one field is empty/whitespace', () => {
    fc.assert(
      fc.property(
        fc.record({
          name: fc.oneof(fc.constant(''), fc.string()),
          email: fc.oneof(fc.constant(''), fc.string()),
          message: fc.oneof(fc.constant(''), fc.string()),
        }).filter(({ name, email, message }) =>
          !name.trim() || !email.trim() || !message.trim()
        ),
        ({ name: nameValue, email: emailValue, message: messageValue }) => {
          const { container, unmount } = render(<ContactSection />)

          const nameInput = container.querySelector('input[name="name"]') as HTMLInputElement
          const emailInput = container.querySelector('input[name="email"]') as HTMLInputElement
          const messageInput = container.querySelector('textarea[name="message"]') as HTMLTextAreaElement

          fireEvent.change(nameInput, { target: { name: 'name', value: nameValue } })
          fireEvent.change(emailInput, { target: { name: 'email', value: emailValue } })
          fireEvent.change(messageInput, { target: { name: 'message', value: messageValue } })

          const submitButton = container.querySelector('button[type="submit"]') as HTMLButtonElement
          fireEvent.click(submitButton)

          const errorElements = container.querySelectorAll('[data-testid^="error-"]')
          expect(errorElements.length).toBeGreaterThan(0)

          unmount()
        }
      ),
      { numRuns: 100 }
    )
  })
})
