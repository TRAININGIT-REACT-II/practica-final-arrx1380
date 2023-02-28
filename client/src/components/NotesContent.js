import Notes from "../components/Notes";
import useNotes from "../hooks/useNotes";

const NotesContent = () => {
  //Hooks
  const notes = useNotes();

  return (
    <>
      {notes.notes.length ? (
        <div className="p-2 pt-4">
          <Notes notes={notes.notes} />
        </div>
      ) : (
        <div className="p-4 text-black-50">No hay notas</div>
      )}
    </>
  );
};

export default NotesContent;
