import React, { FC, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { useActions } from '@/hooks/useActions';
import Main from '@/components/layout/Main';
import Sidebar from '@/components/layout/Sidebar';
import Modal from '@/components/core/Modal';
import Projects from '@/components/layout/Projects';
import ProjectPage from '@/components/layout/ProjectPage';

const App:FC = () => {
  const { loading, error } = useTypedSelector(state => state.task);
  const { fetchTasks, fetchProjects } = useActions();
  useEffect(() => {
    fetchTasks();
    fetchProjects();
  }, []);
  const { projects } = useTypedSelector(state => state.project);
  const { tasks } = useTypedSelector(state => state.task);
  const { currentFilter } = useTypedSelector(state => state.currentFilter);

  if (error) {
    return <div>{error}</div>
  }

  return (
    <div >
      <Router>
        <Sidebar />
        {loading ? (<div>Data loading</div>) : (
          <Routes>
            <Route path="/" element={<Main tasks={tasks} currentFilter={currentFilter} />} />
            <Route path="/projects" element={<Projects />} />
            {projects?.map(project => (
              <Route path={`/projects/${project.id}`} element={<ProjectPage id={project.id} />} />
            ))}
          </Routes>
        )}
      </Router>
      <Modal />
    </div>
  );
}

export default App;
