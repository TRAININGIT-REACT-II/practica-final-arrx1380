import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteNoteAction } from "../actions/note";
import Notes from "../components/Notes";

const NotesContent = () => {
  // Selector
  const notesSelector = useSelector((state) => state.notes);

  // Dispatch
  const dispatch = useDispatch();

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
        <div className="p-4 text-black-50">No hay notas</div>
      )}
    </>
  );
};

export default NotesContent;
