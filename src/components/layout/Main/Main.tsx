import React, {Dispatch, FC, SetStateAction, useState} from 'react';
import { TaskProps } from '@/types/types';
import {MainWrapper, Box, View, Column, ColumnWrapper} from '@/components/layout/Main/Main.styles';
import BoardIcon from '@/components/icons/BoardIcon';
import Button from '@/components/core/Button';
import Task from '@/components/core/Task';

interface MainProps {
  tasks: Array<TaskProps>,
  filter: string,
  filters: string[],
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

const Main:FC<MainProps> = ({tasks, filter, filters, setIsOpen}) => {
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
          <Button variant="contained" onClick={() => setIsOpen(true)}>Add Task</Button>
        </div>
      </Box>
      <ColumnWrapper>
        {filter === 'All' && filters?.map(filter => {
          if (filter !== 'All') {
            return (
              <Column>
                <div>{filter} ({tasks.filter(task => task.status === filter).length})</div>
                {
                  tasks
                    .filter(task => task.status === filter)
                    .map(task => {
                    return (
                      <Task
                        key={task.id}
                        id={task.id}
                        name={task.name}
                        description={task.description}
                        createDate={task.createDate}
                        deadline={task.deadline}
                        status={task.status}
                      />
                    )
                  })
                }
              </Column>
            )
          }
        })}
        {filter !== 'All' &&
          <Column className="full">
            <div>{filter} ({tasks.length})</div>
            {tasks && tasks.map(task => (
              <Task
                key={task.id}
                id={task.id}
                name={task.name}
                description={task.description}
                createDate={task.createDate}
                deadline={task.deadline}
                status={task.status}
              />
            ))}
          </Column>
        }
      </ColumnWrapper>
    </MainWrapper>
  );
};

export default Main;
