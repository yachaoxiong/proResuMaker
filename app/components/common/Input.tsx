import React from 'react';
import { InputProps } from '@/types/index';

export default function Input(props: InputProps) {
  const { title, placeHolder, required, width, onChange } = props;
  return (
    <div className={`flex flex-col gap-2 font-serif ${width ? width : ''}`}>
      <label htmlFor={title} className="text-md">
        {title}
      </label>
      <input
        className='
          rounded-md 
          px-4 
          py-2 
          bg-inherit 
          border-neutral-200 
          border-2
        '
        name={title}
        placeholder={placeHolder}
        required={required}
        onChange={(e) => onChange?.(e.target.value)}
      />
    </div>
  )
}

