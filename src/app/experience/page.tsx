import { Metadata } from 'next'
import { ExperienceHeader } from '@/components/sections/ExperienceHeader'
import { WhatILearned } from '@/components/sections/WhatILearned'
import { ExperienceTimeline } from '@/components/sections/ExperienceTimeline'
import { KeyAchievements } from '@/components/sections/KeyAchievements'
import { TechnicalEvolution } from '@/components/sections/TechnicalEvolution'
import { TechnologiesCloud } from '@/components/sections/TechnologiesCloud'
import { EvolutionInsights } from '@/components/sections/EvolutionInsights'
import { ExperienceCTA } from '@/components/sections/ExperienceCTA'

export const metadata: Metadata = {
  title: 'Experience',
  description: 'My professional experience as a Full-Stack Developer - from self-taught frontend to automation engineer.',
}

export default function ExperiencePage() {
  return (
    <div className="min-h-screen">
      <ExperienceHeader />
      <WhatILearned />
      <ExperienceTimeline />
      <KeyAchievements />
      <TechnicalEvolution />
      <TechnologiesCloud />
      <EvolutionInsights />
      <ExperienceCTA />
    </div>
  )
}