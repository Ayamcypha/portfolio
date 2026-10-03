'use client'

import Image from 'next/image'
import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { experience } from '@/lib/experience'
import type { Experience } from '@/types'

const values = [
  {
    title: 'Clean Code',
    description: 'Writing maintainable, readable, and well-tested code that scales.',
  },
  {
    title: 'User Experience',
    description: 'Prioritizing accessibility, performance, and intuitive interfaces.',
  },
  {
    title: 'Continuous Learning',
    description: 'Staying current with modern technologies and best practices.',
  },
  {
    title: 'Open Source',
    description: 'Contributing back to the community that helps us build better software.',
  },
]

export function About() {
  return (
    <section id="about" className="py-20 bg-muted/30" aria-labelledby="about-heading">
      <div className="container mx-auto px-4">
        <ScrollReveal direction="up">
          <header className="text-center max-w-3xl mx-auto mb-16">
            <h2 id="about-heading" className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              About Me
            </h2>
            <p className="text-muted-foreground text-lg">
              Passionate full-stack developer with 7+ years of experience building scalable web applications.
            </p>
          </header>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12 items-start mb-20">
          <ScrollReveal delay={0.1} direction="left">
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                I&apos;m a full-stack developer specializing in building modern web applications with React, Next.js, and Node.js.
                My journey started with curiosity about how things work on the web, and it evolved into a career
                focused on creating meaningful digital experiences.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I believe in writing clean, maintainable code and following best practices. I enjoy solving complex
                problems, optimizing performance, and mentoring other developers. When I&apos;m not coding, you&apos;ll find me
                exploring new technologies, contributing to open source, or sharing knowledge through blog posts.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Currently, I&apos;m focused on expanding my expertise in cloud architecture, distributed systems, and
                developer experience tooling.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2} direction="right">
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-2xl" />
              <div className="relative bg-background border border-border rounded-3xl p-1 shadow-xl">
                <div className="bg-muted/50 rounded-2xl aspect-square flex items-center justify-center">
                  <Image
                    src="/images/myself2.jpg"
                    alt="Profile photo"
                    fill
                    className="rounded-2xl object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.3} direction="up">
          <section aria-labelledby="experience-heading" className="mb-20">
            <h3 id="experience-heading" className="text-2xl md:text-3xl font-bold tracking-tight text-center mb-10">
              Experience
            </h3>
            <div className="max-w-3xl mx-auto space-y-8">
              {experience.map((job, index) => (
                <ScrollReveal key={job.role} delay={index * 0.1} direction="up">
                  <article className="bg-background border border-border rounded-xl p-6 md:p-8 shadow-sm">
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
                </ScrollReveal>
              ))}
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal delay={0.4} direction="up">
          <section aria-labelledby="values-heading">
            <h3 id="values-heading" className="text-2xl md:text-3xl font-bold tracking-tight text-center mb-10">
              What I Value
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {values.map((value, index) => (
                <ScrollReveal key={value.title} delay={index * 0.1} direction="up">
                  <article className="bg-background border border-border rounded-xl p-6 text-center hover:shadow-md transition-shadow">
                    <h4 className="text-lg font-semibold mb-2">{value.title}</h4>
                    <p className="text-muted-foreground text-sm">{value.description}</p>
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