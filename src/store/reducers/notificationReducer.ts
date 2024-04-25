import { NotificationActionTypes, NotificationState } from '@/types/notification';

const initialState: NotificationState = {
  message: '',
};

export const notificationReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case NotificationActionTypes.SET_NOTIFICATION:
      return {
        ...state,
        message: action.payload,
      };
    default:
      return state;
  }
};
