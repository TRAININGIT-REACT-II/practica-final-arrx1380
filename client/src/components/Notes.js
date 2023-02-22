import { useContext } from "react";
import ThemeContext from "../contexts/theme";
import ViewContext from "../contexts/view";
import SortContext from "../contexts/sort";
import { THEMES } from "../constants/themes";
import { VIEWS } from "../constants/views";
import { SORTS } from "../constants/sorts";
import Note from "./Note";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Notes = ({ notes }) => {
  const themeContext = useContext(ThemeContext);
  const viewContext = useContext(ViewContext);
  const sortContext = useContext(SortContext);
  return (
    <>
      {viewContext.current === VIEWS.list ? (
        <>
          <Row
            className={`px-3 pt-3 ${
              themeContext.current === THEMES.dark ? "text-white" : null
            }`}
          >
            <Col xs={2}>
              <h5>Título</h5>
            </Col>
            <Col xs={6}>
              <h5>Nota</h5>
            </Col>
            <Col xs={2}>
              <h5>Creada</h5>
            </Col>
            <Col xs={2}>
              <h5>Modificada</h5>
            </Col>
          </Row>
          {notes
            .sort((a, b) =>
              a[sortContext.current] > b[sortContext.current] ? 1 : -1
            )
            .map((item, key) => (
              <Row
                key={key}
                className={`px-3 py-2 ${
                  themeContext.current === THEMES.dark ? "text-white" : null
                }`}
              >
                <Col xs={2}>
                  <b>{item.title}</b>
                </Col>
                <Col xs={6}>{item.note}</Col>
                <Col
                  xs={2}
                  className={
                    themeContext.current === THEMES.light
                      ? "text-black-50"
                      : "text-white-50"
                  }
                >
                  <small>{item.created}</small>
                </Col>
                <Col
                  xs={2}
                  className={
                    themeContext.current === THEMES.light
                      ? "text-black-50"
                      : "text-white-50"
                  }
                >
                  <small>{item.updated}</small>
                </Col>
              </Row>
            ))}
        </>
      ) : (
        <Row
          className={`p-3 ${
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
