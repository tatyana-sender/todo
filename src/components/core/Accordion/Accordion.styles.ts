import styled from 'styled-components';

export const Box = styled.div(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  alignItems: 'center',
  margin: '1.6rem 0',
}));

export const ListTitle = styled.div(({ theme }) => ({
  fontWeight: 700,
  color: theme.gray,

  'a.active': {
      color: theme.white,
  },

  a: {
    color: theme.gray,
    textDecoration: 'none',
  }
}));

export const List = styled.ul(({ theme }) => ({
  position: 'absolute',
  visibility: 'collapse',
  width: '100%',
  listStyle: 'none',
  borderLeft: `2px solid ${theme.lightGray}`,
  color: theme.gray,

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
    color: theme.gray,

    '&.active': {
      color: theme.white,
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
      background: theme.lightGray
    },
  },
}));
