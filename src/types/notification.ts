import { NotificationProps } from '@/types/types';

export interface NotificationState {
  notifications: NotificationProps[],
  loading: boolean,
  error: null
}
