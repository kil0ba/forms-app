import React, { ChangeEvent, FunctionComponent } from 'react';
import s from './InputElement.module.scss';
import { FieldRenderProps } from "react-final-form";

const InputElement: FunctionComponent<FieldRenderProps<inputProps>> = (props) => {
  return (
    <input
      className={ s.input }
      type={ props.type }
      onChange={ props.onChange }
      disabled={ props.disabled }
      value={ props.value }
      placeholder={ props.placeholder || 'Your Value' }
      />
  );
};

interface inputProps {
  type: string;
  onChange: (event: ChangeEvent) => void;
  value: string;
  name: string;
  disabled?: boolean;
  placeholder?: string;
}

export default InputElement;
