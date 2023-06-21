import styled from 'styled-components';

interface BoxProps {
  alignCenter?: boolean,
  marginTop?: string
}

export const Wrapper = styled.div(({ theme }) => ({
  width: '100%',
  maxWidth: 'calc((100vw - 41rem) / 3)',
  margin: '1.4rem 0',
  padding: '2rem',
  borderRadius: '1.2rem',
  background: theme.darkGray,
  color: theme.gray,
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
