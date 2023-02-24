import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import UserContext from "../contexts/user";

const PublicRoute = ({ children, ...others }) => {
  // Contexts
  const { isLogged } = useContext(UserContext);

  return (
    <Route
      {...others}
      render={() =>
        !isLogged ? (
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
