import styled from 'styled-components';

export const Wrapper = styled.div(({ theme }) => ({
  width: '100%',
  maxWidth: 'calc((100vw - 41rem) / 3)',
  margin: '1.4rem 0',
  padding: '2rem',
  borderRadius: '1.2rem',
  background: theme.darkGray,
}));
