import { useContext } from "react";
import ThemeContext from "../contexts/theme";
import ViewContext from "../contexts/view";
import { THEMES } from "../constants/themes";
import { VIEWS } from "../constants/views";
import Card from "react-bootstrap/Card";

const Note = ({ note }) => {
  const themeContext = useContext(ThemeContext);
  const viewContext = useContext(ViewContext);

  return (
    <Card
      className="mb-3"
      bg={themeContext.current}
      text={themeContext.current === THEMES.light ? THEMES.dark : THEMES.light}
    >
      <Card.Body>
        <Card.Title>{note.title}</Card.Title>
        <Card.Text>{note.note}</Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">
        <small>
          <b>Creación:</b> {note.created}
        </small>
        {viewContext.current == VIEWS.list ? (
          <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
        ) : (
          <br />
        )}
        <small>
          <b>Actualización:</b> {note.updated}
        </small>
      </Card.Footer>
    </Card>
  );
};

export default Note;
