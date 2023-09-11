import styled from 'styled-components';

interface BoxProps {
  alignCenter?: boolean,
  marginTop?: string
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
  background: theme.black,
  color: theme.white,

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

export const Box = styled.div<BoxProps>(({theme, alignCenter, marginTop}) => ({
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

export const Title = styled.div(({ theme }) => ({
  color: theme.white,
  fontWeight: 700
}));

export const CreateDate = styled.div(({ theme }) => ({
  color: theme.gray,
  fontSize: '1.4rem',
  fontWeight: 600
}));
