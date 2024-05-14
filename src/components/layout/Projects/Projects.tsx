import React, {FC, useState} from 'react';
import { useDispatch } from 'react-redux';
import { ProjectProps } from '@/types/types';
import { showModal } from '@/store/actions/modalActions';
import Header from '@/components/layout/Header';
import Button from '@/components/core/Button';
import Popover from '@/components/core/Popover';
import Project from '@/components/core/Project';
import AddProject from '@/components/core/AddProject';
import { MainWrapper, Box, ColumnWrapper, Title } from '@/components/layout/Projects/Projects.styles';

interface ProjectsProps {
  projects: ProjectProps[],
  currentFilter?: string
}

const Projects: FC<ProjectsProps> = ({ projects }) => {
  const dispatch = useDispatch();
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const openModal = () => {
    const modalContent = <AddProject />
    dispatch(showModal(modalContent));
  };

  return (
    <MainWrapper>
      <Header />
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
