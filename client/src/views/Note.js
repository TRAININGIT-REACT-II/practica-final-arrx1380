import { Switch } from "react-router-dom";
import { useRouteMatch } from "react-router";
import PrivateRoute from "../components/PrivateRoute";
import PageNotFound from "./PageNotFound";

const Note = () => {
  const match = useRouteMatch();

  return (
    <Switch>
      <PrivateRoute path={`${match.url}/new`}>NEW</PrivateRoute>
      <PrivateRoute path={`${match.url}/edit/:id([1-9][0-9]*)`}>
        EDIT
      </PrivateRoute>
      <PrivateRoute path={`${match.url}/view/:id([1-9][0-9]*)`}>
        VIEW
      </PrivateRoute>
      <PrivateRoute path={`${match.url}/delete/:id([1-9][0-9]*)`}>
        DELETE
      </PrivateRoute>
      <PrivateRoute path="*">
        <PageNotFound text="No se encuentra la nota" />
      </PrivateRoute>
    </Switch>
  );
};

export default Note;
