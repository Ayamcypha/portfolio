import { Metadata } from 'next'
import { ProjectGrid } from '@/components/sections/ProjectGrid'
import { getAllProjects } from '@/lib/projects'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Browse my portfolio of web applications, APIs, and open source projects.',
}

export default function ProjectsPage() {
  const projects = getAllProjects()

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <header className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Projects</h1>
        <p className="text-xl text-muted-foreground">
          A collection of web applications and side projects I&apos;ve built over the years.
        </p>
      </header>

      <ProjectGrid projects={projects} />
    </div>
  )
}