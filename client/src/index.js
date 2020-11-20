import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Entry from './components/Entry';
import MyPosts from './components/MyPosts';
import Create from './components/Create';
import AboutMe from './components/AboutMe';
import AuthProvider from './context/AuthContext';
import GlobalPosts from './components/GlobalPosts';

ReactDOM.render(
  <AuthProvider>
    <React.StrictMode>
      <Router>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/profile/create" component={Create} exact />
          <Route path="/login" component={Entry} exact />
          <Route path="/about-Me" component={AboutMe} exact />
          <Route path="/register" component={Entry} exact />
          <Route path="/profile/global" component={GlobalPosts} exact />
          <Route path="/profile/MyPosts" component={MyPosts} exact />
        </Switch>
      </Router>
    </React.StrictMode>
  </AuthProvider>,
  document.getElementById('root'),
);
