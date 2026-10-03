'use client'

import { ScrollReveal } from '@/components/animations/ScrollReveal'

export function ExperienceHeader() {
  const stats = [
    { label: 'Years Experience', value: '7+' },
    { label: 'Projects Built', value: '15+' },
    { label: 'Technologies', value: '30+' },
    { label: 'Problems Solved', value: '100+' }
  ]

  return (
    <section className="py-20 bg-muted/30" aria-labelledby="experience-header-heading">
      <div className="container mx-auto px-4">
        <ScrollReveal direction="up">
          <header className="text-center max-w-3xl mx-auto mb-16">
            <h2 id="experience-header-heading" className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Professional Experience
            </h2>
            <p className="text-muted-foreground text-lg">
              From Computer Hardware and Software repairer to Full-Stack Developer, discover the projects, challenges, and breakthroughs that shaped my technical journey.
            </p>
          </header>
        </ScrollReveal>

        <ScrollReveal delay={0.2} direction="up">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <ScrollReveal key={stat.label} delay={0.2 + index * 0.1} direction="up">
                <div className="bg-background border border-border rounded-xl p-6 text-center">
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}