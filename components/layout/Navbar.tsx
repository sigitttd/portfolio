'use client'

import { useEffect, useRef, useState } from 'react'

const NAV_LINKS = [
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Skills', href: '#skills', id: 'skills' },
  { label: 'Projects', href: '#projects', id: 'projects' },
  { label: 'Experience', href: '#experience', id: 'experience' },
  { label: 'Contact', href: '#contact', id: 'contact' },
]

export default function Navbar() {
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { threshold: 0.5 }
    )

    NAV_LINKS.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observerRef.current!.observe(el)
    })

    return () => observerRef.current?.disconnect()
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-orbit-navy/85 backdrop-blur-md border-b border-border-subtle shadow-[0_1px_20px_rgba(0,0,0,0.4)]'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="text-text-primary font-bold text-lg tracking-tight hover:text-electric-blue transition-colors duration-200">
          Rahmat<span className="text-electric-blue">.</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map(({ label, href, id }) => {
            const isActive = activeSection === id
            return (
              <li key={id}>
                <a
                  href={href}
                  className={`relative px-3 py-1.5 text-sm font-medium rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'text-electric-blue bg-electric-blue/8'
                      : 'text-text-muted hover:text-text-primary hover:bg-surface'
                  }`}
                >
                  {label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-electric-blue" />
                  )}
                </a>
              </li>
            )
          })}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-text-muted hover:text-text-primary transition-colors duration-200 p-1"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-orbit-navy/95 backdrop-blur-md border-t border-border-subtle px-6 py-4 space-y-1">
          {NAV_LINKS.map(({ label, href, id }) => (
            <a
              key={id}
              href={href}
              onClick={() => setMenuOpen(false)}
              className={`block px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                activeSection === id
                  ? 'text-electric-blue bg-electric-blue/8'
                  : 'text-text-muted hover:text-text-primary hover:bg-surface'
              }`}
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
