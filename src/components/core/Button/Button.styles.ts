import styled from 'styled-components';

interface ButtonProps {
  variant?: string,
  isActive?: boolean
}

export const StyledButton = styled.button<ButtonProps>(({ variant, isActive }) => ({
  width: 'min-content',
  height: 'min-content',
  padding: '1rem',
  border: isActive ? '0.1rem solid var(--bg2-color)' : 'none',
  borderRadius: '2rem',
  background: 'var(--bg2-color)',
  lineHeight: 0,
  whiteSpace: 'nowrap',
  color: 'var(--text-color)',

  '&.text': {
    background: 'transparent',
  },

  '&.sort': {
    marginRight: '3rem',
  },

  '&.line': {
    position: 'relative',
    color: isActive ? 'var(--link-active-color)' : 'var(--link-color)',
    border: 'none',
    background: 'transparent',

    '&::after': {
      content: isActive ? '""' : 'none',
      position: 'absolute',
      left: 0,
      bottom: '-1.4rem',
      display: 'block',
      width: '100%',
      height: '0.2rem',
      background: isActive ? 'var(--link-active-color)' : 'var(--link-color)',
    }
  },

  '&.outlined': {
    background: 'transparent',
    border: '0.1rem solid var(--bg2-color)',
  },

  '&.contained': {
    padding: '1.2rem 2.4rem',
    lineHeight: 1,
    background: 'var(--contained-bg-color)',
    color: 'var(--white-color)',
  },

  svg: {
    fill: isActive ? 'var(--link-active-color)' : 'var(--link-color)',
  }
}));
