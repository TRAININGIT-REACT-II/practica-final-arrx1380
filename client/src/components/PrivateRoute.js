import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ children, ...others }) => {
  // Selectors
  const user = useSelector((state) => state.user);

  return (
    <Route
      {...others}
      render={() =>
        user ? (
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
