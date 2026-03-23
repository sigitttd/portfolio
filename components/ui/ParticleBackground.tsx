'use client'

import { useEffect, useState, useCallback } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

interface Particle {
  id: number
  x: number       // vw %
  y: number       // vh %
  size: number    // 1–3 px
  opacity: number // 0.05–0.25
  duration: number // 4–12 s
  driftX: number  // ±10 px
  driftY: number  // ±20 px
  delay: number   // 0–4 s stagger
}

const PARTICLE_COUNT = 40

/**
 * Deterministic seeded pseudo-random based on index.
 * Returns a value in [0, 1). SSR-safe — no Math.random().
 */
function seededRandom(seed: number): number {
  const x = Math.sin(seed + 1) * 10000
  return x - Math.floor(x)
}

function generateParticles(count: number): Particle[] {
  return Array.from({ length: count }, (_, i) => {
    const r = (offset: number) => seededRandom(i * 11 + offset)
    return {
      id: i,
      x: r(0) * 100,
      y: r(1) * 100,
      size: 1 + r(2) * 2,           // 1–3
      opacity: 0.05 + r(3) * 0.20,  // 0.05–0.25
      duration: 4 + r(4) * 8,       // 4–12
      driftX: (r(5) - 0.5) * 20,    // ±10
      driftY: (r(6) - 0.5) * 40,    // ±20
      delay: r(7) * 4,              // 0–4
    }
  })
}

export default function ParticleBackground() {
  const shouldReduce = useReducedMotion()
  const [particles, setParticles] = useState<Particle[]>(() => generateParticles(PARTICLE_COUNT))
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const clampParticles = useCallback(() => {
    setParticles(generateParticles(PARTICLE_COUNT))
  }, [])

  useEffect(() => {
    if (!mounted) return
    let timer: ReturnType<typeof setTimeout>
    const onResize = () => {
      clearTimeout(timer)
      timer = setTimeout(clampParticles, 100)
    }
    window.addEventListener('resize', onResize)
    return () => {
      clearTimeout(timer)
      window.removeEventListener('resize', onResize)
    }
  }, [mounted, clampParticles])

  if (!mounted) return null

  return (
    <div
      aria-hidden="true"
      style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }}
    >
      {particles.map((p) => (
        <motion.div
          key={p.id}
          data-testid="particle"
          data-opacity={p.opacity}
          style={{
            position: 'fixed',
            left: `${p.x}vw`,
            top: `${p.y}vh`,
            width: p.size,
            height: p.size,
            borderRadius: '50%',
            backgroundColor: '#00D4FF',
            opacity: p.opacity,
            zIndex: 0,
            pointerEvents: 'none',
            willChange: 'transform',
          }}
          {...(!shouldReduce && {
            animate: {
              x: [0, p.driftX, 0],
              y: [0, p.driftY, 0],
            },
            transition: {
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            },
          })}
        />
      ))}
    </div>
  )
}
