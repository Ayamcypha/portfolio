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
    description: 'A modern, responsive booking platform for Ergonexus Ltd — airport transfers, chauffeurs & tours — built to generate leads through SEO, establish credibility, accept direct payments via gateway, and streamline bookings with automated workflows.',
    longDescription: `
      A comprehensive booking platform for Ergonexus Ltd's airport transfer, chauffeur, and tour services. 
      The website drives qualified leads through SEO optimization and establishes trust with a professional digital presence.
      
      **Key Features:**
      - Real-time route calculation & dynamic pricing engine
      - Secure payment gateway integration (direct payments)
      - "Reserve now, pay later" flexible booking option
      - Admin dashboard for booking management & operations
      - Automated email confirmations & notifications on booking
      - Fully responsive, SEO-optimized for lead generation
      - Smooth animations & premium UX with Framer Motion
    `,
    image: '/images/ergonexusscreenshot.png',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    liveUrl: 'https://www.ergonexusltd.com',
    repoUrl: undefined,
    featured: true,
    category: 'web',
    year: 2024,
    isExternal: true,
  },
  {
    slug: 'hydrosync',
    title: 'Hydrosync',
    description: 'Modern plumbing business platform with real-time booking, service management, and customer communication tools.',
    longDescription: `
      Hydrosync is a full-featured plumbing business platform designed to streamline operations and enhance customer experience. 
      Built for plumbing professionals, it combines a customer-facing booking portal with powerful backend tools for service management.
      
      **Key Features:**
      - Real-time online booking with availability calendar
      - Service catalog with dynamic pricing & estimates
      - Customer portal for appointment history & communication
      - Automated SMS/email notifications & reminders
      - Technician dispatch & job tracking dashboard
      - Invoice generation & payment processing (Stripe)
      - Emergency request routing with priority queuing
      - SEO-optimized for local search visibility
      - Fully responsive, mobile-first design
    `,
    image: '/images/project-plumbing.jpg',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'React Hook Form', 'Stripe', 'Nodemailer', 'Prisma', 'PostgreSQL'],
    liveUrl: 'https://hydrosync-ten.vercel.app/',
    repoUrl: 'https://github.com/Ayamcypha/hydrosync/tree/main/hydrosync',
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