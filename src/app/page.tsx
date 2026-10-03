import { Hero } from '@/components/sections/Hero'
import { ProjectGrid } from '@/components/sections/ProjectGrid'
import { getFeaturedProjects } from '@/lib/projects'

export default function Home() {
  const featuredProjects = getFeaturedProjects().slice(0, 3)

  return (
    <>
      <Hero />
      <ProjectGrid projects={featuredProjects} variant="featured" title="Featured Projects" />
    </>
  )
}