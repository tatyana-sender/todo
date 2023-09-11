import styled from 'styled-components';

export const Wrapper = styled.div(({ theme }) => ({
  position: 'relative',
}));

export const Title = styled.div(({ theme }) => ({
  position: 'absolute',
  top: '1.5rem',
  left: '32.8rem',
  display: 'flex',
  fontSize: '2rem',
  color: theme.white,
}));
