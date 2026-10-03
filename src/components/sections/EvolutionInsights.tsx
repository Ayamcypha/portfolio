'use client'

import { motion } from 'framer-motion'
import { ScrollReveal } from '@/components/animations/ScrollReveal'

export function EvolutionInsights() {
  return (
    <section className="py-20 bg-muted/30" aria-labelledby="insights-heading">
      <div className="container mx-auto px-4">
        <ScrollReveal direction="up">
          <header className="text-center max-w-3xl mx-auto mb-16">
            <h2 id="insights-heading" className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Evolution Insights
            </h2>
            <p className="text-muted-foreground text-lg">
              Reflections on the learning journey and where it&apos;s heading next.
            </p>
          </header>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <ScrollReveal delay={0.1} direction="left">
            <article className="bg-background border border-border rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-primary/10">
                  <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Learning Approach</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Started with AI-assisted learning (ChatGPT) which sparked my interest in software development. 
                Evolved to understanding fundamentals deeply—spending countless hours mastering vanilla JavaScript 
                and CSS before touching frameworks. The robotics phase taught me systems thinking and learning 
                from failure. Every phase built on the previous one.
              </p>
              <div className="space-y-3">
                {[
                  'AI-assisted learning → Understanding fundamentals',
                  'Self-taught HTML/CSS/JS → Framework mastery',
                  'Software only → Hardware + Software integration',
                  'Frontend only → Full-stack + Automation',
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    className="flex items-center gap-3 text-sm text-muted-foreground"
                  >
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    <span>{item}</span>
                  </motion.div>
                ))}
              </div>
            </article>
          </ScrollReveal>

          <ScrollReveal delay={0.2} direction="right">
            <article className="bg-background border border-border rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-teal-500/10">
                  <svg className="h-6 w-6 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Next Phase</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Expanding into advanced system design, team leadership, and product strategy while maintaining 
                technical excellence. Focus on building products that solve real logistics and operational 
                problems at scale.
              </p>
              <div className="space-y-3">
                {[
                  'Advanced system design & architecture',
                  'Team leadership & mentorship',
                  'Product strategy & business impact',
                  'Scalable automation & infrastructure',
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    className="flex items-center gap-3 text-sm"
                  >
                    <span className="w-2 h-2 rounded-full bg-teal-500" />
                    <span className="text-muted-foreground">{item}</span>
                  </motion.div>
                ))}
              </div>
            </article>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}