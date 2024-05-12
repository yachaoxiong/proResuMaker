import React from 'react';
import { TitleProps } from '@/types/components/index';

export default function Title(props:TitleProps) {
  const { title,subTitle,boldTitle,titleFontSize,subTitleFontSize,font } = props;
  return (
    <div className='flex flex-col gap-2 items-center'>
      <div 
        className={`
            ${font?font:'font-serif'} 
            ${titleFontSize?titleFontSize:'text-xl'}
            ${boldTitle?'font-bold':''}
        `}
      >
        {title}
      </div>
      <div 
        className={`
          text-neutral-500
            ${font?font:'font-serif'} 
            ${subTitleFontSize?subTitleFontSize:'text-md'}
        `}
      >
        {subTitle}
      </div>
    </div>
  )
}
