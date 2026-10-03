'use client'

import { ScrollReveal } from '@/components/animations/ScrollReveal'

export function WhatILearned() {
  return (
    <section className="py-20" aria-labelledby="learned-heading">
      <div className="container mx-auto px-4">
        <ScrollReveal direction="up">
          <header className="text-center max-w-3xl mx-auto mb-16">
            <h2 id="learned-heading" className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              What I&apos;ve Learned
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Each role taught me something different: the high school years showed me what&apos;s possible with self-learning, 
              freelancing taught me real-world delivery and client management, university taught me backend engineering and robotics, 
              and my current role is teaching me business process automation and scalable systems.
            </p>
          </header>
        </ScrollReveal>
      </div>
    </section>
  )
}