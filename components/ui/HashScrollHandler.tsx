'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

/**
 * Handles smooth scrolling to a hash section after navigation.
 * Needed because Next.js App Router doesn't auto-scroll to hash on push.
 */
export default function HashScrollHandler() {
  const pathname = usePathname()

  useEffect(() => {
    const hash = window.location.hash
    if (!hash) return

    const id = hash.slice(1)

    // Try immediately, then retry after a short delay for late-rendering sections
    const scroll = () => {
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
        return true
      }
      return false
    }

    if (!scroll()) {
      const timer = setTimeout(scroll, 120)
      return () => clearTimeout(timer)
    }
  }, [pathname])

  return null
}
