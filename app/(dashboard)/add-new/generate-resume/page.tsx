import React from 'react'
import Hero from '@/app/components/add-new/Hero'
import { Separator } from '@/components/ui/separator'
import GenerateResumeCard from '@/app/components/add-new/generate-resume/GenerateResumeCard'
export default function GenerateResume() {
  return (
    <div>
      <Hero />
      <Separator />

      <div>
        <GenerateResumeCard />
      </div>
    </div>
  )
}
