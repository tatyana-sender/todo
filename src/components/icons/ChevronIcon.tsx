import React, { FC } from 'react';
import { IconProps } from '@/types/types';

const ChevronIcon:FC<IconProps> = ({ width = '6', height = '10', color = 'white' }) => (

  <svg width={ width } height={ height } viewBox="0 0 6 10" fill='none' xmlns="http://www.w3.org/2000/svg">
    <path d="M1 1L5 5L1 9" stroke={ color } strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>

);

export default ChevronIcon;
