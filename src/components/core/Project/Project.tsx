import React, { FC, useState } from 'react';
import { ProjectProps } from '@/types/types';
import { useActions } from '@/hooks/useActions';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import Button from '@/components/core/Button';
import DotsIcon from '@/components/icons/DotsIcon';
import Popover from '@/components/core/Popover';
import EditIcon from '@/components/icons/EditIcon';
import DeleteIcon from '@/components/icons/DeleteIcon';
import EditProject from '@/components/core/EditProject';
import { Box, Wrapper, Title, CreateDate, Progressbar } from '@/components/core/Project/Project.styles';

const Project:FC<ProjectProps> = ({project }) => {
  const { deleteProject, showModal } = useActions();
  const { id, title, description, createDate, deadline } = project;
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const { tasks } = useTypedSelector(state => state.task);
  const projectTasks = tasks.filter((task: any) => task.project === id);
  const filteredTasksLength = projectTasks.filter((task: any) => task.status === 'Done').length;
  const width = projectTasks.length > 0 ? (filteredTasksLength / projectTasks.length) : 0;
  function handleClick(id: string) {
    const modalContent = <EditProject currentProject={id} />
    showModal(modalContent);
    setIsPopoverOpen(false)
  }

  return (
    <Wrapper>
      <Box>
        <div>
          <Title>{title}</Title>
          <div>{description}</div>
        </div>
        <Button data-testid="project-actions" variant="outlined" onClick={()=>setIsPopoverOpen(!isPopoverOpen)}>
          <DotsIcon color={isPopoverOpen ? 'rgba(255,255,255,0.5)' : 'white'}/>
        </Button>
        {isPopoverOpen && <Popover>
          <Button onClick={()=>handleClick(id)} data-testid="project-edit">
            <EditIcon />
          </Button>
          <Button onClick={()=>deleteProject(id)} data-testid="project-delete">
            <DeleteIcon />
          </Button>
        </Popover>}
      </Box>
      <Box marginTop='2rem'>
        <div><strong>Progress</strong></div>
        <div>{filteredTasksLength}/{projectTasks.length}</div>
      </Box>
      <Progressbar $width={width} />
      <Box alignCenter={true} marginTop='2rem'>
        <CreateDate>{createDate}</CreateDate>
        <Button>{new Date(deadline).toLocaleString('ru-RU', { year: 'numeric', month: 'numeric', day: 'numeric' })}</Button>
      </Box>
    </Wrapper>
  )
}

export default Project;
