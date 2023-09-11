import styled from 'styled-components';

export const Box = styled.div(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderBottom: `0.1rem solid ${theme.lightGray}`,
  marginBottom: '2rem',
}));
