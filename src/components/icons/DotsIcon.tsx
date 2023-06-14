import React, { FC } from 'react';
import { IconProps } from '@/types/types';

const DotsIcon:FC<IconProps> = ( { width = '10', height = '10', color = 'white' } ) => (

  <svg width={ width } height={ height } viewBox="0 0 10 10" fill='none' xmlns="http://www.w3.org/2000/svg">
    <circle cx="9" cy="5" r="1" fill={ color } />
    <circle cx="5" cy="5" r="1" fill={ color } />
    <circle cx="1" cy="5" r="1" fill={ color } />
  </svg>

);

export default DotsIcon;
