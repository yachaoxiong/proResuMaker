import React from 'react';
import { InputProps } from '@/types/index';
import { Input } from "@/components/ui/input"

export default function AppInput(props: InputProps) {
  const { title, width, onChange } = props;
  return (
    <div className={`flex flex-col gap-2 font-serif ${width ? width : ''}`}>
      <label htmlFor={props.type} className="text-md">
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

