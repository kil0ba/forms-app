import React from 'react';

import s from './Login.module.scss';
import { Form } from "react-final-form";
import Email from "../../../components/Forms/Inputs/Email";

const Login = () => {
  const submitHandler = () => {
  };

  return (
    <div className={ s.container }>
      <Form
        onSubmit={ submitHandler }
        render={ props => {
          return (
            <Email name='Email' label='Email'/>
          );
        } }/>
    </div>
  );
};

export default Login;
