'use client'

import React from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'

interface AnimatedSectionProps {
  children: React.ReactNode
  delay?: number
  className?: string
}

const fadeSlide = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function AnimatedSection({ children, delay = 0, className }: AnimatedSectionProps) {
  const ref = React.useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const shouldReduce = useReducedMotion()

  if (shouldReduce) {
    return (
      <div ref={ref} data-animate="visible" className={className}>
        {children}
      </div>
    )
  }

  return (
    <motion.div
      ref={ref}
      variants={fadeSlide}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      transition={delay ? { delay } : undefined}
      className={className}
    >
      {children}
    </motion.div>
  )
}
