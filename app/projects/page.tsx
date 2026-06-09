'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import ProjectCard from '@/components/ui/ProjectCard'
import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionHeading from '@/components/ui/SectionHeading'
import { projects } from '@/data/portfolioData'

type Tab = 'all' | 'data' | 'creative'

export default function ProjectsPage() {
  const [activeTab, setActiveTab] = useState<Tab>('all')

  const filtered =
    activeTab === 'all'
      ? projects
      : projects.filter((p) => p.type === activeTab)

  return (
    <div className="min-h-screen bg-orbit-navy">
      {/* Back nav */}
      <div className="max-w-6xl mx-auto px-6 pt-28 pb-4">
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link
            href="/#projects"
            className="inline-flex items-center gap-1.5 text-sm text-text-muted hover:text-electric-blue transition-colors duration-200"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            Back to Portfolio
          </Link>
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto px-6 pb-24">
        <AnimatedSection>
          <SectionHeading
            title="All Projects"
            subtitle="The full collection — data analytics, machine learning, dashboards, and creative work."
          />
        </AnimatedSection>

        {/* Tabs */}
        <div className="flex gap-2 mb-8">
          {(['all', 'data', 'creative'] as Tab[]).map((tab) => (
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
                  layoutId="projects-tab-bg"
                  className="absolute inset-0 bg-electric-blue rounded-lg"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10 capitalize">{tab === 'all' ? 'All' : tab === 'data' ? 'Data' : 'Creative'}</span>
            </motion.button>
          ))}
        </div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6"
          >
            {filtered.map((project, i) => (
              <AnimatedSection key={project.id} delay={i * 0.05}>
                <ProjectCard project={project} />
              </AnimatedSection>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
