import { Metadata } from 'next'
import { AboutHero } from '@/components/sections/AboutHero'
import { JourneyPhases } from '@/components/sections/JourneyPhases'
import { TurningPointsTimeline } from '@/components/sections/TurningPointsTimeline'
import { WhereIAmNow } from '@/components/sections/WhereIAmNow'
import { MindsetSection } from '@/components/sections/MindsetSection'
import { AboutCTA } from '@/components/sections/AboutCTA'

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn more about my background, experience, and journey as a full-stack developer.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <AboutHero />
      <JourneyPhases />
      <TurningPointsTimeline />
      <WhereIAmNow />
      <MindsetSection />
      <AboutCTA />
    </div>
  )
}