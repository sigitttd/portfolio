import { describe, it, expect } from 'vitest'
import type { Project, TimelineEntry, Experience, Education } from '../../types'

describe('Type shapes', () => {
  it('Project satisfies interface', () => {
    const project = {
      id: '1',
      title: 'Test Project',
      description: 'A test description',
      techTags: ['React', 'TypeScript'],
    } satisfies Project

    expect(project.id).toBe('1')
    expect(project.title).toBe('Test Project')
    expect(project.description).toBe('A test description')
    expect(project.techTags).toEqual(['React', 'TypeScript'])
  })

  it('Project satisfies interface with optional fields', () => {
    const project = {
      id: '2',
      title: 'Full Project',
      description: 'Full description',
      techTags: ['Vue'],
      imageUrl: 'https://example.com/img.png',
      githubUrl: 'https://github.com/example',
      liveUrl: 'https://example.com',
      publicationUrl: 'https://paper.example.com',
    } satisfies Project

    expect(project.imageUrl).toBeDefined()
    expect(project.githubUrl).toBeDefined()
    expect(project.liveUrl).toBeDefined()
    expect(project.publicationUrl).toBeDefined()
  })

  it('TimelineEntry discriminated union narrows correctly for Experience', () => {
    const entry: TimelineEntry = {
      type: 'work',
      role: 'Software Developer',
      organization: 'Acme Corp',
      location: 'Jakarta',
      startDate: 'Jan 2020',
      endDate: 'Present',
      description: ['Built features', 'Reviewed PRs'],
    }

    if (entry.type === 'work') {
      expect(entry.role).toBeDefined()
      expect(entry.role).toBe('Software Developer')
      expect(entry.organization).toBe('Acme Corp')
      expect(entry.description).toHaveLength(2)
    }
  })

  it('TimelineEntry discriminated union narrows correctly for Education', () => {
    const edu: TimelineEntry = {
      type: 'education',
      degree: 'BSc Computer Science',
      institution: 'State University',
      location: 'Bandung',
      startDate: 'Jan 2018',
      endDate: 'Dec 2022',
    }

    if (edu.type === 'education') {
      expect(edu.degree).toBeDefined()
      expect(edu.degree).toBe('BSc Computer Science')
      expect(edu.institution).toBe('State University')
    }
  })

  it('TimelineEntry Education satisfies interface with optional fields', () => {
    const edu = {
      type: 'education' as const,
      degree: 'MSc Data Science',
      institution: 'Tech University',
      location: 'Surabaya',
      startDate: 'Aug 2022',
      endDate: 'Jun 2024',
      gpa: '3.9',
      honors: 'Cum Laude',
      description: ['Thesis on ML'],
    } satisfies Education

    expect(edu.gpa).toBe('3.9')
    expect(edu.honors).toBe('Cum Laude')
    expect(edu.description).toHaveLength(1)
  })

  it('Experience satisfies interface', () => {
    const exp = {
      type: 'work' as const,
      role: 'Data Analyst',
      organization: 'Data Co',
      location: 'Remote',
      startDate: 'Mar 2021',
      endDate: 'Present',
      description: ['Analyzed datasets'],
    } satisfies Experience

    expect(exp.type).toBe('work')
    expect(exp.role).toBe('Data Analyst')
  })
})
