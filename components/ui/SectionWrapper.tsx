import React from 'react'

interface SectionWrapperProps {
  id: string
  children: React.ReactNode
  className?: string
}

export default function SectionWrapper({ id, children, className }: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`relative max-w-6xl mx-auto px-6 py-24 ${className ?? ''}`}
    >
      {children}
    </section>
  )
}
