import React, { FunctionComponent } from 'react';
import { Field } from "react-final-form";
import Input from "../../UI/Forms/Input/Input";

import s from './Email.module.scss';

const Email: FunctionComponent<emailProps> = (props) => {
  return (
    <div className={ s.container }>
      <label htmlFor={ props.name } className={ s.label }> { props.label } </label>
      <Field
        name={ props.name }>
        { (props) => {
          return <Input
            type={ 'email' }
            onChange={ props.input.onChange }
            value={ props.input.value }
            name={ props.input.name }/>
        } }
      </Field>
    </div>
  );
};

interface emailProps {
  name: string,
  label: string
}

export default Email;
