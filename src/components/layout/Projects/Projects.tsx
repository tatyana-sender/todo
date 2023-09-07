import React, { Dispatch, FC, SetStateAction, useState } from 'react';
import { TaskProps } from '@/types/types';
import Button from '@/components/core/Button';
import Popover from '@/components/core/Popover';
import { MainWrapper, Box, ColumnWrapper } from '@/components/layout/Projects/Projects.styles';

interface ProjectsProps {
  tasks?: Array<TaskProps>,
  currentFilter?: string,
  setCurrentTask?: Dispatch<SetStateAction<string>>
}

const Projects: FC<ProjectsProps> = () => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  return (
    <MainWrapper>
      <Box>
        <div></div>
        <div>
          <Button variant="text" onClick={() => setIsPopoverOpen(!isPopoverOpen)}>Sort</Button>
          {isPopoverOpen &&
            <Popover>
              Sorting will be later
            </Popover>
          }
          <Button variant="contained" onClick={()=>{alert('In develop')}}>Add Project</Button>
        </div>
      </Box>
      <ColumnWrapper>
        Projects
      </ColumnWrapper>
    </MainWrapper>
  );
};

export default Projects;
