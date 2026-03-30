'use client'

import Image from 'next/image'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionWrapper from '@/components/ui/SectionWrapper'
import SectionHeading from '@/components/ui/SectionHeading'
import { personalInfo } from '@/data/portfolioData'

const contactLinks = [
  {
    label: 'LinkedIn',
    getHref: (info: typeof personalInfo) => info.linkedin,
    icon: (
      <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    getHref: (info: typeof personalInfo) => info.github,
    icon: (
      <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    label: 'Tableau',
    getHref: (info: typeof personalInfo) => info.tableau,
    icon: (
      <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
        <path d="M11.654 0v2.56H9.976V0H8.3v2.56H6.62V0H4.944v2.56H3.267V0H1.59v2.56H0v1.677h1.59V6.62H0v1.677h1.59v2.383H0v1.677h1.59v2.383H0v1.677h1.59V18.8H0v1.677h1.59v2.383H0V24h1.59v-2.14h1.677V24h1.677v-2.14h1.677V24h1.677v-2.14h1.677V24h1.677v-2.14h1.677V24h1.677v-2.14h1.677V24H18.8v-2.14h1.677V24h1.677v-2.14H24V24h-2.14v-1.677H24v-1.677h-2.14v-1.677H24v-1.677h-2.14v-1.677H24V13.96h-2.14v-1.677H24v-1.677h-2.14V8.223H24V6.546h-2.14V4.237H24V2.56h-2.14V0h-1.677v2.56h-1.677V0h-1.677v2.56h-1.677V0h-1.677v2.56h-1.677V0zm.323 3.267h1.677v1.677h-1.677zm-3.354 0h1.677v1.677H8.623zm6.708 0h1.677v1.677h-1.677zM5.27 4.944h1.677v1.677H5.27zm6.708 0h1.677v1.677h-1.677zm6.708 0h1.677v1.677h-1.677zM3.593 6.62H5.27v1.677H3.593zm3.354 0h1.677v1.677H6.947zm3.354 0h1.677v1.677H10.3zm3.354 0h1.677v1.677h-1.677zm3.354 0h1.677v1.677h-1.677z" />
      </svg>
    ),
  },
  {
    label: 'Email',
    getHref: (info: typeof personalInfo) => `mailto:${info.email}`,
    icon: (
      <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: 'Phone',
    getHref: (info: typeof personalInfo) => `tel:+${info.phone}`,
    icon: (
      <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
]

const keyStats = [
  { value: '3.96', label: 'GPA', detail: 'Summa Cum Laude' },
  { value: '10+', label: 'Projects', detail: 'Delivered' },
  { value: '5', label: 'Roles', detail: 'Work & Intern' },
  { value: '4+', label: 'Years', detail: 'in Data Science' },
]

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  const imageY = useTransform(scrollYProgress, [0, 1], ['-4%', '4%'])
  const textY = useTransform(scrollYProgress, [0, 1], ['2%', '-2%'])

  return (
    <div ref={sectionRef} className="relative overflow-hidden pb-16 md:pb-24">
      {/* Top divider */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border-subtle to-transparent" />

      {/* Background glows */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.08, 1], opacity: [0.03, 0.06, 0.03] }}
          transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
          className="w-full h-full rounded-full bg-electric-blue blur-[130px]"
        />
      </div>
      <div className="absolute left-0 bottom-0 w-[400px] h-[400px] rounded-full pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.02, 0.05, 0.02] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
          className="w-full h-full rounded-full bg-cyan-accent blur-[120px]"
        />
      </div>

      <SectionWrapper id="about">
        <div className="grid md:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* ── LEFT: Image ── */}
          <AnimatedSection variant="slideInLeft">
            <motion.div style={{ y: imageY }} className="relative w-full max-w-sm mx-auto">

              {/* Outer glow ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-4 rounded-3xl pointer-events-none"
                style={{
                  background: 'conic-gradient(from 0deg, transparent 60%, rgba(0,102,255,0.18) 80%, rgba(0,212,255,0.1) 90%, transparent 100%)',
                  borderRadius: '1.5rem',
                }}
              />

              {/* Glass frame */}
              <div className="relative rounded-2xl overflow-hidden border border-border-subtle/70 shadow-card bg-surface/40 backdrop-blur-sm">
                <div className="relative w-full aspect-[4/5]">
                  <Image
                    src="/pictinporto/image009.png"
                    alt={`Portrait of ${personalInfo.name}`}
                    fill
                    sizes="(max-width: 768px) 90vw, 400px"
                    className="object-cover object-top transition-transform duration-700 hover:scale-[1.03]"
                    priority
                  />
                  <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-orbit-navy/80 via-orbit-navy/30 to-transparent" />
                </div>
              </div>

              {/* Floating availability badge */}
              <motion.div
                animate={{ y: [0, -7, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-3 -right-3 flex items-center gap-2 bg-surface/90 backdrop-blur-md
                  border border-electric-blue/40 rounded-full px-3.5 py-2 shadow-glow-sm"
              >
                <motion.span
                  animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-2 h-2 rounded-full bg-electric-blue shrink-0"
                />
                <span className="text-electric-blue text-sm font-semibold whitespace-nowrap">Open to Work</span>
              </motion.div>

              {/* Floating stat badge */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
                className="absolute -bottom-5 -left-3 bg-surface/90 backdrop-blur-md
                  border border-border-subtle rounded-xl px-4 py-2.5 shadow-card"
              >
                <p className="text-gradient-subtle text-xl font-bold leading-none">Rahmat Sigit Hidayat</p>
                <p className="text-gradient text-base font-bold leading-none">Data Science</p>
                <p className="text-text-dim text-xs mt-0.5">Telkom University</p>
              </motion.div>
            </motion.div>
          </AnimatedSection>

          {/* ── RIGHT: Text ── */}
          <AnimatedSection delay={0.12} variant="slideInRight">
            <motion.div style={{ y: textY }}>
              <SectionHeading title="About Me" />

              {/* Key stats */}
              <div className="flex gap-4 mb-7">
                {keyStats.map((s, i) => (
                  <motion.div
                    key={s.label}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="flex-1 bg-surface/70 backdrop-blur-sm border border-border-subtle rounded-xl p-3 text-center
                      hover:border-electric-blue/40 transition-colors duration-200"
                  >
                    <p className="text-gradient text-xl font-bold">{s.value}</p>
                    <p className="text-text-primary text-xs font-semibold">{s.label}</p>
                    <p className="text-text-dim text-xs">{s.detail}</p>
                  </motion.div>
                ))}
              </div>

              {/* Bio */}
              <p className="text-text-muted text-base leading-relaxed mb-8 text-justify">
                {personalInfo.about}
              </p>

              {/* Contact buttons */}
              <div className="flex flex-wrap gap-2">
                {contactLinks.map((link, i) => (
                  <motion.a
                    key={link.label}
                    href={link.getHref(personalInfo)}
                    target={link.label === 'Email' || link.label === 'Phone' ? '_self' : '_blank'}
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.88 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.07, duration: 0.4, ease: 'easeOut' }}
                    whileHover={{ scale: 1.07, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg
                      bg-surface/80 backdrop-blur-sm border border-border-subtle
                      hover:border-electric-blue/50 hover:bg-electric-blue/5 hover:text-electric-blue hover:shadow-glow-sm
                      text-text-muted text-sm font-medium transition-all duration-200"
                  >
                    {link.icon}
                    {link.label}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </AnimatedSection>

        </div>
      </SectionWrapper>
    </div>
  )
}
