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
  marginBottom: '3rem',
}));

export const ColumnWrapper = styled.div(({}) => ({
  display: 'flex',
  flexWrap: 'wrap',
  columnGap: '1.4rem',
}));

export const Notification = styled.div(({}) => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  width: 'calc((100% - 2.8rem) / 3)',
  padding: '1.6rem',
  marginBottom: '1.4rem',
  borderRadius: '1.2rem',
  border: '0.2rem solid var(--item-border-color)',
  background: 'var(--item-bg-color)',
  color: 'var(--link-color)',

  div: {
    width: 'calc(100% - 4rem)',
  },

  'button.contained': {
    color: 'var(--deadline-color)',
    fontSize: '1.4rem',
    fontWeight: 600,
    padding: '0.8rem 1.6rem',
    borderRadius: '2rem',
    background: 'var(--deadline-bg-color)',
    marginTop: '2rem',
  }
}));

export const DeleteButton = styled.button(({}) => ({
  width: '2.4rem',
  height: 'max-content',
  border: 'none',
  padding: 0,
  background: 'transparent',

  svg: {
    fill: 'transparent',
    stroke: 'var(--link-active-color)',
  }
}));