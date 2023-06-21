import React, {Dispatch, FC, SetStateAction, useState} from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Button from '@/components/core/Button';
import { TaskProps } from '@/types/types';

interface EditTaskProps {
  statuses: string[],
  editTask: (id: string, title: string, description: string, deadline: string, status: string) => void,
  currentTask: string,
  setModal: Dispatch<SetStateAction<{isOpen:boolean, isEdit: boolean}>>,
  tasks: any[]
}

const EditTask:FC<EditTaskProps> = ({statuses, editTask, currentTask, setModal, tasks}) => {
  const currentTaskData = tasks.filter(task => currentTask === task.id)[0];

  const [newTaskData, setNewTaskData] = useState({
    title: currentTaskData?.title ?? '',
    description: currentTaskData?.description ?? '',
    deadline: currentTaskData?.deadline ?? '',
    status: currentTaskData?.status ?? 'To do'
  });

  const { title, description, status } = newTaskData;
  const today = new Date()
  const defaultDeadlineDate = new Date()
  defaultDeadlineDate.setDate(defaultDeadlineDate.getDate() + 7)
  const [deadline, setDeadline] = useState(defaultDeadlineDate);

  const selectDateHandler = (d: Date) => {
    setDeadline(d)
  }

  const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setNewTaskData({ ...newTaskData, [name]: value });
  };

  const handleSubmit = async (event: React.FormEvent<EventTarget>) => {
    event.preventDefault();
    editTask(currentTask, title, description, deadline.toLocaleString('ru-RU', { year: 'numeric', month: 'numeric', day: 'numeric' }), status);
    setModal({isOpen: false, isEdit: false});
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
      <select name="status" >
        {statuses.map(status => (
          (status !== 'All') && <option value={status}>{status}</option>
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