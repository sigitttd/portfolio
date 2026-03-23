'use client'

import React from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'

interface AnimatedSectionProps {
  children: React.ReactNode
  delay?: number
  className?: string
  variant?: 'fadeSlideUp' | 'fadeIn' | 'scaleIn' | 'slideInLeft' | 'slideInRight'
}

const variants = {
  fadeSlideUp: {
    hidden: { opacity: 0, y: 32, filter: 'blur(4px)' },
    visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.93 },
    visible: { opacity: 1, scale: 1 },
  },
  slideInLeft: {
    hidden: { opacity: 0, x: -36, filter: 'blur(4px)' },
    visible: { opacity: 1, x: 0, filter: 'blur(0px)' },
  },
  slideInRight: {
    hidden: { opacity: 0, x: 36, filter: 'blur(4px)' },
    visible: { opacity: 1, x: 0, filter: 'blur(0px)' },
  },
}

export default function AnimatedSection({
  children,
  delay = 0,
  className,
  variant = 'fadeSlideUp',
}: AnimatedSectionProps) {
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
      variants={variants[variant]}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
