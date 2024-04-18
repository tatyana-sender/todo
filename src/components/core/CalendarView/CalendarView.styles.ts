import styled from 'styled-components';
import { Calendar } from 'react-big-calendar';

export const StyledCalendar = styled(Calendar)(({ theme }) => ({
  height: '100vh',
  color: 'var(--text-color)',

  '.rbc-toolbar': {

    '.rbc-btn-group:last-child': {
      display: 'none',
    },

    'button, &-label': {
      color: 'var(--text-color)',
    }
  },


  '.rbc-event': {
    background: 'var(--red-color)'
  }
}));
