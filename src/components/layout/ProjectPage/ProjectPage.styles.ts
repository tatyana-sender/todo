import styled from 'styled-components';

export const Wrapper = styled.div(({}) => ({
  position: 'relative',
}));

export const Title = styled.div(({}) => ({
  position: 'absolute',
  top: '1.5rem',
  left: '32.8rem',
  display: 'flex',
  fontSize: '2rem',
  color: 'var(--text-color)',
}));
