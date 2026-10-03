'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Code, Globe, Terminal, Mail, Github, Linkedin, Twitter } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { cn } from '@/lib/utils'

const socialLinks = [
  { name: 'GitHub', url: 'https://github.com', icon: Github },
  { name: 'LinkedIn', url: 'https://linkedin.com', icon: Linkedin },
  { name: 'Twitter', url: 'https://twitter.com', icon: Twitter },
  { name: 'Email', url: 'mailto:hello@example.com', icon: Mail },
]

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden" aria-labelledby="hero-heading">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal delay={0} direction="up">
            <div className="relative w-32 h-32 mx-auto mb-8 rounded-full overflow-hidden ring-2 ring-primary/20">
              <Image
                src="/images/myself.jpg"
                alt="Profile"
                fill
                className="object-cover"
                priority
                sizes="128px"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1} direction="up">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Code className="h-4 w-4" aria-hidden="true" />
              Full-Stack Product Engineer
            </span>
          </ScrollReveal>

          <ScrollReveal delay={0.2} direction="up">
            <h1 id="hero-heading" className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
              Your Name
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.3} direction="up">
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              Passionate about creating scalable, maintainable software. I specialize in web technologies
              and understand the importance of simplicity.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.4} direction="up">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <Button size="lg" asChild>
                <Link href="/about">
                  About Me
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/projects">
                  View My Projects
                </Link>
              </Button>
              <Button size="lg" variant="ghost" asChild>
                <Link href="/contact">
                  Contact Me
                </Link>
              </Button>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.5} direction="up">
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
              {socialLinks.map((social, index) => (
                <ScrollReveal key={social.name} delay={0.5 + index * 0.1} direction="up">
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className={cn(
                      'flex items-center gap-2 transition-colors',
                      'text-muted-foreground hover:text-primary'
                    )}
                  >
                    <social.icon className="h-4 w-4" aria-hidden="true" />
                    <span className="sr-only">{social.name}</span>
                  </a>
                </ScrollReveal>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce" aria-hidden="true">
        <svg className="w-6 h-6 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}