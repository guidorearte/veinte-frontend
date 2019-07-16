import React from 'react';
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import Login from "./components/login/Login";
import Dashboard from './components/dashboard/Dashboard';
import UserDash from './components/user/UserDash';

function App() {

  const baseURL = process.env.NODE_ENV === 'production' ? 'http://localhost:3000' : 'http://localhost:3000';
  
  window.APIS = {
    LOGIN: baseURL + '/login',
    REGISTER: baseURL + '/register',
  };

  return (
    <BrowserRouter>
      <Route path="/" exact component={Login} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/userdash" component={UserDash} />
    </BrowserRouter>
  );
}

export default App;
