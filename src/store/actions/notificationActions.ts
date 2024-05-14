import {
  deleteNotificationErrorAction,
  deleteNotificationRequestAction,
  deleteNotificationSuccessAction,
  editNotificationRequestAction,
  editNotificationSuccessAction,
  editNotificationErrorAction,
  fetchNotificationErrorAction,
  fetchNotificationRequestAction,
  fetchNotificationSuccessAction,
  NotificationActionTypes,
  NotificationProps,
  setNotificationAction,
} from '@/types/notification';

export const setNotification = (message: any): setNotificationAction => {console.log(123, message); return({
  type: NotificationActionTypes.SET_NOTIFICATION,
  payload: message,
})};

export const fetchNotificationsRequest = (): fetchNotificationRequestAction => ({
  type: NotificationActionTypes.FETCH_NOTIFICATIONS_REQUEST,
})

export const fetchNotificationsSuccess = (payload: NotificationProps[]): fetchNotificationSuccessAction => ({
  type: NotificationActionTypes.FETCH_NOTIFICATIONS_SUCCESS,
  payload
})

export const fetchNotificationsFail = (payload: string): fetchNotificationErrorAction => ({
  type: NotificationActionTypes.FETCH_NOTIFICATIONS_ERROR,
  payload
})

export const deleteNotification = (payload: string): deleteNotificationRequestAction => ({
  type: NotificationActionTypes.DELETE_NOTIFICATION_REQUEST,
  payload
})

export const deleteNotificationSuccess = (payload: string): deleteNotificationSuccessAction => ({
  type: NotificationActionTypes.DELETE_NOTIFICATION_SUCCESS,
  payload
})

export const deleteNotificationFail = (payload: string): deleteNotificationErrorAction => ({
  type: NotificationActionTypes.DELETE_NOTIFICATION_ERROR,
  payload
})

export const editNotification = (payload: NotificationProps): editNotificationRequestAction => ({
  type: NotificationActionTypes.EDIT_NOTIFICATION_REQUEST,
  payload
})

export const editNotificationSuccess = (payload: NotificationProps): editNotificationSuccessAction => ({
  type: NotificationActionTypes.EDIT_NOTIFICATION_SUCCESS,
  payload
})

export const editNotificationFail = (payload: string): editNotificationErrorAction => ({
  type: NotificationActionTypes.EDIT_NOTIFICATION_ERROR,
  payload
})
