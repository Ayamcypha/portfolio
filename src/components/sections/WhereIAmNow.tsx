'use client'

import { motion } from 'framer-motion'
import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { whereIAmNow } from '@/lib/about'
import type { WhereIAmNowSection } from '@/types'
import { Heart, Target, Brain, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

const sectionIcons: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  Heart,
  Target,
  Brain,
  ArrowRight,
}

function SectionIcon({ section }: { section: WhereIAmNowSection }) {
  const Icon = sectionIcons[section.icon]
  return (
    <div 
      className="w-12 h-12 rounded-xl flex items-center justify-center"
      style={{ backgroundColor: `${section.color}20` }}
    >
      <Icon className="h-6 w-6" style={{ stroke: section.color }} />
    </div>
  )
}

interface WhereIAmNowProps {
  sections?: WhereIAmNowSection[]
}

export function WhereIAmNow({ sections = whereIAmNow }: { sections?: WhereIAmNowSection[] }) {
  return (
    <section className="py-20" aria-labelledby="where-heading">
      <div className="container mx-auto px-4">
        <ScrollReveal direction="up">
          <header className="text-center max-w-3xl mx-auto mb-16">
            <h2 id="where-heading" className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Where I Am Now
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Today, I&apos;m building products that solve real problems. Every technical decision is guided by user impact, 
              because great software isn&apos;t just about perfect algorithms, it&apos;s about meeting expectations and creating value.
            </p>
          </header>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {whereIAmNow.map((section, index) => (
            <ScrollReveal key={section.title} delay={index * 0.1} direction="up">
              <motion.div
                className="bg-background border border-border rounded-2xl p-6 md:p-8 h-full"
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <SectionIcon section={section} />
                  <h3 className="text-xl font-bold">{section.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">{section.description}</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}