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
  'Technical Skills': '⚙️',
  'Programming & Libraries': '💻',
  'Tools': '🛠️',
  'Soft Skills': '🤝',
}

export default function SkillsSection({ skills }: SkillsSectionProps) {
  const skillCategories = skills ?? defaultSkills

  return (
    <div className="relative overflow-hidden">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-electric-blue/3 blur-[100px] pointer-events-none" />

      <SectionWrapper id="skills">
        <AnimatedSection>
          <SectionHeading
            title="Skills & Tools"
            subtitle="A curated set of technologies and methodologies I use to turn data into decisions."
          />
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 gap-6">
          {skillCategories.map((category, i) => (
            <AnimatedSection key={category.category} delay={i * 0.08}>
              <div className="bg-surface border border-border-subtle rounded-2xl p-6 h-full hover:border-electric-blue/30 transition-colors duration-200">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-lg">{CATEGORY_ICONS[category.category] ?? '📌'}</span>
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
            </AnimatedSection>
          ))}
        </div>
      </SectionWrapper>
    </div>
  )
}
