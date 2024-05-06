import React, { FC, useEffect, useRef } from 'react';
import { FieldProps } from 'formik';

const TextareaField:FC<FieldProps> = ({ field, form, ...props }) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [field.value]);

  return <textarea ref={textareaRef} {...field} {...props} />;
};

export default TextareaField
