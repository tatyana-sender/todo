import styled from 'styled-components';

interface ButtonProps {
  variant?: string
}

export const StyledButton = styled.button<ButtonProps>(({ theme, variant }) => ({
  width: 'min-content',
  height: 'min-content',
  padding: variant === 'contained' ? '1.2rem 2.4rem' : '1rem',
  border: variant === 'outlined' ? `0.1rem solid ${theme.lightGray}` : 'none',
  borderRadius: '2rem',
  background: (variant === 'text' || variant === 'outlined') ? 'transparent' :
    variant === 'contained' ? theme.blue : theme.lightGray,
  lineHeight: variant === 'contained' ? 1 : 0,
  whiteSpace: 'nowrap',
  color: theme.white
}));