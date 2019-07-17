import React from 'react';
import  { Redirect } from 'react-router-dom'


export default function AuthenticationWrapper(props) {

  const checkToken = (token) => {
    // @TODO verificacion de token
    return true;
  }

  if (props.needsAuthentication && !(localStorage.getItem('token') && checkToken(localStorage.getItem('token')))) {
    return <Redirect to='/app/'  />
  }

  if (!props.needsAuthentication && localStorage.getItem('token')) {
    return <Redirect to='/app/dashboard'/>;
  }

  return props.component;
}