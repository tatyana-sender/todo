import React, {Dispatch, FC, SetStateAction, useState} from 'react';
import { nanoid } from 'nanoid';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Button from '@/components/core/Button';
import { useActions } from '../../../hooks/useActions';
import {addTask} from '../../../store/actions/taskAction';

interface AddTaskProps {
  setModal: Dispatch<SetStateAction<{isOpen:boolean, isEdit: boolean}>>,
}

const AddTask:FC<AddTaskProps> = ({setModal}) => {
  const today = new Date();
  const defaultDeadlineDate = new Date();
  defaultDeadlineDate.setDate(defaultDeadlineDate.getDate() + 7);
  const {addTask} = useActions();

  console.log(typeof defaultDeadlineDate, 'def')

  const [taskData, setTaskData] = useState({
    id: `task-${nanoid()}`,
    status: 'To do',
    createDate: today.toLocaleString('ru-RU', { year: 'numeric', month: 'numeric', day: 'numeric' }),
    title: '',
    description: '',
    deadline: defaultDeadlineDate
  });

  const { title, description, deadline } = taskData;

  const selectDateHandler = (d: Date) => {
    setTaskData({ ...taskData, deadline: d});
  }

  const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setTaskData({ ...taskData, [name]: value });
  };

  const handleSubmit = async (event: React.FormEvent<EventTarget>) => {
    event.preventDefault();
    addTask(taskData);
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