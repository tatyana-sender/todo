import React, {FC, useState} from 'react';

import { TaskProps } from '@/types/types';
import Main from '@/components/layout/Main';
import Sidebar from '@/components/layout/Sidebar';

const tasks = [
  { id: "task-0", name: "Add", status: 'To do' },
  { id: "task-1", name: "Edit", status: 'In Progress' },
  { id: "task-2", name: "Delete", status: 'Done' },
  { id: "task-3", name: "Add 2", status: 'To do' },
  { id: "task-4", name: "Add 3", status: 'To do' },
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
