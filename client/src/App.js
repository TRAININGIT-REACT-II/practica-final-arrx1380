import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import PublicRoute from "./components/PublicRoute";
import PrivateRoute from "./components/PrivateRoute";
import ErrorBoundary from "./components/ErrorBoundary";
import UserContext from "./contexts/user";
import ViewContext from "./contexts/view";
import SortContext from "./contexts/sort";
import ThemeContext from "./contexts/theme";
import useConfig from "./hooks/useConfig";
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
  const config = useConfig();

  return (
    <Provider store={store}>
      <UserContext.Provider value={{ current: user, update: setUser }}>
        <ThemeContext.Provider
          value={{ current: config.theme, update: config.setTheme }}
        >
          <ViewContext.Provider
            value={{ current: config.view, update: config.setView }}
          >
            <SortContext.Provider
              value={{ current: config.sort, update: config.setSort }}
            >
              <Router>
                <Switch>
                  <PrivateRoute path="/" exact>
                    <ErrorBoundary message="Ha ocurrido un error mostrando las notas">
                      <Home />
                    </ErrorBoundary>
                  </PrivateRoute>
                  <PublicRoute path="/login">
                    <ErrorBoundary message="Ha ocurrido un error en el acceso">
                      <Login />
                    </ErrorBoundary>
                  </PublicRoute>
                  <PublicRoute path="/register">
                    <ErrorBoundary message="Ha ocurrido un error en el registro">
                      <Register />
                    </ErrorBoundary>
                  </PublicRoute>
                  <PrivateRoute path="/logout">
                    <ErrorBoundary message="Ha ocurrido un error cerrando la sessión">
                      <Logout />
                    </ErrorBoundary>
                  </PrivateRoute>
                  <PrivateRoute path="/note">
                    <ErrorBoundary message="Ha ocurrido un error en la nota">
                      <Note />
                    </ErrorBoundary>
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
