import React, { FC, useState } from 'react';
import DatePicker from 'react-datepicker';
import { useActions } from '@/hooks/useActions';
import { getRandomInt } from '@/helpers/getRandomInt';
import Button from '@/components/core/Button';

const AddProject:FC = () => {
  const today = new Date();
  const defaultDeadlineDate = new Date();
  defaultDeadlineDate.setDate(defaultDeadlineDate.getDate() + 7);
  const { addProject, hideModal } = useActions();
  const id = getRandomInt(1000, 10000);

  const [projectData, setProjectData] = useState({
    id: `project-${id}`,
    createDate: today.toLocaleString('ru-RU', { year: 'numeric', month: 'numeric', day: 'numeric' }),
    title: '',
    description: '',
    deadline: defaultDeadlineDate,
    tasks: [],
  });

  const { title, description, deadline } = projectData;

  const selectDateHandler = (d: Date) => {
    setProjectData({ ...projectData, deadline: d});
  }

  const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setProjectData({ ...projectData, [name]: value });
  };

  const handleSubmit = async (event: React.FormEvent<EventTarget>) => {
    event.preventDefault();
    addProject(projectData);
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

export default AddProject;