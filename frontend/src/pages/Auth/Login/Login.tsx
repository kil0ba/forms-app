import React, { Fragment } from 'react';

import s from './Login.module.scss';
import { Form } from "react-final-form";
import Input from "../../../components/Forms/Input/Input";

const Login = () => {
  const submitHandler = (values: any) => {
    console.log(values);
  };

  return (
    <div className={ s.container }>
      <h2 className={ s.pageInfo }>Login</h2>
      <Form
        onSubmit={ submitHandler }
        subscription={ { submitting: true, pristine: true } }
        render={ props => {
          return (
            <form onSubmit={ props.handleSubmit }>
              <Input name='Email' label='Email' inputType='text'/>
              <Input name='password' label='Password' inputType='password'/>
              <button type='submit'>Login</button>
            </form>
          );
        } }/>
    </div>
  );
};

export default Login;
