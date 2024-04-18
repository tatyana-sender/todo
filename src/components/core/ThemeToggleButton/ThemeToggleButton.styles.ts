import styled from 'styled-components';

interface ButtonProps {
  variant?: string,
  isActive?: boolean
}

export const StyledButton = styled.button<ButtonProps>(({ variant, isActive }) => ({
  position: 'absolute',
  bottom: 0,
  zIndex: 10,
  width: 'min-content',
  height: 'min-content',
  padding: variant === 'contained' ? '1.2rem 2.4rem' : '1rem',
  border: variant === 'outlined' || isActive ? '0.1rem solid var(--bg2-color)' : 'none',
  borderRadius: '2rem',
  background: (variant === 'text' || variant === 'outlined') ? 'transparent' :
    variant === 'contained' ? 'var(--blue-color)' : 'var(--bg2-color)',
  lineHeight: variant === 'contained' ? 1 : 0,
  whiteSpace: 'nowrap',
  color: 'var(--text2-color)'
}));
