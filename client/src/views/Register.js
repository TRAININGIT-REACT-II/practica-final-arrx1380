import { useState, useContext, useEffect } from "react";
import UserContext from "../contexts/user";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import { JournalBookmark } from "react-bootstrap-icons";
import useApi from "../hooks/useApi";

const Register = () => {
  // States
  const [formState, setFormState] = useState({ username: "", password: "" });
  const [error, setError] = useState(null);

  // Contexts
  const userContext = useContext(UserContext);

  // History
  const history = useHistory();

  // Hooks
  const registerRequest = useApi("/api/register");

  // Effects
  useEffect(() => {
    if (registerRequest.error) {
      return setError(registerRequest.error);
    }
    if (registerRequest.data) {
      if (
        !registerRequest.data.id ||
        !registerRequest.data.username ||
        !registerRequest.data.token
      ) {
        return setError("Ha ocurrido un error");
      }

      userContext.update(registerRequest.data);
      localStorage.setItem("user", JSON.stringify(registerRequest.data));
      history.push("/");
    }
  }, [registerRequest]);

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

    registerRequest.updateParams({
      method: "POST",
      body: JSON.stringify(formState),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    registerRequest.perform();
  };

  return (
    <div className="w-100 d-flex justify-content-center mt-4">
      <Form className="mt-4" onSubmit={onSubmit}>
        <div className="fs-1 mb-4">
          <JournalBookmark /> TrainingNotes
          <div className="fs-4 mt-4 text-secondary">Registro</div>
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
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="Contraseña"
            value={formState.password}
            onChange={onChange("password")}
          />
        </Form.Group>
        <Button type="submit" variant="dark" className="mt-2">
          Regístrate
        </Button>
        <Form.Group className="mt-5">
          <small>
            ¿Ya estás registrado? <Link to="/login">Accede aquí</Link>
          </small>
        </Form.Group>
      </Form>
    </div>
  );
};

export default Register;
