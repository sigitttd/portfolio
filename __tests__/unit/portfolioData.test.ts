import { describe, it, expect } from 'vitest'
import { projects, workExperience, education } from '@/data/portfolioData'

describe('portfolioData — projects', () => {
  const requiredTitles = [
    'Sentiment and Social Network Analysis',
    'Citation Network Analysis',
    'Dashboard for Location Segmentation',
    'Asset Monitoring Dashboard',
    'Data Warehouse Design',
    'Strategies Analysis for UMKM Enterprises',
  ]

  it.each(requiredTitles)('contains project: %s', (title) => {
    expect(projects.some((p) => p.title === title)).toBe(true)
  })
})

describe('portfolioData — workExperience', () => {
  const requiredRoles = [
    'Junior Business Intelligence Analyst',
    'Freelance Data Analyst',
    'Data Analyst Intern',
    'Assistant Lecturer',
    'Student Staff',
  ]

  it.each(requiredRoles)('contains work entry with role: %s', (role) => {
    expect(workExperience.some((e) => e.role === role)).toBe(true)
  })
})

describe('portfolioData — education', () => {
  it('contains Bachelor of Data Science at Telkom University with GPA 3.96 and summa cum laude honors', () => {
    const entry = education.find(
      (e) => e.degree === 'Bachelor of Data Science' && e.institution === 'Telkom University'
    )
    expect(entry).toBeDefined()
    expect(entry?.gpa).toBe('3.96')
    expect(entry?.honors?.toLowerCase()).toContain('summa cum laude')
  })

  it('contains SMA Negeri 6 Surabaya education entry', () => {
    expect(education.some((e) => e.institution === 'SMA Negeri 6 Surabaya')).toBe(true)
  })
})
