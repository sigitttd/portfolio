'use client'

import { motion } from 'framer-motion'
import type { TimelineEntry, Education } from '@/types'

interface TimelineItemProps {
  item: TimelineEntry
  index: number
}

export default function TimelineItem({ item, index: _index }: TimelineItemProps) {
  const title = item.type === 'work' ? item.role : item.degree
  const organization = item.type === 'work' ? item.organization : item.institution
  const descriptions = item.description ?? []
  const edu = item.type === 'education' ? (item as Education) : null

  return (
    <div className="relative pl-8 pb-10 last:pb-0">
      {/* Vertical line */}
      <div className="absolute left-[7px] top-4 bottom-0 w-px bg-gradient-to-b from-electric-blue/40 via-border-subtle to-transparent last:hidden" />

      {/* Animated dot */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: 'spring', stiffness: 400, damping: 20, delay: 0.1 }}
        className="absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full bg-electric-blue ring-4 ring-orbit-navy shadow-glow-sm"
      />

      <motion.div
        whileHover={{ x: 4 }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        className="bg-surface/80 backdrop-blur-sm border border-border-subtle rounded-xl p-5
          hover:border-electric-blue/40 hover:bg-surface hover:shadow-glow-sm
          transition-colors duration-300 group"
      >
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
          <div>
            <h4 className="text-text-primary font-semibold text-base leading-snug group-hover:text-electric-blue transition-colors duration-200">
              {title}
            </h4>
            <p className="text-electric-blue text-sm font-medium mt-0.5">{organization}</p>
          </div>
          <span className="text-text-dim text-xs font-mono whitespace-nowrap mt-0.5 sm:mt-1 shrink-0 bg-surface border border-border-subtle rounded-md px-2 py-0.5">
            {item.startDate} – {item.endDate}
          </span>
        </div>

        <p className="text-text-dim text-xs mb-3 flex items-center gap-1">
          <svg className="w-3 h-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {item.location}
        </p>

        {(edu?.gpa || edu?.honors) && (
          <div className="flex flex-wrap gap-2 mb-3">
            {edu.gpa && (
              <span className="text-xs px-2 py-0.5 rounded-md bg-electric-blue/10 text-electric-blue border border-electric-blue/20 font-medium">
                GPA {edu.gpa}
              </span>
            )}
            {edu.honors && (
              <span className="text-xs px-2 py-0.5 rounded-md bg-cyan-accent/10 text-cyan-accent border border-cyan-accent/20 font-medium">
                {edu.honors}
              </span>
            )}
          </div>
        )}

        {descriptions.length > 0 && (
          <ul className="space-y-1.5 mt-2">
            {descriptions.map((bullet, i) => (
              <li key={i} className="flex items-start gap-2 text-text-muted text-sm">
                <motion.span
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.05 }}
                  className="mt-1.5 w-1 h-1 rounded-full bg-electric-blue/60 shrink-0"
                />
                {bullet}
              </li>
            ))}
          </ul>
        )}
      </motion.div>
    </div>
  )
}
