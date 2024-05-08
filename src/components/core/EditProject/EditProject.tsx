import React, { FC } from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';

import { useActions } from '@/hooks/useActions';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { validationSchema } from '@/helpers/validationShema';
import Button from '@/components/core/Button';
import DateField from '@/components/core/DateField';
import TextareaField from '@/components/core/TextareaField';

interface EditProjectProps {
  currentProject: string
}

const EditProject:FC<EditProjectProps> = ({currentProject}) => {
  const { projects } = useTypedSelector(state => state.project);
  const { editProject, hideModal } = useActions();
  const defaultDeadlineDate = new Date()
  defaultDeadlineDate.setDate(defaultDeadlineDate.getDate() + 7)
  const currentProjectData = projects.filter(project => currentProject === project.id)[0];

  const newProjectData = {
    id: currentProject,
    title: currentProjectData?.title ?? '',
    description: currentProjectData?.description ?? '',
    deadline: new Date(currentProjectData?.deadline) ?? defaultDeadlineDate,
    tasks: currentProjectData?.tasks ?? [],
  };

  return (
    <Formik
      initialValues={{
        title: newProjectData.title,
        description: newProjectData.description,
        deadline: newProjectData.deadline,
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        editProject({...newProjectData, title: values.title, description: values.description, deadline: values.deadline});
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
            Edit
          </Button>
        </Form>
      )}
    </Formik>
  );
}

export default EditProject;