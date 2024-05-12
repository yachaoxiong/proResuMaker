import React from 'react';
import { InputProps } from '@/types/components/index';
import { Input } from "@/components/ui/input"

export default function AppInput(props: InputProps) {
  const { className, title, onChange } = props;
  return (
    <div className={`${className} flex flex-col gap-2 font-serif`}>
      <label 
        className="text-md" 
        htmlFor={title} 
      >
        {title}
      </label>
      <Input
        className='
          rounded-md 
          px-4 
          py-2 
          bg-inherit 
          border-neutral-200 
          border-2
        '
        {...props}
        onChange={(e) => onChange?.(e.target.value)}
      />
    </div>
  )
}

