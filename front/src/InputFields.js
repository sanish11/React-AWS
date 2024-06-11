import React from 'react';
import { TextLabel, TextInput, Field } from './style';
import Input from './Input';

const InputFields = ({
  type,
  name,
  required,
  label,
  rightIcon,
  leftIcon,
  leftIconButton,
  rightIconButton
}) => {
  return (
    <Input>
      {leftIcon || <button>{leftIconButton}</button>}
      <Field>
        <TextInput
          type={type}
          id={name}
          name={name}
          placeholder=" "
          autoComplete="off"
          required={required} />
        <TextLabel htmlFor={name}>{label}</TextLabel>
      </Field>
      {rightIcon || <button>{rightIconButton}</button>}
    </Input>
  );
};

export default InputFields;
