import React from 'react';
import './App.css';
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import Login from "./components/login/Login";
import AuthenticationWrapper from './components/common/AuthenticationWrapper';
import DashboardContainer from './containers/DashboardContainer';
import Change from './components/change/Change';

function App() {

  const baseURL = process.env.NODE_ENV === 'production' ? 'https://veinte.net/api' : 'https://veinte.net/api';
  
  window.APIS = {
    LOGIN: baseURL + '/login',
    REGISTER: baseURL + '/register',
  };

  const checkAuth = (routerProps, component, needsAuthentication) => (
    AuthenticationWrapper({
      routerProps,
      component,
      needsAuthentication
    })
  );

  const WrappedLogin = (props) => checkAuth(props, <Login {...props} />, false);
  const WrappedDashboard = (props) => checkAuth(props, <DashboardContainer {...props} />, true);
  const WrappedChange = (props) => checkAuth(props, <Change {...props} />, true);

  return (
    <BrowserRouter>
      <Redirect from="/" to="/app" />
      <Route path="/app/" name="login" exact component={WrappedLogin} />
      <Route path="/app/dashboard/" name="dash" component={WrappedDashboard} />
      <Route path="/app/change" name="change" component={WrappedChange} />
    </BrowserRouter>
  );
}

export default App;
