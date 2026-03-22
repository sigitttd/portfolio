export interface PersonalInfo {
  name: string
  title: string
  tagline: string
  about: string
  email: string
  phone: string
  location: string
  linkedin: string
  github: string
  tableau: string
}

export interface SkillCategory {
  category: string
  skills: string[]
}

export interface Project {
  id: string
  title: string
  description: string
  techTags: string[]
  imageUrl?: string
  githubUrl?: string
  liveUrl?: string
  publicationUrl?: string
}

export interface Experience {
  type: 'work'
  role: string
  organization: string
  location: string
  startDate: string
  endDate: string
  description: string[]
}

export interface Education {
  type: 'education'
  degree: string
  institution: string
  location: string
  startDate: string
  endDate: string
  gpa?: string
  honors?: string
  description?: string[]
}

export type TimelineEntry = Experience | Education
