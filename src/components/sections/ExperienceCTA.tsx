'use client'

import Link from 'next/link'
import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { Button } from '@/components/ui/Button'
import { Briefcase, FolderOpen, Mail } from 'lucide-react'

export function ExperienceCTA() {
  return (
    <section className="py-20" aria-labelledby="cta-heading">
      <div className="container mx-auto px-4">
        <ScrollReveal direction="up">
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 md:p-12 text-center">
            <h2 id="cta-heading" className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Ready to Work Together?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              I&apos;m passionate about building products that solve real problems and create meaningful impact. 
              Let&apos;s discuss how we can work together to build something great.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/resume">
                  <Briefcase className="mr-2 h-4 w-4" />
                  View Resume
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/projects">
                  <FolderOpen className="mr-2 h-4 w-4" />
                  See Projects
                </Link>
              </Button>
              <Button size="lg" variant="ghost" asChild>
                <Link href="/contact">
                  <Mail className="mr-2 h-4 w-4" />
                  Get In Touch
                </Link>
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}