import React, {FC, useState, useEffect} from 'react';

import { TaskProps } from '@/types/types';
import Main from '@/components/layout/Main';
import Sidebar from '@/components/layout/Sidebar';
import Modal from '@/components/core/Modal';
import AddTask from '@/components/core/AddTask';
import EditTask from '@/components/core/EditTask';
import { useTypedSelector } from './hooks/useTypedSelector';
import { useActions } from './hooks/useActions';

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
      <Sidebar filters={filterNames} setFilter={setFilter} setModal={setModal} />
      {loading ? (<div>Data loading</div>) : (
      tasks.length > 0 && <Main
        tasks={tasks}
        currentFilter={filter}
        filters={filterNames}
        setModal={setModal}
        setCurrentTask={setCurrentTask}
      />
      )}
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
