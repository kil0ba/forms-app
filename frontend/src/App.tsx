import React from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from "./hoc/Layout/Layout";
import { Route, Switch } from "react-router";

const App: React.FC = () => {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact render={ props => <div> Root </div> }/>
        <Route path='/login' render={ props => <div> login </div> }/>
        <Route path='/signup' exact render={ props => <div> signup </div> }/>
      </Switch>
    </Layout>
  );
}

export default App;
