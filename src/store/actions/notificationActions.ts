import { Dispatch } from 'redux';
import { NotificationActionTypes } from '@/types/notification';

export const setNotification = (message: string) => ({
  type: NotificationActionTypes.SET_NOTIFICATION,
  payload: message,
});

export const connectWebSocket = () => (dispatch: Dispatch) => {
  const ws = new WebSocket('ws://localhost:3000');
  ws.onopen = () => {
    console.log('WebSocket connected');
  };

  ws.onmessage = (event) => {
    dispatch(receiveMessage(event.data));
    console.log('Received from server: ', event.data);
    const data = JSON.parse(event.data);
    if (data.type === 'NOTIFICATION') {
      dispatch(setNotification(data.message));
    }
  };

  ws.onerror = (error) => {
    console.error('WebSocket error:', error);
  };

  ws.onclose = () => {
    console.log('WebSocket closed');
  };

  dispatch({ type: 'WEBSOCKET_CONNECT', payload: ws });
};

export const receiveMessage = (message: string) => ({
  type: 'RECEIVE_MESSAGE',
  payload: message
});
