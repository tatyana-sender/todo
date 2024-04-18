import styled from 'styled-components';

export const SidebarWrapper = styled.aside(({}) => ({
  position: 'fixed',
  zIndex: 10,
  width: '31.8rem',
  height: '100%',
  padding: '2.8rem',
  background: 'var(--bg-color)',
}));

export const Box = styled.div(({}) => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  alignItems: 'center',
  margin: '1.6rem 0',
}));

export const Title = styled.h1(({}) => ({
  fontWeight: 700,
  fontSize: '3rem',
  lineHeight: 1,
  color: 'var(--text-color)',
}));
