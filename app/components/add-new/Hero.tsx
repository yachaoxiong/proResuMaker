import React from 'react'
import Image from 'next/image'

export default function Hero() {
  const pageText = {
    title: 'Craft Your AI-Powered Resume',
    description:
      'Launch a new journey by importing your details, or let our templates guide your story.',
  }
  return (
    <div className="bg-white">
      <div className="flex justify-between items-center  container flex-wrap lg:flex-nowrap gap-6 pb-20 ">
        <div className="pt-10 lg:pt-0">
          <h1 className="text-xl md:text-3xl lg:text-5xl font-medium">
            {pageText.title}
          </h1>
          <h5 className=" text-md md:text-lg text-gray-600 md:pl-2 pt-2">
            {pageText.description}
          </h5>
        </div>
        <div>
          <Image
            src="/images/airesume.png"
            alt="Add New"
            width={200}
            height={120}
          />
        </div>
      </div>
    </div>
  )
}
