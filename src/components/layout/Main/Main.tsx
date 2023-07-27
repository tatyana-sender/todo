import React, { Dispatch, FC, SetStateAction, useState } from 'react';
import { TaskProps } from '@/types/types';
import { MainWrapper, Box, View, Column, ColumnWrapper } from '@/components/layout/Main/Main.styles';
import BoardIcon from '@/components/icons/BoardIcon';
import Button from '@/components/core/Button';
import Task from '@/components/core/Task';
import Popover from '@/components/core/Popover';
import { getComparator } from '../../../helpers/getComparator';

interface MainProps {
  tasks: Array<TaskProps>,
  currentFilter: string,
  filters: string[],
  setModal: Dispatch<SetStateAction<{ isOpen: boolean, isEdit: boolean }>>,
  setCurrentTask: Dispatch<SetStateAction<string>>
}

const Main: FC<MainProps> = ({ tasks, currentFilter, filters, setModal, setCurrentTask }) => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('title');

  function handleClick(order: string, orderBy: string) {
    setOrder(order);
    setOrderBy(orderBy)
  }

  return (
    <MainWrapper>
      <Box>
        <View>
          <BoardIcon />
          <span>Board View</span>
        </View>
        <div>
          <Button variant="text" onClick={() => setIsPopoverOpen(!isPopoverOpen)}>Sort</Button>
          {isPopoverOpen &&
            <Popover>
              <Button variant="text" onClick={() => handleClick('desc', 'title')}>
                Title down
              </Button>
              <Button variant="text" onClick={() => handleClick('asc', 'title')}>
                Title Up
              </Button>
            </Popover>
          }
          <Button variant="contained" onClick={() => setModal({ isOpen: true, isEdit: false })}>Add Task</Button>
        </div>
      </Box>
      <ColumnWrapper>
        {filters?.map((filter, index) => {
          if (filter !== 'All') {
            return (
              <Column key={index}>
                <div>{filter} ({filter === currentFilter ? (tasks.filter((task: any) => task.status === filter).length) : '0'})</div>
                {tasks
                  .filter((task: any) => {if (currentFilter !== 'All') {return task.status === currentFilter} else {return task}})
                  .filter((task: any) => task.status === filter)
                  .sort(getComparator(order, orderBy))
                  .map((task: any) => {
                    return (
                      <Task
                        key={task.id}
                        task={task}
                        setModal={setModal}
                        setCurrentTask={setCurrentTask}
                      />
                    )
                  })
                }
              </Column>
            )
          }
        })}
      </ColumnWrapper>
    </MainWrapper>
  );
};

export default Main;
