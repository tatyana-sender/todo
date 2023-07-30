import React, {FC, useEffect, useState} from 'react';
import { TaskProps } from '@/types/types';
import { Box, Wrapper, Title, CreateDate } from '@/components/core/Task/Task.styles';
import Button from '@/components/core/Button';
import DotsIcon from '@/components/icons/DotsIcon';
import Popover from '@/components/core/Popover';
import EditIcon from '@/components/icons/EditIcon';
import DeleteIcon from '@/components/icons/DeleteIcon';
import { useActions } from '../../../hooks/useActions';

const Task:FC<TaskProps> = ({task, setModal, setCurrentTask }) => {
  const {deleteTask} = useActions();
  const {id, title, description, createDate, deadline} = task;
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  function handleClick(id: string) {
    setModal({isOpen: true, isEdit: true})
    setCurrentTask(id)
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
