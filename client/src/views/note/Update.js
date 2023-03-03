import { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router";
import ThemeContext from "../../contexts/theme";
import UserContext from "../../contexts/user";
import { THEMES } from "../../constants/themes";
import Content from "../../components/Content";
import NavBar from "../../components/NavBar";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Form from "react-bootstrap/Form";
import useApi from "../../hooks/useApi";

const UpdateNote = () => {
  // States
  const [error, setError] = useState(null);
  const [note, setNote] = useState({});
  const [formState, setFormState] = useState({
    title: "",
    content: "",
  });

  // Params
  const params = useParams();

  // Contexts
  const themeContext = useContext(ThemeContext);
  const userContext = useContext(UserContext);

  // History
  const history = useHistory();

  // Hooks
  const updateNoteRequest = useApi(
    `/api/notes/${params.id}`,
    userContext.current.token
  );

  // Effects
  useEffect(() => {
    if (updateNoteRequest.error) {
      return setError(updateNoteRequest.error);
    }
    if (updateNoteRequest.data) {
      history.push("/");
    }
  }, [updateNoteRequest]);

  const onChange = (key) => (e) => {
    setFormState({
      ...formState,
      [key]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    setError(null);

    if (!formState.title) {
      return setError("El título es obligatorio");
    }

    if (!formState.content) {
      return setError("La descripción es obligatoria");
    }

    updateNoteRequest.updateParams({
      method: "PUT",
      body: JSON.stringify(formState),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    updateNoteRequest.perform();
  };

  return (
    <Content>
      <NavBar home={false} />
      <div
        className={`mt-2 pt-2 ${
          themeContext.current === THEMES.dark ? "text-white" : null
        }`}
      >
        <Form className="mt-2 mx-5" onSubmit={onSubmit}>
          <div className="fs-3 mb-3">Editar nota</div>
          <>
            {error ? (
              <Alert variant="danger">
                <small>{error}</small>
              </Alert>
            ) : null}
          </>
          <Form.Group className="mb-3" controlId="formTitle">
            <Form.Label>Título</Form.Label>
            <Form.Control
              type="text"
              placeholder="Título"
              value={formState?.title}
              onChange={onChange("title")}
              className={
                themeContext.current === THEMES.dark
                  ? "bg-dark text-white"
                  : null
              }
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formNote">
            <Form.Label>Nota</Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              placeholder="Nota"
              value={formState?.content}
              onChange={onChange("content")}
              className={
                themeContext.current === THEMES.dark
                  ? "bg-dark text-white"
                  : null
              }
            />
          </Form.Group>
          <Button
            type="submit"
            variant={
              themeContext.current === THEMES.light ? THEMES.dark : THEMES.light
            }
            className="mt-2"
          >
            Guardar
          </Button>
        </Form>
      </div>
    </Content>
  );
};

export default UpdateNote;
