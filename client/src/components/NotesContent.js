import Notes from "../components/Notes";
import withLoader from "./WithLoader";

const NotesContent = ({ loading, status, notes }) => {
  if (!loading && !status) {
    throw new Error("Error retrieving data from server");
  }

  return (
    <div className="p-2 pt-4">
      {notes.length ? (
        <Notes notes={notes} />
      ) : (
        <div className="p-3 text-black-50">No hay notas</div>
      )}
    </div>
  );
};

export default withLoader(NotesContent);
