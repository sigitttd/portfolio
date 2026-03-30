'use client'

import { motion } from 'framer-motion'
import SectionWrapper from '@/components/ui/SectionWrapper'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { personalInfo } from '@/data/portfolioData'

export default function ContactSection() {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border-subtle to-transparent" />

      {/* Background glow */}
      <div className="absolute inset-x-0 top-0 h-[500px] pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.08, 1], opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-electric-blue blur-[130px]"
        />
      </div>

      <SectionWrapper id="contact">
        <AnimatedSection variant="fadeSlideUp">
          <div className="max-w-4xl mx-auto text-center">

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 24, filter: 'blur(6px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6"
            >
              <span className="text-text-primary">Ready to Turn Your </span>
              <span className="text-gradient">Data</span>
              <span className="text-text-primary"> into </span>
              <span className="text-gradient">Actionable Insights?</span>
            </motion.h2>

            {/* Sub-text */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.18 }}
              className="text-text-muted text-lg md:text-xl leading-relaxed mb-10"
            >
              Let&apos;s discuss how I can help your team make smarter decisions.
            </motion.p>

            {/* CTA button */}
            {/* <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.28 }}
              className="mb-8"
            >
              <motion.a
                href={`mailto:${personalInfo.email}`}
                whileHover={{ scale: 1.06, y: -3 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-electric-blue text-white font-bold text-base
                  hover:bg-blue-glow hover:shadow-glow-md transition-all duration-200 relative overflow-hidden group"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
                <svg className="w-4 h-4 relative z-10 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="relative z-10">Let's Connect</span>
              </motion.a>
            </motion.div> */}
            {/* CTA button */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.28 }}
              className="mb-8"
            >
              <motion.a
                href={`mailto:${personalInfo.email}`}
                whileHover={{ scale: 1.06, y: -3 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                className="inline-flex items-center justify-center px-10 py-5 rounded-xl bg-electric-blue text-white font-bold text-xl
                  hover:bg-blue-glow hover:shadow-glow-md transition-all duration-200 relative overflow-hidden group"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
                <span className="text-1xl relative z-10">Let's Connect</span>
              </motion.a>
            </motion.div>

            {/* Availability note */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-text-dim text-sm leading-relaxed"
            >
              Currently open to full-time roles, freelance projects, and collaborations in{' '}
              <span className="text-text-muted font-medium">Data Analytics and Business Intelligence.</span>
            </motion.p>

          </div>
        </AnimatedSection>
      </SectionWrapper>
    </div>
  )
}
