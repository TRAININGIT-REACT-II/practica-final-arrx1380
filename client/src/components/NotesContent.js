import { useState, useContext, useEffect } from "react";
import ThemeContext from "../contexts/theme";
import UserContext from "../contexts/user";
import { THEMES } from "../constants/themes";
import Notes from "../components/Notes";
import CustomModal from "../components/CustomModal";
import useApi from "../hooks/useApi";

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

  const modalClose = () => {
    setShow(false);
  };

  const modalConfirm = () => {
    setConfirm(true);
  };

  return (
    <>
      <CustomModal
        title="Borrar nota"
        question="¿Seguro que quieres borrar esta nota?"
        noButton="No"
        yesButton="Sí"
        show={show}
        modalClose={modalClose}
        modalConfirm={modalConfirm}
      />
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
