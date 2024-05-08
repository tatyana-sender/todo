import styled from 'styled-components';

interface ButtonProps {
  variant?: string,
  isActive?: boolean
}

export const StyledButton = styled.button<ButtonProps>(({ variant, isActive }) => ({
  position: 'fixed',
  left: '3.2rem',
  bottom: '3.2rem',
  zIndex: 10,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '25.4rem',
  height: 'min-content',
  padding: '0.4rem',
  border: 'none',
  borderRadius: '2rem',
  background: 'var(--link-active-bg-color)',
  color: 'var(--text2-color)',

  span: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    padding: '0.7rem',
    color: 'var(--link-color)',
  },

  svg: {
    fill: 'var(--link-color)',
  },

  '.active': {
    borderRadius: '2rem',
    background: 'var(--border-color)',
    color: 'var(--link-active-color)',

    svg: {
      fill: 'var(--link-active-color)',
    },
  },
}));
