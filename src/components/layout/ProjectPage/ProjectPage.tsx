import React, { FC } from 'react';
import { ProjectProps } from '@/types/types';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import Main from '@/components/layout/Main';
import { Wrapper, Title } from '@/components/layout/ProjectPage/ProjectPage.styles';

interface ProjectPageProps {
  id: string,
  project?: ProjectProps,
  currentFilter?: string
}

const ProjectPage: FC<ProjectPageProps> = ({id}) => {
  const { tasks } = useTypedSelector(state => state.task);
  const { projects } = useTypedSelector(state => state.project);
  const filteredTasks = tasks.filter((task: any) => task.project === id);
  const { currentFilter } = useTypedSelector(state => state.currentFilter);
  const currentProjectData = projects.filter(project => id === project.id)[0];

  return (
    <Wrapper>
      <Title>Tasks of project '{currentProjectData.title}'</Title>
      <Main tasks={filteredTasks} currentFilter={currentFilter} currentProject={id} />
    </Wrapper>
  );
}

export default ProjectPage;
