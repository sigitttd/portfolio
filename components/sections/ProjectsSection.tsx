'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionWrapper from '@/components/ui/SectionWrapper'
import SectionHeading from '@/components/ui/SectionHeading'
import ProjectCard from '@/components/ui/ProjectCard'
import { projects as defaultProjects } from '@/data/portfolioData'
import type { Project } from '@/types'

type Tab = 'data' | 'creative'

interface ProjectsSectionProps {
  projects?: Project[]
}

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  const projectList = projects ?? defaultProjects
  const [activeTab, setActiveTab] = useState<Tab>('data')

  const featuredProjects = projectList.slice(0, 3)
  const remainingProjects = projectList.slice(3).filter((p) => (p.type ?? 'data') === activeTab)

  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border-subtle to-transparent" />
      <div className="absolute right-1/4 top-1/3 w-[500px] h-[500px] rounded-full pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.04, 0.07, 0.04] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
          className="w-full h-full rounded-full bg-electric-blue blur-[120px]"
        />
      </div>

      <SectionWrapper id="projects">
        <AnimatedSection>
          <SectionHeading
            title="Projects"
            subtitle="A selection of projects spanning analytics, visualization, machine learning, and creative work."
          />
        </AnimatedSection>

        {/* Featured label */}
        <motion.p
          initial={{ opacity: 0, x: -12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-text-muted text-xs uppercase tracking-widest mb-4 font-semibold flex items-center gap-2"
        >
          <span className="w-4 h-px bg-electric-blue/60" />
          Featured
        </motion.p>

        {/* Featured grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-12">
          {featuredProjects.map((project, i) => (
            <AnimatedSection key={project.id} delay={i * 0.08}>
              <ProjectCard project={project} />
            </AnimatedSection>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6">
          {(['data', 'creative'] as Tab[]).map((tab) => (
            <motion.button
              key={tab}
              onClick={() => setActiveTab(tab)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className={`relative px-4 py-2 rounded-lg text-sm font-medium border transition-colors duration-200 overflow-hidden ${
                activeTab === tab
                  ? 'bg-electric-blue text-white border-electric-blue shadow-glow-sm'
                  : 'bg-surface border-border-subtle text-text-muted hover:border-electric-blue/50 hover:text-electric-blue'
              }`}
            >
              {activeTab === tab && (
                <motion.span
                  layoutId="tab-bg"
                  className="absolute inset-0 bg-electric-blue rounded-lg"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{tab === 'data' ? 'Data' : 'Creative'}</span>
            </motion.button>
          ))}
        </div>

        {/* Remaining projects */}
        <AnimatePresence mode="wait">
          {remainingProjects.length > 0 ? (
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="overflow-x-auto pb-4"
            >
              <div className="flex gap-6" style={{ minWidth: 'max-content' }}>
                {remainingProjects.map((project, i) => (
                  <div key={project.id} className="w-72 shrink-0">
                    <AnimatedSection delay={i * 0.07}>
                      <ProjectCard project={project} />
                    </AnimatedSection>
                  </div>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.p
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-text-dim text-sm"
            >
              No projects in this category.
            </motion.p>
          )}
        </AnimatePresence>
      </SectionWrapper>
    </div>
  )
}
