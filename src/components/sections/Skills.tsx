'use client'

import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { cn } from '@/lib/utils'
import type { Skill } from '@/types'

const skillCategories = [
  { key: 'frontend', label: 'Frontend', icon: '🌐' },
  { key: 'backend', label: 'Backend', icon: '⚙️' },
  { key: 'database', label: 'Database', icon: '🗄️' },
  { key: 'devops', label: 'DevOps', icon: '☁️' },
  { key: 'tools', label: 'Tools', icon: '🛠️' },
  { key: 'other', label: 'Other', icon: '📦' },
] as const

export function Skills({ skills }: { skills: Skill[] }) {
  const categorizedSkills = skillCategories.map((cat) => ({
    ...cat,
    items: skills.filter((s) => s.category === cat.key),
  })).filter((cat) => cat.items.length > 0)

  return (
    <section aria-labelledby="skills-heading" className="py-20">
      <div className="container mx-auto px-4">
        <ScrollReveal direction="up">
          <header className="text-center max-w-2xl mx-auto mb-16">
            <h2 id="skills-heading" className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Technical Skills
            </h2>
            <p className="text-muted-foreground text-lg">
              Technologies and tools I work with regularly
            </p>
          </header>
        </ScrollReveal>

        <div className="space-y-12">
          {categorizedSkills.map((category, catIndex) => (
            <ScrollReveal key={category.key} delay={catIndex * 0.1} direction="up">
              <div>
                <h3 className="text-lg font-semibold mb-6 flex items-center gap-2 text-foreground">
                  <span className="text-2xl" aria-hidden="true">{category.icon}</span>
                  {category.label}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.items.map((skill, skillIndex) => (
                    <ScrollReveal key={skill.name} delay={skillIndex * 0.05} direction="up">
                      <div className="group relative">
                        <button
                          className={cn(
                            'px-4 py-2 rounded-lg bg-muted border border-border text-sm font-medium',
                            'transition-all duration-200',
                            'hover:border-primary hover:text-primary hover:shadow-md',
                            'focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2'
                          )}
                          aria-label={`${skill.name} - proficiency ${skill.proficiency}%`}
                        >
                          <span className="flex items-center gap-2">
                            {skill.name}
                            <span
                              className={cn(
                                'px-2 py-0.5 text-xs font-semibold rounded-full',
                                skill.proficiency >= 80 && 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
                                skill.proficiency >= 60 && skill.proficiency < 80 && 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
                                skill.proficiency >= 40 && skill.proficiency < 60 && 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
                                skill.proficiency < 40 && 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200'
                              )}
                            >
                              {skill.proficiency}%
                            </span>
                          </span>
                        </button>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}