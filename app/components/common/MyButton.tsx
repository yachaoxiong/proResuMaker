import { Button } from '@/components/ui/button';
import { ButtonProps } from '@/types'
import React from 'react'

export default function MyButton(props: ButtonProps) {
  const { title, image, bgColor, onClick } = props;
  return (
    <Button
      className={`${bgColor?bgColor:'bg-blue-800'} text-white rounded-md px-4 py-2 mb-2`}
      onClick={onClick}
    >
      <div className='flex flex-row items-center gap-2'>
        <div>

        </div>
        <div>{title}</div>
      </div>
      
    </Button>
  )
}
