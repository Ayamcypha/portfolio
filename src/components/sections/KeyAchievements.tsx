'use client'

import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { keyAchievements } from '@/lib/technologies'

export function KeyAchievements() {
  return (
    <section className="py-20 bg-muted/30" aria-labelledby="achievements-heading">
      <div className="container mx-auto px-4">
        <ScrollReveal direction="up">
          <header className="text-center max-w-3xl mx-auto mb-16">
            <h2 id="achievements-heading" className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Key Achievements
            </h2>
            <p className="text-muted-foreground text-lg">
              Highlighting the most significant accomplishments and impacts across all professional experiences.
            </p>
          </header>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {keyAchievements.map((achievement, index) => (
            <ScrollReveal key={achievement.title} delay={index * 0.1} direction="up">
              <article className="bg-background border border-border rounded-xl p-6 text-center hover:shadow-md transition-shadow">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {achievement.metric}
                </div>
                <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
                <p className="text-muted-foreground">{achievement.impact}</p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}