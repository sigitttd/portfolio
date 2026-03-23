'use client'

import Image from 'next/image'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionWrapper from '@/components/ui/SectionWrapper'
import SectionHeading from '@/components/ui/SectionHeading'
import { personalInfo } from '@/data/portfolioData'

const highlights = [
  { label: 'Data Analysis', icon: '📊' },
  { label: 'Machine Learning', icon: '🤖' },
  { label: 'Data Visualization', icon: '📈' },
  { label: 'Business Intelligence', icon: '💡' },
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
  // Subtle parallax: image moves slightly slower than text
  const imageY = useTransform(scrollYProgress, [0, 1], ['-4%', '4%'])
  const textY = useTransform(scrollYProgress, [0, 1], ['2%', '-2%'])

  return (
    <div ref={sectionRef} className="relative overflow-hidden">
      {/* Top divider */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border-subtle to-transparent" />

      {/* Background glow */}
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

              {/* Outer glow ring — rotates slowly */}
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
                {/* Aspect ratio container */}
                <div className="relative w-full aspect-[4/5]">
                  <Image
                    src="/pictinporto/image009.png"
                    alt={`Portrait of ${personalInfo.name}`}
                    fill
                    sizes="(max-width: 768px) 90vw, 400px"
                    className="object-cover object-top transition-transform duration-700 hover:scale-[1.03]"
                    priority
                  />
                  {/* Bottom gradient overlay */}
                  <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-orbit-navy/80 via-orbit-navy/30 to-transparent" />

                  {/* Name overlay at bottom of image */}
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    {/* <p className="text-text-primary font-bold text-lg leading-tight">{personalInfo.name}</p>
                    <p className="text-electric-blue text-sm font-medium">{personalInfo.title}</p> */}
                  </div>
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
                <span className="text-electric-blue text-m font-semibold whitespace-nowrap">Open to Work</span>
              </motion.div>

              {/* Floating stat badge — bottom left */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
                className="absolute -bottom-5 -left-3 bg-surface/90 backdrop-blur-md
                  border border-border-subtle rounded-xl px-4 py-2.5 shadow-card"
              >
                <p className="text-gradient-subtle text-xl font-bold leading-none">Rahmat Sigit Hidayat</p>
                <p className="text-gradient text-l font-bold leading-none">Data Science</p>
                <p className="text-text-dim text-xs mt-0.5">Telkom-University</p>
              </motion.div>
            </motion.div>
          </AnimatedSection>

          {/* ── RIGHT: Text ── */}
          <AnimatedSection delay={0.12} variant="slideInRight">
            <motion.div style={{ y: textY }}>
              <SectionHeading title="About Me" />

              {/* Key stats row */}
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
              <p className="text-text-muted text-base leading-relaxed mb-8">
                {personalInfo.about}
              </p>

              {/* Highlight chips */}
              <div className="flex flex-wrap gap-2">
                {highlights.map((h, i) => (
                  <motion.span
                    key={h.label}
                    initial={{ opacity: 0, scale: 0.88 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.07, duration: 0.4, ease: 'easeOut' }}
                    whileHover={{ scale: 1.07, y: -2 }}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg
                      bg-surface/80 backdrop-blur-sm border border-border-subtle
                      hover:border-electric-blue/50 hover:bg-electric-blue/5 hover:shadow-glow-sm
                      text-text-muted text-sm transition-all duration-200 cursor-default"
                  >
                    <span>{h.icon}</span>
                    {h.label}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </SectionWrapper>
    </div>
  )
}
