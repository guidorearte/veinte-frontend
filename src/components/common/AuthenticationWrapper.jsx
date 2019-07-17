import React from 'react';
import  { Redirect } from 'react-router-dom'
import Main from '../main/Main';


export default function AuthenticationWrapper(props) {

  const checkToken = (token) => {
    // @TODO verificacion de token
    return true;
  }

  const isAuthenticated = localStorage.getItem('token') && checkToken(localStorage.getItem('token'));

  if (props.needsAuthentication && !isAuthenticated) {
    return <Redirect to='/app/'  />
  }

  if (!props.needsAuthentication && isAuthenticated) {
    return <Redirect to='/app/dashboard'/>;
  }

  if (isAuthenticated) {
    return (
      <Main {...props.routerProps}>
        {props.component}
      </Main>
    );
  }

  return props.component;
}