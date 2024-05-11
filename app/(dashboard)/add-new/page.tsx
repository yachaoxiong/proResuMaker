import React from 'react'
import Image from 'next/image'
import { Separator } from '@/components/ui/separator'
import TemplateCard from '@/app/components/add-new/TemplateCard'
import Hero from '@/app/components/add-new/Hero'

export default function AddNew() {
  const templateData = [
    {
      id: '1',
      title: 'Example Resume',
      image: '/images/image.png',
      description: 'Generate a example Resume ',
      link: '/add-new/generate-resume',
    },
    {
      id: '2',
      title: 'Customize My Resume',
      image: '/images/image.png',
      description: 'Customize My Resume',
      link: '/add-new/choose-template',
    },
  ]
  return (
    <div>
      <Hero />
      <Separator />
      <div className="container flex gap-12 flex-wrap lg:flex-nowrap justify-center -mt-[60px]">
        {templateData.map((template) => (
          <TemplateCard key={template.title} template={template} />
        ))}
      </div>
    </div>
  )
}
