'use client'

interface SkillBadgeProps {
  label: string
}

export default function SkillBadge({ label }: SkillBadgeProps) {
  return (
    <span className="inline-block px-3 py-1.5 rounded-lg text-sm font-medium bg-surface text-text-muted border border-border-subtle transition-all duration-200 hover:border-electric-blue hover:text-text-primary hover:shadow-glow-sm hover:scale-105 cursor-default select-none">
      {label}
    </span>
  )
}
