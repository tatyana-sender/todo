import styled from 'styled-components';

interface BoxProps {
  alignCenter?: boolean,
  marginTop?: string
}

export const Wrapper = styled.div(({}) => ({
  width: '100%',
  maxWidth: 'calc((100vw - 41rem) / 3)',
  margin: '1.4rem 0',
  padding: '2rem',
  borderRadius: '1.2rem',
  border: '0.2rem solid var(--item-border-color)',
  background: 'var(--item-bg-color)',
  color: 'var(--text2-color)',
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

export const CreateDate = styled.div(({}) => ({
  color: 'var(--text2-color)',
  fontSize: '1.4rem',
  fontWeight: 600
}));
