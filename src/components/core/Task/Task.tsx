import React, {FC, useState} from 'react';
import { TaskProps } from '@/types/types';
import { Box, Wrapper, Title, CreateDate } from '@/components/core/Task/Task.styles';
import Button from '@/components/core/Button';
import DotsIcon from '@/components/icons/DotsIcon';

const Task:FC<TaskProps> = ({name, status, id, description, createDate, deadline}) => {
  const [isActive, setActive] = useState(false);

  return (
    <Wrapper>
      <Box>
        <div>
          <Title>{name}</Title>
          <div>{description}</div>
        </div>
        <Button variant="outlined">
          <DotsIcon color={isActive ? 'white' : 'rgba(255,255,255,0.5)'}/>
        </Button>
      </Box>
      <Box alignCenter={true} marginTop='2rem'>
        <CreateDate>{createDate}</CreateDate>
        <Button>{deadline}</Button>
      </Box>
    </Wrapper>
  )
}

export default Task;
