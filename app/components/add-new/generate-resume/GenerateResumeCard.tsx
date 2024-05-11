'use client'
import React, { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import Image from 'next/image'

export default function GenerateResumeCard() {
  const [title, setTitle] = useState('')
  const [industry, setIndustry] = useState('')
  const [jobTitle, setJobTitle] = useState('')

  const pageText = {
    title: 'Generate your template resume',
    description:
      'Craft a resume using our template with just a few details. Edit anytime later.',
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
              <Label htmlFor="title">Title</Label>
              <Input
                className="w-100"
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <Label htmlFor="industry">Industry</Label>
              <Input
                type="text"
                id="industry"
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 w-full">
            <Label htmlFor="jobTitle">Job Title</Label>
            <Input
              type="text"
              id="jobTitle"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
            />
          </div>
          <div className="flex justify-end">
            <Button className="px-8">Generate Resume</Button>
          </div>
        </div>
      </Card>
    </div>
  )
}
