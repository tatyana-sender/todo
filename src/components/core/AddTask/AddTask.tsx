import React, {Dispatch, FC, SetStateAction, useState} from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Button from '@/components/core/Button';

interface AddTaskProps {
  addTask: (title: string, description: string, deadline: string) => void,
  setModal: Dispatch<SetStateAction<{isOpen:boolean, isEdit: boolean}>>,
}

const AddTask:FC<AddTaskProps> = ({addTask, setModal}) => {

  const [taskData, setTaskData] = useState({
    title: '',
    description: '',
    deadline: ''
  });

  const { title, description } = taskData;
  const today = new Date()
  const defaultDeadlineDate = new Date()
  defaultDeadlineDate.setDate(defaultDeadlineDate.getDate() + 7)
  const [deadline, setDeadline] = useState(defaultDeadlineDate);

  const selectDateHandler = (d: Date) => {
    setDeadline(d)
  }

  const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setTaskData({ ...taskData, [name]: value });
  };

  const handleSubmit = async (event: React.FormEvent<EventTarget>) => {
    event.preventDefault();
    addTask(title, description, deadline.toLocaleString('ru-RU', { year: 'numeric', month: 'numeric', day: 'numeric' }));
    setTaskData({
      title: '',
      description: '',
      deadline: '',
    });
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