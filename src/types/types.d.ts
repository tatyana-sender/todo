import {Dispatch, SetStateAction} from 'react';

export interface IconProps {
  width?: string,
  height?: string,
  color?: string
}

export interface TaskProps {
  title: string,
  status: string,
  id: string,
  description: string,
  createDate: string,
  deadline: string,
  setModal: Dispatch<SetStateAction<{isOpen:boolean, isEdit: boolean}>>,
  setCurrentTask: Dispatch<SetStateAction<string>>
}
