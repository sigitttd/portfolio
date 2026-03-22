import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import ProjectCard from '@/components/ui/ProjectCard'
import type { Project } from '@/types'

const baseProject: Project = {
  id: 'test-project',
  title: 'Test Project',
  description: 'A test project description.',
  techTags: ['Python', 'SQL'],
}

describe('ProjectCard', () => {
  it('renders project title and description', () => {
    const { getByText } = render(<ProjectCard project={baseProject} />)
    expect(getByText('Test Project')).toBeTruthy()
    expect(getByText('A test project description.')).toBeTruthy()
  })

  it('renders tech tags', () => {
    const { getByText } = render(<ProjectCard project={baseProject} />)
    expect(getByText('Python')).toBeTruthy()
    expect(getByText('SQL')).toBeTruthy()
  })

  it('renders image when imageUrl is defined', () => {
    const project: Project = { ...baseProject, imageUrl: '/test-image.png' }
    const { container } = render(<ProjectCard project={project} />)
    const img = container.querySelector('img')
    expect(img).toBeTruthy()
    expect(img?.getAttribute('alt')).toBe('Test Project')
  })

  it('does not render img element when imageUrl is undefined', () => {
    const { container } = render(<ProjectCard project={baseProject} />)
    const img = container.querySelector('img')
    expect(img).toBeNull()
  })

  it('renders GitHub link when githubUrl is defined', () => {
    const project: Project = { ...baseProject, githubUrl: 'https://github.com/test/repo' }
    const { getByText } = render(<ProjectCard project={project} />)
    const link = getByText('GitHub').closest('a')
    expect(link?.getAttribute('href')).toBe('https://github.com/test/repo')
  })

  it('renders Live Demo link when liveUrl is defined', () => {
    const project: Project = { ...baseProject, liveUrl: 'https://example.com' }
    const { getByText } = render(<ProjectCard project={project} />)
    const link = getByText('Live Demo').closest('a')
    expect(link?.getAttribute('href')).toBe('https://example.com')
  })

  it('renders Publication link when publicationUrl is defined', () => {
    const project: Project = { ...baseProject, publicationUrl: 'https://doi.org/test' }
    const { getByText } = render(<ProjectCard project={project} />)
    const link = getByText('Publication').closest('a')
    expect(link?.getAttribute('href')).toBe('https://doi.org/test')
  })

  it('renders no link buttons when no URLs are defined', () => {
    const { queryByText } = render(<ProjectCard project={baseProject} />)
    expect(queryByText('GitHub')).toBeNull()
    expect(queryByText('Live Demo')).toBeNull()
    expect(queryByText('Publication')).toBeNull()
  })
})
