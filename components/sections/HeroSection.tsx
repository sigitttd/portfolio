import AnimatedSection from '@/components/ui/AnimatedSection'
import { personalInfo } from '@/data/portfolioData'

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-orbit-navy"
    >
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-100" />

      {/* Gradient blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-electric-blue/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-cyan-accent/5 blur-[100px] pointer-events-none" />
      <div className="absolute top-0 left-0 w-[300px] h-[300px] rounded-full bg-electric-blue/4 blur-[80px] pointer-events-none" />

      {/* Decorative corner lines */}
      <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-electric-blue/20 rounded-tl-sm" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-electric-blue/20 rounded-br-sm" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <AnimatedSection delay={0}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-electric-blue/30 bg-electric-blue/5 text-electric-blue text-sm font-medium mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-electric-blue animate-pulse" />
            Available for opportunities
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-text-primary tracking-tight leading-[1.1] mb-4">
            {personalInfo.name}
          </h1>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <p className="text-xl md:text-2xl font-medium mb-6">
            <span className="text-gradient">{personalInfo.title}</span>
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <p className="text-text-muted text-lg max-w-xl mx-auto leading-relaxed mb-10">
            {personalInfo.tagline}
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-electric-blue text-white font-semibold text-sm hover:bg-blue-glow hover:shadow-glow-md transition-all duration-200"
            >
              View Projects
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-xl border border-border-subtle text-text-muted font-semibold text-sm hover:border-electric-blue hover:text-text-primary transition-all duration-200"
            >
              Get in Touch
            </a>
          </div>
        </AnimatedSection>

        {/* Scroll indicator */}
        <AnimatedSection delay={0.6}>
          <div className="mt-20 flex flex-col items-center gap-2 text-text-dim text-xs">
            <span>Scroll to explore</span>
            <div className="w-px h-8 bg-gradient-to-b from-electric-blue/40 to-transparent" />
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
