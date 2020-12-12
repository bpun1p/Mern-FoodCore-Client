import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Entry from './components/Entry/Entry';
import AboutMe from './components/AboutMe/AboutMe';
import AuthProvider from './context/AuthContext';
import Dashboard from './components/Dashboard/Dashboard';

ReactDOM.render(
  <AuthProvider>
    <React.StrictMode>
      <Router>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/dashboard/create" component={Dashboard} exact />
          <Route path="/login" component={Entry} exact />
          <Route path="/about-Me" component={AboutMe} exact />
          <Route path="/register" component={Entry} exact />
          <Route path="/dashboard/global" component={Dashboard} exact />
          <Route path="/dashboard/my-posts" component={Dashboard} exact />
        </Switch>
      </Router>
    </React.StrictMode>
  </AuthProvider>,
  document.getElementById('root'),
);
