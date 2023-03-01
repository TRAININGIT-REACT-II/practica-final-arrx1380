import { useState } from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { updateNoteAction } from "../../actions/note";
import ThemeContext from "../../contexts/theme";
import { THEMES } from "../../constants/themes";
import Content from "../../components/Content";
import NavBar from "../../components/NavBar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const UpdateNote = () => {
  // Params
  const params = useParams();

  // Contexts
  const themeContext = useContext(ThemeContext);

  // Selector
  const notesSelector = useSelector((state) => state.notes);
  const note = notesSelector.notes.filter((n) => n.id == params.id)[0];
  if (!note) {
    throw new Error("Note not found");
  }

  // States
  const [formState, setFormState] = useState({
    title: note.title,
    note: note.note,
  });

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
    dispatch(
      updateNoteAction({
        id: note.id,
        title: formState.title,
        note: formState.note,
      })
    );
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
              value={formState?.note}
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

export default UpdateNote;
