import React from 'react';
import  { Redirect } from 'react-router-dom'
import { Button } from '@material-ui/core';

export default function Dashboard(props) {

  const checkToken = (token) => {
    // @TODO verificacion de token
    return true;
  }

  if (!(localStorage.getItem('token') && checkToken(localStorage.getItem('token')))) {
    return <Redirect to='/'  />
  }

  const handleOnClick = () => {
    localStorage.removeItem('token');
    props.history.push('/');
  }

  return (
    <div>Bienvenido! 
      <p>Sitio en construccion...</p>
      <Button onClick={handleOnClick}>Logout</Button>
    </div>
  );
}