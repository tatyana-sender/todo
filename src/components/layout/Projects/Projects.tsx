import React, { Dispatch, FC, SetStateAction, useState } from 'react';
import { TaskProps } from '@/types/types';
import { MainWrapper, Box, View, Column, ColumnWrapper } from '@/components/layout/Main/Main.styles';
import Button from '@/components/core/Button';
import Popover from '@/components/core/Popover';
import {useActions} from '@/hooks/useActions';
import AddTask from '@/components/core/AddTask';

interface ProjectsProps {
  tasks?: Array<TaskProps>,
  currentFilter?: string,
  setCurrentTask?: Dispatch<SetStateAction<string>>
}

const Projects: FC<ProjectsProps> = () => {
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
        <div></div>
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
          <Button variant="contained" onClick={openModal}>Add Project</Button>
        </div>
      </Box>
      <ColumnWrapper>
        Projects
      </ColumnWrapper>
    </MainWrapper>
  );
};

export default Projects;
