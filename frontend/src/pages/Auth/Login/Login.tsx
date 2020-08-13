import React from 'react';
import { connect, MapDispatchToPropsFunction } from "react-redux";
import { Dispatch } from "redux";

import s from './Login.module.scss';
import { Form } from "react-final-form";
import Input from "../../../components/Forms/Input/Input";
import { auth } from "../../../store/actions/auth/auth";
import { MapStateToProps } from "../../../store/types/props.model";
import { Auth } from "../../../store/actions/auth/auth.model";

const Login = (props: LoginProps) => {
  const submitHandler = (values: any) => {
    props.onAuth(values.email as string, values.password as string);
  };

  return (
    <div className={ s.container }>
      <h2 className={ s.pageInfo }>Login</h2>
      <Form
        onSubmit={ submitHandler }
        subscription={ { submitting: true, pristine: true } }
        render={ formProps => {
          return (
            <form onSubmit={ formProps.handleSubmit }>
              <Input name='email' label='Email' inputType='text' disabled={ props.loading }/>
              <Input name='password' label='Password' inputType='password' disabled={ props.loading }/>
              { props.error && <p> { props.error } </p> }
              <button type='submit'>Login</button>
            </form>
          );
        } }/>
    </div>
  );
};

interface LoginProps {
  loading: boolean,
  error: string,
  onAuth: Auth
}

const mapStateToProps: MapStateToProps<LoginProps> = (state) => {
  return {
    loading: state.auth.loading,
    error: state.auth.error
  }
}

const mapDispatchToProps: MapDispatchToPropsFunction<any, LoginProps> = (dispatch: Dispatch) => {
  return {
    onAuth: (email: string, password: string) => dispatch(auth(email, password))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
