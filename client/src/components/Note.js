import { useContext } from "react";
import ThemeContext from "../contexts/theme";
import { THEMES } from "../constants/themes";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Note = ({ note }) => {
  // Contexts
  const themeContext = useContext(ThemeContext);

  return (
    <Card
      className="mb-3"
      bg={themeContext.current}
      text={themeContext.current === THEMES.light ? THEMES.dark : THEMES.light}
    >
      <Card.Body>
        <Card.Title>{note.title}</Card.Title>
        <Card.Text>
          <small>
            <b
              className={
                themeContext.current === THEMES.light
                  ? "text-black-50"
                  : "text-white-50"
              }
            >
              Creación:
            </b>{" "}
            {note.created}
            <br />
            <b
              className={
                themeContext.current === THEMES.light
                  ? "text-black-50"
                  : "text-white-50"
              }
            >
              Modificación:
            </b>{" "}
            {note.updated}
          </small>
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">
        <div className="d-flex bd-highlight">
          <Button variant="secondary" size="sm">
            Ver
          </Button>
          <Button variant="secondary" size="sm" className="mx-1">
            Modificar
          </Button>
          <Button variant="danger" size="sm">
            Borrar
          </Button>
        </div>
      </Card.Footer>
    </Card>
  );
};

export default Note;
