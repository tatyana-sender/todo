import styled from 'styled-components';

export const MainWrapper = styled.div(({ theme }) => ({
  width: 'calc(100% - 31.8rem)',
  minHeight: '100%',
  marginLeft: '31.8rem',
  padding: '32px 16px',
  background: theme.darkGray,
}));

export const Box = styled.div(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderBottom: `0.1rem solid ${theme.lightGray}`,
  marginBottom: '2rem',
}));

export const View = styled.div(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  fontWeight: 600,
  color: theme.white,
  padding: '1.8rem',

  'span': {
    display: 'inline-block',
    marginLeft: '0.8rem'
  },

  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: '0.1rem',
    background: theme.white
  }
}));

export const Column = styled.div(({ theme }) => ({
  width: '30%',
  padding: '1.6rem',
  borderRadius: '1.2rem',
  background: theme.black,
  color: theme.white
}));
