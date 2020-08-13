import React, { FunctionComponent } from 'react';
import { connect, MapDispatchToPropsFunction } from "react-redux";
import { authLogout } from "../../../store/actions/auth/auth";
import { Redirect } from "react-router";

const Logout: FunctionComponent<LogoutProps> = (props) => {
  props.onLogout();
  return (
    <Redirect to={ '/' }/>
  );
};

interface LogoutProps {
  onLogout: Function
}

const mapDispatchToProps: MapDispatchToPropsFunction<LogoutProps, LogoutProps> = (dispatch) => {
  return {
    onLogout: () => dispatch(authLogout())
  }
}

export default connect(null, mapDispatchToProps)(Logout);
