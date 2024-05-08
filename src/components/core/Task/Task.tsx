import React, { FC, useState } from 'react';
import { TaskProps } from '@/types/types';
import { useActions } from '@/hooks/useActions';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import Button from '@/components/core/Button';
import DotsIcon from '@/components/icons/DotsIcon';
import Popover from '@/components/core/Popover';
import EditIcon from '@/components/icons/EditIcon';
import DeleteIcon from '@/components/icons/DeleteIcon';
import EditTask from '@/components/core/EditTask';
import { Box, Wrapper, Title, CreateDate } from '@/components/core/Task/Task.styles';

const Task:FC<TaskProps> = ({task }) => {
  const { projects } = useTypedSelector(state => state.project);
  const { deleteTask, showModal } = useActions();
  const { id, title, description, createDate, deadline, project } = task;
  const currentProjectData = projects.filter(item => project === item.id)[0];
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  function handleClick(id: string) {
    const modalContent = <EditTask currentTask={id} />
    showModal(modalContent);
    setIsPopoverOpen(false)
  }

  return (
    <Wrapper>
      <Box>
        <div>
          <Title>{title}</Title>
          <div>{description}</div>
        </div>
        <Button data-testid="task-actions" variant="outlined" onClick={()=>setIsPopoverOpen(!isPopoverOpen)}>
          <DotsIcon />
        </Button>
        {isPopoverOpen && <Popover>
          <Button onClick={()=>handleClick(id)} data-testid="task-edit">
            <EditIcon />
          </Button>
          <Button onClick={()=>deleteTask(id)} data-testid="task-delete">
            <DeleteIcon />
          </Button>
        </Popover>}
      </Box>
      <Box>Project - {currentProjectData?.title}</Box>
      <Box alignCenter={true} marginTop='2rem'>
        <CreateDate>{new Date(createDate).toLocaleString('ru-Ru', { year: 'numeric', month: 'numeric', day: 'numeric' })}</CreateDate>
        <Button>{new Date(deadline).toLocaleString('ru-RU', { year: 'numeric', month: 'numeric', day: 'numeric' })}</Button>
      </Box>
    </Wrapper>
  )
}

export default Task;
