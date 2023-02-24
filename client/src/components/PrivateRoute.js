import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import UserContext from "../contexts/user";

const PrivateRoute = ({ children, ...others }) => {
  // Contexts
  const { logged } = useContext(UserContext);

  return (
    <Route
      {...others}
      render={() =>
        logged ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { code: "401", description: "Unauthorized" },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;