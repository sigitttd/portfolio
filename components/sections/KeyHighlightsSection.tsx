'use client'

import { motion } from 'framer-motion'
import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionWrapper from '@/components/ui/SectionWrapper'
import SectionHeading from '@/components/ui/SectionHeading'

const highlights = [
  'GPA 3.96 — Summa Cum Laude (Data Science Graduate)',
  '10+ Data Projects across analytics, BI, and machine learning',
  'Built interactive dashboards using Tableau & Looker Studio',
  'Presented research at International Conference (ICoDSA 2025)',
  'Experience: Internship, Freelance, and Business Intelligence role',
]

export default function KeyHighlightsSection() {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border-subtle to-transparent" />

      <SectionWrapper id="highlights">
        <AnimatedSection>
          <SectionHeading
            title="Key Highlights"
            subtitle="A quick snapshot of what I bring to the table."
          />
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {highlights.map((item, i) => (
            <AnimatedSection key={i} delay={i * 0.07}>
              <motion.div
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                className="flex items-start gap-3 bg-surface/80 backdrop-blur-sm border border-border-subtle rounded-2xl p-5
                  hover:border-electric-blue/40 hover:bg-surface hover:shadow-glow-sm
                  transition-colors duration-300 group"
              >
                <motion.span
                  animate={{ rotate: [0, 15, -15, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: i * 0.5 }}
                  className="mt-0.5 text-electric-blue text-lg leading-none shrink-0"
                >
                  ✦
                </motion.span>
                <p className="text-text-muted text-sm leading-relaxed group-hover:text-text-primary transition-colors duration-200">
                  {item}
                </p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </SectionWrapper>
    </div>
  )
}
