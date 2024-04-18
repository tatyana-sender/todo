import styled from 'styled-components';

export const MainWrapper = styled.div(({}) => ({
  width: 'calc(100% - 31.8rem)',
  minHeight: '100vh',
  marginLeft: '31.8rem',
  padding: '3.2rem 1.6rem',
  background: 'var(--main-bg-color)',
}));

export const Title = styled.h2(({}) => ({
  fontSize: '2.4rem',
  color: 'var(--text-color)',
}));

export const Box = styled.div(({}) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderBottom: '0.1rem solid var(--border-color)',
  marginBottom: '2rem',
}));

export const ColumnWrapper = styled.div(({}) => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
}));
