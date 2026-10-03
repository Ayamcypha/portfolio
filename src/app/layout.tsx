import type { Metadata, Viewport } from 'next'
import { Inter, Geist_Mono } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'optional',
  preload: false,
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'optional',
  preload: false,
})

export const metadataBase = new URL('https://yourdomain.com')

export const metadata: Metadata = {
  metadataBase,
  title: {
    default: 'Portfolio | Full-Stack Product Engineer',
    template: '%s | Portfolio',
  },
  description: 'Full-Stack Product Engineer building reliable software. Portfolio featuring web applications, APIs, and open source projects.',
  keywords: ['developer', 'portfolio', 'full-stack', 'React', 'Next.js', 'TypeScript', 'web development', 'software engineer'],
  authors: [{ name: 'Your Name' }],
  creator: 'Your Name',
  publisher: 'Your Name',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yourdomain.com',
    siteName: 'Portfolio',
    title: 'Portfolio | Full-Stack Product Engineer',
    description: 'Full-Stack Product Engineer building reliable software.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Portfolio Preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfolio | Full-Stack Product Engineer',
    description: 'Full-Stack Product Engineer building reliable software.',
    images: ['/og-image.jpg'],
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${geistMono.variable} h-full antialiased dark`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 px-4 py-2 bg-primary text-primary-foreground rounded-md">
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-1 pt-16" role="main">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}