'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react'
import { Card, CardContent, CardFooter } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { ScrollReveal } from '@/components/animations/ScrollReveal'
import type { Project } from '@/types'
import { cn } from '@/lib/utils'

interface ProjectCardProps {
  project: Project
  index?: number
  variant?: 'default' | 'featured'
}

export function ProjectCard({ project, index = 0, variant = 'default' }: ProjectCardProps) {
  const isFeatured = variant === 'featured'

  return (
    <ScrollReveal delay={index * 0.1} direction="up">
      <article className="group">
        <Card className={cn(
          'overflow-hidden transition-all duration-300 hover:shadow-lg',
          isFeatured ? 'h-full' : ''
        )}>
          <div className="relative aspect-video overflow-hidden bg-muted">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          <CardContent className="p-6">
            <div className="flex flex-wrap gap-2 mb-3">
              {project.techStack.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
                >
                  {tech}
                </span>
              ))}
              {project.techStack.length > 4 && (
                <span className="px-2 py-1 text-xs font-medium rounded-full bg-muted text-muted-foreground">
                  +{project.techStack.length - 4}
                </span>
              )}
            </div>

            <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
              {project.description}
            </p>
          </CardContent>

          <CardFooter className="flex flex-wrap items-center gap-3 p-6 pt-0 border-t">
            {project.liveUrl && (
              <Button
                variant="ghost"
                size="sm"
                asChild
                className="group-hover:text-primary"
              >
                <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-1" aria-hidden="true" />
                  Live Demo
                </Link>
              </Button>
            )}
            {project.repoUrl && (
              <Button
                variant="ghost"
                size="sm"
                asChild
                className="group-hover:text-primary"
              >
                <Link href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 mr-1" aria-hidden="true" />
                  Code
                </Link>
              </Button>
            )}
            <Button
              variant="ghost"
              size="sm"
              asChild
              className="ml-auto group-hover:text-primary"
            >
              <Link href={`/projects/${project.slug}`}>
                Details
                <ArrowUpRight className="ml-1 h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </article>
    </ScrollReveal>
  )
}