import { Metadata } from 'next'
import { ContactForm } from '@/components/sections/ContactForm'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with me for projects, collaborations, or just to say hello.',
}

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <ContactForm />
    </div>
  )
}