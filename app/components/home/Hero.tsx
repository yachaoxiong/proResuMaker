import React from 'react'
import { Input } from '@/components/ui/input'
import { FaPlus } from 'react-icons/fa'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import ResumeCard from './ResumeCard'
import Link from 'next/link'

export default function Hero() {
  const resumeMockData = [
    {
      id: '1',
      title: 'Software Engineer',
      industry: 'Software Development',
      description: 'A software engineer with 5 years of experience',
      createdAt: '2021-07-01T00:00:00Z',
      updatedAt: '2021-07-01T00:00:00Z',
    },
  ]
  return (
    <div>
      <div className="flex justify-between items-center py-12  container flex-wrap lg:flex-nowrap gap-6">
        <h1 className="text-3xl font-bold md:text-4xl lg:5xl">Dashboard</h1>
        <div className="flex space-x-2 gap-6 flex-wrap sm:flex-nowrap lg:gap-2">
          <Input type="text" placeholder="Search" />
          <Link href="/add-new">
            <Button>
              <FaPlus />
              Add New Resume
            </Button>
          </Link>
        </div>
      </div>
      <Separator />
      <div className="container pt-10 flex gap-6 flex-wrap lg:flex-nowrap">
        <ResumeCard />
        <ResumeCard />
      </div>
    </div>
  )
}
