'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Briefcase, Calendar, CheckCircle, Clock } from 'lucide-react'
import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { experience } from '@/lib/experience'
import type { Experience } from '@/types'
import { cn } from '@/lib/utils'

interface ExperienceTimelineProps {
  experiences?: Experience[]
}

export function ExperienceTimeline({ experiences = experience }: ExperienceTimelineProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const completedExperiences = experiences.filter(e => e.status === 'completed')
  const currentExperiences = experiences.filter(e => e.status === 'current')
  const allExperiences = [...completedExperiences, ...currentExperiences]

  return (
    <section className="py-20" aria-labelledby="timeline-heading">
      <div className="container mx-auto px-4">
        <ScrollReveal direction="up">
          <header className="text-center max-w-3xl mx-auto mb-16">
            <h2 id="timeline-heading" className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Experience Timeline
            </h2>
            <p className="text-muted-foreground text-lg">
              A chronological journey through my professional development, from first line of code to automation engineer.
            </p>
          </header>
        </ScrollReveal>

        <div className="relative max-w-5xl mx-auto">
          {/* Timeline Line */}
          <motion.div
            className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
          />

          {/* Timeline Items */}
          <div className="relative space-y-16">
            {allExperiences.map((exp, index) => (
              <ExperienceTimelineItem
                key={`${exp.role}-${exp.company}`}
                experience={exp}
                index={index}
                isActive={activeIndex === index}
                onClick={() => setActiveIndex(index)}
                isLast={index === allExperiences.length - 1}
              />
            ))}
          </div>

          {/* Active Experience Detail */}
          {activeIndex != null && (
            <ExperienceDetailPanel
              experience={allExperiences[activeIndex]}
              onClose={() => setActiveIndex(null)}
            />
          )}
        </div>
      </div>
    </section>
  )
}

function ExperienceTimelineItem({
  experience,
  index,
  isActive,
  onClick,
  isLast
}: {
  experience: Experience
  index: number
  isActive: boolean
  onClick: () => void
  isLast: boolean
}) {
  const statusColor = experience.status === 'current' 
    ? 'bg-primary' 
    : 'bg-green-500'
  
  const statusIcon = experience.status === 'current' 
    ? <Clock className="h-4 w-4" /> 
    : <CheckCircle className="h-4 w-4" />

  return (
    <div className="relative flex items-start gap-6">
      {/* Timeline Dot */}
      <motion.div
        className={cn(
          'relative z-10 flex-shrink-0 w-4 h-4 rounded-full border-4 border-background transition-all duration-300',
          isActive 
            ? 'scale-150 ring-4 ring-primary/30' 
            : experience.status === 'current'
              ? 'bg-primary ring-4 ring-primary/30'
              : 'bg-green-500'
        )}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: isActive ? 1.5 : 1, opacity: 1 }}
        transition={{ delay: index * 0.1 }}
        style={{ backgroundColor: experience.status === 'current' ? undefined : 'green' }}
      >
        <span className="absolute -top-10 left-1/2 -translate-x-1/2 text-xs text-muted-foreground whitespace-nowrap">
          {experience.period.split('—')[0].trim()}
        </span>
      </motion.div>

      {/* Content Card */}
      <motion.div
        className={cn(
          'flex-1 min-w-0 bg-background border border-border rounded-xl p-6 shadow-sm transition-all duration-300 cursor-pointer',
          isActive 
            ? 'ring-2 ring-primary shadow-lg' 
            : 'hover:shadow-md hover:border-primary/50'
        )}
        onClick={onClick}
        initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: index * 0.1 }}
      >
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
          <div>
            <h3 className="text-xl font-semibold">{experience.role}</h3>
            <p className="text-primary font-medium">{experience.company}</p>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            {statusIcon}
            <span className="font-medium">{experience.status === 'current' ? 'Current' : 'Completed'}</span>
          </div>
        </div>

        <p className="text-muted-foreground mb-4">{experience.summary}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {experience.technologies.slice(0, 6).map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
            >
              {tech}
            </span>
          ))}
          {experience.technologies.length > 6 && (
            <span className="px-2 py-1 text-xs font-medium rounded-full bg-muted text-muted-foreground">
              +{experience.technologies.length - 6}
            </span>
          )}
        </div>

        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1">
            <MapPin className="h-3.5 w-3.5" />
            {experience.location}
          </span>
          <span className="flex items-center gap-1">
            <Calendar className="h-3.5 w-3.5" />
            {experience.period}
          </span>
        </div>
      </motion.div>
    </div>
  )
}

function ExperienceDetailPanel({
  experience,
  onClose
}: {
  experience: Experience
  onClose: () => void
}) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="bg-background border border-border rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="border-b border-border p-6 flex items-center justify-between sticky top-0 bg-background/95 backdrop-blur rounded-t-2xl">
          <div>
            <h3 className="text-2xl font-bold">{experience.role}</h3>
            <p className="text-primary font-medium">{experience.company}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-muted transition-colors"
            aria-label="Close"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-6 space-y-6">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20">
              {experience.status === 'current' ? 'Current' : 'Completed'}
            </span>
            <span className="px-3 py-1 text-sm font-medium rounded-full bg-muted text-muted-foreground">
              {experience.location}
            </span>
          </div>

          <p className="text-muted-foreground leading-relaxed">{experience.summary}</p>

          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="bg-muted/50 rounded-xl p-4 text-center">
              <div className="text-3xl font-bold text-primary">{experience.projectsBuilt}</div>
              <div className="text-sm text-muted-foreground">Projects Built</div>
            </div>
            <div className="bg-muted/50 rounded-xl p-4 text-center">
              <div className="text-3xl font-bold text-primary">{experience.technologiesCount}</div>
              <div className="text-sm text-muted-foreground">Technologies</div>
            </div>
            <div className="bg-muted/50 rounded-xl p-4 text-center">
              <div className="text-3xl font-bold text-primary">{experience.keyAchievementsCount}</div>
              <div className="text-sm text-muted-foreground">Key Achievements</div>
            </div>
          </div>

          <div className="border-t pt-6">
            <h4 className="text-lg font-semibold mb-4">Key Achievements</h4>
            <div className="space-y-3">
              {experience.detailedAchievements.map((achievement, i) => (
                <div key={i} className="bg-muted/50 rounded-xl p-4">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 p-2 rounded-lg bg-primary/10">
                      <svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h5 className="font-semibold">{achievement.title}</h5>
                      <p className="text-sm text-muted-foreground">{achievement.impact}</p>
                      <p className="text-sm font-medium text-primary">{achievement.keyMetric}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t pt-6">
              <h4 className="text-lg font-semibold mb-4">Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech) => (
                  <span key={tech} className="px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="border-t pt-6">
              <h4 className="text-lg font-semibold mb-4">Key Projects</h4>
              <div className="space-y-4">
                {experience.detailedProjects.map((project, i) => (
                  <div key={i} className="bg-muted/50 rounded-xl p-4">
                    <h5 className="font-semibold mb-2">{project.name}</h5>
                    <p className="text-sm text-muted-foreground mb-3">{project.description}</p>
                    <p className="text-sm text-primary font-medium mb-3">{project.impact}</p>
                    <div className="flex flex-wrap gap-1">
                      {project.keyLearnings.map((learning, j) => (
                        <span key={j} className="px-2 py-0.5 text-xs rounded bg-primary/10 text-primary">
                          {learning}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}