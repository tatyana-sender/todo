import React, { FC, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { useTypedSelector } from '@/hooks/useTypedSelector';
import { useActions } from '@/hooks/useActions';
import Main from '@/components/layout/Main';
import Sidebar from '@/components/layout/Sidebar';
import Modal from '@/components/core/Modal';
import Projects from '@/components/layout/Projects';
import ProjectPage from '@/components/layout/ProjectPage';
import ThemeToggleButton from '@/components/core/ThemeToggleButton/ThemeToggleButton';
import { useTheme } from './ThemeContext';
import GlobalStyles from './styles/globalStyles';

const App:FC = () => {
  const { theme } = useTheme();
  const { tasks, loading, error } = useTypedSelector(state => state.task);
  const { projects } = useTypedSelector(state => state.project);
  const { currentFilter } = useTypedSelector(state => state.currentFilter);
  const { notification } = useTypedSelector(state => state.notification.message);

  const { fetchTasks, fetchProjects, connectWebSocket } = useActions();

  useEffect(() => {
    fetchTasks();
    fetchProjects();
    connectWebSocket();
  }, []);

  if (error) {
    return <div>{error}</div>
  }

  return (
    <>
      <GlobalStyles theme={theme} />
      <Router>
        <Sidebar />
        {loading ? (<div>Data loading</div>) : (
          <Routes>
            <Route path="/" element={<Main tasks={tasks} currentFilter={currentFilter} />} />
            <Route path="/projects" element={<Projects />} />
            {projects?.map((project, idx) => (
              <Route path={`/projects/${project.id}`} element={<ProjectPage id={project.id} />} key={idx} />
            ))}
          </Routes>
        )}
      </Router>
      <ThemeToggleButton />
      {notification}
      <Modal />
    </>
  );
}

export default App;
