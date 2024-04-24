import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, 'Title is too short')
    .max(70, 'Title is too long')
    .required('Title is required'),
  description: Yup.string()
    .min(10, 'Description is too short')
    .max(400, 'Description is too long')
});
