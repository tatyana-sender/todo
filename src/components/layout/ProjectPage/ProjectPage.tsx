import React, { FC } from 'react';
import { ProjectProps } from '@/types/types';

interface ProjectPageProps {
  project?: ProjectProps,
  currentFilter?: string,
  //setCurrentProject?: Dispatch<SetStateAction<string>>
}

const ProjectPage: FC<ProjectPageProps> = () => {

  return (
    <></>
  );
};

export default ProjectPage;
