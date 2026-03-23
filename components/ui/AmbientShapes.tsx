'use client'

import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

interface AmbientShape {
  id: number
  type: 'circle' | 'rounded-rect'
  x: number        // vw %
  y: number        // vh %
  width: number    // 40–120 px
  height: number   // 40–120 px
  floatRange: number  // 8–18 px
  duration: number    // 5–10 s
  delay: number       // 0–3 s
  opacity: number     // 0.03–0.08
}

/**
 * Deterministic seeded pseudo-random based on index.
 * Returns a value in [0, 1). SSR-safe — no Math.random().
 */
function seededRandom(seed: number): number {
  const x = Math.sin(seed + 1) * 10000
  return x - Math.floor(x)
}

const SHAPES: AmbientShape[] = [
  {
    id: 0,
    type: 'circle',
    x: seededRandom(0) * 100,
    y: seededRandom(1) * 100,
    width: 40 + seededRandom(2) * 80,
    height: 40 + seededRandom(3) * 80,
    floatRange: 8 + seededRandom(4) * 10,
    duration: 5 + seededRandom(5) * 5,
    delay: seededRandom(6) * 3,
    opacity: 0.03 + seededRandom(7) * 0.05,
  },
  {
    id: 1,
    type: 'rounded-rect',
    x: seededRandom(11) * 100,
    y: seededRandom(12) * 100,
    width: 40 + seededRandom(13) * 80,
    height: 40 + seededRandom(14) * 80,
    floatRange: 8 + seededRandom(15) * 10,
    duration: 5 + seededRandom(16) * 5,
    delay: seededRandom(17) * 3,
    opacity: 0.03 + seededRandom(18) * 0.05,
  },
  {
    id: 2,
    type: 'circle',
    x: seededRandom(22) * 100,
    y: seededRandom(23) * 100,
    width: 40 + seededRandom(24) * 80,
    height: 40 + seededRandom(25) * 80,
    floatRange: 8 + seededRandom(26) * 10,
    duration: 5 + seededRandom(27) * 5,
    delay: seededRandom(28) * 3,
    opacity: 0.03 + seededRandom(29) * 0.05,
  },
  {
    id: 3,
    type: 'rounded-rect',
    x: seededRandom(33) * 100,
    y: seededRandom(34) * 100,
    width: 40 + seededRandom(35) * 80,
    height: 40 + seededRandom(36) * 80,
    floatRange: 8 + seededRandom(37) * 10,
    duration: 5 + seededRandom(38) * 5,
    delay: seededRandom(39) * 3,
    opacity: 0.03 + seededRandom(40) * 0.05,
  },
  {
    id: 4,
    type: 'circle',
    x: seededRandom(44) * 100,
    y: seededRandom(45) * 100,
    width: 40 + seededRandom(46) * 80,
    height: 40 + seededRandom(47) * 80,
    floatRange: 8 + seededRandom(48) * 10,
    duration: 5 + seededRandom(49) * 5,
    delay: seededRandom(50) * 3,
    opacity: 0.03 + seededRandom(51) * 0.05,
  },
]

export default function AmbientShapes() {
  const shouldReduce = useReducedMotion()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div aria-hidden="true" style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
      {SHAPES.map((shape) => {
        const borderRadius =
          shape.type === 'circle'
            ? '50%'
            : `${Math.min(shape.width, shape.height) * 0.25}px`

        return (
          <motion.div
            key={shape.id}
            data-testid="ambient-shape"
            data-opacity={shape.opacity}
            style={{
              position: 'fixed',
              left: `${shape.x}vw`,
              top: `${shape.y}vh`,
              width: shape.width,
              height: shape.height,
              borderRadius,
              backgroundColor: '#0066FF',
              opacity: shape.opacity,
              zIndex: 0,
              pointerEvents: 'none',
            }}
            {...(!shouldReduce && {
              animate: {
                y: [0, shape.floatRange, 0],
              },
              transition: {
                duration: shape.duration,
                delay: shape.delay,
                repeat: Infinity,
                ease: 'easeInOut',
              },
            })}
          />
        )
      })}
    </div>
  )
}
