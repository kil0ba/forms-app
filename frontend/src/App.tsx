import React from 'react';

import { Redirect, Route, Switch } from "react-router";
import routes from "./routes/routes";
import './App.module.scss';
import Layout from "./hoc/Layout/Layout";

import s from './App.module.scss';

const App: React.FC<{}> = () => {
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

export default App;
