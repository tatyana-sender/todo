import axios from 'axios';
import { eventChannel, TakeableChannel } from 'redux-saga';
import { all, call, put, takeEvery, takeLatest, take } from 'redux-saga/effects';
import { API_URL, NOTIFICATIONS_PATH } from '@/constants/global';

import {
  NotificationActionTypes,
  NotificationProps,
  NotificationSagaProps,
  NotificationWS,
} from '@/types/notification';
import {
  deleteNotificationFail,
  deleteNotificationSuccess,
  editNotificationFail, editNotificationSuccess,
  fetchNotificationsFail, fetchNotificationsSuccess, setNotification
} from '@/store/actions/notificationActions';

function createWebSocketConnection() {
  return eventChannel((emit) => {
    const socket = new WebSocket('ws://localhost:3001');
    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      emit(data);
    };
    socket.onerror = (error) => {
      console.error('WebSocket error:', error);
    };
    socket.onclose = () => {
      console.log('WebSocket connection closed');
    };
    return () => {
      socket.close();
    };
  });
}

function* fetchNotificationsWorker() {
  try {
    const response: Response = yield call(fetch, `${API_URL}/${NOTIFICATIONS_PATH}`);
    const data: NotificationProps[] = yield response.json();
    yield put(fetchNotificationsSuccess(data));
  } catch (error: any ) {
    yield put(fetchNotificationsFail(error.message));
  }
}
function* deleteNotificationWorker(data: NotificationSagaProps) {
  const id = String(data.payload);
  try {
    yield axios.delete(`${API_URL}/${NOTIFICATIONS_PATH}/${id}`);
    yield put(deleteNotificationSuccess(id));
  } catch (error: any ) {
    yield put(deleteNotificationFail(error.message));
  }
}

function* editNotificationWorker(data: NotificationSagaProps) {
  const id = data.payload.id;
  const notification = data.payload;
  try {
    yield axios.put(`${API_URL}/${NOTIFICATIONS_PATH}/${id}`, {notification});
    yield put(editNotificationSuccess(data.payload));
  } catch (error: any ) {
    yield put(editNotificationFail(error.message));
  }
}

function* notificationsWorker() {
  const channel: TakeableChannel<unknown> = yield call(createWebSocketConnection);
  while (true) {
    const data: NotificationWS = yield take(channel);
    yield put(setNotification(data.message));
  }
}

export function* notificationsWatcher() {
  yield all([
    takeEvery(NotificationActionTypes.CONNECT_WEBSOCKET, notificationsWorker),
    takeEvery(NotificationActionTypes.FETCH_NOTIFICATIONS_REQUEST, fetchNotificationsWorker),
    takeLatest(NotificationActionTypes.DELETE_NOTIFICATION_REQUEST, deleteNotificationWorker),
    takeLatest(NotificationActionTypes.EDIT_NOTIFICATION_REQUEST, editNotificationWorker),
  ])
}
