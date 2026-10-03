# Portfolio Website

A modern, performant portfolio website built with Next.js 14, Tailwind CSS, and Framer Motion.

## Features

- **Modern Stack**: Next.js 14 (App Router), TypeScript, Tailwind CSS
- **Animations**: Framer Motion for smooth transitions and scroll reveals
- **Dark Mode**: System-aware with manual toggle (next-themes)
- **Responsive**: Mobile-first design, works on all devices
- **Accessible**: Semantic HTML, ARIA labels, focus management
- **SEO Optimized**: Metadata, Open Graph, sitemap generation
- **Contact Form**: Serverless function with validation (Zod + React Hook Form)
- **Project Showcase**: Dynamic project pages with tech stack tags

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod
- **Icons**: Lucide React
- **Theming**: next-themes
- **UI Components**: Radix UI primitives
- **Email**: Resend (optional)
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd portfolio

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `RESEND_API_KEY` | Resend API key for sending emails | No |
| `CONTACT_EMAIL` | Email to receive contact form submissions | No |

If `RESEND_API_KEY` is not set, form submissions will be logged to console.

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── api/contact/        # Contact form API route
│   ├── about/              # About page
│   ├── projects/           # Projects listing & detail pages
│   ├── contact/            # Contact page
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── ui/                 # Reusable UI components
│   ├── layout/             # Layout components (Header, Footer)
│   ├── sections/           # Page sections (Hero, ProjectCard, etc.)
│   └── animations/         # Animation components
├── lib/                    # Utilities, data, validations
├── hooks/                  # Custom React hooks
└── types/                  # TypeScript types
```

## Customization

### Projects

Edit `src/lib/projects.ts` to add your projects:

```typescript
export const projects: Project[] = [
  {
    slug: 'my-project',
    title: 'My Project',
    description: 'Short description for cards',
    longDescription: 'Full case study with **markdown** support',
    image: '/images/my-project.jpg',
    techStack: ['Next.js', 'Tailwind', 'PostgreSQL'],
    liveUrl: 'https://my-project.com',
    repoUrl: 'https://github.com/user/my-project',
    featured: true,
    category: 'web',
    year: 2024,
  },
]
```

### Skills

Edit the `skills` array in `src/app/page.tsx` and `src/app/about/page.tsx`.

### Colors & Theme

Modify CSS variables in `src/app/globals.css`:

```css
:root {
  --primary: oklch(0.205 0 0);        /* Main brand color */
  --background: oklch(1 0 0);         /* Page background */
  --foreground: oklch(0.145 0 0);     /* Text color */
  /* ... more variables */
}

.dark {
  --primary: oklch(0.922 0 0);
  --background: oklch(0.145 0 0);
  /* ... dark mode overrides */
}
```

### Profile

Replace `public/images/profile.jpg` with your photo.
Replace `public/og-image.jpg` with your social preview image (1200x630).

## Scripts

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run start     # Start production server
npm run lint      # Run ESLint
npm run typecheck # TypeScript type checking
```

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy

### Other Platforms

The app can be deployed anywhere that supports Next.js:
- Netlify
- AWS Amplify
- Docker container
- Static export (`output: 'export'` in next.config.ts)

## Performance

- Static generation for project pages
- Image optimization with Next.js Image
- Font optimization with next/font
- Code splitting and lazy loading
- Minimal JavaScript bundle

## Accessibility

- Semantic HTML5 elements
- ARIA labels and roles
- Focus management
- Color contrast compliance
- Keyboard navigation
- Screen reader support
- Skip to main content link

## License

MIT License - feel free to use this as a template for your own portfolio.