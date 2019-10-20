import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';



import Dashboard from './pages/Dashboard';
//import Configures from './pages/Configures';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/dashboard" component={Dashboard} />
        {/* <Route path="/configures" component={Configures} /> */}
      </Switch>
    </BrowserRouter>
  );
}