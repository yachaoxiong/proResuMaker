import React from 'react'
import { AiFillEdit } from 'react-icons/ai'
import { IoMdDownload } from 'react-icons/io'
import { Card } from '@/components/ui/card'
import { FaClock } from 'react-icons/fa'
import { Badge } from '@/components/ui/badge'
import { FaEye } from 'react-icons/fa6'

export default function ResumeCard({ resume }: any) {
  return (
    <Card className="w-full p-4 flex gap-9 max-w-sm relative">
      <div className="absolute top-3 right-3 p-2 cursor-pointer text-2xl bg-gray-200 rounded-full">
        <FaEye />
      </div>
      <div className="h-[160px] bg-gray-200 mb-4 w-1/3"></div>
      <div className="flex flex-col gap-4 w-2/3 justify-between">
        <div>
          <h1 className="text-2xl">{resume?.title || 'title'}</h1>
          <div>
            <Badge variant="secondary" className="font-semibold">
              IT
            </Badge>
          </div>
        </div>

        <div className="flex gap-2">
          <div className="flex  flex-col items-center hover:bg-gray-100 px-4 py-2 rounded-md cursor-pointer">
            <AiFillEdit className="text-2xl" />
            <p className="font-semibold">Edit</p>
          </div>
          <div className="flex flex-col items-center hover:bg-gray-100 px-4 py-2 rounded-md cursor-pointer">
            <IoMdDownload className="text-2xl" />
            <p className="font-semibold">Download</p>
          </div>
        </div>
        <div className="flex items-center justify-end gap-2 text-gray-500">
          <FaClock />
          <p>3 days ago</p>
        </div>
      </div>
    </Card>
  )
}
