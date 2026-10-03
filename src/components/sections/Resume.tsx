'use client'

import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { resumeData } from '@/lib/resume'
import type { Skill, Experience } from '@/types'

function SkillCategory({ category, skills }: { category: string; skills: string[] }) {
  return (
    <div className="bg-background border border-border rounded-xl p-6">
      <h4 className="text-lg font-semibold mb-4 capitalize">{category}</h4>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span key={skill} className="px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20">
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}

function ExperienceItem({ job }: { job: Experience }) {
  return (
    <article className="bg-background border border-border rounded-xl p-6 shadow-sm">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
        <div>
          <h4 className="text-xl font-semibold">{job.role}</h4>
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
  )
}

export function ResumeSection() {
  return (
    <section id="resume" className="py-20" aria-labelledby="resume-heading">
      <div className="container mx-auto px-4">
        <ScrollReveal direction="up">
          <header className="text-center max-w-3xl mx-auto mb-16">
            <h2 id="resume-heading" className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Resume
            </h2>
            <p className="text-muted-foreground text-lg">
              Skills, experience, and education.
            </p>
          </header>
        </ScrollReveal>

        <ScrollReveal delay={0.1} direction="up">
          <section aria-labelledby="skills-heading" className="mb-20">
            <h3 id="skills-heading" className="text-2xl md:text-3xl font-bold tracking-tight mb-10">
              Skills
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(resumeData.skills).map(([category, skills]) => (
                <SkillCategory key={category} category={category} skills={skills} />
              ))}
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal delay={0.2} direction="up">
          <section aria-labelledby="experience-heading" className="mb-20">
            <h3 id="experience-heading" className="text-2xl md:text-3xl font-bold tracking-tight mb-10">
              Experience
            </h3>
            <div className="max-w-3xl mx-auto space-y-6">
              {resumeData.experience.map((job, index) => (
                <ScrollReveal key={job.role} delay={index * 0.1} direction="up">
                  <ExperienceItem job={job} />
                </ScrollReveal>
              ))}
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal delay={0.3} direction="up">
          <section aria-labelledby="education-heading" className="mb-20">
            <h3 id="education-heading" className="text-2xl md:text-3xl font-bold tracking-tight mb-10">
              Education
            </h3>
            <div className="max-w-2xl mx-auto space-y-6">
              {resumeData.education.map((edu, index) => (
                <ScrollReveal key={edu.degree} delay={index * 0.1} direction="up">
                  <article className="bg-background border border-border rounded-xl p-6 text-center">
                    <h4 className="text-xl font-semibold">{edu.degree}</h4>
                    <p className="text-primary font-medium mt-1">{edu.institution}</p>
                    <time className="text-sm text-muted-foreground">{edu.year}</time>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal delay={0.4} direction="up">
          <section aria-labelledby="certifications-heading">
            <h3 id="certifications-heading" className="text-2xl md:text-3xl font-bold tracking-tight mb-10">
              Certifications
            </h3>
            <div className="max-w-2xl mx-auto space-y-4">
              {resumeData.certifications.map((cert, index) => (
                <ScrollReveal key={cert.name} delay={index * 0.1} direction="up">
                  <article className="bg-background border border-border rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 p-3 rounded-lg bg-primary/10">
                        <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold">{cert.name}</h4>
                        <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                        <time className="text-sm text-muted-foreground">{cert.year}</time>
                      </div>
                    </div>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </section>
        </ScrollReveal>
      </div>
    </section>
  )
}