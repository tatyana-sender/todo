import React, { FC, useState } from 'react';
import { ProjectProps } from '@/types/types';
import { useActions } from '@/hooks/useActions';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import Button from '@/components/core/Button';
import Popover from '@/components/core/Popover';
import Project from '@/components/core/Project';
import AddProject from '@/components/core/AddProject';
import { MainWrapper, Box, ColumnWrapper, Title } from '@/components/layout/Projects/Projects.styles';

interface ProjectsProps {
  projects?: Array<ProjectProps>,
  currentFilter?: string
}

const Projects: FC<ProjectsProps> = () => {
  const { projects } = useTypedSelector(state => state.project);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const { showModal } = useActions();
  const openModal = () => {
    const modalContent = <AddProject />
    showModal(modalContent);
  };

  return (
    <MainWrapper>
      <Box>
        <Title>Projects</Title>
        <div>
          <Button variant="text" onClick={() => setIsPopoverOpen(!isPopoverOpen)}>Sort</Button>
          {isPopoverOpen &&
            <Popover>
              Sorting will be later
            </Popover>
          }
          <Button variant="contained" onClick={openModal}>Add Project</Button>
        </div>
      </Box>
      <ColumnWrapper>
        {projects?.map((project: any, index) => {
          return (
            <Project key={index} project={project} />
          )
        })}
      </ColumnWrapper>
    </MainWrapper>
  );
};

export default Projects;
