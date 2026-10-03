import type { Project } from '@/types'

export const projects: Project[] = [
  {
    slug: 'ecommerce',
    title: 'E-Commerce Platform',
    description: 'Full-featured ecommerce with cart, checkout, and admin dashboard.',
    longDescription: `
      A complete e-commerce platform built with Next.js, featuring user authentication,
      product management, shopping cart, mock payment flow, and an admin
      dashboard for order management.
      
      **Key Features:**
      - User authentication (client-side mock)
      - Product catalog with categories and search
      - Shopping cart with persistent state (localStorage)
      - Mock payment flow (demo mode)
      - Admin dashboard for orders, products, and categories
      - Responsive design with Tailwind CSS
      - React Context for state management
    `,
    image: '/images/project-ecommerce.jpg',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Zustand', 'Stripe'],
    liveUrl: 'https://ecommerce-placeholder.vercel.app',
    repoUrl: 'https://github.com/yourusername/ecommerce',
    featured: true,
    category: 'web',
    year: 2024,
    isExternal: true,
  },
  {
    slug: 'ergonexus',
    title: 'Ergonexus Ltd',
    description: 'Corporate website featuring services, team, and contact forms.',
    longDescription: `
      A professional corporate website for Ergonexus Ltd showcasing their services,
      team members, and contact information. Built with a modern tech stack
      for optimal performance and user experience.
      
      **Key Features:**
      - Service listings with detailed descriptions
      - Team member profiles
      - Contact form with validation
      - Responsive design with Tailwind CSS
      - Smooth animations with Framer Motion
      - SEO optimized
    `,
    image: '/images/project-ergonexus.jpg',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    liveUrl: 'https://www.ergonexusltd.com',
    repoUrl: undefined,
    featured: true,
    category: 'web',
    year: 2024,
    isExternal: true,
  },
  {
    slug: 'plumbing',
    title: 'Plumbing Business Website',
    description: 'Professional plumbing service site with booking, testimonials, emergency contact.',
    longDescription: `
      A professional website for a plumbing business featuring service listings,
      customer testimonials, online booking system, and emergency contact information.
      
      **Key Features:**
      - Service listings with pricing
      - Customer testimonials carousel
      - Online booking form with React Hook Form
      - Emergency contact button
      - Email notifications via Nodemailer
      - Responsive design with Tailwind CSS
      - SEO optimized for local search
    `,
    image: '/images/project-plumbing.jpg',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'React Hook Form', 'Nodemailer'],
    liveUrl: 'https://plumbing-placeholder.vercel.app',
    repoUrl: 'https://github.com/yourusername/plumbing',
    featured: true,
    category: 'web',
    year: 2025,
    isExternal: true,
  },
]

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured)
}

export function getAllProjects(): Project[] {
  return projects.sort((a, b) => b.year - a.year)
}