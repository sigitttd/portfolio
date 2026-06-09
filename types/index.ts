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

export type ProjectType = 'data' | 'creative'

export type ContentBlock =
  | { type: 'text'; value: string }
  | { type: 'image'; src: string; alt?: string }

export interface Project {
  id: string
  slug?: string
  title: string
  description: string
  content?: string | ContentBlock[]
  techTags: string[]
  type?: ProjectType
  imageUrl?: string
  githubUrl?: string
  liveUrl?: string
  publicationUrl?: string
  documentationUrl?: string
  youtubeUrl?: string
  embedUrl?: string
  embedHtml?: string
  embedDocs?: string
  embedHeightDesktop?: number
  embedHeightMobile?: number
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
