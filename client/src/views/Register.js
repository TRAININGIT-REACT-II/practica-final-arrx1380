import { useState, useContext } from "react";
import UserContext from "../contexts/user";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { JournalBookmark } from "react-bootstrap-icons";

const Register = () => {
  // States
  const [formState, setFormState] = useState({ username: "", password: "" });

  // Contexts
  const userContext = useContext(UserContext);

  // History
  const history = useHistory();

  const onChange = (key) => (e) => {
    setFormState({
      ...formState,
      [key]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // TODO
    console.log(formState);
    userContext.update(true);
    localStorage.setItem("logged", true);
    history.push("/");
  };

  return (
    <div className="w-100 d-flex justify-content-center mt-4">
      <Form className="mt-4" onSubmit={onSubmit}>
        <div className="fs-1 mb-5">
          <JournalBookmark /> TrainingNotes
        </div>
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
