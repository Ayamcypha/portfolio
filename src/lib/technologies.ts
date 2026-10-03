import type { KeyAchievement, TechnologyItem } from '@/types'

export const keyAchievements = [
  { title: 'Projects Built', metric: '15+', impact: 'End-to-end delivered' },
  { title: 'Technologies Mastered', metric: '30+', impact: 'Frontend to backend to hardware' },
  { title: 'Problems Solved', metric: '100+', impact: 'Real-world impact' },
  { title: 'Years Experience', metric: '7+', impact: 'Since high school' }
]

export const technologies: TechnologyItem[] = [
  // Frontend
  { name: 'React', category: 'frontend', url: 'https://react.dev' },
  { name: 'Next.js', category: 'frontend', url: 'https://nextjs.org' },
  { name: 'TypeScript', category: 'frontend', url: 'https://typescriptlang.org' },
  { name: 'Tailwind CSS', category: 'frontend', url: 'https://tailwindcss.com' },
  { name: 'Framer Motion', category: 'frontend', url: 'https://framer.com/motion' },
  { name: 'React Hook Form', category: 'frontend', url: 'https://react-hook-form.com' },
  
  // Backend
  { name: 'Node.js', category: 'backend', url: 'https://nodejs.org' },
  { name: 'Express.js', category: 'backend', url: 'https://expressjs.com' },
  { name: 'PostgreSQL', category: 'database', url: 'https://postgresql.org' },
  { name: 'Prisma', category: 'database', url: 'https://prisma.io' },
  { name: 'NextAuth.js', category: 'backend', url: 'https://next-auth.js.org' },
  
  // Automation/Scripting (NEW)
  { name: 'Google Apps Script', category: 'automation', url: 'https://developers.google.com/apps-script' },
  { name: 'Gmail API', category: 'automation', url: 'https://developers.google.com/gmail/api' },
  { name: 'Google Calendar API', category: 'automation', url: 'https://developers.google.com/calendar/api' },
  { name: 'Google Sheets API', category: 'automation', url: 'https://developers.google.com/sheets/api' },
  
  // DevOps/Tools
  { name: 'Vercel', category: 'devops', url: 'https://vercel.com' },
  { name: 'Git', category: 'tools', url: 'https://git-scm.com' },
  { name: 'GitHub Actions', category: 'devops', url: 'https://github.com/features/actions' },
  { name: 'ESLint', category: 'tools', url: 'https://eslint.org' },
  { name: 'Prettier', category: 'tools', url: 'https://prettier.io' },
  
  // Hardware/Embedded (Past)
  { name: 'Arduino', category: 'hardware', url: 'https://arduino.cc' },
  { name: 'Tinkercad', category: 'hardware', url: 'https://tinkercad.com' },
  { name: '3D Printing', category: 'hardware', url: 'https://www.ultimaker.com' },
  { name: 'C++', category: 'hardware', url: 'https://isocpp.org' },
  { name: 'Electronics', category: 'hardware', url: 'https://www.electronics-notes.com' },
]