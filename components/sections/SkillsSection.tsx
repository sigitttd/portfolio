'use client'

import { motion } from 'framer-motion'
import { skills as defaultSkills } from '@/data/portfolioData'
import type { SkillCategory } from '@/types'
import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionWrapper from '@/components/ui/SectionWrapper'
import SectionHeading from '@/components/ui/SectionHeading'
import SkillBadge from '@/components/ui/SkillBadge'

interface SkillsSectionProps {
  skills?: SkillCategory[]
}

const CATEGORY_ICONS: Record<string, string> = {
  'Data & Analysis': '📊',
  'Programming & Libraries': '💻',
  'Data Visualization & BI Tools': '📈',
  'Soft & Creative Skills': '🎨',
}

const CATEGORY_COLORS: Record<string, string> = {
  'Data & Analysis': 'from-electric-blue/10 to-transparent',
  'Programming & Libraries': 'from-cyan-accent/8 to-transparent',
  'Data Visualization & BI Tools': 'from-electric-blue/8 to-transparent',
  'Soft & Creative Skills': 'from-cyan-accent/6 to-transparent',
}

export default function SkillsSection({ skills }: SkillsSectionProps) {
  const skillCategories = skills ?? defaultSkills

  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border-subtle to-transparent" />
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.03, 0.06, 0.03] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
          className="w-full h-full rounded-full bg-electric-blue blur-[100px]"
        />
      </div>

      <SectionWrapper id="skills">
        <AnimatedSection>
          <SectionHeading
            title="Skills"
            subtitle="A curated set of technologies and methodologies I use to turn data into decisions."
          />
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 gap-6">
          {skillCategories.map((category, i) => (
            <AnimatedSection key={category.category} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                className={`relative bg-surface/80 backdrop-blur-sm border border-border-subtle rounded-2xl p-6 h-full
                  hover:border-electric-blue/40 hover:shadow-card-hover transition-colors duration-300 overflow-hidden group`}
              >
                {/* Gradient bg on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${CATEGORY_COLORS[category.category] ?? 'from-electric-blue/5 to-transparent'} opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-2xl`} />

                {/* Animated border glow */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ boxShadow: 'inset 0 0 0 1px rgba(0,102,255,0.2)' }}
                />

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-xl bg-electric-blue/10 border border-electric-blue/20 flex items-center justify-center text-base group-hover:bg-electric-blue/20 transition-colors duration-200">
                      {CATEGORY_ICONS[category.category] ?? '📌'}
                    </div>
                    <h3 className="text-text-primary font-semibold text-sm uppercase tracking-wider">
                      {category.category}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <SkillBadge key={skill} label={skill} />
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </SectionWrapper>
    </div>
  )
}
