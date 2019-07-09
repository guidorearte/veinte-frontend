import React from 'react';
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import Landing from "./components/landing/Landing";
import Dashboard from './components/dashboard/Dashboard';

function App() {

  const baseURL = process.env.NODE_ENV === 'production' ? 'http://localhost:3000' : 'http://localhost:3000';
  
  window.APIS = {
    LOGIN: baseURL + '/login',
    REGISTER: baseURL + '/register',
  };

  return (
    <BrowserRouter>
      <Route path="/" exact component={Landing} />
      <Route path="/dashboard" component={Dashboard} />
    </BrowserRouter>
  );
}

export default App;
