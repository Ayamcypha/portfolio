'use client'

import { motion } from 'framer-motion'
import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { journeyPhases } from '@/lib/about'
import type { JourneyPhase } from '@/types'
import { Code, Briefcase, Cpu, Zap } from 'lucide-react'
import { cn } from '@/lib/utils'

const phaseIcons: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  Code,
  Briefcase,
  Cpu,
  Zap,
}

function PhaseIcon({ phase }: { phase: JourneyPhase }) {
  const Icon = phaseIcons[phase.icon]
  return (
    <div 
      className="w-12 h-12 rounded-xl flex items-center justify-center"
      style={{ backgroundColor: `${phase.color}20` }}
    >
      <Icon className="h-6 w-6" style={{ stroke: phase.color }} />
    </div>
  )
}

interface JourneyPhasesProps {
  phases?: JourneyPhase[]
}

export function JourneyPhases({ phases = journeyPhases }: { phases?: JourneyPhase[] }) {
  const timelineItems = journeyPhases.map((phase, index) => (
    <motion.div
      key={phase.year}
      className="relative flex flex-col md:flex-row items-center gap-8"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ delay: index * 0.15 }}
    >
      {/* Timeline Dot */}
      <motion.div
        className="relative z-10 flex-shrink-0 w-4 h-4 rounded-full border-4 border-background flex-shrink-0"
        style={{ backgroundColor: phase.color }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: index * 0.15 + 0.2 }}
      >
        <span className="absolute -top-10 left-1/2 -translate-x-1/2 text-xs font-medium text-muted-foreground whitespace-nowrap">
          {phase.year}
        </span>
      </motion.div>

      {/* Card */}
      <motion.div
        className={cn(
          'flex-1 bg-background border border-border rounded-2xl p-6 md:p-8',
          index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
        )}
        initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.15 + 0.1 }}
      >
        <div className="flex items-center gap-3 mb-4">
          <PhaseIcon phase={phase} />
          <div>
            <span className="text-sm font-medium text-muted-foreground">{phase.phase}</span>
            <h3 className="text-xl font-bold block">{phase.title}</h3>
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {phase.location}
            </p>
          </div>
        </div>

        <p className="text-muted-foreground leading-relaxed mb-4">{phase.description}</p>

        <div className="bg-muted/50 border border-border rounded-xl p-4">
          <p className="text-sm font-medium text-primary mb-1">Key Lesson</p>
          <p className="text-sm text-muted-foreground">{phase.keyLesson}</p>
        </div>
      </motion.div>
    </motion.div>
  ))

  return (
    <section className="py-20" aria-labelledby="journey-heading">
      <div className="container mx-auto px-4">
        <ScrollReveal direction="up">
          <header className="text-center max-w-3xl mx-auto mb-16">
            <h2 id="journey-heading" className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              The Journey So Far
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              My path to software engineering wasn&apos;t linear. It was more like a spiral, with me circling back to childhood interests, 
              taking unexpected detours through hardware and logistics, until everything clicked into place.
            </p>
          </header>
        </ScrollReveal>

        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" />

          <div className="relative space-y-16">
            {timelineItems}
          </div>
        </div>
      </div>
    </section>
  )
}