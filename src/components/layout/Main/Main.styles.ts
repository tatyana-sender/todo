import styled from 'styled-components';

export const MainWrapper = styled.div(() => ({
  width: 'calc(100% - 31.8rem)',
  minHeight: '100vh',
  marginLeft: '31.8rem',
  padding: '3.2rem 1.6rem',
  background: 'var(--main-bg-color)',
}));

export const Box = styled.div(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderBottom: '0.1rem solid var(--border-color)',
  padding: '1.2rem 0',
  marginBottom: '2rem',
}));

export const View = styled.div(({}) => ({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  fontWeight: 600,
  color: 'var(--text-color)',

  'span': {
    display: 'inline-block',
    marginLeft: '0.8rem'
  },

  button: {
    display: 'flex',
    alignItems: 'center',
    marginRight: '2rem',
  }
}));

export const ColumnWrapper = styled.div(({}) => ({
  display: 'flex',
  justifyContent: 'space-between',
}));

export const Column = styled.div(({}) => ({
  width: 'calc((100% - 2.8rem) / 3)',
  padding: '1.6rem',
  borderRadius: '1.2rem',
  border: '0.2rem dashed var(--column-border-color)',
  background: 'var(--column-bg-color)',
  color: 'var(--link-color)',

  '&.full': {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',

    '& > div': {
      marginRight: '1.4rem',

      '&:first-child': {
        width: '100%',
      },

      '&:nth-of-type(3n+1)': {
        marginRight: 0,
      }
    }
  },
}));
