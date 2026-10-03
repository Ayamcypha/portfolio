'use client'

import { motion } from 'framer-motion'
import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { evolutionMilestones } from '@/lib/evolution'
import type { EvolutionMilestone } from '@/types'

interface TechnicalEvolutionProps {
  milestones?: EvolutionMilestone[]
}

export function TechnicalEvolution({ milestones = evolutionMilestones }: TechnicalEvolutionProps) {
  return (
    <section className="py-20" aria-labelledby="evolution-heading">
      <div className="container mx-auto px-4">
        <ScrollReveal direction="up">
          <header className="text-center max-w-3xl mx-auto mb-16">
            <h2 id="evolution-heading" className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Technical Evolution
            </h2>
            <p className="text-muted-foreground text-lg">
              The progression of technologies, frameworks, and skills learned throughout my professional journey.
            </p>
          </header>
        </ScrollReveal>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-border -translate-y-1/2" />

          <div className="relative flex overflow-x-auto pb-12 snap-x snap-mandatory" style={{ scrollbarWidth: 'none' }}>
            <style jsx>{`
              .snap-x::-webkit-scrollbar { display: none; }
              .snap-x { -ms-overflow-style: none; scrollbar-width: none; }
            `}</style>

            {milestones.map((milestone, index) => {
              const bgColor = milestone.color + '20'
              const borderColor = milestone.color + '40'
              const textBgColor = milestone.color + '10'

              return (
                <motion.div
                  key={milestone.year}
                  className="relative flex-shrink-0 w-full sm:w-[300px] md:w-[350px] snap-center px-4"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ delay: index * 0.15 }}
                >
                  <div className="relative">
                    {/* Timeline Dot */}
                    <motion.div
                      className="absolute left-1/2 top-0 -translate-x-1/2 z-10 w-4 h-4 rounded-full border-4 border-background"
                      style={{ backgroundColor: milestone.color }}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: index * 0.15 + 0.2 }}
                    >
                      <span className="absolute -top-10 left-1/2 -translate-x-1/2 text-xs font-medium text-muted-foreground whitespace-nowrap">
                        {milestone.year}
                      </span>
                    </motion.div>

                    {/* Card */}
                    <motion.div
                      className="relative bg-background border border-border rounded-2xl p-6 h-full"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 + 0.3 }}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div 
                          className="w-10 h-10 rounded-xl flex items-center justify-center"
                          style={{ backgroundColor: bgColor }}
                        >
                          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ stroke: milestone.color }}>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        </div>
                        <div>
                          <span className="text-sm font-medium text-muted-foreground">{milestone.phase}</span>
                          <h3 className="text-lg font-bold block">{milestone.title}</h3>
                        </div>
                      </div>

                      <p className="text-muted-foreground text-sm mb-6">{milestone.description}</p>

                      <div className="flex flex-wrap gap-2">
                        {milestone.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 text-xs font-medium rounded-full border"
                            style={{ 
                              borderColor: borderColor,
                              color: milestone.color,
                              backgroundColor: textBgColor
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}