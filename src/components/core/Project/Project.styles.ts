import styled from 'styled-components';

interface BoxProps {
  alignCenter?: boolean,
  marginTop?: string
}

interface ProgressbarProps {
  $width: any
}

export const Wrapper = styled.div(({}) => ({
  width: 'calc((100% - 2.8rem) / 3)',
  padding: '1.6rem',
  marginBottom: '2.8rem',
  borderRadius: '1.2rem',
  border: '0.2rem solid var(--item-border-color)',
  background: 'var(--item-bg-color)',
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

export const Box = styled.div<BoxProps>(({ alignCenter, marginTop }) => ({
  position: 'relative',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: alignCenter ? 'center' : '',
  marginTop: marginTop ? marginTop : 0,
  color: 'var(--link-active-color)',

  Button: {
    fontSize: '1.4rem',
    fontWeight: 600,
    lineHeight: alignCenter ? 1 : 0,
  },

  strong: {
    color: 'var(--link-color)',
  }
}));

export const Title = styled.div(({}) => ({
  color: 'var(--link-active-color)',
  fontWeight: 700,

  a: {
    textDecoration: 'none',
  },
}));

export const Progressbar = styled.div<ProgressbarProps>(({ $width }) => ({
  position: 'relative',
  height: '0.5rem',
  width: '100%',
  background: 'var(--bg2-color)',
  borderRadius: '0.5rem',
  marginTop: '2rem',

  '&::after': {
    content: '""',
    position: 'absolute',
    display: 'block',
    width: `${$width * 100}%`,
    height: '0.5rem',
    borderRadius: '0.5rem',
    background: $width === 1 ? 'var(--green-color)' : ($width < 0.33 ? 'var(--red-color)' : 'var(--orange-color)'),
  }
}));

export const CreateDate = styled.div(({}) => ({
  color: 'var(--text2-color)',
  fontSize: '1.4rem',
  fontWeight: 600
}));

export const Deadline = styled.div(({}) => ({
  color: 'var(--deadline-color)',
  fontSize: '1.4rem',
  fontWeight: 600,
  padding: '0.8rem 1.6rem',
  borderRadius: '2rem',
  background: 'var(--deadline-bg-color)',
}));
