import React, { FunctionComponent } from 'react';
import { Field } from "react-final-form";
import InputElement from "../../UI/Forms/InputElement/InputElement";

import s from './Input.module.scss';

const Input: FunctionComponent<inputProps> = (props) => {
  return (
    <div className={ s.container }>
      <label htmlFor={ props.name } className={ s.label }> { props.label } </label>
      <Field
        name={ props.name }>
        { (fieldProps) => {
          return <InputElement
            type={ props.inputType }
            onChange={ fieldProps.input.onChange }
            value={ fieldProps.input.value }
            name={ fieldProps.input.name }/>
        } }
      </Field>
    </div>
  );
};

interface inputProps {
  name: string,
  label: string,
  inputType: string
}

export default Input;
