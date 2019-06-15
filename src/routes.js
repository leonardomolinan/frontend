import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { isAuthenticated, setToken } from "./auth";

import Main from "./pages/Main";
import Box from "./pages/Box";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    setToken
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/box/:id" component={Box} />
      <PrivateRoute
        path="/hello"
        component={() => <h1>Você está logado!</h1>}
      />
    </Switch>
  </BrowserRouter>
);

export default Routes;
