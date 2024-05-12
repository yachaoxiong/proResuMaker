'use client'
import React, { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import Image from 'next/image'
import AppInput from '../../common/AppInput'

export default function GenerateResumeCard() {
  const [title, setTitle] = useState('')
  const [industry, setIndustry] = useState('')
  const [jobTitle, setJobTitle] = useState('')

  const pageText = {
    title: 'Generate your template resume',
    description:
      'Craft a resume using our template with just a few details. Edit anytime later.',
  }

  const handleGenerateResume = () => {
    console.log('Generate Resume')
    console.log('Title:', title)
    console.log('Industry:', industry)
    console.log('Job Title:', jobTitle)
  }
  return (
    <div className="flex gap-6 container justify-center -mt-12 flex-col-reverse lg:flex-row">
      <div>
        <Image src="/images/image.png" alt="Add New" width={200} height={120} />
      </div>
      <Card className="px-12 py-8">
        <div className="flex flex-col ">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-medium">
            {pageText.title}
          </h1>
          <h5 className=" text-sm  text-gray-600 md:pl-2 pt-2">
            {pageText.description}
          </h5>
        </div>
        <Separator className="my-4" />
        <div className="flex flex-col gap-6 pt-6">
          <div className="flex justify-between gap-4 flex-col md:flex-row">
            <div className="flex flex-col gap-2 w-full">
              <AppInput
                id="title"
                title="Title"
                value={title}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setTitle(e.target.value)
                }
              />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <AppInput
                id="industry"
                title="Industry"
                value={industry}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setIndustry(e.target.value)
                }
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 w-full">
            <AppInput
              id="jobTitle"
              title="jobTitle"
              value={jobTitle}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setJobTitle(e.target.value)
              }
            />
          </div>
          <div className="flex justify-end">
            <Button className="px-8" onClick={handleGenerateResume}>
              Generate Resume
            </Button>
          </div>
        </div>
      </Card>
    </div>
  )
}
