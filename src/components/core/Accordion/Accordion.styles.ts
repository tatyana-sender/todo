import styled from 'styled-components';

export const Box = styled.div(({}) => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  alignItems: 'center',
  margin: '1.6rem 0',

  svg: {
    stroke: 'var(--link-color)',
  },

  '&.active svg': {
    stroke: 'var(--link-active-color)',
    transform: 'rotate(90deg)',
  },
}));

export const ListTitle = styled.div(({}) => ({
  fontWeight: 700,
  color: 'var(--link-color)',

  'a.active': {
      color: 'var(--link-active-color)',
  },

  a: {
    color: 'var(--link-color)',
    textDecoration: 'none',
  },
}));

export const List = styled.ul(({}) => ({
  position: 'absolute',
  visibility: 'collapse',
  width: 'calc(100% - 4rem)',
  listStyle: 'none',
  borderLeft: '2px solid var(--border-color)',
  color: 'var(--link-color)',

  '&.active': {
    position: 'relative',
    visibility: 'visible',
  },

  'li, a': {
    position: 'relative',
    display: 'block',
    padding: '1rem 1.8rem',
    marginLeft: '2.2rem',
    borderRadius: '1.8rem',
    textDecoration: 'none',
    color: 'var(--link-color)',

    '&.active': {
      color: 'var(--link-active-color)',
      background: 'var(--link-active-bg-color)',
    },

    '&::before': {
      content: '""',
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      left: '-2.2rem',
      display: 'inline-block',
      width: '1.4rem',
      height: '0.2rem',
      background: 'var(--border-color)'
    },
  },
}));
