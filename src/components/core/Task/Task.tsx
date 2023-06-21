import React, {FC, useState} from 'react';
import { TaskProps } from '@/types/types';
import { Box, Wrapper, Title, CreateDate } from '@/components/core/Task/Task.styles';
import Button from '@/components/core/Button';
import DotsIcon from '@/components/icons/DotsIcon';
import Popover from '@/components/core/Popover';
import EditIcon from '@/components/icons/EditIcon';
import DeleteIcon from '@/components/icons/DeleteIcon';

const Task:FC<TaskProps> = ({id, title, description, createDate, deadline, status, editTask, setModal, setCurrentTask, deleteTask }) => {
  const [isActive, setActive] = useState(false);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  function handleClick(id: string) {
    setModal({isOpen: true, isEdit: true})
    setCurrentTask(id)
  }

  return (
    <Wrapper>
      <Box>
        <div>
          <Title>{title}</Title>
          <div>{description}</div>
        </div>
        <Button variant="outlined" onClick={()=>setIsPopoverOpen(!isPopoverOpen)}>
          <DotsIcon color={isActive ? 'white' : 'rgba(255,255,255,0.5)'}/>
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
        <Button>{deadline}</Button>
      </Box>
    </Wrapper>
  )
}

export default Task;
