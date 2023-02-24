import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./views/Home";
import Login from "./views/Login";
import NotFound from "./views/NotFound";

// Main APP
const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
