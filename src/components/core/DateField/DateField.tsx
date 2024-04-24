import React from 'react';
import DatePicker from 'react-datepicker';
import { FieldProps } from 'formik';

const DateField: React.FC<FieldProps> = ({ field, ...props }) => {
  const today = new Date();

  return(
    <DatePicker
      dateFormat="dd.MM.yyyy"
      selected={field.value}
      minDate={today}
      {...field}
      {...props}
      onChange={(e) => {
        field.onChange({
          target: {
            name: field.name,
            value: e,
          },
        });
      }}
    />
  );
};

export default DateField;