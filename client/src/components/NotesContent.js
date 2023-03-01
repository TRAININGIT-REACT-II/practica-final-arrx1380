import { useSelector } from "react-redux";
import Notes from "../components/Notes";

const NotesContent = () => {
  // Selector
  const notesSelector = useSelector((state) => state.notes);

  return (
    <>
      {notesSelector.notes.length ? (
        <div className="p-2 pt-4">
          <Notes notes={notesSelector.notes} />
        </div>
      ) : (
        <div className="p-4 text-black-50">No hay notas</div>
      )}
    </>
  );
};

export default NotesContent;
