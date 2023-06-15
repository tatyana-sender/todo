import React, { FC, useState } from 'react';

interface AddTaskProps {
  addTask: (title: string, description: string, deadline: string) => void
}

const AddTask:FC<AddTaskProps> = ({addTask}) => {

  const [taskData, setTaskData] = useState({
    title: '',
    description: '',
    deadline: '',
  });

  const { title, description, deadline } = taskData;

  const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setTaskData({ ...taskData, [name]: value });
  };

  const handleSubmit = async (event: React.FormEvent<EventTarget>) => {
    event.preventDefault();
    addTask(title, description, deadline);
    setTaskData({
      title: '',
      description: '',
      deadline: '',
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        autoComplete="off"
        onChange={handleChange}
        value={title}
      />
      <input
        type="text"
        name="description"
        autoComplete="off"
        onChange={handleChange}
        value={description}
      />
      <input
        type="text"
        name="deadline"
        autoComplete="off"
        onChange={handleChange}
        value={deadline}
      />
      <button type="submit">
        Add
      </button>
    </form>
  );
}

export default AddTask;