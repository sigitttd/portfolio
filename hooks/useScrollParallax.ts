'use client'

import { useScroll, useTransform, useReducedMotion, useMotionValue } from 'framer-motion'
import type { MotionValue, UseScrollOptions } from 'framer-motion'
import type React from 'react'

export interface UseScrollParallaxOptions {
  range?: [number, number]
  offset?: [string, string]
}

export function useScrollParallax(
  ref: React.RefObject<HTMLElement>,
  options?: UseScrollParallaxOptions
): MotionValue<string> {
  const shouldReduce = useReducedMotion()
  const staticValue = useMotionValue('0%')

  const range = options?.range ?? [-8, 8]
  const offset = options?.offset ?? ['start end', 'end start']

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: offset as UseScrollOptions['offset'],
  })

  const parallax = useTransform(
    scrollYProgress,
    [0, 1],
    [`${range[0]}%`, `${range[1]}%`]
  )

  if (shouldReduce) {
    return staticValue
  }

  return parallax
}
