'use client'

import { ProjectCard } from './ProjectCard'
import { ScrollReveal } from '@/components/animations/ScrollReveal'
import type { Project } from '@/types'

interface ProjectGridProps {
  projects: Project[]
  variant?: 'default' | 'featured'
  title?: string
  showViewAll?: boolean
  viewAllHref?: string
}

export function ProjectGrid({ projects, variant = 'default', title, showViewAll = false, viewAllHref = '/projects' }: ProjectGridProps) {
  if (projects.length === 0) return null

  return (
    <section aria-labelledby={title ? 'projects-heading' : undefined}>
      {(title || showViewAll) && (
        <div className="flex items-center justify-between mb-10">
          {title && (
            <ScrollReveal direction="up">
              <h2 id="projects-heading" className="text-3xl md:text-4xl font-bold tracking-tight">
                {title}
              </h2>
            </ScrollReveal>
          )}
          {showViewAll && (
            <ScrollReveal delay={0.1} direction="up">
              <a
                href={viewAllHref}
                className="text-sm font-medium text-primary hover:underline flex items-center gap-1"
              >
                View all
                <span aria-hidden="true">→</span>
              </a>
            </ScrollReveal>
          )}
        </div>
      )}

      <div
        className={variant === 'featured'
          ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'
          : 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'
        }
        role="list"
        aria-label="Projects"
      >
        {projects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} variant={variant} />
        ))}
      </div>
    </section>
  )
}