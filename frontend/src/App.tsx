import React, { useEffect, FunctionComponent, ReactElement } from 'react';
import { connect, MapDispatchToPropsFunction } from "react-redux";
import { Redirect, Route, Switch } from "react-router";

import routes from "./routes/routes";
import Layout from "./hoc/Layout/Layout";
import { checkAuth } from "./store/actions/auth/auth";

import s from './App.module.scss';
import { MapStateToPropsModel } from "./store/types/props.model";

const App: FunctionComponent<AppProps> = ({ token, checkAuth }) => {
  useEffect(() => {
    if (checkAuth) {
      checkAuth();
    }
  }, [checkAuth])
  console.log('render');

  const routesList =
    routes.reduce(
      (accum, route) => {
        const Component = route.component;
        if (
          route.renderIf !== 'always' &&
          (
            (route.renderIf === 'login' && !token) ||
            (route.renderIf === '!login' && token)
          )
        ) {
          return accum;
        }
        accum.push(<Route
          key={ route.path }
          path={ route.path }
          exact={ route.exact }>
          <div className={ s.route }>
            <Component/>
          </div>
        </Route>);
        return accum;
      }, [] as ReactElement[]
    );


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
  token?: string;
}

const mapStateToProps: MapStateToPropsModel<AppProps> = (state) => {
  return {
    token: state.auth.token
  }
}

const mapDispatchToProps: MapDispatchToPropsFunction<AppProps, AppProps> = (dispatch) => {
  return {
    checkAuth: () => dispatch(checkAuth())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
