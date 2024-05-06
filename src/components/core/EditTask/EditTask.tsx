import React, { FC } from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';

import { useActions } from '@/hooks/useActions';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { validationSchema } from '@/helpers/validationShema';
import { FILTER_NAMES } from '@/constants/filters';
import Button from '@/components/core/Button';
import SelectField from '@/components/core/SelectField';
import DateField from '@/components/core/DateField';
import TextareaField from '@/components/core/TextareaField';

interface EditTaskProps {
  currentTask: string
}

const EditTask:FC<EditTaskProps> = ({currentTask}) => {
  const { tasks } = useTypedSelector(state => state.task);
  const { projects } = useTypedSelector(state => state.project);
  const { editTask, hideModal } = useActions();
  const defaultDeadlineDate = new Date()
  defaultDeadlineDate.setDate(defaultDeadlineDate.getDate() + 7)
  const currentTaskData = tasks.filter(task => currentTask === task.id)[0];

  const newTaskData = {
    id: currentTask,
    title: currentTaskData?.title ?? '',
    description: currentTaskData?.description ?? '',
    deadline: new Date(currentTaskData?.deadline) ?? defaultDeadlineDate,
    status: currentTaskData?.status ?? 'To do',
    project: currentTaskData?.project ?? ''
  };

  return (
    <Formik
      initialValues={{
        title: newTaskData.title,
        description: newTaskData.description,
        deadline: defaultDeadlineDate,
        status: newTaskData.status,
        project: newTaskData.project,
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        editTask({
          ...newTaskData,
          title: values.title,
          description: values.description,
          status: values.status,
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
          <Field as="textarea" name="description" placeholder="Description" component={TextareaField} />
          <ErrorMessage name="description" />
          <Field name="status" options={FILTER_NAMES} component={SelectField} />
          <Field name="project" options={projects} component={SelectField} />
          <Field name="deadline" component={DateField} />
          <Button variant="contained">
            Edit
          </Button>
        </Form>
      )}
    </Formik>
  );
}

export default EditTask;