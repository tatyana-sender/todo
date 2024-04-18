import styled from 'styled-components';

export const Box = styled.div(({}) => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  alignItems: 'center',
  margin: '1.6rem 0',
}));

export const ListTitle = styled.div(({}) => ({
  fontWeight: 700,
  color: 'var(--text2-color)',

  'a.active': {
      color: 'var(--text-color)',
  },

  a: {
    color: 'var(--text2-color)',
    textDecoration: 'none',
  }
}));

export const List = styled.ul(({}) => ({
  position: 'absolute',
  visibility: 'collapse',
  width: '100%',
  listStyle: 'none',
  borderLeft: '2px solid var(--border-color)',
  color: 'var(--text2-color)',

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
    color: 'var(--text2-color)',

    '&.active': {
      color: 'var(--text-color)',
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
      background: 'var(--bg2-color)'
    },
  },
}));
