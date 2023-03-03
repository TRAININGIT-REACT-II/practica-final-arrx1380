import { Switch } from "react-router-dom";
import { useRouteMatch } from "react-router";
import PrivateRoute from "../components/PrivateRoute";
import PageNotFound from "./PageNotFound";
import ViewNote from "./note/View";
import CreateNote from "./note/Create";
import UpdateNote from "./note/Update";

const Note = () => {
  const match = useRouteMatch();

  return (
    <Switch>
      <PrivateRoute path={`${match.url}/create`}>
        <CreateNote />
      </PrivateRoute>
      <PrivateRoute path={`${match.url}/update/:id`}>
        <UpdateNote />
      </PrivateRoute>
      <PrivateRoute path={`${match.url}/view/:id`}>
        <ViewNote />
      </PrivateRoute>
      <PrivateRoute path="*">
        <PageNotFound text="No se encuentra la nota" />
      </PrivateRoute>
    </Switch>
  );
};

export default Note;
