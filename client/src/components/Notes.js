import { useContext } from "react";
import ThemeContext from "../contexts/theme";
import ViewContext from "../contexts/view";
import SortContext from "../contexts/sort";
import { THEMES } from "../constants/themes";
import { VIEWS } from "../constants/views";
import Note from "./Note";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Notes = ({ notes }) => {
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
            <Col xs={2}>
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
            <Col xs={6}>
              <h6
                className={
                  themeContext.current === THEMES.light
                    ? "text-black-50"
                    : "text-white-50"
                }
              >
                Nota
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
          </Row>
          {notes
            .sort((a, b) =>
              a[sortContext.current] > b[sortContext.current] ? 1 : -1
            )
            .map((item, key) => (
              <Row
                key={key}
                className={`m-0 py-1 border-top ${
                  themeContext.current === THEMES.dark
                    ? "text-white border-light border-opacity-25"
                    : null
                }`}
              >
                <Col xs={2}>
                  <b>{item.title}</b>
                </Col>
                <Col xs={6}>{item.note}</Col>
                <Col xs={2}>
                  <small>{item.created}</small>
                </Col>
                <Col xs={2}>
                  <small>{item.updated}</small>
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
                <Note key={key} note={{ ...item }} />
              </Col>
            ))}
        </Row>
      )}
    </>
  );
};

export default Notes;
