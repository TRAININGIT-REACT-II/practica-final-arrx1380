import { useState, useContext, useEffect } from "react";
import ThemeContext from "../contexts/theme";
import { useSelector } from "react-redux";
import { THEMES } from "../constants/themes";
import Notes from "../components/Notes";
import CustomModal from "../components/CustomModal";
import useApi from "../hooks/useApi";

const NotesContent = () => {
  // States
  const [notes, setNotes] = useState([]);
  const [noteId, setNoteId] = useState("");
  const [show, setShow] = useState(false);

  // Contexts
  const themeContext = useContext(ThemeContext);

  // Selectors
  const user = useSelector((state) => state.user);

  // Hooks
  const getNotesRequest = useApi("/api/notes", user.token);
  const deleteNoteRequest = useApi(`/api/notes/${noteId}`, user.token);

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
    if (getNotesRequest.data) {
      setNotes(getNotesRequest.data);
    }
  }, [getNotesRequest.data]);

  useEffect(() => {
    if (deleteNoteRequest.data) {
      setNotes(notes.filter((n) => n.id != noteId));
      setShow(false);
    }
  }, [deleteNoteRequest.data]);

  const onDelete = (id) => {
    setShow(true);
    setNoteId(id);
  };

  const modalClose = () => {
    setShow(false);
  };

  const modalConfirm = () => {
    deleteNoteRequest.updateParams({
      method: "DELETE",
    });

    deleteNoteRequest.perform();
  };

  return (
    <>
      <CustomModal
        title="Borrar nota"
        question="¿Seguro que quieres borrar esta nota?"
        noButton="No"
        yesButton="Sí"
        show={show}
        modalClose={() => modalClose()}
        modalConfirm={() => modalConfirm()}
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
