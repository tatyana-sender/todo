import React, {FC, useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { TaskProps } from '@/types/types';
import Main from '@/components/layout/Main';
import Sidebar from '@/components/layout/Sidebar';
import Modal from '@/components/core/Modal';
import AddTask from '@/components/core/AddTask';
import EditTask from '@/components/core/EditTask';
import { useTypedSelector } from './hooks/useTypedSelector';
import { useActions } from './hooks/useActions';
import Projects from '@/components/layout/Projects';

const filters: {[key: string]: any} = {
  'All': () => true,
  'To do': (task: TaskProps) => task.task.status === 'To do',
  'In Progress': (task: TaskProps) => task.task.status === 'In Progress',
  'Done': (task: TaskProps) => task.task.status === 'Done',
};

const filterNames = Object.keys(filters);

interface AppProps {
};

const App:FC<AppProps> = () => {
  const { tasks, loading, error } = useTypedSelector(state => state.task);
  const [filter, setFilter] = useState("All");
  const {fetchTasks} = useActions();
  useEffect(() => {
    fetchTasks();
  }, [])

  const [modal, setModal] = useState({isOpen: false, isEdit: false});
  const [currentTask, setCurrentTask] = useState('');

  if (error) {
    return <div>{error}</div>
  }

  return (
    <div className={`wrapper ${modal.isOpen ? 'openModal' : ''}`}>
      <Router>
        <Sidebar filters={filterNames} setFilter={setFilter} setModal={setModal} />
        {loading ? (<div>Data loading</div>) : (
          <Routes>
            <Route path="/" element={<Main
              tasks={tasks} currentFilter={filter} filters={filterNames} setModal={setModal} setCurrentTask={setCurrentTask}
            />} />
            <Route path="/projects" element={<Projects setModal={setModal} />} />
          </Routes>
        )}
      </Router>
      {modal.isOpen &&
        <Modal setModal={setModal} isOpen={modal.isOpen}>
          {modal.isEdit ? (
            <EditTask statuses={filterNames} currentTask={currentTask} setModal={setModal} tasks={tasks} />
          ) : (
            <AddTask setModal={setModal} />
          )}
        </Modal>
      }
    </div>
  );
}

export default App;
