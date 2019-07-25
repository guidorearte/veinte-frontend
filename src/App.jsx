import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./components/login/Login";
import AuthenticationWrapper from './components/common/AuthenticationWrapper';
import DashboardContainer from './containers/DashboardContainer';
import ChangeContainer from './containers/ChangeContainer';
import UserTransactions from "./components/transactions/UserTransactions";

function App() {
  const baseURL =
    process.env.NODE_ENV === "production"
      ? "https://veinte.net/api"
      : "https://veinte.net/api";

  window.APIS = {
    LOGIN: baseURL + "/login",
    REGISTER: baseURL + "/register"
  };

  const checkAuth = (routerProps, component, needsAuthentication) =>
    AuthenticationWrapper({
      routerProps,
      component,
      needsAuthentication
    });

  const WrappedChange = props => checkAuth(props, <ChangeContainer {...props} />, true);
  const WrappedLogin = props => checkAuth(props, <Login {...props} />, false);
  const WrappedDashboard = props =>
    checkAuth(props, <DashboardContainer {...props} />, true);
  const WrappedUserTransactions = props =>
    checkAuth(props, <UserTransactions {...props} />, true);

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/app/" name="login" exact component={WrappedLogin} />
        <Route
          path="/app/dashboard/"
          name="dash"
          component={WrappedDashboard}
        />
        <Route
          path="/app/transactions/"
          name="transactions"
          component={WrappedUserTransactions}
        />
         <Route path="/app/change" name="change" component={WrappedChange} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
