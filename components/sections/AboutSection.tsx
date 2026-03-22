import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionWrapper from '@/components/ui/SectionWrapper'
import SectionHeading from '@/components/ui/SectionHeading'
import { personalInfo } from '@/data/portfolioData'

const highlights = [
  { label: 'Data Analysis', icon: '📊' },
  { label: 'Machine Learning', icon: '🤖' },
  { label: 'Data Visualization', icon: '📈' },
  { label: 'Business Intelligence', icon: '💡' },
]

export default function AboutSection() {
  return (
    <div className="relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-electric-blue/3 blur-[120px] pointer-events-none" />

      <SectionWrapper id="about">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: text */}
          <AnimatedSection>
            <SectionHeading title="About Me" />
            <p className="text-text-muted text-base leading-relaxed mb-8">
              {personalInfo.about}
            </p>
            <div className="flex flex-wrap gap-2">
              {highlights.map((h) => (
                <span
                  key={h.label}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface border border-border-subtle text-text-muted text-sm"
                >
                  <span>{h.icon}</span>
                  {h.label}
                </span>
              ))}
            </div>
          </AnimatedSection>

          {/* Right: stat cards */}
          <AnimatedSection delay={0.15}>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '3.96', label: 'GPA', sub: 'Summa Cum Laude' },
                { value: '5+', label: 'Roles', sub: 'Work Experience' },
                { value: '6+', label: 'Projects', sub: 'Delivered' },
                { value: '4+', label: 'Years', sub: 'in Data Science' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-surface border border-border-subtle rounded-2xl p-5 hover:border-electric-blue/40 transition-colors duration-200"
                >
                  <p className="text-3xl font-bold text-gradient mb-1">{stat.value}</p>
                  <p className="text-text-primary text-sm font-semibold">{stat.label}</p>
                  <p className="text-text-dim text-xs mt-0.5">{stat.sub}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </SectionWrapper>
    </div>
  )
}
