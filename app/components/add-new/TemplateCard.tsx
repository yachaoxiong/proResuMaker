import React from 'react'
import { TemplateCardProps } from '@/types/index'
import { Card } from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'

export default function TemplateCard({
  template,
}: {
  template: TemplateCardProps
}) {
  return (
    <Card className="w-full  max-w-sm relative p-8 cursor-pointer hover:shadow-lg">
      <Link
        href={template.link}
        className="w-full flex gap-9 relative flex-col items-center "
      >
        <Image
          src={template?.image}
          alt={template.title}
          width={200}
          height={200}
        />
        <div className="w-full font-medium text-center">
          <p>{template.description}</p>
        </div>
      </Link>
    </Card>
  )
}
