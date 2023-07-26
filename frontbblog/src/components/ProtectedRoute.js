import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, auth, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      auth ? <Redirect to="/home" /> : <Component {...props} />
    }
  />
);

export default ProtectedRoute;
