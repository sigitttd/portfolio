'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { personalInfo } from '@/data/portfolioData'

// Headline primary line segments: [text, isHighlighted]
const headlinePrimary: [string, boolean][] = [
  ['Turning ', false],
  ['raw data', true],
  [' into ', false],
  ['actionable insights', true],
]

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const blobY = useTransform(scrollYProgress, [0, 1], ['0%', '28%'])
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '10%'])
  const opacity = useTransform(scrollYProgress, [0, 0.65], [1, 0])

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-orbit-navy"
    >
      {/* Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-100" />

      {/* Noise */}
      <div className="absolute inset-0 noise-overlay pointer-events-none" />

      {/* Primary glow blob — centered behind headline */}
      <motion.div
        style={{ y: blobY }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] rounded-full pointer-events-none"
      >
        <motion.div
          animate={{ scale: [1, 1.06, 1], opacity: [0.07, 0.12, 0.07] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
          className="w-full h-full rounded-full bg-electric-blue blur-[160px]"
        />
      </motion.div>

      {/* Cyan accent blob — bottom right */}
      <motion.div
        style={{ y: blobY }}
        className="absolute -bottom-20 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
      >
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.05, 0.09, 0.05] }}
          transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="w-full h-full rounded-full bg-cyan-accent blur-[130px]"
        />
      </motion.div>

      {/* Top-left accent */}
      <motion.div
        style={{ y: blobY }}
        className="absolute -top-10 left-0 w-[350px] h-[350px] rounded-full pointer-events-none"
      >
        <motion.div
          animate={{ scale: [1, 1.08, 1], opacity: [0.04, 0.07, 0.04] }}
          transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut', delay: 5 }}
          className="w-full h-full rounded-full bg-electric-blue blur-[100px]"
        />
      </motion.div>

      {/* Corner brackets */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 1 }}
        className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-electric-blue/20 rounded-tl-sm pointer-events-none"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 1.1 }}
        className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-electric-blue/20 rounded-br-sm pointer-events-none"
      />

      {/* Floating particles */}
      {[...Array(7)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-electric-blue/25 pointer-events-none"
          style={{
            width: i % 2 === 0 ? 3 : 2,
            height: i % 2 === 0 ? 3 : 2,
            left: `${10 + i * 13}%`,
            top: `${15 + (i % 4) * 20}%`,
          }}
          animate={{ y: [0, -18, 0], opacity: [0.15, 0.55, 0.15] }}
          transition={{
            duration: 4.5 + i * 0.7,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.5,
          }}
        />
      ))}

      {/* ── CONTENT ── */}
      <motion.div
        style={{ y: contentY, opacity }}
        className="relative z-10 w-full max-w-5xl mx-auto px-6 text-center"
      >
        {/* Label badge — static, no animated dot */}
        <motion.div
          initial={{ opacity: 0, y: 16, scale: 0.94 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center px-4 py-1.5 rounded-full
            border border-electric-blue/30 bg-electric-blue/5 backdrop-blur-sm
            text-electric-blue text-sm font-medium mb-8 tracking-wide"
        >
          Data Analyst &amp; Business Intelligence Enthusiast
        </motion.div>

        {/* ── MAIN HEADLINE ── */}
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.07, delayChildren: 0.15 } },
          }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.08] tracking-tight mb-3"
          aria-label={personalInfo.tagline}
        >
          {headlinePrimary.map(([text, highlight], i) =>
            highlight ? (
              <motion.span
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 36, filter: 'blur(8px)' },
                  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
                }}
                className="text-gradient inline"
              >
                {text}
              </motion.span>
            ) : (
              <motion.span
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 28, filter: 'blur(6px)' },
                  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
                }}
                className="text-text-primary inline"
              >
                {text}
              </motion.span>
            )
          )}
        </motion.h1>

        {/* Secondary headline line — lower emphasis */}
        <motion.p
          initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.48 }}
          className="text-2xl sm:text-3xl md:text-4xl font-light text-text-muted/70 tracking-tight mb-8"
        >
          — one dashboard at a time.
        </motion.p>

        {/* Name + title sub-line */}
        <motion.p
          initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.55 }}
          className="text-text-muted text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10"
        >
          Hi, I&apos;m{' '}
          <span className="text-text-primary font-semibold">{personalInfo.name}</span>
          {' '}— {personalInfo.title} helping teams make smarter decisions through data.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.62 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          {/* Primary */}
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 400, damping: 18 }}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-electric-blue text-white font-semibold text-sm
              hover:bg-blue-glow hover:shadow-glow-md transition-all duration-200 relative overflow-hidden group"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
            View Projects
            <svg className="w-4 h-4 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 13l5 5m0 0l5-5m-5 5V6" />
            </svg>
          </motion.a>

          {/* Secondary */}
          <motion.a
            href="/cvporto/Curriculum_Vitae_Rahmat_Sigit_Hidayat.pdf"
            download
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 400, damping: 18 }}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl border border-electric-blue/50 text-electric-blue font-semibold text-sm
              hover:bg-electric-blue/10 hover:border-electric-blue hover:shadow-glow-sm transition-all duration-200"
          >
            Download CV
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </motion.a>

          {/* Ghost */}
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 400, damping: 18 }}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl border border-border-subtle text-text-muted font-semibold text-sm
              hover:border-electric-blue/60 hover:text-text-primary transition-all duration-200"
          >
            Get in Touch
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-16 flex flex-col items-center gap-2 text-text-dim text-xs tracking-widest uppercase"
        >
          <span>Scroll to explore</span>
          <motion.div
            animate={{ scaleY: [0.5, 1, 0.5], opacity: [0.3, 0.9, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-px h-8 bg-gradient-to-b from-electric-blue/70 to-transparent"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
