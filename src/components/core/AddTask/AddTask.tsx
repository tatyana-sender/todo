import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { ErrorMessage, Field, Form, Formik } from 'formik';

import { useTypedSelector } from '@/hooks/useTypedSelector';
import { getRandomInt } from '@/helpers/getRandomInt';
import { validationSchema } from '@/helpers/validationShema';
import { AppDispatch } from '@/store/index';
import { addTask } from '@/store/actions/taskAction';
import { hideModal } from '@/store/reducers/modalReducer';
import Button from '@/components/core/Button';
import DateField from '@/components/core/DateField';
import SelectField from '@/components/core/SelectField';
import TextareaField from '@/components/core/TextareaField';

interface AddTaskProps {
  currentProject?: string
}

const AddTask:FC<AddTaskProps> = ({currentProject}) => {
  const dispatch = useDispatch<AppDispatch>();
  const today = new Date();
  const defaultDeadlineDate = new Date();
  defaultDeadlineDate.setDate(defaultDeadlineDate.getDate() + 7);
  const { projects } = useTypedSelector(state => state.project);
  const id = getRandomInt(1000, 10000);

  const taskData = {
    id: `task-${id}`,
    status: 'To do',
    createDate: today,
    project: currentProject ? currentProject : projects.length > 0 ? projects[0].id : ''
  };

  return (
    <Formik
      initialValues={{
        title: '',
        description: '',
        deadline: defaultDeadlineDate,
        project: taskData.project,
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        dispatch(addTask({
          ...taskData,
          title: values.title,
          description: values.description,
          project: values.project,
          deadline: values.deadline
        }));
        dispatch(hideModal());
      }}
    >
      {() => (
        <Form>
          <Field type="text" name="title" placeholder="Title" />
          <ErrorMessage name="title" />
          <Field as="textarea" name="description" placeholder="Description" component={TextareaField} />
          <ErrorMessage name="description" />
          <Field name="project" options={projects} component={SelectField} />
          <Field name="deadline" component={DateField} />
          <Button variant="contained">
            Add
          </Button>
        </Form>
      )}
    </Formik>
  );
}

export default AddTask;