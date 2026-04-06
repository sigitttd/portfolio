'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative border-t border-border-subtle/60 bg-orbit-navy overflow-hidden">
      {/* Subtle top glow */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-electric-blue/20 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm">
        <p className="text-text-dim">
          
        </p>
        <motion.a
          href="#hero"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: 'spring', stiffness: 400, damping: 20 }}
          className="flex items-center gap-1.5 text-text-dim hover:text-electric-blue transition-colors duration-200"
        >
          Back to top
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </motion.a>
      </div>
    </footer>
  )
}
