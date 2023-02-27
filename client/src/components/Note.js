import { useContext } from "react";
import { Link } from "react-router-dom";
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
          <Button
            variant={
              themeContext.current === THEMES.light ? THEMES.dark : THEMES.light
            }
            size="sm"
            as={Link}
            to={`/note/view/${note.id}`}
          >
            Ver
          </Button>
          <Button
            variant={
              themeContext.current === THEMES.light ? THEMES.dark : THEMES.light
            }
            size="sm"
            className="mx-1"
            as={Link}
            to={`/note/update/${note.id}`}
          >
            Editar
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
