import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Home from "./views/Home";
import Login from "./views/Login";
import Logout from "./views/Logout";
import PageNotFound from "./views/PageNotFound";
import Note from "./views/Note";

// Main APP
const App = () => {
  return (
    <Router>
      <Switch>
        <PrivateRoute path="/" exact>
          <Home />
        </PrivateRoute>
        <Route path="/login">
          <Login />
        </Route>
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
  );
};

export default App;
