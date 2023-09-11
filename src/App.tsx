import React, { FC, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { useActions } from '@/hooks/useActions';
import Main from '@/components/layout/Main';
import Sidebar from '@/components/layout/Sidebar';
import Modal from '@/components/core/Modal';
import Projects from '@/components/layout/Projects';

const App:FC = () => {
  const { loading, error } = useTypedSelector(state => state.task);
  const { fetchTasks, fetchProjects } = useActions();
  useEffect(() => {
    fetchTasks();
    fetchProjects();
  }, [])

  if (error) {
    return <div>{error}</div>
  }

  return (
    <div >
      <Router>
        <Sidebar />
        {loading ? (<div>Data loading</div>) : (
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        )}
      </Router>
      <Modal />
    </div>
  );
}

export default App;
