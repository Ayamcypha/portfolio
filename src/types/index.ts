export interface Project {
  slug: string
  title: string
  description: string
  longDescription: string
  image: string
  techStack: string[]
  liveUrl?: string
  repoUrl?: string
  featured: boolean
  category: 'web' | 'mobile' | 'api' | 'other'
  year: number
  isExternal?: boolean
}

export interface Skill {
  name: string
  category: 'frontend' | 'backend' | 'database' | 'devops' | 'tools' | 'other'
  proficiency: number
}

export interface DetailedProject {
  name: string
  description: string
  impact: string
  keyLearnings: string[]
  nextSteps: string[]
}

export interface DetailedAchievement {
  title: string
  impact: string
  keyMetric: string
}

export interface Experience {
  role: string
  company: string
  period: string
  status: 'completed' | 'current'
  location: string
  summary: string
  technologies: string[]
  projectsBuilt: number
  technologiesCount: number
  keyAchievementsCount: number
  contextImpact: string
  detailedProjects: DetailedProject[]
  detailedAchievements: DetailedAchievement[]
}

export interface ResumeData {
  skills: {
    frontend: string[]
    backend: string[]
    database: string[]
    devops: string[]
    tools: string[]
  }
  experience: Experience[]
  education: {
    degree: string
    institution: string
    year: string
  }[]
  certifications: {
    name: string
    issuer: string
    year: string
  }[]
}

export interface SocialLink {
  name: string
  url: string
  icon: string
}

export interface NavLink {
  name: string
  href: string
}

export interface EvolutionMilestone {
  year: string
  phase: string
  title: string
  technologies: string[]
  color: string
  description: string
}

export interface TechnologyItem {
  name: string
  category: string
  url: string
}

export interface KeyAchievement {
  title: string
  metric: string
  impact: string
}

export interface MyStory {
  title: string
  subtitle: string
  paragraphs: string[]
}

export interface JourneyPhase {
  year: string
  phase: string
  title: string
  location: string
  description: string
  keyLesson: string
  icon: string
  color: string
}

export interface TurningPoint {
  year: string
  location: string
  title: string
  description: string
  lesson: string
  phaseNumber: number
}

export interface WhereIAmNowSection {
  title: string
  description: string
  icon: string
  color: string
}

export interface MindsetPillar {
  title: string
  description: string
  icon: string
  color: string
}

export interface MyStoryData {
  title: string
  subtitle: string
  paragraphs: string[]
}

export interface AboutPageData {
  myStory: MyStoryData
  journeyPhases: JourneyPhase[]
  turningPoints: TurningPoint[]
  whereIAmNow: WhereIAmNowSection[]
  mindset: MindsetPillar[]
}