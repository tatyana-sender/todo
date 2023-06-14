import styled from 'styled-components';

export const Wrapper = styled.div(({ theme }) => ({
  width: '100%',
  margin: '1.4rem auto',
  padding: '2rem',
  borderRadius: '1.2rem',
  background: theme.darkGray,
}));
