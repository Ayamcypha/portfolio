import Link from 'next/link'
import { Github, Mail, Instagram, ExternalLink } from 'lucide-react'
import { ScrollReveal } from '@/components/animations/ScrollReveal'

const socialLinks = [
  { name: 'GitHub', url: 'https://github.com', icon: Github },
  { name: 'Instagram', url: 'https://www.instagram.com/vices_of_cypha?stkn=NTd4bmtqb3RrOHM2&utm_source=qr', icon: Instagram },
  { name: 'Email', url: 'mailto:michael.webdesignss@gmail.com', icon: Mail },
]

const navigateLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Experience', href: '/experience' },
  { name: 'Projects', href: '/projects' },
  { name: 'Resume', href: '/resume' },
  { name: 'Contact', href: '/contact' },
]

const getInTouchLinks = [
  { name: 'Resume', href: '/resume' },
  { name: 'Contact', href: '/contact' },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30" role="contentinfo">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigate</h3>
            <nav aria-label="Footer navigation">
              <ul className="space-y-2 text-sm">
                {navigateLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
            <nav aria-label="Get in touch">
              <ul className="space-y-2 text-sm">
                {getInTouchLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex gap-4" role="list" aria-label="Social links">
              {socialLinks.map((social, index) => (
                <ScrollReveal key={social.name} delay={index * 0.1} direction="up">
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <social.icon className="h-5 w-5" aria-hidden="true" />
                    <ExternalLink className="sr-only" aria-hidden="true" />
                  </a>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Portfolio. All rights reserved.</p>
          <p>Built with Next.js & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  )
}