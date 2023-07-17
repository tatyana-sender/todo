import React, { Dispatch, FC, SetStateAction, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { TaskProps } from '@/types/types';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { useActions } from '../../../hooks/useActions';
import { fetchTasks } from '../../../store/actions/taskAction';
import { MainWrapper, Box, View, Column, ColumnWrapper } from '@/components/layout/Main/Main.styles';
import BoardIcon from '@/components/icons/BoardIcon';
import Button from '@/components/core/Button';
import Task from '@/components/core/Task';
import Popover from '@/components/core/Popover';

interface MainProps {
  tasks: Array<TaskProps>,
  filter: string,
  filters: string[],
  setModal: Dispatch<SetStateAction<{ isOpen: boolean, isEdit: boolean }>>,
  setCurrentTask: Dispatch<SetStateAction<string>>
}

function descendingComparator(a: any, b: any, orderBy: string) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order: string, orderBy: string) {
  return order === 'desc'
    ? (a: any, b: any) => descendingComparator(a, b, orderBy)
    : (a: any, b: any) => -descendingComparator(a, b, orderBy);
}

const Main: FC<MainProps> = ({ tasks, filter, filters, setModal, setCurrentTask }) => {
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
                  <div>{filter} ({tasks.filter((task: any) => task.status === filter).length})</div>
                  {
                    tasks
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
          })
        }
      </ColumnWrapper>
    </MainWrapper>
  );
};

export default Main;
