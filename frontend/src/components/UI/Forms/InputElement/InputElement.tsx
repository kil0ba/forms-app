import React, { ChangeEvent, FunctionComponent } from 'react';
import s from './InputElement.module.scss';

const InputElement: FunctionComponent<inputProps> = (props) => {
  return (
    <input
      className={ s.input }
      type={ props.type }
      onChange={ props.onChange }
      />
  );
};

interface inputProps {
  type: string;
  onChange: (event: ChangeEvent) => void;
  value: string;
  name: string;
}

export default InputElement;
