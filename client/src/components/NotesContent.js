import { useState, useContext, useEffect } from "react";
import ThemeContext from "../contexts/theme";
import UserContext from "../contexts/user";
import { THEMES } from "../constants/themes";
import Notes from "../components/Notes";
import useApi from "../hooks/useApi";

const NotesContent = () => {
  // States
  const [notes, setNotes] = useState([]);
  const [noteId, setNoteId] = useState("");

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
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    getNotesRequest.perform();
  }, []);

  useEffect(() => {
    if (getNotesRequest.data) {
      setNotes(getNotesRequest.data);
    }
  }, [getNotesRequest]);

  useEffect(() => {
    getNotesRequest.perform();
  }, [deleteNoteRequest]);

  const onDelete = (id) => {
    setNoteId(id);

    deleteNoteRequest.updateParams({
      method: "DELETE",
    });

    deleteNoteRequest.perform();
  };

  return (
    <>
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
