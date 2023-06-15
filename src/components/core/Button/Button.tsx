import React, { FC } from 'react';
import { StyledButton } from '@/components/core/Button/Button.styles';

interface ButtonProps {
  children: any,
  variant?: string,
  onClick?: () => void
};

const Button:FC<ButtonProps> = ({ children, variant, ...rest }) => (
  <StyledButton variant={variant} {...rest}>
    {children}
  </StyledButton>
);

export default Button;