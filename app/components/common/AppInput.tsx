import React from 'react'
// import { AppInputProps } from '@/types/components/index'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export interface AppInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string
  title?: string
}

export default function AppInput(props: AppInputProps) {
  const { className, title, ...rest } = props
  return (
    <div className={`${className} flex flex-col gap-2`}>
      <Label htmlFor={title}>{title}</Label>
      <Input
        className="
          rounded-md 
          px-4 
          py-2 
          bg-inherit 
          border-neutral-200 
          border-2
        "
        {...rest}
      />
    </div>
  )
}
