'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { technologies } from '@/lib/technologies'
import type { TechnologyItem } from '@/types'
import { cn } from '@/lib/utils'

const categoryColors = {
  frontend: 'blue',
  backend: 'green',
  database: 'purple',
  automation: 'teal',
  devops: 'orange',
  tools: 'gray',
  hardware: 'red'
}

const categoryLabels = {
  frontend: 'Frontend',
  backend: 'Backend',
  database: 'Database',
  automation: 'Automation',
  devops: 'DevOps',
  tools: 'Tools',
  hardware: 'Hardware (Past)'
}

export function TechnologiesCloud() {
  const [activeCategory, setActiveCategory] = useState<string>('all')
  
  const categories = ['all', ...new Set(technologies.map(t => t.category))]
  
  const filteredTechs = activeCategory === 'all' 
    ? technologies 
    : technologies.filter(t => t.category === activeCategory)

  return (
    <section className="py-20" aria-labelledby="tech-heading">
      <div className="container mx-auto px-4">
        <ScrollReveal direction="up">
          <header className="text-center max-w-3xl mx-auto mb-12">
            <h2 id="tech-heading" className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Technologies & Tools
            </h2>
            <p className="text-muted-foreground text-lg">
              Technologies I&apos;ve worked with across the stack. Hardware skills are from past projects.
            </p>
          </header>
        </ScrollReveal>

        {/* Category Filters */}
        <ScrollReveal delay={0.1} direction="up">
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  'px-4 py-2 rounded-full text-sm font-medium transition-all',
                  activeCategory === category
                    ? 'bg-primary text-primary-foreground shadow-md'
                    : 'bg-muted text-muted-foreground hover:bg-muted/50'
                )}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {categoryLabels[category as keyof typeof categoryLabels] || category}
              </motion.button>
            ))}
          </div>
        </ScrollReveal>

        {/* Technologies Grid */}
        <AnimatePresence mode="popLayout">
          <motion.div
            key={activeCategory}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {filteredTechs.map((tech, index) => (
              <motion.a
                key={tech.name}
                href={tech.url}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  'group flex items-center gap-2 px-3 py-2 rounded-xl border transition-all',
                  categoryColors[tech.category as keyof typeof categoryColors] 
                    ? 'border-primary/20 bg-primary/5 hover:bg-primary/10' 
                    : 'border-muted bg-muted/50 hover:bg-muted'
                )}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: index * 0.02 }}
                whileHover={{ scale: 1.02, y: -2 }}
              >
                <span className="font-medium text-sm">{tech.name}</span>
                <motion.span
                  className="text-xs opacity-0 group-hover:opacity-100 transition-opacity"
                  animate={{ opacity: 1 }}
                >
                  →
                </motion.span>
              </motion.a>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Legend */}
        <ScrollReveal delay={0.2} direction="up">
          <div className="mt-12 flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            {Object.entries(categoryLabels).map(([key, label]) => (
              <span key={key} className="flex items-center gap-1">
                <span 
                  className="w-3 h-3 rounded" 
                  style={{ backgroundColor: `${categoryColors[key as keyof typeof categoryColors]}40` }}
                />
                {label}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}