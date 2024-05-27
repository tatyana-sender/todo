import React, { FC } from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';

import { useActions } from '@/hooks/useActions';
import { getRandomInt } from '@/helpers/getRandomInt';
import { validationSchema } from '@/helpers/validationShema';
import Button from '@/components/core/Button';
import DateField from '@/components/core/DateField';
import TextareaField from '@/components/core/TextareaField';

const AddProject:FC = () => {
  const today = new Date();
  const defaultDeadlineDate = new Date();
  defaultDeadlineDate.setDate(defaultDeadlineDate.getDate() + 7);
  const { addProject, hideModal } = useActions();
  const id = getRandomInt(1000, 10000);

  const projectData = {
    id: `project-${id}`,
    createDate: today,
    tasks: [],
  };

  return (
    <Formik
      initialValues={{
        title: '',
        description: '',
        deadline: defaultDeadlineDate,
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        addProject({...projectData, title: values.title, description: values.description, deadline: values.deadline});
        hideModal();
      }}
    >
      {() => (
        <Form>
          <Field type="text" name="title" placeholder="Title" />
          <ErrorMessage name="title" />
          <Field as="textarea" name="description" placeholder="Description" component={TextareaField} />
          <ErrorMessage name="description" />
          <Field name="deadline" component={ DateField } />
          <Button variant="contained">
            Add
          </Button>
        </Form>
      )}
    </Formik>
  )
};

export default AddProject;
