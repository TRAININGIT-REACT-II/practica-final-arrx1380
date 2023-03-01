import { useState } from "react";
import { useContext } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { createNoteAction } from "../../actions/note";
import ThemeContext from "../../contexts/theme";
import { THEMES } from "../../constants/themes";
import Content from "../../components/Content";
import NavBar from "../../components/NavBar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const CreateNote = () => {
  // States
  const [formState, setFormState] = useState({ title: "", note: "" });

  // Contexts
  const themeContext = useContext(ThemeContext);

  // History
  const history = useHistory();

  // Dispatch
  const dispatch = useDispatch();

  const onChange = (key) => (e) => {
    setFormState({
      ...formState,
      [key]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // TODO API
    const id = Math.floor(Math.random() * 100000) + 1;
    dispatch(
      createNoteAction({ id, title: formState.title, note: formState.note })
    );
    setFormState({ title: "", note: "" });
    history.push("/");
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
          <div className="fs-3 mb-3">Añadir nota</div>
          <Form.Group className="mb-3" controlId="formTitle">
            <Form.Label>Título</Form.Label>
            <Form.Control
              type="text"
              placeholder="Título"
              value={formState.title}
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
              value={formState.note}
              onChange={onChange("note")}
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

export default CreateNote;
