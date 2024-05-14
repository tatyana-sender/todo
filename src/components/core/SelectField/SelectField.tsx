import React from 'react';
import { FieldProps } from 'formik';

interface Option {
  id: string;
  title: string;
}

interface SelectFieldProps extends FieldProps {
  options: Option[] | string[];
}

const SelectField: React.FC<SelectFieldProps> = ({ field, options }) => {

  return(
    <div>
      <select {...field}>
        {options.map((option, index) => {
          if (typeof option !== 'string') {
            return (
              <option key={index} value={option.id}>
                {option.title}
              </option>
            )
          } else {
            return (option !== 'All') && <option key={index} value={option}>{option}</option>
          }
        })}
      </select>
    </div>
  );
};

export default SelectField;