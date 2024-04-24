import React, { FC } from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';

import { useActions } from '@/hooks/useActions';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { getRandomInt } from '@/helpers/getRandomInt';
import { validationSchema } from '@/helpers/validationShema';
import { addTask } from '@/store/actions/taskAction';
import Button from '@/components/core/Button';
import DateField from '@/components/core/DateField';
import SelectField from '@/components/core/SelectField';

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

  const taskData = {
    id: `task-${id}`,
    status: 'To do',
    createDate: today.toLocaleString('ru-RU', { year: 'numeric', month: 'numeric', day: 'numeric' }),
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
        addTask({
          ...taskData,
          title: values.title,
          description: values.description,
          project: values.project,
          deadline: values.deadline
        });
        hideModal();
      }}
    >
      {() => (
        <Form>
          <Field type="text" name="title" placeholder="Title" />
          <ErrorMessage name="title" />
          <Field type="text" name="description" placeholder="Description" />
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