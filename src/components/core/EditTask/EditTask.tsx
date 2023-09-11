import React, { FC, useState } from 'react';
import DatePicker from 'react-datepicker';
import { useActions } from '@/hooks/useActions';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { FILTER_NAMES } from '@/constants/filters';
import Button from '@/components/core/Button';

interface EditTaskProps {
  currentTask: string
}

const EditTask:FC<EditTaskProps> = ({currentTask}) => {
  const { tasks } = useTypedSelector(state => state.task);
  const { projects } = useTypedSelector(state => state.project);
  const { editTask, hideModal } = useActions();
  const today = new Date()
  const defaultDeadlineDate = new Date()
  defaultDeadlineDate.setDate(defaultDeadlineDate.getDate() + 7)
  const currentTaskData = tasks.filter(task => currentTask === task.id)[0];

  const [newTaskData, setNewTaskData] = useState({
    id: currentTask,
    title: currentTaskData?.title ?? '',
    description: currentTaskData?.description ?? '',
    deadline: new Date(currentTaskData?.deadline) ?? defaultDeadlineDate,
    status: currentTaskData?.status ?? 'To do',
    project: currentTaskData?.project ?? ''
  });

  const { title, description, deadline } = newTaskData;
  const [status, setStatus] = useState(newTaskData.status);
  const [project, setProject] = useState(newTaskData.project);

  const selectDateHandler = (d: Date) => {
    setNewTaskData({ ...newTaskData, deadline: d });
  }

  const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setNewTaskData({ ...newTaskData, [name]: value });
  };

  const handleSelectChange = async (event: React.ChangeEvent<HTMLSelectElement>) => {
    setStatus(event.target.value);
    setNewTaskData({ ...newTaskData, status: event.target.value });
  };

  const handleProjectChange = async (event: React.ChangeEvent<HTMLSelectElement>) => {
    setProject(event.target.value);
    setNewTaskData({ ...newTaskData, project: event.target.value });
  };

  const handleSubmit = async (event: React.FormEvent<EventTarget>) => {
    event.preventDefault();
    editTask(newTaskData);
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
      <select name="status" value={status} onChange={event => handleSelectChange(event)}>
        {FILTER_NAMES.map(status => (
          (status !== 'All') && <option key={status} value={status}>{status}</option>
        ))}
      </select>
      <select name="project" value={project} onChange={event => handleProjectChange(event)}>
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
        Edit
      </Button>
    </form>
  );
}

export default EditTask;