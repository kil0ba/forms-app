import React, { useEffect, FunctionComponent } from 'react';

import { Redirect, Route, Switch } from "react-router";
import routes from "./routes/routes";
import './App.module.scss';
import Layout from "./hoc/Layout/Layout";

import s from './App.module.scss';
import { connect, MapDispatchToPropsFunction } from "react-redux";
import { checkAuth } from "./store/actions/auth/auth";

const App: FunctionComponent<AppProps> = (props) => {
  useEffect(() => {
    if (props.checkAuth) {
      props.checkAuth();
    }
  }, [])

  const routesList = routes.map(route => {
    const Component = route.component;
    return <Route
      key={ route.path }
      path={ route.path }
      exact={ route.exact }>
      <div className={ s.route }>
        <Component/>
      </div>
    </Route>
  });

  return (
    <Layout>
      <Switch>
        { routesList }
        <Redirect to={ '/' }/>
      </Switch>
    </Layout>
  );
}

interface AppProps {
  checkAuth?: Function;
}

const mapDispatchToProps: MapDispatchToPropsFunction<AppProps, AppProps> = (dispatch) => {
  return {
    checkAuth: () => dispatch(checkAuth())
  }
}

export default connect(null, mapDispatchToProps)(App);
