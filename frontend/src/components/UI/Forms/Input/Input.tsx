import React, { FunctionComponent } from 'react';

const Input: FunctionComponent<inputProps> = (props) => {
  return (
    <input type={ props.type }
      />
  );
};

interface inputProps {
  type: string;
  onChange: (event: Event) => void;
  value: string;
  name: string;
}

export default Input;
