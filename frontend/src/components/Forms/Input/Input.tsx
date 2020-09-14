import React, { FunctionComponent } from 'react';
import { Field } from "react-final-form";
import InputElement from "../../UI/Forms/InputElement/InputElement";

import s from './Input.module.scss';

const Input: FunctionComponent<inputProps> = React.memo((props) => {
  const containerClasses = [
    s.borderColor,
    !props.disableBorder ? s.shadow : undefined,
    s.container,
  ].join(' ');

  return (
    <div className={ containerClasses }>
      <div className={ s.nameContainer }>
        <label htmlFor={ props.name } className={ s.label }> { props.label } </label>
        { props.showDeleteBtn && <span
          // onClick={ () => fields.remove(index) }
          className='delete_btn'
          data-testid="showDeleteBtn"
        /> }
      </div>
      <Field
        name={ props.name }>
        { (fieldProps) => {
          return <InputElement
            { ...fieldProps }
            type={ props.inputType }
            onChange={ fieldProps.input.onChange }
            value={ fieldProps.input.value }
            disabled={ props.disabled }
            name={ fieldProps.input.name }/>
        } }
      </Field>

    </div>
  );
});

interface inputProps {
  name: string,
  label: string,
  inputType: string,
  disabled?: boolean,
  disableBorder?: boolean,
  showDeleteBtn?: boolean
}

export default Input;
