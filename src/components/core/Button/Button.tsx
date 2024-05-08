import React, { FC } from 'react';
import { StyledButton } from '@/components/core/Button/Button.styles';

interface ButtonProps {
  children: any,
  variant?: string,
  onClick?: () => void,
  isActive?: boolean
}

const Button:FC<ButtonProps> = ({ children, variant, ...rest }) => (
  <StyledButton className={variant} {...rest}>
    {children}
  </StyledButton>
);

export default Button;