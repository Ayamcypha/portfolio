'use client'

import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { experience } from '@/lib/experience'
import type { Experience } from '@/types'

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20" aria-labelledby="experience-heading">
      <div className="container mx-auto px-4">
        <ScrollReveal direction="up">
          <header className="text-center max-w-3xl mx-auto mb-16">
            <h2 id="experience-heading" className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Experience
            </h2>
            <p className="text-muted-foreground text-lg">
              My professional journey building scalable web applications.
            </p>
          </header>
        </ScrollReveal>

        <div className="max-w-3xl mx-auto space-y-8">
          {experience.map((job, index) => (
            <ScrollReveal key={job.role} delay={index * 0.1} direction="up">
              <article className="bg-background border border-border rounded-xl p-6 md:p-8 shadow-sm">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">{job.role}</h3>
                    <p className="text-primary font-medium">{job.company}</p>
                  </div>
                  <time className="text-sm text-muted-foreground whitespace-nowrap">{job.period}</time>
                </div>
                <ul className="space-y-2 text-muted-foreground mb-4">
                  {job.detailedProjects.map((project, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-primary mt-1">→</span>
                      <span>{project.name}: {project.description}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {job.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20">
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}