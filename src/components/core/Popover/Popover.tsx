import React, {Dispatch, FC, SetStateAction} from 'react';
import { PopoverWrapper } from '@/components/core/Popover/Popover.styles';

interface PopoverProps {
  //isOpen?: boolean,
  children: string | JSX.Element | JSX.Element[]
}

const Popover:FC<PopoverProps> = (
  {
    children,
  }) => {
  return (
    <PopoverWrapper>
      {children}
    </PopoverWrapper>
  )
}

export default Popover;
