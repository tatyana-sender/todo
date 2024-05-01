import React, { FC, useEffect, useState } from 'react';
import { getComparator } from '@/helpers/getComparator';
import { useActions } from '@/hooks/useActions';
import { FILTER_NAMES } from '@/constants/filters';
import { TaskProps } from '@/types/types';
import BellIcon from '@/components/icons/BellIcon';
import BoardIcon from '@/components/icons/BoardIcon';
import Button from '@/components/core/Button';
import CalendarView from '@/components/core/CalendarView';
import Task from '@/components/core/Task';
import Popover from '@/components/core/Popover';
import AddTask from '@/components/core/AddTask';
import {
  Box,
  BoxRight,
  CalendarBox,
  Column,
  ColumnWrapper,
  MainWrapper,
  NotificationBox,
  View
} from '@/components/layout/Main/Main.styles';
import CalendarIcon from '@/components/icons/CalendarIcon';

interface MainProps {
  tasks: TaskProps[],
  currentFilter: string,
  currentProject?: string
}

const Main: FC<MainProps> = ({tasks, currentFilter, currentProject}) => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [isCalendar, setIsCalendar] = useState(false);
  const [isActive, setIsActive] = useState(true);
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('title');
  const [currentDay, setCurrentDay] = useState<string>('');

  useEffect(() => {
    const interval = setInterval(() => {
      const currentDate = new Date();
      const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      };
      const formattedDate = currentDate.toLocaleDateString('de', options);
      setCurrentDay(formattedDate);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const { showModal } = useActions();
  const openModal = () => {
    const modalContent = <AddTask currentProject={currentProject} />
    showModal(modalContent);
  };

  function handleClick(order: string, orderBy: string) {
    setOrder(order);
    setOrderBy(orderBy)
  }

  return (
    <MainWrapper>
      <BoxRight>
        <NotificationBox>
          <BellIcon />
        </NotificationBox>
        <CalendarBox>
          <CalendarIcon />
          {currentDay}
        </CalendarBox>
      </BoxRight>
      <Box>
        <View>
          <Button isActive={isActive} onClick={()=>{setIsCalendar(false); setIsActive(true)}}>
            <BoardIcon />
            <span>Board View</span>
          </Button>
          <Button isActive={!isActive} onClick={()=>{setIsCalendar(true); setIsActive(false)}}>
            <BoardIcon />
            <span>Calendar View</span>
          </Button>
        </View>
        <div>
          {!isCalendar && <Button variant="text" onClick={() => setIsPopoverOpen(!isPopoverOpen)}>Sort</Button>}
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
      {isCalendar ? (
        <CalendarView tasks={tasks} />
      ) : (
        <ColumnWrapper>
          {FILTER_NAMES?.map((filter, index) => {
            if (filter !== 'All') {
              return (
                <Column key={index}>
                  <div>{filter} ({tasks.filter((task: any) => task.status === filter).length})</div>
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
      )}
    </MainWrapper>
  );
};

export default Main
