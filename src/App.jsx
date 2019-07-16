import React from 'react';
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import Login from "./components/login/Login";
// import Dashboard from './components/dashboard/Dashboard';
// import UserDash from './components/user/UserDash';
import Main from './components/main/Main';

function App() {

  const baseURL = process.env.NODE_ENV === 'production' ? 'https://veinte.net/api' : 'https://veinte.net/api';
  
  window.APIS = {
    LOGIN: baseURL + '/login',
    REGISTER: baseURL + '/register',
  };

  return (
    <BrowserRouter>
      <Route path="/app/" exact component={Login} />
      <Route path="/app/dashboard/" component={Main} />
    </BrowserRouter>
  );
}

export default App;
