'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface SectionHeadingProps {
  title: string
  subtitle?: string
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <div ref={ref} className="mb-12">
      <motion.h2
        initial={{ opacity: 0, y: 24, filter: 'blur(4px)' }}
        animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="text-3xl md:text-4xl font-bold tracking-tight"
      >
        <span className="text-gradient">{title}</span>
      </motion.h2>

      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={inView ? { scaleX: 1, opacity: 1 } : {}}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
        style={{ originX: 0 }}
        className="flex items-center gap-3 mt-3"
      >
        <span className="block w-10 h-[3px] rounded-full bg-electric-blue shadow-glow-sm" />
        <span className="block w-3 h-[3px] rounded-full bg-electric-blue/40" />
      </motion.div>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.25 }}
          className="mt-4 text-text-muted text-base max-w-xl leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}
