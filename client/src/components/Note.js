import { useContext } from "react";
import { Link } from "react-router-dom";
import ThemeContext from "../contexts/theme";
import { THEMES } from "../constants/themes";
import useDate from "../hooks/useDate";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Note = ({ note, onDelete }) => {
  // Contexts
  const themeContext = useContext(ThemeContext);

  // Hooks
  const date = useDate();

  return (
    <Card
      className="mb-3 border"
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
            <span>{date.parse(note.createdAt)}</span>
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
            <span>{date.parse(note.updatedAt)}</span>
          </small>
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted border-top">
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
          <Button variant="danger" size="sm" onClick={() => onDelete(note.id)}>
            Borrar
          </Button>
        </div>
      </Card.Footer>
    </Card>
  );
};

export default Note;
