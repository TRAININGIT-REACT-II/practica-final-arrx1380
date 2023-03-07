import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const PublicRoute = ({ children, ...others }) => {
  // Selectors
  const user = useSelector((state) => state.user);

  return (
    <Route
      {...others}
      render={() =>
        !user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { code: "101", description: "Already logged" },
            }}
          />
        )
      }
    />
  );
};

export default PublicRoute;
