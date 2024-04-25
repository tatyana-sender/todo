export enum NotificationActionTypes {
  SET_NOTIFICATION = "SET_NOTIFICATION",
}

export interface NotificationState {
  message: string;
}

interface setNotification {
  type: NotificationActionTypes.SET_NOTIFICATION,
  payload: string,
}
