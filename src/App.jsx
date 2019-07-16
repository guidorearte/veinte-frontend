import React from 'react';
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import Login from "./components/login/Login";
import Main from './components/main/Main';

function App() {

  const baseURL = process.env.NODE_ENV === 'production' ? 'http://localhost:3000' : 'http://localhost:3000';
  
  window.APIS = {
    LOGIN: baseURL + '/login',
    REGISTER: baseURL + '/register',
  };

  return (
    <BrowserRouter>
      <Route path="/" exact component={Login} />
      <Route path="/dashboard" component={Main} />
    </BrowserRouter>
  );
}

export default App;
