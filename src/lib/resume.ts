import type { ResumeData, Skill, Experience } from '@/types'
import { experience } from './experience'

export const resumeData: ResumeData = {
  skills: {
    frontend: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vue.js', 'Framer Motion', 'React Hook Form'],
    backend: ['Node.js', 'Express', 'GraphQL', 'REST APIs', 'PostgreSQL', 'MongoDB', 'Prisma', 'Zod'],
    database: ['PostgreSQL', 'MongoDB', 'Redis', 'Prisma', 'Drizzle ORM'],
    devops: ['Vercel', 'AWS', 'Docker', 'GitHub Actions', 'CI/CD', 'Linux', 'Nginx'],
    tools: ['Git', 'GitHub', 'VS Code', 'Figma', 'Postman', 'Jest', 'Playwright', 'ESLint', 'Prettier'],
  },
  experience: experience,
  education: [
    {
      degree: 'BSc Logistics and Supply Chain Management',
      institution: 'KNUST (Kwame Nkrumah University of Science and Technology)',
      year: '2025',
    },
  ],
  certifications: [
    {
      name: 'AWS Certified Developer Associate',
      issuer: 'Amazon Web Services',
      year: '2022',
    },
    {
      name: 'Google Cloud Professional Developer',
      issuer: 'Google Cloud',
      year: '2023',
    },
  ],
}