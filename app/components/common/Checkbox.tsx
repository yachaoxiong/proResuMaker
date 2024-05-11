import React from 'react';
import { CheckboxProps } from '@/types/index';

export default function Checkbox(props:CheckboxProps) {
  const { title } = props;
  return (
    <div className="flex items-center space-x-2">
      <input type='checkbox'/>
      <label
        className="text-xs leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {title}
      </label>
    </div>
  )
}
