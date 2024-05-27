import { Dispatch } from 'redux';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_URL, NOTIFICATIONS_PATH } from '@/constants/global';
import { setNotification } from '@/store/reducers/notificationWSReducer';

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

export const fetchNotifications: any = createAsyncThunk('notifications/fetchNotifications', async () => {
  const response = await axios.get(`${API_URL}/${NOTIFICATIONS_PATH}`);
  return response.data;
})

export const deleteNotification: any = createAsyncThunk('notifications/deleteNotification', async (id: string) => {
  const response = await axios.delete(`${API_URL}/${NOTIFICATIONS_PATH}/${id}`);
  return response.data;
});

export const editNotification: any = createAsyncThunk('notifications/editNotification', async (notificationData: any) => {
  const response = await axios.put(`${API_URL}/${NOTIFICATIONS_PATH}/${notificationData.id}`, notificationData);
  return response.data;
});
