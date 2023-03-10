import { useState, useEffect, useContext } from "react";
import { useDispatch } from "react-redux";
import { updateUserAction } from "../actions/user";
import ViewContext from "../contexts/view";
import SortContext from "../contexts/sort";
import ThemeContext from "../contexts/theme";
import Loader from "../components/Loader";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import { JournalBookmark } from "react-bootstrap-icons";
import useApi from "../hooks/useApi";

const Login = () => {
  // States
  const [formState, setFormState] = useState({ username: "", password: "" });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // Hooks
  const loginRequest = useApi("/api/login");

  // Dispatch
  const dispatch = useDispatch();

  // Contexts
  const viewContext = useContext(ViewContext);
  const sortContext = useContext(SortContext);
  const themeContext = useContext(ThemeContext);

  // Effects
  useEffect(() => {
    const userLS = localStorage.getItem("user");

    if (userLS) {
      dispatch(updateUserAction(JSON.parse(userLS)));

      const userParsedLS = JSON.parse(userLS);

      if (userParsedLS?.["config"]?.["view"]) {
        viewContext.update(userParsedLS?.["config"]?.["view"]);
      }
      if (userParsedLS?.["config"]?.["sort"]) {
        sortContext.update(userParsedLS?.["config"]?.["sort"]);
      }
      if (userParsedLS?.["config"]?.["theme"]) {
        themeContext.update(userParsedLS?.["config"]?.["theme"]);
      }
    } else {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (loginRequest.error) {
      return setError(loginRequest.error);
    }
    if (loginRequest.data) {
      if (
        !loginRequest.data.id ||
        !loginRequest.data.username ||
        !loginRequest.data.token
      ) {
        return setError("Ha ocurrido un error");
      }

      dispatch(updateUserAction(loginRequest.data));
    }
  }, [loginRequest.data, loginRequest.error]);

  const onChange = (key) => (e) => {
    setFormState({
      ...formState,
      [key]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    setError(null);

    if (!formState.username) {
      return setError("El usuario es obligatorio");
    }

    if (!formState.password) {
      return setError("La contrase??a es obligatoria");
    }

    loginRequest.updateParams({
      method: "POST",
      body: JSON.stringify(formState),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    loginRequest.perform();
  };

  return (
    <div className="w-100 d-flex justify-content-center mt-4">
      {!loading ? (
        <Form className="mt-4" onSubmit={onSubmit}>
          <div className="fs-1 mb-4">
            <JournalBookmark /> TrainingNotes
            <div className="fs-4 mt-4 text-secondary">Acceso</div>
          </div>
          <>
            {error ? (
              <Alert variant="danger">
                <small>{error}</small>
              </Alert>
            ) : null}
          </>
          <Form.Group className="mb-3" controlId="formUser">
            <Form.Label>Usuario</Form.Label>
            <Form.Control
              type="text"
              placeholder="Usuario"
              value={formState.name}
              onChange={onChange("username")}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formPassword">
            <Form.Label>Contrase??a</Form.Label>
            <Form.Control
              type="password"
              placeholder="Contrase??a"
              value={formState.password}
              onChange={onChange("password")}
            />
          </Form.Group>
          <Button type="submit" variant="dark" className="mt-2">
            Acceder
          </Button>
          <Form.Group className="mt-5">
            <small>
              ??No est??s registrado? <Link to="/register">Reg??strate aqu??</Link>
            </small>
          </Form.Group>
        </Form>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Login;
