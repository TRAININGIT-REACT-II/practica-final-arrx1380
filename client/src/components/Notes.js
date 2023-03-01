import { useContext } from "react";
import { Link } from "react-router-dom";
import ThemeContext from "../contexts/theme";
import ViewContext from "../contexts/view";
import SortContext from "../contexts/sort";
import { THEMES } from "../constants/themes";
import { VIEWS } from "../constants/views";
import Note from "./Note";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const Notes = ({ notes, onDelete }) => {
  // Contexts
  const themeContext = useContext(ThemeContext);
  const viewContext = useContext(ViewContext);
  const sortContext = useContext(SortContext);

  return (
    <>
      {viewContext.current === VIEWS.list ? (
        <>
          <Row
            className={`m-0 ${
              themeContext.current === THEMES.dark ? "text-white" : null
            }`}
          >
            <Col xs={6}>
              <h6
                className={
                  themeContext.current === THEMES.light
                    ? "text-black-50"
                    : "text-white-50"
                }
              >
                Título
              </h6>
            </Col>
            <Col xs={2}>
              <h6
                className={
                  themeContext.current === THEMES.light
                    ? "text-black-50"
                    : "text-white-50"
                }
              >
                Creada
              </h6>
            </Col>
            <Col xs={2}>
              <h6
                className={
                  themeContext.current === THEMES.light
                    ? "text-black-50"
                    : "text-white-50"
                }
              >
                Modificada
              </h6>
            </Col>
            <Col xs={2}>
              <h6
                className={
                  themeContext.current === THEMES.light
                    ? "text-black-50"
                    : "text-white-50"
                }
              >
                Acciones
              </h6>
            </Col>
          </Row>
          {notes
            .sort((a, b) =>
              a[sortContext.current] > b[sortContext.current] ? 1 : -1
            )
            .map((item, key) => (
              <Row
                key={key}
                className={`m-0 py-2 border-top ${
                  themeContext.current === THEMES.dark
                    ? "text-white border-light border-opacity-25"
                    : null
                }`}
              >
                <Col xs={6} className="pt-1">
                  <b>{item.title}</b>
                </Col>
                <Col xs={2} className="pt-1">
                  <small>{item.created}</small>
                </Col>
                <Col xs={2} className="pt-1">
                  <small>{item.updated}</small>
                </Col>
                <Col xs={2}>
                  <Button
                    variant="secondary"
                    size="sm"
                    as={Link}
                    to={`/note/view/${item.id}`}
                  >
                    Ver
                  </Button>
                  <Button
                    variant="secondary"
                    size="sm"
                    className="mx-1"
                    as={Link}
                    to={`/note/update/${item.id}`}
                  >
                    Editar
                  </Button>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => onDelete(item.id)}
                  >
                    Borrar
                  </Button>
                </Col>
              </Row>
            ))}
        </>
      ) : (
        <Row
          className={`m-0 ${
            themeContext.current === THEMES.dark ? "note-dark" : null
          }`}
        >
          {notes
            .sort((a, b) =>
              a[sortContext.current] > b[sortContext.current] ? 1 : -1
            )
            .map((item, key) => (
              <Col key={key}>
                <Note key={key} note={{ ...item }} onDelete={onDelete} />
              </Col>
            ))}
        </Row>
      )}
    </>
  );
};

export default Notes;
