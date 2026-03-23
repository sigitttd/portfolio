'use client'

import { motion } from 'framer-motion'

interface SkillBadgeProps {
  label: string
}

export default function SkillBadge({ label }: SkillBadgeProps) {
  return (
    <motion.span
      whileHover={{ scale: 1.08, y: -2 }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
      className="inline-block px-3 py-1.5 rounded-lg text-sm font-medium
        bg-surface text-text-muted border border-border-subtle
        hover:border-electric-blue/60 hover:text-text-primary
        hover:bg-electric-blue/5 hover:shadow-glow-sm
        cursor-default select-none transition-colors duration-200"
    >
      {label}
    </motion.span>
  )
}
