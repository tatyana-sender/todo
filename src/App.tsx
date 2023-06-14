import React, {FC, useState} from 'react';

import { TaskProps } from '@/types/types';
import Main from '@/components/layout/Main';
import Sidebar from '@/components/layout/Sidebar';

const tasks = [
  { id: "task-0", name: "Add", status: 'to do' },
  { id: "task-1", name: "Edit", status: 'in progress' },
  { id: "task-2", name: "Delete", status: 'done' },
];

const filters: {[key: string]: any} = {
  'All': () => true,
  'To do': (task: TaskProps) => task.status === 'to do',
  'In Progress': (task: TaskProps) => task.status === 'in progress',
  'Done': (task: TaskProps) => task.status === 'done',
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
      <Main tasks={tasks.filter(filters[filter])} filter={filter} />
    </div>
  );
};

export default App;
