import type { Experience } from '@/types'

export const experience: Experience[] = [
  // 1. HIGH SCHOOL - Web Discovery
  {
    role: 'Frontend Developer (Self-Taught)',
    company: 'Adisadel College',
    period: '2017 — 2021',
    status: 'completed',
    location: 'Cape Coast, Ghana',
    summary: 'Discovered HTML/CSS/JS in high school. Mastered JavaScript and CSS to bring static pages to life.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Responsive Design', 'DOM Manipulation'],
    projectsBuilt: 5,
    technologiesCount: 5,
    keyAchievementsCount: 3,
    contextImpact: 'Foundation of my entire development career - self-taught through passion and practice',
    detailedProjects: [
      {
        name: 'Personal Portfolio Website',
        description: 'First website built from scratch with custom animations and responsive design',
        impact: 'Learned the complete frontend workflow from design to deployment',
        keyLearnings: ['CSS Grid/Flexbox', 'Vanilla JS animations', 'Git basics'],
        nextSteps: ['Learn React', 'Build more complex apps']
      }
    ],
    detailedAchievements: [
      { title: 'Self-Taught Mastery', impact: 'Built foundation without formal training', keyMetric: '100+ hours self-study' },
      { title: 'CSS Animation Mastery', impact: 'Brought static pages to life', keyMetric: '50+ custom animations' },
      { title: 'JavaScript Proficiency', impact: 'Mastered DOM manipulation & ES6+', keyMetric: '20+ vanilla JS projects' }
    ]
  },

  // 2. FREELANCE (Historical - Fiverr, account deleted)
  {
    role: 'Freelance Frontend Developer',
    company: 'Freelance (Fiverr & Contracts)',
    period: '2019 — 2021',
    status: 'completed',
    location: 'Remote (Ghana)',
    summary: 'Freelance frontend projects on Fiverr and contract work for side income while in high school. Account deleted in 2025.',
    technologies: ['React', 'JavaScript', 'CSS', 'Git', 'Responsive Design', 'Client Communication'],
    projectsBuilt: 8,
    technologiesCount: 6,
    keyAchievementsCount: 4,
    contextImpact: 'Learned client management, project scoping, and delivery under deadlines',
    detailedProjects: [
      {
        name: 'Landing Page Templates',
        description: 'Built responsive landing pages for small businesses',
        impact: 'Delivered 15+ client projects with 5-star ratings',
        keyLearnings: ['Client requirements gathering', 'Project estimation', 'Code quality under pressure'],
        nextSteps: ['Build portfolio', 'Learn backend for full-stack delivery']
      }
    ],
    detailedAchievements: [
      { title: 'Fiverr Top Rated', impact: 'Built reputation through quality delivery', keyMetric: '50+ orders, 4.9★ rating' },
      { title: 'Client Management', impact: 'Learned professional communication', keyMetric: '20+ clients served' },
      { title: 'Rapid Delivery', impact: 'Mastered efficient development workflows', keyMetric: 'Projects delivered in 2-5 days' }
    ]
  },

  // 3. KNUST - Logistics + Backend + Robotics (merged)
  {
    role: 'Logistics Student & Full-Stack Developer + Robotics',
    company: 'KNUST (Kwame Nkrumah University of Science and Technology)',
    period: '2021 — 2025',
    status: 'completed',
    location: 'Kumasi, Ghana',
    summary: 'Studied Logistics & Supply Chain. Learned backend (Node.js, Express, SQL) AND robotics (Arduino, 3D printing). Built robotic vacuum and fully 3D printed drone. Hardware skills maintained but not actively practiced.',
    technologies: [
      'Node.js', 'Express.js', 'SQL', 'PostgreSQL',  // Backend
      'Arduino', 'Tinkercad', '3D Printing', 'C++', 'Electronics', // Robotics (past)
      'TypeScript', 'Prisma', 'Data Analytics'       // Modern
    ],
    projectsBuilt: 9,
    technologiesCount: 15,
    keyAchievementsCount: 6,
    contextImpact: 'Unique hybrid: logistics domain + full-stack + hardware/robotics',
    detailedProjects: [
      {
        name: 'Supply Chain Analytics Dashboard',
        description: 'Analytics dashboard for logistics data visualization',
        impact: 'Applied domain knowledge to real data problems',
        keyLearnings: ['SQL optimization', 'Data modeling', 'API design'],
        nextSteps: ['Learn modern ORM', 'Build full-stack apps']
      },
      {
        name: 'Robotic Vacuum Cleaner',
        description: 'Cardboard body with 3D printed vacuum fan, Arduino-controlled',
        impact: 'First robotics project - mechanical design + electronics integration',
        keyLearnings: ['Arduino programming', '3D printing design', 'Motor control', 'Power management'],
        nextSteps: ['Add autonomous navigation', 'Sensor integration']
      },
      {
        name: 'Fully 3D Printed Drone',
        description: 'Fully 3D printed frame, custom flight controller',
        impact: 'Overcame multiple flight failures to achieve stable flight',
        keyLearnings: ['Flight dynamics', 'PID tuning', '3D printing optimization', 'Failure analysis'],
        nextSteps: ['Add autonomous navigation', 'FPV system']
      }
    ],
    detailedAchievements: [
      { title: 'Backend Mastery', impact: 'Transitioned from frontend-only to full-stack', keyMetric: '3 backend frameworks mastered' },
      { title: 'Robotics Success', impact: 'Built vacuum robot + functional drone', keyMetric: '2 robots completed' },
      { title: '3D Printing Mastery', impact: 'Designed and printed custom drone frame', keyMetric: '100+ print hours' },
      { title: 'Domain-Technical Bridge', impact: 'Merged logistics knowledge with tech + hardware', keyMetric: 'Unique hybrid skillset' }
    ]
  },

  // 4. CURRENT JOB - Logistics Specialist & Automation Engineer
  {
    role: 'Logistics Specialist & Automation Engineer',
    company: 'Tourism Company',
    period: 'Sep 2025 — Present',
    status: 'current',
    location: 'Ghana',
    summary: 'Built end-to-end booking automation with Google Apps Script eliminating 90% of human error in booking processing.',
    technologies: ['Google Apps Script', 'Gmail API', 'Google Calendar API', 'Google Sheets API', 'JavaScript', 'Automation'],
    projectsBuilt: 1,
    technologiesCount: 6,
    keyAchievementsCount: 4,
    contextImpact: 'Applied logistics domain knowledge + scripting to solve real business problem',
    detailedProjects: [
      {
        name: 'Booking Automation System',
        description: 'Full automation pipeline: email parsing → calendar events → Sheets logging → confirmations → guide assignment',
        impact: 'Eliminated 90% of human error in booking processing; drastically reduced response time',
        keyLearnings: ['Google Apps Script ecosystem', 'API integrations (Gmail, Calendar, Sheets)', 'Event-driven automation', 'Error handling & monitoring'],
        nextSteps: ['Migrate to cloud functions', 'Add analytics dashboard', 'Multi-language support']
      }
    ],
    detailedAchievements: [
      { title: 'Error Reduction', impact: 'Automated booking processing pipeline', keyMetric: '90% human error eliminated' },
      { title: 'Response Time', impact: 'Instant automated confirmations & guide assignment', keyMetric: 'Near-zero response time' },
      { title: 'Data Integrity', impact: 'Single source of truth in Google Sheets', keyMetric: '100% booking records captured' },
      { title: 'Operational Efficiency', impact: 'Removed manual booking entry', keyMetric: 'Hours saved per week' }
    ]
  }
]