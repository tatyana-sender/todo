import React, { FC, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { useActions } from '@/hooks/useActions';
import Main from '@/components/layout/Main';
import Sidebar from '@/components/layout/Sidebar';
import Modal from '@/components/core/Modal';
import Projects from '@/components/layout/Projects';

const App:FC = () => {
  const { tasks, loading, error } = useTypedSelector(state => state.task);
  const [filter, setFilter] = useState("All");
  const {fetchTasks} = useActions();
  useEffect(() => {
    fetchTasks();
  }, [])

  if (error) {
    return <div>{error}</div>
  }

  return (
    <div >
      <Router>
        <Sidebar setFilter={setFilter}  />
        {loading ? (<div>Data loading</div>) : (
          <Routes>
            <Route path="/" element={<Main tasks={tasks} currentFilter={filter} />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        )}
      </Router>
      <Modal />
    </div>
  );
}

export default App;
