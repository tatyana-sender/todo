import React, { FC, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ProjectProps } from '@/types/types';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { deleteProject } from '@/store/actions/projectAction';
import { showModal } from '@/store/actions/modalActions';
import Button from '@/components/core/Button';
import DotsIcon from '@/components/icons/DotsIcon';
import Popover from '@/components/core/Popover';
import EditIcon from '@/components/icons/EditIcon';
import DeleteIcon from '@/components/icons/DeleteIcon';
import EditProject from '@/components/core/EditProject';
import { Box, Wrapper, Title, CreateDate, Deadline, Progressbar } from '@/components/core/Project/Project.styles';

const Project:FC<ProjectProps> = ({project }) => {
  const dispatch = useDispatch();
  const { id, title, description, createDate, deadline } = project;
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const { tasks } = useTypedSelector(state => state.task);
  const projectTasks = tasks.filter((task: any) => task.project === id);
  const filteredTasksLength = projectTasks.filter((task: any) => task.status === 'Done').length;
  const width = projectTasks.length > 0 ? (filteredTasksLength / projectTasks.length) : 0;
  function handleClick(id: string) {
    const modalContent = <EditProject currentProject={id} />
    dispatch(showModal(modalContent));
    setIsPopoverOpen(false)
  }

  return (
    <Wrapper>
      <Box>
        <div>
          <Title>
            <NavLink to={`/projects/${id}`} className={({ isActive }) => isActive ? 'active' : ''}>
              {title}
            </NavLink>
          </Title>
          <div>{description}</div>
        </div>
        <Button data-testid="project-actions" variant="outlined" onClick={()=>setIsPopoverOpen(!isPopoverOpen)}>
          <DotsIcon />
        </Button>
        {isPopoverOpen && <Popover>
          <Button onClick={()=>handleClick(id)} data-testid="project-edit">
            <EditIcon />
          </Button>
          <Button onClick={()=>dispatch(deleteProject(id))} data-testid="project-delete">
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
        <CreateDate>{new Date(createDate).toLocaleString('ru-RU', { year: 'numeric', month: 'numeric', day: 'numeric' })}</CreateDate>
        <Deadline>{new Date(deadline).toLocaleString('ru-RU', { year: 'numeric', month: 'numeric', day: 'numeric' })}</Deadline>
      </Box>
    </Wrapper>
  )
}

export default Project;
