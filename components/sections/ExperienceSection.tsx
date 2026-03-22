import SectionWrapper from '@/components/ui/SectionWrapper'
import SectionHeading from '@/components/ui/SectionHeading'
import AnimatedSection from '@/components/ui/AnimatedSection'
import TimelineItem from '@/components/ui/TimelineItem'
import { workExperience as defaultWorkExperience, education as defaultEducation } from '@/data/portfolioData'
import type { Experience, Education } from '@/types'

interface ExperienceSectionProps {
  workExperience?: Experience[]
  education?: Education[]
}

export default function ExperienceSection({ workExperience, education }: ExperienceSectionProps) {
  const workItems = workExperience ?? defaultWorkExperience
  const educationItems = education ?? defaultEducation

  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border-subtle to-transparent" />
      <div className="absolute left-1/4 bottom-1/3 w-[400px] h-[400px] rounded-full bg-electric-blue/3 blur-[100px] pointer-events-none" />

      <SectionWrapper id="experience">
        <AnimatedSection>
          <SectionHeading title="Experience & Education" />
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 mt-4">
          {/* Work Experience */}
          <div>
            <AnimatedSection>
              <div className="flex items-center gap-2 mb-8">
                <span className="text-electric-blue text-lg">💼</span>
                <h3 className="text-text-primary font-semibold text-lg">Work Experience</h3>
              </div>
            </AnimatedSection>
            <div data-testid="work-timeline">
              {workItems.map((item, index) => (
                <div key={item.organization + item.startDate} data-delay={index * 0.12}>
                  <AnimatedSection delay={index * 0.1}>
                    <TimelineItem item={item} index={index} />
                  </AnimatedSection>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <AnimatedSection>
              <div className="flex items-center gap-2 mb-8">
                <span className="text-electric-blue text-lg">🎓</span>
                <h3 className="text-text-primary font-semibold text-lg">Education</h3>
              </div>
            </AnimatedSection>
            <div data-testid="education-timeline">
              {educationItems.map((item, index) => (
                <div key={item.institution + item.startDate} data-delay={index * 0.12}>
                  <AnimatedSection delay={index * 0.1}>
                    <TimelineItem item={item} index={index} />
                  </AnimatedSection>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  )
}
