'use client'

import Link from 'next/link'
import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { Button } from '@/components/ui/Button'
import { Briefcase, FolderOpen, Mail } from 'lucide-react'

export function AboutCTA() {
  return (
    <section className="py-20" aria-labelledby="about-cta-heading">
      <div className="container mx-auto px-4">
        <ScrollReveal direction="up">
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 md:p-12 text-center">
            <h2 id="about-cta-heading" className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Let&apos;s Work Together
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              I&apos;m always interested in new opportunities and meaningful projects. Whether you&apos;re looking to build something new or improve something existing, I&apos;d love to help bring your ideas to life.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/projects">
                  View My Work
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">
                  Get In Touch
                </Link>
              </Button>
              <Button size="lg" variant="ghost" asChild>
                <Link href="/resume">
                  View Resume
                </Link>
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}