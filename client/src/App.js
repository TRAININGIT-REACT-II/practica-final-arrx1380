import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import PublicRoute from "./components/PublicRoute";
import PrivateRoute from "./components/PrivateRoute";
import UserContext from "./contexts/user";
import ViewContext from "./contexts/view";
import SortContext from "./contexts/sort";
import ThemeContext from "./contexts/theme";
import { VIEWS } from "./constants/views";
import { SORTS } from "./constants/sorts";
import { THEMES } from "./constants/themes";
import Home from "./views/Home";
import Login from "./views/Login";
import Register from "./views/Register";
import Logout from "./views/Logout";
import PageNotFound from "./views/PageNotFound";
import Note from "./views/Note";

// Main APP
const App = () => {
  // States
  const [user, setUser] = useState(null);
  const [view, setView] = useState(VIEWS.cards);
  const [sort, setSort] = useState(SORTS.title);
  const [theme, setTheme] = useState(THEMES.light);

  return (
    <Provider store={store}>
      <UserContext.Provider value={{ current: user, update: setUser }}>
        <ThemeContext.Provider value={{ current: theme, update: setTheme }}>
          <ViewContext.Provider value={{ current: view, update: setView }}>
            <SortContext.Provider value={{ current: sort, update: setSort }}>
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
            </SortContext.Provider>
          </ViewContext.Provider>
        </ThemeContext.Provider>
      </UserContext.Provider>
    </Provider>
  );
};

export default App;
