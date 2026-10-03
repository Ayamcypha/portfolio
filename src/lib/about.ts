import type { TurningPoint, JourneyPhase, MindsetPillar, WhereIAmNowSection } from '@/types'

export const myStory = {
  title: 'My Story',
  subtitle: 'From childhood curiosity to creative exploration, unexpected detours to discovering my calling. This is the winding path that led me to become a Full-Stack Developer.',
  paragraphs: [
    'It\'s been a circular journey, but every detour taught me something valuable.',
    'My path to software engineering wasn\'t linear. It was more like a spiral, with me circling back to childhood interests, taking unexpected detours through hardware and logistics, until everything clicked into place.',
  ],
}

export const journeyPhases: JourneyPhase[] = [
  {
    year: '2017',
    phase: 'High School Discovery',
    title: 'Self-Taught Web Development',
    location: 'Adisadel College, Cape Coast',
    description: 'Discovered HTML/CSS/JS in high school. Mastered JavaScript and CSS to bring static pages to life.',
    keyLesson: 'Self-taught mastery builds a foundation that formal education can\'t replicate.',
    icon: 'Code',
    color: 'blue',
  },
  {
    year: '2019',
    phase: 'Freelance Era',
    title: 'Frontend Mastery & Client Work',
    location: 'Remote (Ghana)',
    description: 'Started freelancing on Fiverr while in high school. Built 15+ client projects, learned professional delivery and client management. Account deleted in 2025.',
    keyLesson: 'Technical skills are valuable only when paired with reliability and clear communication.',
    icon: 'Briefcase',
    color: 'green',
  },
  {
    year: '2021',
    phase: 'KNUST: Logistics + Backend + Robotics',
    title: 'Full-Stack + Hardware Transition',
    location: 'Kumasi, Ghana',
    description: 'University at KNUST studying Logistics. Learned backend (Node/Express/SQL) AND robotics (Arduino/3D printing). Built robotic vacuum and fully 3D printed drone. Hardware skills maintained but not actively practiced.',
    keyLesson: 'Unique hybrid skills create unique problem-solving abilities.',
    icon: 'Cpu',
    color: 'purple',
  },
  {
    year: '2023',
    phase: 'Professional Growth',
    title: 'Automation Engineer & Full-Stack Products',
    location: 'Ghana (Remote)',
    description: 'First full-time role as Logistics Specialist & Automation Engineer. Built booking automation eliminating 90% human error. Built 3 production full-stack apps. Focus on clean architecture, testing, and deployment.',
    keyLesson: 'Domain knowledge + technical skills = high-impact automation.',
    icon: 'Zap',
    color: 'teal',
  },
]

export const turningPoints: TurningPoint[] = [
  {
    year: '2017–2021',
    location: 'Adisadel College, Cape Coast',
    title: 'The Self-Taught Foundation',
    description: 'Discovered HTML/CSS/JS in high school. Mastered JavaScript and CSS to bring static pages to life. Spent countless late nights coding, building 20+ vanilla JS projects and 50+ custom CSS animations.',
    lesson: 'Self-taught mastery builds a foundation that formal education can\'t replicate.',
    phaseNumber: 1,
  },
  {
    year: '2019–2021',
    location: 'Remote (Ghana)',
    title: 'Freelance Frontend Era',
    description: 'Started freelancing on Fiverr while in high school. Built 15+ client projects, learned professional delivery and client management. Achieved Top Rated status with 4.9★ rating. Account deleted in 2025.',
    lesson: 'Technical skills are valuable only when paired with reliability and clear communication.',
    phaseNumber: 2,
  },
  {
    year: '2021–2025',
    location: 'KNUST, Kumasi',
    title: 'Full-Stack + Hardware Transition',
    description: 'University at KNUST studying Logistics. Learned backend (Node/Express/SQL) AND robotics (Arduino/3D printing). Built robotic vacuum and fully 3D printed drone. Hardware skills maintained but not actively practiced.',
    lesson: 'Unique hybrid skills create unique problem-solving abilities.',
    phaseNumber: 3,
  },
  {
    year: '2023–2025',
    location: 'Ghana (Remote)',
    title: 'Full-Stack Products & Production Apps',
    description: 'Built 3 production full-stack applications: E-Commerce Platform, Ergonexus Corporate Site, Plumbing Business Website. Focus on clean architecture, testing, and deployment.',
    lesson: 'Ship more than you plan — the code and feedback loop is how you get hired.',
    phaseNumber: 4,
  },
  {
    year: '2025',
    location: 'Tourism Company, Ghana',
    title: 'First Full-Time Role: Automation Engineer',
    description: 'Built end-to-end booking automation with Google Apps Script eliminating 90% of human error. Pipeline: email parsing → calendar events → Sheets logging → confirmations → guide assignment. Removed manual entry, drastically reduced response time.',
    lesson: 'Domain knowledge + technical skills = high-impact automation.',
    phaseNumber: 5,
  },
  {
    year: '2025–Present',
    location: 'Ghana (Remote)',
    title: 'Automation Engineer & Scalable Systems',
    description: 'Building scalable automation and infrastructure. Focus on advanced system design, team leadership, and product strategy while maintaining technical excellence. Building products that solve real logistics and operational problems at scale.',
    lesson: 'Small, consistent improvements compound into career momentum.',
    phaseNumber: 6,
  },
]

export const whereIAmNow: WhereIAmNowSection[] = [
  {
    title: 'What Drives Me',
    description: 'I love the intersection of technical precision and user empathy. The moment when clean, scalable code meets real human needs is where the magic happens. I\'m passionate about building software that people actually want to use.',
    icon: 'Heart',
    color: 'red',
  },
  {
    title: 'Current Focus',
    description: 'I\'m doubling down on fundamentals while building production-quality automation systems. It\'s the perfect blend of technical challenge and real-world problem solving. I\'m also focused on advanced system design and scalable infrastructure.',
    icon: 'Target',
    color: 'blue',
  },
  {
    title: 'How I Think',
    description: '"The more I learn, the less I know" is my favorite saying because it perfectly captures the learning journey. Every new skill reveals deeper rabbit holes, and I embrace that endless curiosity. From AI-assisted learning to understanding fundamentals, now focusing on architecture and business impact.',
    icon: 'Brain',
    color: 'purple',
  },
  {
    title: 'What\'s Next',
    description: 'My goal is to land a full-stack engineering role where I can focus 100% on building great software. I want to work with teams that value both technical excellence and user experience. I want to work on products that make a real difference in people\'s lives.',
    icon: 'ArrowRight',
    color: 'green',
  },
]

export const mindset: MindsetPillar[] = [
  {
    title: 'User-Centered Design',
    description: 'Every technical decision is guided by user impact. Great software isn\'t just about perfect algorithms—it\'s about meeting expectations and creating value.',
    icon: 'Users',
    color: 'blue',
  },
  {
    title: 'Clean Architecture',
    description: 'Writing maintainable, readable, and well-tested code that scales. Clean code isn\'t just pretty—it\'s a business asset that reduces long-term costs.',
    icon: 'Code',
    color: 'green',
  },
  {
    title: 'Business Value',
    description: 'Every technical decision is informed by user impact and business value. I focus on building products that solve real problems and create measurable impact.',
    icon: 'TrendingUp',
    color: 'purple',
  },
  {
    title: 'Continuous Learning',
    description: '"The more I learn, the less I know" perfectly captures the journey. Every new skill reveals deeper rabbit holes, and I embrace that endless curiosity.',
    icon: 'BookOpen',
    color: 'orange',
  },
]