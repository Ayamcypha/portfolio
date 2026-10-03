'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { myStory } from '@/lib/about'
import { Code, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'
import { cn } from '@/lib/utils'

export function AboutHero() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden" aria-labelledby="about-hero-heading">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image Left */}
            <motion.div
              className="relative aspect-square max-w-lg mx-auto lg:mx-0"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
            >
              <div className="relative aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20">
                <Image
                  src="/images/myself2.jpg"
                  alt="Profile photo"
                  fill
                  className="object-cover rounded-3xl"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-20 h-20 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  className="w-10 h-10"
                >
                  <svg className="w-full h-full text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l4 4 4-4" />
                  </svg>
                </motion.div>
              </div>
            </motion.div>

            {/* Story Right */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
            >
              <ScrollReveal direction="up">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  <Code className="h-4 w-4" aria-hidden="true" />
                  Full-Stack Developer
                </span>
              </ScrollReveal>

              <ScrollReveal delay={0.1} direction="up">
                <h1 id="about-hero-heading" className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                  {myStory.title}
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={0.2} direction="up">
                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                  {myStory.subtitle}
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.3} direction="up">
                <div className="space-y-4 max-w-xl">
                  {myStory.paragraphs.map((paragraph, i) => (
                    <motion.p
                      key={i}
                      className="text-muted-foreground text-lg leading-relaxed"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + i * 0.1 }}
                    >
                      {paragraph}
                    </motion.p>
                  ))}
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.4} direction="up">
                <div className="flex flex-col sm:flex-row items-center justify-start gap-4">
                  <Button size="lg" asChild>
                    <Link href="/experience">
                      View My Journey
                      <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="/projects">
                      View My Work
                    </Link>
                  </Button>
                  <Button size="lg" variant="ghost" asChild>
                    <Link href="/contact">
                      Get In Touch
                    </Link>
                  </Button>
                </div>
              </ScrollReveal>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}