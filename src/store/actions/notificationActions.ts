import { Dispatch } from 'redux';
import axios from 'axios';
import { NotificationActionTypes, setNotification, NotificationAction } from '@/types/notification';
import { API_URL, NOTIFICATIONS_PATH } from '@/constants/global';

export const connectWebSocket = () => (dispatch: Dispatch) => {
  const ws = new WebSocket('ws://localhost:3001');
  ws.onopen = () => {
    console.log('WebSocket connected');
  };

  ws.onmessage = (event) => {
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
};

export const fetchNotifications: any = () => {
  return async (dispatch: Dispatch<NotificationAction>) => {
    try {
      dispatch({type: NotificationActionTypes.START_NOTIFICATIONS })
      const response = await axios.get(`${API_URL}/${NOTIFICATIONS_PATH}`)
      dispatch({
        type: NotificationActionTypes.FETCH_NOTIFICATIONS_SUCCESS,
        payload: response.data
      })
    } catch (e) {
      dispatch({
        type: NotificationActionTypes.FETCH_NOTIFICATIONS_ERROR,
        payload: 'Error with load Notifications'
      })
    }
  }
}

export const deleteNotification: any = (id: string) => {
  return async (dispatch: Dispatch<NotificationAction>) => {
    try {
      dispatch({ type: NotificationActionTypes.START_NOTIFICATIONS })
      const response = await axios.delete(`${API_URL}/${NOTIFICATIONS_PATH}/${id}`)
      dispatch({
        type: NotificationActionTypes.DELETE_NOTIFICATION_SUCCESS,
        payload: id
      })
    } catch (e) {
      dispatch({
        type: NotificationActionTypes.DELETE_NOTIFICATION_ERROR,
        payload: 'Notification wasn`t deleted'
      })
    }
  }
}

export const editNotification: any = (notificationData: any) => {
  return async (dispatch: Dispatch<NotificationAction>) => {
    try {
      dispatch({ type: NotificationActionTypes.START_NOTIFICATIONS })
      const response = await axios.put(`${API_URL}/${NOTIFICATIONS_PATH}/${notificationData.id}`, notificationData)
      dispatch({
        type: NotificationActionTypes.EDIT_NOTIFICATION_SUCCESS,
        payload: response.data
      })
    } catch (e) {
      dispatch({
        type: NotificationActionTypes.EDIT_NOTIFICATION_ERROR,
        payload: 'Notification wasn`t marked'
      })
    }
  }
}
