export enum NotificationActionTypes {
  SET_NOTIFICATION = "SET_NOTIFICATION",
  START_NOTIFICATIONS = "FETCH_NOTIFICATIONS",
  FETCH_NOTIFICATIONS_SUCCESS = "FETCH_NOTIFICATIONS_SUCCESS",
  FETCH_NOTIFICATIONS_ERROR = "FETCH_NOTIFICATIONS_ERROR",
  DELETE_NOTIFICATION_SUCCESS = "DELETE_NOTIFICATION_SUCCESS",
  DELETE_NOTIFICATION_ERROR = "DELETE_NOTIFICATION_ERROR",
  EDIT_NOTIFICATION_SUCCESS = "EDIT_NOTIFICATION_SUCCESS",
  EDIT_NOTIFICATION_ERROR = "EDIT_NOTIFICATION_ERROR"
}

export interface NotificationState {
  notifications: any[],
  loading: false,
  error: null
}

export const setNotification = (message: string) => ({
  type: NotificationActionTypes.SET_NOTIFICATION,
  payload: message,
});

interface setNotification {
  type: NotificationActionTypes.SET_NOTIFICATION,
  payload: any[],
}

interface startNotificationAction {
  type: NotificationActionTypes.START_NOTIFICATIONS;
}

interface fetchNotificationSuccessAction {
  type: NotificationActionTypes.FETCH_NOTIFICATIONS_SUCCESS;
  payload: any[];
}

interface fetchNotificationErrorAction {
  type: NotificationActionTypes.FETCH_NOTIFICATIONS_ERROR;
  payload: string;
}

interface deleteNotificationActionSuccess {
  type: NotificationActionTypes.DELETE_NOTIFICATION_SUCCESS;
  payload: string;
}

interface deleteNotificationActionError {
  type: NotificationActionTypes.DELETE_NOTIFICATION_ERROR;
  payload: string;
}

interface editNotificationActionSuccess {
  type: NotificationActionTypes.EDIT_NOTIFICATION_SUCCESS;
  payload: any;
}

interface editNotificationActionError {
  type: NotificationActionTypes.EDIT_NOTIFICATION_ERROR;
  payload: string;
}

export type NotificationAction = setNotification | startNotificationAction
  | fetchNotificationSuccessAction | fetchNotificationErrorAction
  | deleteNotificationActionSuccess | deleteNotificationActionError
  | editNotificationActionSuccess | editNotificationActionError;
