import { useState, useContext } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PublicRoute from "./components/PublicRoute";
import PrivateRoute from "./components/PrivateRoute";
import UserContext from "./contexts/user";
import Home from "./views/Home";
import Login from "./views/Login";
import Register from "./views/Register";
import Logout from "./views/Logout";
import PageNotFound from "./views/PageNotFound";
import Note from "./views/Note";

// Main APP
const App = () => {
  // Statuses
  const [userLogged, setUserLogged] = useState(true);

  return (
    <UserContext.Provider
      value={{ isLogged: userLogged, update: setUserLogged }}
    >
      <Router>
        <Switch>
          <PrivateRoute path="/" exact>
            <Home />
          </PrivateRoute>
          <PublicRoute path="/login">
            <Login />
          </PublicRoute>
          <PublicRoute path="/register">
            <Register />
          </PublicRoute>
          <PrivateRoute path="/logout">
            <Logout />
          </PrivateRoute>
          <PrivateRoute path="/note">
            <Note />
          </PrivateRoute>
          <Route path="*">
            <PageNotFound text="No se encuentra la página" />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
};

export default App;
