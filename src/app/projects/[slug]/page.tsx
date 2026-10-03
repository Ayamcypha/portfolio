import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, ExternalLink, Github, Calendar, Tag, Globe } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Card, CardContent } from '@/components/ui/Card'
import { getProject, getAllProjects } from '@/lib/projects'

interface ProjectPageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const resolvedParams = await params
  const project = getProject(resolvedParams.slug)

  if (!project) {
    return { title: 'Project Not Found' }
  }

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: project.image ? [{ url: project.image }] : [],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: project.title,
      description: project.description,
      images: project.image ? [project.image] : [],
    },
  }
}

export async function generateStaticParams() {
  const projects = getAllProjects()
  return projects.map((project) => ({ slug: project.slug }))
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const resolvedParams = await params
  const project = getProject(resolvedParams.slug)

  if (!project) {
    notFound()
  }

  return (
    <article className="min-h-screen">
      <div className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back to Projects
        </Link>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.map((tech) => (
            <span key={tech} className="px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20">
              {tech}
            </span>
          ))}
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
          {project.title}
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mb-12">{project.description}</p>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2 space-y-12">
            <section aria-labelledby="overview-heading">
              <h2 id="overview-heading" className="text-2xl md:text-3xl font-bold tracking-tight mb-6">Overview</h2>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <div dangerouslySetInnerHTML={{ __html: project.longDescription.replace(/\n/g, '<br />') }} />
              </div>
            </section>

            <section aria-labelledby="tech-heading">
              <h2 id="tech-heading" className="text-2xl md:text-3xl font-bold tracking-tight mb-6">Tech Stack</h2>
              <div className="flex flex-wrap gap-3">
                {project.techStack.map((tech) => (
                  <span key={tech} className="px-4 py-2 bg-muted rounded-lg border border-border text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </section>
          </div>

          <aside className="space-y-6">
            <Card>
              <CardContent className="pt-6">
                <dl className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-muted-foreground flex-shrink-0" aria-hidden="true" />
                    <div>
                      <dt className="text-sm text-muted-foreground">Year</dt>
                      <dd className="font-medium">{project.year}</dd>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Tag className="h-5 w-5 text-muted-foreground flex-shrink-0" aria-hidden="true" />
                    <div>
                      <dt className="text-sm text-muted-foreground">Category</dt>
                      <dd className="font-medium capitalize">{project.category}</dd>
                    </div>
                  </div>
                </dl>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="space-y-3">
                  {project.liveUrl && (
                    <Button variant="default" className="w-full" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <Globe className="h-4 w-4 mr-2" aria-hidden="true" />
                        View Live Demo
                        <ExternalLink className="ml-2 h-4 w-4" aria-hidden="true" />
                      </a>
                    </Button>
                  )}
                  {project.repoUrl && (
                    <Button variant="outline" className="w-full" asChild>
                      <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" aria-hidden="true" />
                        View Source Code
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </aside>
        </div>

        <nav className="pt-8 border-t border-border" aria-label="Project navigation">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            All Projects
          </Link>
        </nav>
      </div>
    </article>
  )
}