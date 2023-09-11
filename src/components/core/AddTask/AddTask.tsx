import React, { FC, useState } from 'react';
import DatePicker from 'react-datepicker';
import { useActions } from '@/hooks/useActions';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { getRandomInt } from '@/helpers/getRandomInt';
import { addTask } from '@/store/actions/taskAction';
import Button from '@/components/core/Button';

interface AddTaskProps {
  currentProject?: string
}

const AddTask:FC<AddTaskProps> = ({currentProject}) => {
  const today = new Date();
  const defaultDeadlineDate = new Date();
  defaultDeadlineDate.setDate(defaultDeadlineDate.getDate() + 7);
  const { addTask, hideModal } = useActions();
  const { projects } = useTypedSelector(state => state.project);
  const id = getRandomInt(1000, 10000);

  const [taskData, setTaskData] = useState({
    id: `task-${id}`,
    status: 'To do',
    createDate: today.toLocaleString('ru-RU', { year: 'numeric', month: 'numeric', day: 'numeric' }),
    title: '',
    description: '',
    deadline: defaultDeadlineDate,
    project: currentProject ? currentProject : projects.length > 0 ? projects[0].id : ''
  });

  const { title, description, deadline } = taskData;
  const [project, setProject] = useState(taskData.project);

  const selectDateHandler = (d: Date) => {
    setTaskData({ ...taskData, deadline: d});
  }

  const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setTaskData({ ...taskData, [name]: value });
  };

  const handleSelectChange = async (event: React.ChangeEvent<HTMLSelectElement>) => {
    setProject(event.target.value);
    setTaskData({ ...taskData, project: event.target.value });
  };

  const handleSubmit = async (event: React.FormEvent<EventTarget>) => {
    event.preventDefault();
    addTask(taskData);
    hideModal();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        autoComplete="off"
        placeholder="Title"
        onChange={handleChange}
        value={title}
      />
      <input
        type="text"
        name="description"
        autoComplete="off"
        placeholder="Description"
        onChange={handleChange}
        value={description}
      />
      <select name="project" value={project} onChange={event => handleSelectChange(event)}>
        {projects.map(project => (
          <option key={project.id} value={project.id}>{project.title}</option>
        ))}
      </select>
      <DatePicker
        name="deadline"
        dateFormat="dd.MM.yyyy"
        selected={deadline}
        onChange={selectDateHandler}
        minDate={today}
      />
      <Button variant="contained">
        Add
      </Button>
    </form>
  );
}

export default AddTask;