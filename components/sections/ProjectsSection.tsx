import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionWrapper from '@/components/ui/SectionWrapper'
import SectionHeading from '@/components/ui/SectionHeading'
import ProjectCard from '@/components/ui/ProjectCard'
import { projects as defaultProjects } from '@/data/portfolioData'
import type { Project } from '@/types'

interface ProjectsSectionProps {
  projects?: Project[]
}

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  const projectList = projects ?? defaultProjects

  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border-subtle to-transparent" />
      <div className="absolute right-1/4 top-1/3 w-[500px] h-[500px] rounded-full bg-electric-blue/4 blur-[120px] pointer-events-none" />

      <SectionWrapper id="projects">
        <AnimatedSection>
          <SectionHeading
            title="Projects"
            subtitle="A selection of data projects spanning analytics, visualization, and machine learning."
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {projectList.map((project, i) => (
            <AnimatedSection key={project.id} delay={i * 0.07}>
              <ProjectCard project={project} />
            </AnimatedSection>
          ))}
        </div>
      </SectionWrapper>
    </div>
  )
}
