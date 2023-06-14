import React, { FC } from 'react';
import { MainWrapper, Box, View, Column } from '@/components/layout/Main/Main.styles';
import BoardIcon from '@/components/icons/BoardIcon';
import Button from '@/components/core/Button';
import Task from '@/components/core/Task';

interface MainProps {
  tasks: Array<TaskProps>,
  filter: string
};

interface TaskProps {
  id: string,
  name: string,
  status: string,
};

const Main:FC<MainProps> = ({tasks, filter}) => {
  return (
    <MainWrapper>
      <Box>
        <View>
          <BoardIcon />
          <span>Board View</span>
        </View>
        <div>
          <Button variant="text">Filter</Button>
          <Button variant="text">Sort</Button>
          <Button variant="contained">Add Task</Button>
        </div>
      </Box>
      <div>
        <Column>
          <div>{filter} ({tasks.length})</div>
          {tasks && tasks.map(task => (
            <Task key={task.id} id={task.id} name={task.name} status={task.status} />
          ))}
        </Column>
      </div>
    </MainWrapper>
  );
};

export default Main;
