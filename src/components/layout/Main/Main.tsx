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
  setModal: Dispatch<SetStateAction<{isOpen:boolean, isEdit: boolean}>>,
  editTask?: (id: string, title: string, description: string, deadline: string, status: string) => void,
  setCurrentTask: Dispatch<SetStateAction<string>>,
  deleteTask: any
}

const Main:FC<MainProps> = ({tasks, filter, filters, setModal, editTask, setCurrentTask, deleteTask}) => {
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
          <Button variant="contained" onClick={() => setModal({isOpen: true, isEdit: false})}>Add Task</Button>
        </div>
      </Box>
      <ColumnWrapper>
        {filter === 'All' && filters?.map((filter, index)  => {
          if (filter !== 'All') {
            return (
              <Column key={index}>
                <div>{filter} ({tasks.filter(task => task.status === filter).length})</div>
                {
                  tasks
                    .filter(task => task.status === filter)
                    .map(task => {
                    return (
                      <Task
                        key={task.id}
                        id={task.id}
                        title={task.title}
                        description={task.description}
                        createDate={task.createDate}
                        deadline={task.deadline}
                        status={task.status}
                        editTask={task.editTask}
                        setModal={setModal}
                        setCurrentTask={setCurrentTask}
                        deleteTask={deleteTask}
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
                title={task.title}
                description={task.description}
                createDate={task.createDate}
                deadline={task.deadline}
                status={task.status}
                setModal={setModal}
                setCurrentTask={setCurrentTask}
                deleteTask={deleteTask}
              />
            ))}
          </Column>
        }
      </ColumnWrapper>
    </MainWrapper>
  );
};

export default Main;
