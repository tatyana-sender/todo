import React, { FC } from 'react';
import { TaskProps } from '@/types/types';
import { Wrapper } from '@/components/core/Task/Task.styles';

const Task:FC<TaskProps> = ({name, status, id}) => {
  return (
    <Wrapper>{name}</Wrapper>
  )
}

export default Task;
