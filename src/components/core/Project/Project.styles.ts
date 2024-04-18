import styled from 'styled-components';

interface BoxProps {
  alignCenter?: boolean,
  marginTop?: string
}

interface ProgressbarProps {
  $width: any
}

export const Wrapper = styled.div(({ theme }) => ({
  // width: '100%',
  // maxWidth: 'calc((100vw - 41rem) / 3)',
  // margin: '1.4rem 0',
  // padding: '2rem',
  // borderRadius: '1.2rem',
  // background: theme.darkGray,
  // color: theme.gray,

  width: 'calc((100% - 2.8rem) / 3)',
  padding: '1.6rem',
  marginBottom: '2.8rem',
  borderRadius: '1.2rem',
  background: 'var(--bg-color)',
  color: 'var(--text-color)',

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

  Button: {
    fontSize: '1.4rem',
    fontWeight: 600,
    lineHeight: alignCenter ? 1 : 0,
  }
}));

export const Title = styled.div(({}) => ({
  color: 'var(--text-color)',
  fontWeight: 700
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
