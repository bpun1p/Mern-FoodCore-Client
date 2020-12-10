import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Entry from './components/Entry/Entry';
import MyPosts from './components/Dashboard/MyPosts';
import CreateRecipe from './components/CreateRecipe/Create';
import AboutMe from './components/AboutMe/AboutMe';
import AuthProvider from './context/AuthContext';
import GlobalPosts from './components/Dashboard/GlobalPosts';

ReactDOM.render(
  <AuthProvider>
    <React.StrictMode>
      <Router>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/dashboard/create" component={CreateRecipe} exact />
          <Route path="/login" component={Entry} exact />
          <Route path="/about-Me" component={AboutMe} exact />
          <Route path="/register" component={Entry} exact />
          <Route path="/dashboard/global" component={GlobalPosts} exact />
          <Route path="/dashboard/my-posts" component={MyPosts} exact />
        </Switch>
      </Router>
    </React.StrictMode>
  </AuthProvider>,
  document.getElementById('root'),
);
