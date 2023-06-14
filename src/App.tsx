import React, {FC, useState} from 'react';

import { TaskProps } from '@/types/types';
import Main from '@/components/layout/Main';
import Sidebar from '@/components/layout/Sidebar';

const tasks = [
  { id: "task-0", name: "Add", description: 'some task', status: 'To do', createDate: '14.06.2023', deadline: '25.06.2023' },
  { id: "task-1", name: "Edit", description: 'some task 1', status: 'In Progress', createDate: '14.06.2023', deadline: '25.06.2023' },
  { id: "task-2", name: "Delete", description: 'some task 2', status: 'Done', createDate: '14.06.2023', deadline: '25.06.2023' },
  { id: "task-3", name: "Add 2", description: 'some task 3', status: 'To do', createDate: '14.06.2023', deadline: '25.06.2023' },
  { id: "task-4", name: "Add 3", description: 'some task 4', status: 'To do', createDate: '14.06.2023', deadline: '25.06.2023' },
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
  console.log(filter, 'filter')


  return (
    <div className="wrapper">
      <Sidebar filters={filterNames} setFilter={setFilter} />
      <Main tasks={tasks.filter(filters[filter])} filter={filter} filters={filterNames} />
    </div>
  );
};

export default App;
