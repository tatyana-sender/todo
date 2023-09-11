import styled from 'styled-components';

export const MainWrapper = styled.div(({ theme }) => ({
  width: 'calc(100% - 31.8rem)',
  minHeight: '100vh',
  marginLeft: '31.8rem',
  padding: '3.2rem 1.6rem',
  background: theme.darkGray,
}));

export const Title = styled.h2(({ theme }) => ({
  fontSize: '2.4rem',
  color: theme.white,
}));

export const Box = styled.div(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderBottom: `0.1rem solid ${theme.lightGray}`,
  marginBottom: '2rem',
}));

export const ColumnWrapper = styled.div(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
}));
