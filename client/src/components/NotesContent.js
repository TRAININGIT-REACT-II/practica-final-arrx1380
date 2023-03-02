import { useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteNoteAction } from "../actions/note";
import ThemeContext from "../contexts/theme";
import { THEMES } from "../constants/themes";
import Notes from "../components/Notes";

const NotesContent = () => {
  // Selector
  const notesSelector = useSelector((state) => state.notes);

  // Dispatch
  const dispatch = useDispatch();

  // Contexts
  const themeContext = useContext(ThemeContext);

  const onDelete = (id) => {
    dispatch(deleteNoteAction(id));
  };

  return (
    <>
      {notesSelector.notes.length ? (
        <div className="p-2 pt-4">
          <Notes notes={notesSelector.notes} onDelete={onDelete} />
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
