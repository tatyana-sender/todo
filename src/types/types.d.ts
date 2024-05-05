import {Dispatch, SetStateAction} from 'react';

export interface IconProps {
  width?: string,
  height?: string,
  color?: string
}

export interface TaskProps {
  task: {
    title: string,
    status?: string,
    id: string,
    description: string,
    createDate: string,
    deadline: Date,
    project: string
  }
}

export interface ProjectProps {
  project: {
    title: string,
    tasks?: string[],
    id: string,
    description: string,
    createDate: string,
    deadline: Date,
  }
}

export interface NotificationProps {
  message: string,
  task: string,
  id: string,
  project: string,
  status: string,
}
