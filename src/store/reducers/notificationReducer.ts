import { NotificationActionTypes, NotificationState, NotificationAction } from '@/types/notification';

const initialWSState: { notifications: any[] } = {
  notifications: [],
};

const initialState: NotificationState = {
  notifications: [],
  loading: false,
  error: null
};

export const notificationWSReducer = (state = initialWSState, action: any) => {
  switch (action.type) {
    case NotificationActionTypes.SET_NOTIFICATION:
      return {...state, notifications: [...state.notifications, action.payload]}
    default:
      return state;
  }
};

export const notificationReducer = (state = initialState, action: NotificationAction) => {
  switch (action.type) {
    case NotificationActionTypes.START_NOTIFICATIONS:
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
      return { ...state, notifications: [...state.notifications.filter((notification) => notification.id !== action.payload.id), action.payload], loading: false }
    case NotificationActionTypes.EDIT_NOTIFICATION_ERROR:
      return { ...state, loading: false, error: action.payload }
    default:
      return state;
  }
};
