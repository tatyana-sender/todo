export enum NotificationActionTypes {
  CONNECT_WEBSOCKET="CONNECT_WEBSOCKET",
  SET_NOTIFICATION = "SET_NOTIFICATION",
  FETCH_NOTIFICATIONS_REQUEST = "FETCH_NOTIFICATIONS_REQUEST",
  FETCH_NOTIFICATIONS_SUCCESS = "FETCH_NOTIFICATIONS_SUCCESS",
  FETCH_NOTIFICATIONS_ERROR = "FETCH_NOTIFICATIONS_ERROR",
  DELETE_NOTIFICATION_REQUEST = "DELETE_NOTIFICATION_REQUEST",
  DELETE_NOTIFICATION_SUCCESS = "DELETE_NOTIFICATION_SUCCESS",
  DELETE_NOTIFICATION_ERROR = "DELETE_NOTIFICATION_ERROR",
  EDIT_NOTIFICATION_REQUEST = "EDIT_NOTIFICATION_REQUEST",
  EDIT_NOTIFICATION_SUCCESS = "EDIT_NOTIFICATION_SUCCESS",
  EDIT_NOTIFICATION_ERROR = "EDIT_NOTIFICATION_ERROR"
}

export interface NotificationState {
  notifications: any[],
  loading: false,
  error: null
}

export interface setNotificationAction {
  type: NotificationActionTypes.SET_NOTIFICATION,
  payload: any,
}

export interface fetchNotificationRequestAction {
  type: NotificationActionTypes.FETCH_NOTIFICATIONS_REQUEST;
}

export interface fetchNotificationSuccessAction {
  type: NotificationActionTypes.FETCH_NOTIFICATIONS_SUCCESS;
  payload: NotificationProps[];
}

export interface fetchNotificationErrorAction {
  type: NotificationActionTypes.FETCH_NOTIFICATIONS_ERROR;
  payload: string;
}

export interface deleteNotificationRequestAction {
  type: NotificationActionTypes.DELETE_NOTIFICATION_REQUEST;
  payload: string;
}

export interface deleteNotificationSuccessAction {
  type: NotificationActionTypes.DELETE_NOTIFICATION_SUCCESS;
  payload: string;
}

export interface deleteNotificationErrorAction {
  type: NotificationActionTypes.DELETE_NOTIFICATION_ERROR;
  payload: string;
}

export interface editNotificationRequestAction {
  type: NotificationActionTypes.EDIT_NOTIFICATION_REQUEST;
  payload: NotificationProps;
}

export interface editNotificationSuccessAction {
  type: NotificationActionTypes.EDIT_NOTIFICATION_SUCCESS;
  payload: NotificationProps;
}

export interface editNotificationErrorAction {
  type: NotificationActionTypes.EDIT_NOTIFICATION_ERROR;
  payload: string;
}

export type NotificationAction = setNotificationAction |
  fetchNotificationRequestAction | fetchNotificationSuccessAction | fetchNotificationErrorAction |
  deleteNotificationRequestAction | deleteNotificationSuccessAction | deleteNotificationErrorAction |
  editNotificationRequestAction | editNotificationSuccessAction | editNotificationErrorAction;

export interface NotificationWS {
  type: string
  message: string
}

export interface NotificationSagaProps {
  type: string
  payload: NotificationProps
}

export interface NotificationProps {
  message?: string,
  task?: string,
  id: string,
  project?: string,
  status: string,
}
