'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import type { Project, ContentBlock } from '@/types'

// Reuse the same fallback map from ProjectCard
const IMAGE_FALLBACK_MAP: Record<string, string> = {
  '/pictinporto/image011.png': '/pictinporto/sasna.png',
  '/pictinporto/image013.png': '/pictinporto/cna.png',
  '/pictinporto/image016.png': '/pictinporto/ipm.png',
  '/pictinporto/image024.jpg': '/pictinporto/logam.png',
  '/pictinporto/image019.jpg': '/pictinporto/kim.png',
  '/pictinporto/image021.png': '/pictinporto/cpb.png',
  '/pictinporto/image037.png': '/pictinporto/dwh.png',
  '/pictinporto/image026.png': '/pictinporto/pintus.png',
  '/pictinporto/image036.png': '/pictinporto/intprdx.png',
}

function resolveImage(imageUrl?: string) {
  if (!imageUrl) return undefined
  return IMAGE_FALLBACK_MAP[imageUrl] ?? imageUrl
}

function HTMLCodeEmbed({
  code,
  fitToWidth,
  desktopHeight = 7027,
  mobileHeight = 8177
}: {
  code: string;
  fitToWidth: boolean;
  desktopHeight?: number;
  mobileHeight?: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(1)
  const [parentHeight, setParentHeight] = useState(desktopHeight)

  useEffect(() => {
    if (!containerRef.current || !wrapperRef.current) return

    // Clear previous contents
    containerRef.current.innerHTML = ''

    // Parse the HTML code and execute script tags using createContextualFragment
    const range = document.createRange()
    const documentFragment = range.createContextualFragment(code)

    // Append the fragment to our DOM container
    containerRef.current.appendChild(documentFragment)

    const handleResize = () => {
      if (!wrapperRef.current || !containerRef.current) return

      const parentWidth = wrapperRef.current.offsetWidth
      const targetWidth = 1850 // Dashboard design width
      const isMobile = window.innerWidth <= 500
      const targetHeight = isMobile ? mobileHeight : desktopHeight

      if (fitToWidth) {
        const newScale = Math.min(parentWidth / targetWidth, 1)
        setScale(newScale)
        setParentHeight(targetHeight * newScale)
      } else {
        setScale(1)
        setParentHeight(targetHeight)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    // Run again after some delays to allow Tableau initialization to complete and layout sizes to settle
    const timer1 = setTimeout(handleResize, 500)
    const timer2 = setTimeout(handleResize, 1500)
    const timer3 = setTimeout(handleResize, 3000)

    return () => {
      window.removeEventListener('resize', handleResize)
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
    }
  }, [code, fitToWidth, desktopHeight, mobileHeight])

  return (
    <div
      ref={wrapperRef}
      className={`w-full relative ${fitToWidth ? 'overflow-hidden' : 'overflow-x-auto overflow-y-hidden scrollbar-thin'}`}
      style={{ height: `${parentHeight}px`, transition: 'height 0.3s cubic-bezier(0.4, 0, 0.2, 1)' }}
    >
      <div
        ref={containerRef}
        style={{
          width: '1850px',
          transform: `scale(${scale})`,
          transformOrigin: 'top left',
          position: 'absolute',
          top: 0,
          left: 0,
        }}
      />
    </div>
  )
}

interface Props {
  project: Project
}

export default function ProjectDetailClient({ project }: Props) {
  const [isIframeLoading, setIsIframeLoading] = useState(true)
  const [fitToWidth, setFitToWidth] = useState(true)
  const resolvedImage = resolveImage(project.imageUrl)
  const isEmbed = !!project.embedUrl || !!project.embedHtml || !!project.embedDocs
  const containerClass = isEmbed ? 'max-w-7xl' : 'max-w-4xl'

  const links = [
    { url: project.githubUrl, label: 'GitHub', icon: 'github' },
    { url: project.liveUrl, label: 'Live Demo', icon: 'external' },
    { url: project.publicationUrl, label: 'Publication', icon: 'doc' },
    { url: project.documentationUrl, label: 'Documentation', icon: 'doc' },
    { url: project.youtubeUrl, label: 'YouTube', icon: 'external' },
  ].filter((l) => l.url)

  return (
    <div className="min-h-screen bg-orbit-navy">
      {/* Back nav */}
      <div className={`${containerClass} mx-auto px-6 pt-28 pb-4`}>
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-sm text-text-muted hover:text-electric-blue transition-colors duration-200"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            All Projects
          </Link>
        </motion.div>
      </div>

      <div className={`${containerClass} mx-auto px-6 pb-24`}>
        {/* Hero image */}
        {resolvedImage && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative w-full h-64 sm:h-80 rounded-2xl overflow-hidden mb-8 border border-border-subtle"
          >
            <Image
              src={resolvedImage}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-orbit-navy/60 to-transparent" />
          </motion.div>
        )}

        {/* Title & type badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.1 }}
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs px-2.5 py-1 rounded-full border border-electric-blue/30 bg-electric-blue/10 text-electric-blue font-medium capitalize">
              {project.type ?? 'project'}
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-text-primary leading-snug mb-4">
            {project.title}
          </h1>
        </motion.div>

        {/* Tech tags */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="flex flex-wrap gap-2 mb-8"
        >
          {project.techTags.map((tag) => (
            <span
              key={tag}
              className={`text-xs px-2.5 py-1 rounded-md font-medium ${
                tag === 'Confidential'
                  ? 'bg-amber-500/10 text-amber-400 border border-amber-500/25'
                  : tag === 'Ongoing'
                  ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/25'
                  : 'bg-electric-blue/10 text-electric-blue border border-electric-blue/20'
              }`}
            >
              {tag}
            </span>
          ))}
        </motion.div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-border-subtle to-transparent mb-8" />

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.2 }}
          className="space-y-6 mb-10"
        >
          {Array.isArray(project.content)
            ? project.content.map((block, i) =>
              block.type === 'text' ? (
                <p key={i} className="text-text-muted leading-relaxed text-base">
                  {block.value}
                </p>
              ) : (
                <div key={i} className="relative w-full rounded-xl overflow-hidden border border-border-subtle">
                  <Image
                    src={block.src}
                    alt={block.alt ?? project.title}
                    width={900}
                    height={500}
                    className="w-full h-auto object-cover"
                  />
                </div>
              )
            )
            : (
              <p className="text-text-muted leading-relaxed text-base">
                {project.content ?? project.description}
              </p>
            )}
        </motion.div>

        {/* Looker Studio Embed */}
        {project.embedUrl && !project.embedHtml && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mt-8 mb-12"
          >
            <h3 className="text-lg font-semibold text-text-primary mb-4 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-electric-blue animate-pulse shadow-[0_0_8px_#00E5FF]" />
              Interactive Dashboard
            </h3>

            <div className="relative w-full h-[600px] sm:h-[750px] bg-surface/50 border border-border-subtle rounded-2xl overflow-hidden shadow-glow-sm">
              {isIframeLoading && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-orbit-navy/90 z-10 transition-opacity duration-300">
                  <div className="relative w-16 h-16 mb-4">
                    {/* Outer spinning ring */}
                    <div className="absolute inset-0 rounded-full border-4 border-electric-blue/20 border-t-electric-blue animate-spin" />
                    {/* Inner glowing pulse */}
                    <div className="absolute inset-2 rounded-full bg-electric-blue/10 animate-pulse" />
                  </div>
                  <p className="text-text-muted text-sm font-medium animate-pulse">
                    Loading live interactive dashboard...
                  </p>
                </div>
              )}

              <iframe
                src={project.embedUrl}
                className="w-full h-full border-0 rounded-2xl"
                allowFullScreen
                onLoad={() => setIsIframeLoading(false)}
                title={project.title}
              />
            </div>

            {/* Mobile instruction */}
            <p className="text-xs text-text-muted mt-3 md:hidden flex items-center gap-1.5">
              <span>💡</span>
              <span><strong>Tip:</strong> Looker Studio dashboards are best viewed on desktop screens. Drag to navigate or click &ldquo;Live Demo&rdquo; to view full screen.</span>
            </p>
          </motion.div>
        )}

        {/* Looker Docs Embed */}
        {project.embedDocs && !project.embedHtml && !project.embedUrl && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mt-8 mb-12"
          >
            <h3 className="text-lg font-semibold text-text-primary mb-4 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-electric-blue animate-pulse shadow-[0_0_8px_#00E5FF]" />
              Media Documentation
            </h3>

            <div className="relative w-full h-[600px] sm:h-[750px] bg-surface/50 border border-border-subtle rounded-2xl overflow-hidden shadow-glow-sm">
              {isIframeLoading && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-orbit-navy/90 z-10 transition-opacity duration-300">
                  <div className="relative w-16 h-16 mb-4">
                    {/* Outer spinning ring */}
                    <div className="absolute inset-0 rounded-full border-4 border-electric-blue/20 border-t-electric-blue animate-spin" />
                    {/* Inner glowing pulse */}
                    <div className="absolute inset-2 rounded-full bg-electric-blue/10 animate-pulse" />
                  </div>
                  <p className="text-text-muted text-sm font-medium animate-pulse">
                    Loading media...
                  </p>
                </div>
              )}

              <iframe
                src={project.embedDocs}
                className="w-full h-full border-0 rounded-2xl"
                allowFullScreen
                onLoad={() => setIsIframeLoading(false)}
                title={project.title}
              />
            </div>

            {/* Mobile instruction */}
            <p className="text-xs text-text-muted mt-3 md:hidden flex items-center gap-1.5">
              <span>💡</span>
              <span><strong>Note:</strong> Media documentation is best viewed on desktop screens.</span>
            </p>
          </motion.div>
        )}

        {/* Tableau HTML/Script Embed */}
        {project.embedHtml && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mt-8 mb-12"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
              <h3 className="text-lg font-semibold text-text-primary flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-electric-blue animate-pulse shadow-[0_0_8px_#00E5FF]" />
                Interactive Tableau Dashboard
              </h3>

              {/* Scale controls */}
              <div className="flex items-center gap-1 bg-surface-subtle/80 backdrop-blur-sm border border-border-subtle p-1 rounded-xl w-fit">
                <button
                  onClick={() => setFitToWidth(true)}
                  className={`text-xs px-3 py-1.5 rounded-lg font-medium transition-all duration-200 ${fitToWidth
                      ? 'bg-electric-blue text-white shadow-glow-sm'
                      : 'text-text-muted hover:text-text-primary'
                    }`}
                >
                  Fit Screen
                </button>
                <button
                  onClick={() => setFitToWidth(false)}
                  className={`text-xs px-3 py-1.5 rounded-lg font-medium transition-all duration-200 ${!fitToWidth
                      ? 'bg-electric-blue text-white shadow-glow-sm'
                      : 'text-text-muted hover:text-text-primary'
                    }`}
                >
                  Original Size
                </button>
              </div>
            </div>

            <div className="w-full border border-border-subtle rounded-2xl bg-surface/50 p-4 shadow-glow-sm">
              <HTMLCodeEmbed
                code={project.embedHtml}
                fitToWidth={fitToWidth}
                desktopHeight={project.embedHeightDesktop}
                mobileHeight={project.embedHeightMobile}
              />
            </div>

            {/* Mobile/Tablet instruction */}
            <p className="text-xs text-text-muted mt-3 flex items-center gap-1.5">
              <span>💡</span>
              <span>
                {fitToWidth
                  ? "Dashboard fits your screen width. Click 'Original Size' to view at full resolution."
                  : "Drag/swipe horizontally to navigate the full dashboard. Click 'Fit Screen' to scale down."}
              </span>
            </p>
          </motion.div>
        )}

        {/* Links */}
        {links.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.25 }}
            className="flex flex-wrap gap-3"
          >
            {links.map(({ url, label }) => (
              <motion.a
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-electric-blue/40 text-electric-blue text-sm font-medium
                  hover:bg-electric-blue/10 hover:border-electric-blue transition-all duration-200"
              >
                {label}
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </motion.a>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  )
}
