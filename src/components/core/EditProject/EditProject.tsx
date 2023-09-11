import React, { FC, useState } from 'react';
import DatePicker from 'react-datepicker';
import { useActions } from '@/hooks/useActions';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { FILTER_NAMES } from '@/constants/filters';
import Button from '@/components/core/Button';

interface EditProjectProps {
  currentProject: string
}

const EditProject:FC<EditProjectProps> = ({currentProject}) => {
  const { projects } = useTypedSelector(state => state.project);
  const { editProject, hideModal } = useActions();
  const today = new Date()
  const defaultDeadlineDate = new Date()
  defaultDeadlineDate.setDate(defaultDeadlineDate.getDate() + 7)
  const currentProjectData = projects.filter(project => currentProject === project.id)[0];

  const [newProjectData, setNewProjectData] = useState({
    id: currentProject,
    title: currentProjectData?.title ?? '',
    description: currentProjectData?.description ?? '',
    deadline: new Date(currentProjectData?.deadline) ?? defaultDeadlineDate,
    tasks: currentProjectData?.tasks ?? [],
  });

  const { title, description, deadline } = newProjectData;

  const selectDateHandler = (d: Date) => {
    setNewProjectData({ ...newProjectData, deadline: d });
  }

  const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setNewProjectData({ ...newProjectData, [name]: value });
  };

  const handleSubmit = async (event: React.FormEvent<EventTarget>) => {
    event.preventDefault();
    editProject(newProjectData);
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
        Edit
      </Button>
    </form>
  );
}

export default EditProject;