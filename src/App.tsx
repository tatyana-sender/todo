import React, {FC, useState} from 'react';
import { nanoid } from 'nanoid';

import { TaskProps } from '@/types/types';
import Main from '@/components/layout/Main';
import Sidebar from '@/components/layout/Sidebar';
import Modal from '@/components/core/Modal';
import AddTask from '@/components/core/AddTask';

const tasks = [
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
  const [filter, setFilter] = useState("All");
  const [isOpen, setIsOpen] = useState(false);
  const [taskList, setTasks] = useState(tasks || []);
  const today = new Date().toLocaleString('ru-RU', { year: 'numeric', month: 'numeric', day: 'numeric' });
  function addTask(title: string, description: string, deadline: string) {
    const newTask = { title, description, deadline, id: `task-${nanoid()}`, status: 'To do', createDate: today };
    setTasks([...taskList, newTask]);
  }

  return (
    <div className={`wrapper ${isOpen ? 'openModal' : ''}`}>
      <Sidebar filters={filterNames} setFilter={setFilter} setIsOpen={setIsOpen} />
      <Main tasks={taskList.filter(filters[filter])} filter={filter} filters={filterNames} setIsOpen={setIsOpen} />
      {isOpen && <Modal setIsOpen={setIsOpen} Component={AddTask} addTask={addTask} />}
    </div>
  );
};

export default App;
