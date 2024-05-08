import { NotificationProps, TaskProps } from '@/types/types';

export const FILTERS: {[key: string]: any} = {
  'All': () => true,
  'To do': (task: TaskProps) => task.task.status === 'To do',
  'In Progress': (task: TaskProps) => task.task.status === 'In Progress',
  'Done': (task: TaskProps) => task.task.status === 'Done',
};

export const NOTIFICATION_STATUS: {[key: string]: any} = {
  'All': () => true,
  'New': (notification: NotificationProps) => notification.status === 'new',
  'Read': (notification: NotificationProps) => notification.status === 'read',
};

export const FILTER_NAMES = Object.keys(FILTERS);

export const FILTER_NOTIFICATIONS = Object.keys(NOTIFICATION_STATUS);