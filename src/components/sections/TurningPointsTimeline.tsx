'use client'

import { motion } from 'framer-motion'
import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { turningPoints } from '@/lib/about'
import type { TurningPoint } from '@/types'
import { MapPin, ArrowRight, Sparkles } from 'lucide-react'
import { cn } from '@/lib/utils'

interface TurningPointsTimelineProps {
  points?: TurningPoint[]
}

export function TurningPointsTimeline({ points = turningPoints }: { points?: TurningPoint[] }) {
  return (
    <section className="py-20" aria-labelledby="turning-points-heading">
      <div className="container mx-auto px-4">
        <ScrollReveal direction="up">
          <header className="text-center max-w-3xl mx-auto mb-16">
            <h2 id="turning-points-heading" className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              The Turning Points
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Every journey has moments that change everything. Here are the pivotal experiences that shaped who I am today.
            </p>
          </header>
        </ScrollReveal>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Timeline Line */}
          <div className="absolute left-12 top-0 bottom-0 w-0.5 bg-border" />

          <div className="relative space-y-12">
            {turningPoints.map((point, index) => (
              <motion.div
                key={`${point.phaseNumber}-${point.year}`}
                className="relative pl-14"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ delay: index * 0.1 }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 top-2 w-5 h-5 rounded-full border-4 border-background bg-primary flex items-center justify-center">
                  <span className="text-xs font-bold text-primary-foreground">{point.phaseNumber}</span>
                </div>

                {/* Content Card */}
                <motion.div
                  className="bg-background border border-border rounded-2xl p-6 md:p-8 hover:shadow-lg transition-shadow duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20">
                        Phase {point.phaseNumber}
                      </span>
                      <Sparkles className="h-4 w-4 text-primary" />
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span className="font-medium">{point.location}</span>
                      <span className="text-muted-foreground">·</span>
                      <time>{point.year}</time>
                    </div>
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold tracking-tight mb-4">{point.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">{point.description}</p>

                  <div className="bg-primary/5 border border-primary/10 rounded-xl p-4 flex items-start gap-3">
                    <Sparkles className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-primary mb-1">Key Lesson</p>
                      <p className="text-sm text-muted-foreground">{point.lesson}</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}