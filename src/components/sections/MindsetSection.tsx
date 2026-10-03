'use client'

import { motion } from 'framer-motion'
import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { mindset } from '@/lib/about'
import type { MindsetPillar } from '@/types'
import { Users, Code, TrendingUp, BookOpen } from 'lucide-react'
import { cn } from '@/lib/utils'

const pillarIcons = {
  Users,
  Code,
  TrendingUp,
  BookOpen,
}

interface MindsetSectionProps {
  pillars?: MindsetPillar[]
}

export function MindsetSection({ pillars = mindset }: { pillars?: MindsetPillar[] }) {
  return (
    <section className="py-20 bg-muted/30" aria-labelledby="mindset-heading">
      <div className="container mx-auto px-4">
        <ScrollReveal direction="up">
          <header className="text-center max-w-3xl mx-auto mb-16">
            <h2 id="mindset-heading" className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              The Full-Stack Developer Mindset
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              I don&apos;t just write code, I solve problems. Every technical decision is informed by user impact, business value, and long-term maintainability. 
              From backend architecture to frontend experience, I think about the whole picture.
            </p>
          </header>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {mindset.map((pillar, index) => (
            <ScrollReveal key={pillar.title} delay={index * 0.1} direction="up">
              <motion.div
                className="bg-background border border-border rounded-2xl p-6 md:p-8 text-center hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -8, scale: 1.01 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
                  style={{ backgroundColor: `${pillar.color}20` }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.svg
                    className="h-8 w-8"
                    style={{ stroke: pillar.color }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    whileHover={{ scale: 1.1 }}
                  >
                    <motion.path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </motion.svg>
                </motion.div>

                <h3 className="text-xl font-bold mb-3">{pillar.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{pillar.description}</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}