import { Metadata } from 'next'
import { ResumeSection } from '@/components/sections/Resume'

export const metadata: Metadata = {
  title: 'Resume',
  description: 'My professional resume - skills, experience, and education.',
}

export default function ResumePage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <ResumeSection />
    </div>
  )
}