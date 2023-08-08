import React, { FC, useState } from 'react';
import { getComparator } from '@/helpers/getComparator';
import { useActions } from '@/hooks/useActions';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { FILTER_NAMES } from '@/constants/filters';
import BoardIcon from '@/components/icons/BoardIcon';
import Button from '@/components/core/Button';
import Task from '@/components/core/Task';
import Popover from '@/components/core/Popover';
import AddTask from '@/components/core/AddTask';
import { MainWrapper, Box, View, Column, ColumnWrapper } from '@/components/layout/Main/Main.styles';

const Main: FC = () => {
  const { tasks } = useTypedSelector(state => state.task);
  const { currentFilter } = useTypedSelector(state => state.currentFilter);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('title');

  const {showModal} = useActions();
  const openModal = () => {
    const modalContent = <AddTask />
    showModal(modalContent);
  };

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
              <Button variant="text" onClick={() => handleClick('desc', 'deadline')}>
                Deadline down
              </Button>
              <Button variant="text" onClick={() => handleClick('asc', 'deadline')}>
                Deadline Up
              </Button>
            </Popover>
          }
          <Button variant="contained" onClick={openModal}>Add Task</Button>
        </div>
      </Box>
      <ColumnWrapper>
        {FILTER_NAMES?.map((filter, index) => {
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
