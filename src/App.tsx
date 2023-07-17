import React, {FC, useState, useEffect} from 'react';

import { TaskProps } from '@/types/types';
import Main from '@/components/layout/Main';
import Sidebar from '@/components/layout/Sidebar';
import Modal from '@/components/core/Modal';
import AddTask from '@/components/core/AddTask';
import EditTask from '@/components/core/EditTask';
import { useTypedSelector } from './hooks/useTypedSelector';
import { useActions } from './hooks/useActions';

const tasks1 = [
  { id: "task-0", title: "Add", description: 'some task', status: 'To do', createDate: '14.06.2023', deadline: '25.06.2023' },
  { id: "task-1", title: "Edit", description: 'some task 1', status: 'In Progress', createDate: '14.06.2023', deadline: '25.06.2023' },
  { id: "task-2", title: "Delete", description: 'some task 2', status: 'Done', createDate: '14.06.2023', deadline: '25.06.2023' },
  { id: "task-3", title: "Add 2", description: 'some task 3', status: 'To do', createDate: '14.06.2023', deadline: '25.06.2023' },
  { id: "task-4", title: "Add 3", description: 'some task 4', status: 'To do', createDate: '14.06.2023', deadline: '25.06.2023' },
];

const filters: {[key: string]: any} = {
  'All': () => true,
  'To do': (task: TaskProps) => task.status === 'To do',
  'In Progress': (task: TaskProps) => task.status === 'In Progress',
  'Done': (task: TaskProps) => task.status === 'Done',
};

const filterNames = Object.keys(filters);

interface AppProps {
};

const App:FC<AppProps> = () => {
  const { tasks, loading, error } = useTypedSelector(state => state.task);
  const {fetchTasks} = useActions();
  useEffect(() => {
    fetchTasks();
  }, [])
  const [filter, setFilter] = useState("All");
  const [modal, setModal] = useState({isOpen: false, isEdit: false});
  const [taskList, setTasks] = useState(tasks || []);
  const [currentTask, setCurrentTask] = useState('');

  function editTask(id: string, title: string, description: string, deadline: string, status: string) {
    const editedTask = taskList.map(task => {
      if (id === task.id) {
        return {...task, title, description, deadline, status};
      }
      return task;
    })
    setTasks(editedTask);
  }

  function deleteTask(id: string) {
    const remainingTasks = taskList.filter((task) => id !== task.id);
    setTasks(remainingTasks);
  }

  return (
    <div className={`wrapper ${modal.isOpen ? 'openModal' : ''}`}>
      <Sidebar filters={filterNames} setFilter={setFilter} setModal={setModal} />
      {tasks.length > 0 && <Main
        tasks={tasks}
        loading={loading}
        error={error}
        filter={filter}
        filters={filterNames}
        setModal={setModal}
        setCurrentTask={setCurrentTask}
      />}
      {modal.isOpen &&
        <Modal setModal={setModal} isOpen={modal.isOpen}>
          {modal.isEdit ? (
            <EditTask editTask={editTask} statuses={filterNames} currentTask={currentTask} setModal={setModal} tasks={taskList} />
          ) : (
            <AddTask setModal={setModal} />
          )}
        </Modal>
      }
    </div>
  );
}

export default App;
