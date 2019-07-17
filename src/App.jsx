import React from 'react';
import './App.css';
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import Login from "./components/login/Login";
// import Dashboard from './components/dashboard/Dashboard';
// import UserDash from './components/user/UserDash';
import Main from './components/main/Main';
import AuthenticationWrapper from './components/common/AuthenticationWrapper';

function App() {

  const baseURL = process.env.NODE_ENV === 'production' ? 'https://veinte.net/api' : 'https://veinte.net/api';
  
  window.APIS = {
    LOGIN: baseURL + '/login',
    REGISTER: baseURL + '/register',
  };

  const checkAuth = (component, needsAuthentication) => (
    AuthenticationWrapper({
      component,
      needsAuthentication
    })
  );

  const WrappedLogin = (props) => checkAuth(<Login {...props} />, false);
  const WrappedDashboard = (props) => checkAuth(<Main {...props} />, true);

  return (
    <BrowserRouter>
      <Redirect from="/" to="/app" />
    <Route path="/app/" name="login" exact component={WrappedLogin} />
      <Route path="/app/dashboard/" name="dash" component={WrappedDashboard} />
    </BrowserRouter>
  );
}

export default App;
