import styled from 'styled-components';
import { Calendar } from 'react-big-calendar';

export const StyledCalendar = styled(Calendar)(({ theme }) => ({
  height: '100vh',
  color: theme.white,

  '.rbc-toolbar': {

    '.rbc-btn-group:last-child': {
      display: 'none',
    },

    'button, &-label': {
      color: theme.white,
    }
  },


  '.rbc-event': {
    background: theme.red
  }
}));
