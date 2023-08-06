import { TaskProps } from '@/types/types';

export const FILTERS: {[key: string]: any} = {
  'All': () => true,
  'To do': (task: TaskProps) => task.task.status === 'To do',
  'In Progress': (task: TaskProps) => task.task.status === 'In Progress',
  'Done': (task: TaskProps) => task.task.status === 'Done',
};

export const FILTER_NAMES = Object.keys(FILTERS);
