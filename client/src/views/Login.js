import { useState, useContext, useEffect } from "react";
import UserContext from "../contexts/user";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import { JournalBookmark } from "react-bootstrap-icons";
import useApi from "../hooks/useApi";

const Login = () => {
  // States
  const [formState, setFormState] = useState({ username: "", password: "" });
  const [error, setError] = useState(null);

  // Contexts
  const userContext = useContext(UserContext);

  // History
  const history = useHistory();

  // Hooks
  const loginRequest = useApi("/api/login", "", {}, false);

  // Effects
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

      localStorage.setItem("user", JSON.stringify(loginRequest.data));
      userContext.update(loginRequest.data);
      history.push("/");
    }
  }, [loginRequest]);

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
      return setError("La contraseña es obligatoria");
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
      <Form className="mt-4" onSubmit={onSubmit}>
        <div className="fs-1 mb-4">
          <JournalBookmark /> TrainingNotes
          <div className="fs-4 mt-4 text-secondary">Acceso</div>
        </div>
        <>{error ? <Alert variant="danger">{error}</Alert> : null}</>
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
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="Contraseña"
            value={formState.password}
            onChange={onChange("password")}
          />
        </Form.Group>
        <Button type="submit" variant="dark" className="mt-2">
          Acceder
        </Button>
        <Form.Group className="mt-5">
          <small>
            ¿No estás registrado? <Link to="/register">Regístrate aquí</Link>
          </small>
        </Form.Group>
      </Form>
    </div>
  );
};

export default Login;
