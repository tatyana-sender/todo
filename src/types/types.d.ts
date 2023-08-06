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
  }
}
