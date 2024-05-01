import styled from 'styled-components';

export const BoxRight = styled.div(() => ({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  marginBottom: '2rem',
}));

export const NotificationBox = styled.div(({}) => ({
  position: 'relative',
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  marginRight: '2rem',

  svg: {
    fill: 'var(--link-active-color)',
  },
}));

export const CalendarBox = styled.div(({}) => ({
  position: 'relative',
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  color: 'var(--link-color)',

  svg: {
    fill: 'var(--link-active-color)',
    marginRight: '0.5rem',
  }
}));
