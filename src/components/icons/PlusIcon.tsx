import React, { FC } from 'react';
import { IconProps } from '@/types/types';

const PlusIcon:FC<IconProps> = ( { width = '10', height = '10', color = 'white' } ) => (

  <svg width={ width } height={ height } viewBox="0 0 10 10" fill='none' xmlns="http://www.w3.org/2000/svg">
    <g opacity="0.4">
      <path d="M9 5L1 5" stroke={ color } strokeWidth="2" strokeLinecap="round"/>
      <path d="M5 9L5 1" stroke={ color } strokeWidth="2" strokeLinecap="round"/>
    </g>
  </svg>

);

export default PlusIcon;
