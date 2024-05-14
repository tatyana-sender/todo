import {
  NotificationActionTypes,
  NotificationState,
  NotificationAction,
} from '@/types/notification';

const initialWSState: { notificationsWS: any[] } = {
  notificationsWS: [],
};

const initialState: NotificationState = {
  notifications: [],
  loading: false,
  error: null
};

export const notificationWSReducer = (state = initialWSState, action: NotificationAction) => {
  switch (action.type) {
    case NotificationActionTypes.SET_NOTIFICATION:
      return {...state, notificationsWS: [...state.notificationsWS, action.payload]}
    default:
      return state;
  }
};

export const notificationReducer = (state = initialState, action: NotificationAction) => {
  switch (action.type) {
    case NotificationActionTypes.FETCH_NOTIFICATIONS_REQUEST:
      return { ...state, loading: true }
    case NotificationActionTypes.FETCH_NOTIFICATIONS_SUCCESS:
      return { ...state, notifications: action.payload, loading: false }
    case NotificationActionTypes.FETCH_NOTIFICATIONS_ERROR:
      return { ...state, loading: false, error: action.payload }
    case NotificationActionTypes.DELETE_NOTIFICATION_SUCCESS:
      return { ...state, notifications: state.notifications.filter((notification) => notification.id !== action.payload), loading: false }
    case NotificationActionTypes.DELETE_NOTIFICATION_ERROR:
      return { ...state, loading: false, error: action.payload }
    case NotificationActionTypes.EDIT_NOTIFICATION_SUCCESS:
      state.notifications.map((notification) => {
        if (notification.id == action.payload.id) {
          return notification.status = 'read';
        } else {
          return notification;
        }
      });
      return { ...state, loading: false }
    case NotificationActionTypes.EDIT_NOTIFICATION_ERROR:
      return { ...state, loading: false, error: action.payload }
    default:
      return state;
  }
};
