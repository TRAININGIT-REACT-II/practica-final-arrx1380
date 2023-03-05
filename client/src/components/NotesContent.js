import { useState, useContext, useEffect } from "react";
import ThemeContext from "../contexts/theme";
import UserContext from "../contexts/user";
import { THEMES } from "../constants/themes";
import Notes from "../components/Notes";
import useApi from "../hooks/useApi";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const NotesContent = () => {
  // States
  const [notes, setNotes] = useState([]);
  const [noteId, setNoteId] = useState("");
  const [show, setShow] = useState(false);
  const [confirm, setConfirm] = useState(false);

  // Contexts
  const themeContext = useContext(ThemeContext);
  const userContext = useContext(UserContext);

  // Hooks
  const getNotesRequest = useApi("/api/notes", userContext.current.token);
  const deleteNoteRequest = useApi(
    `/api/notes/${noteId}`,
    userContext.current.token
  );

  // Effects
  useEffect(() => {
    getNotesRequest.updateParams({
      headers: {
        "Content-Type": "application/json",
      },
    });

    getNotesRequest.perform();
  }, []);

  useEffect(() => {
    if (getNotesRequest.error) {
      throw new Error(getNotesRequest);
    }
    if (getNotesRequest.data) {
      setNotes(getNotesRequest.data);
    }
  }, [getNotesRequest.data, getNotesRequest.error]);

  useEffect(() => {
    if (confirm) {
      deleteNoteRequest.updateParams({
        method: "DELETE",
      });

      deleteNoteRequest.perform();

      getNotesRequest.updateParams({
        headers: {
          "Content-Type": "application/json",
        },
      });

      getNotesRequest.perform();

      setConfirm(false);
      setShow(false);
    }
  }, [confirm]);

  const onDelete = (id) => {
    setNoteId(id);
    setShow(true);
  };

  return (
    <>
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Borrar nota</Modal.Title>
        </Modal.Header>
        <Modal.Body>¿Seguro que quieres borrar esta nota?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            No
          </Button>
          <Button variant="danger" onClick={() => setConfirm(true)}>
            Sí
          </Button>
        </Modal.Footer>
      </Modal>
      {notes?.length ? (
        <div className="p-2 pt-4">
          <Notes notes={notes} onDelete={onDelete} />
        </div>
      ) : (
        <div
          className={`p-4 ${
            themeContext.current === THEMES.light
              ? "text-black-50"
              : "text-white-50"
          }`}
        >
          No hay notas
        </div>
      )}
    </>
  );
};

export default NotesContent;
