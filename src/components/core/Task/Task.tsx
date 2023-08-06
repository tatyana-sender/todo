import React, { FC, useState } from 'react';
import { TaskProps } from '@/types/types';
import { useActions } from '@/hooks/useActions';
import Button from '@/components/core/Button';
import DotsIcon from '@/components/icons/DotsIcon';
import Popover from '@/components/core/Popover';
import EditIcon from '@/components/icons/EditIcon';
import DeleteIcon from '@/components/icons/DeleteIcon';
import EditTask from '@/components/core/EditTask';
import { Box, Wrapper, Title, CreateDate } from '@/components/core/Task/Task.styles';

const Task:FC<TaskProps> = ({task }) => {
  const {deleteTask} = useActions();
  const {id, title, description, createDate, deadline} = task;
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const {showModal} = useActions();
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
        <Button variant="outlined" onClick={()=>setIsPopoverOpen(!isPopoverOpen)}>
          <DotsIcon color={isPopoverOpen ? 'rgba(255,255,255,0.5)' : 'white'}/>
        </Button>
        {isPopoverOpen && <Popover>
          <Button onClick={()=>handleClick(id)}>
            <EditIcon />
          </Button>
          <Button onClick={()=>deleteTask(id)}>
            <DeleteIcon />
          </Button>
        </Popover>}
      </Box>
      <Box alignCenter={true} marginTop='2rem'>
        <CreateDate>{createDate}</CreateDate>
        <Button>{new Date(deadline).toLocaleString('ru-RU', { year: 'numeric', month: 'numeric', day: 'numeric' })}</Button>
      </Box>
    </Wrapper>
  )
}

export default Task;
