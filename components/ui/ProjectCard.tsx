'use client'

import Image from 'next/image'
import type { Project } from '@/types'

interface ProjectCardProps {
  project: Project
}

// Gradient placeholders for projects without images
const PLACEHOLDER_GRADIENTS = [
  'from-blue-900/60 via-electric-blue/10 to-cyan-900/40',
  'from-indigo-900/60 via-purple-900/30 to-blue-900/40',
  'from-slate-800/80 via-electric-blue/10 to-slate-900/60',
  'from-navy-700/80 via-cyan-accent/10 to-orbit-navy/60',
]

function getGradient(id: string) {
  const index = id.charCodeAt(0) % PLACEHOLDER_GRADIENTS.length
  return PLACEHOLDER_GRADIENTS[index]
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group flex flex-col bg-surface rounded-2xl border border-border-subtle overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-electric-blue/50 hover:shadow-card-hover">
      {/* Image / Placeholder */}
      <div className="relative w-full h-48 overflow-hidden">
        {project.imageUrl ? (
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div
            className={`w-full h-full bg-gradient-to-br ${getGradient(project.id)} flex items-center justify-center`}
          >
            <svg
              className="w-12 h-12 text-electric-blue/30"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
        )}
        {/* Overlay gradient at bottom of image */}
        <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-surface to-transparent" />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        <h3 className="text-text-primary font-semibold text-base mb-2 leading-snug group-hover:text-electric-blue transition-colors duration-200">
          {project.title}
        </h3>
        <p className="text-text-muted text-sm leading-relaxed mb-4 flex-1">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.techTags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-0.5 rounded-md bg-electric-blue/10 text-electric-blue border border-electric-blue/20 font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-2 mt-auto pt-2 border-t border-border-subtle">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg border border-border-subtle text-text-muted hover:border-electric-blue hover:text-electric-blue transition-all duration-150"
            >
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              GitHub
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg border border-border-subtle text-text-muted hover:border-electric-blue hover:text-electric-blue transition-all duration-150"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Live Demo
            </a>
          )}
          {project.publicationUrl && (
            <a
              href={project.publicationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg border border-border-subtle text-text-muted hover:border-electric-blue hover:text-electric-blue transition-all duration-150"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Publication
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
