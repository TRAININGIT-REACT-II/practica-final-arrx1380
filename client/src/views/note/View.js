import { useContext } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import ThemeContext from "../../contexts/theme";
import { THEMES } from "../../constants/themes";
import Content from "../../components/Content";
import NavBar from "../../components/NavBar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ViewNote = () => {
  // Params
  const params = useParams();

  // Contexts
  const themeContext = useContext(ThemeContext);

  // Selector
  const notesSelector = useSelector((state) => state.notes);
  const note = notesSelector.notes.filter((n) => n.id == params.id)[0];

  return (
    <Content>
      <NavBar home={false} />
      <div
        className={`mt-2 pt-2 mx-5 ${
          themeContext.current === THEMES.dark ? "text-white" : null
        }`}
      >
        <Row className="mt-2">
          <Col className="fs-3 mb-3">Ver nota</Col>
        </Row>
        <Row className="mt-2">
          <Col>
            <small>
              <b
                className={
                  themeContext.current === THEMES.light
                    ? "text-black-50"
                    : "text-white-50"
                }
              >
                Título
              </b>
            </small>
          </Col>
        </Row>
        <Row className="mt-2">
          <Col>{note?.title}</Col>
        </Row>
        <Row className="mt-4">
          <Col>
            <small>
              <b
                className={
                  themeContext.current === THEMES.light
                    ? "text-black-50"
                    : "text-white-50"
                }
              >
                Nota
              </b>
            </small>
          </Col>
        </Row>
        <Row className="mt-2">
          <Col>{note?.note}</Col>
        </Row>
        <Row className="mt-4">
          <Col>
            <small>
              <b
                className={
                  themeContext.current === THEMES.light
                    ? "text-black-50"
                    : "text-white-50"
                }
              >
                Creación
              </b>
            </small>
          </Col>
        </Row>
        <Row className="mt-2">
          <Col>{note?.created}</Col>
        </Row>
        <Row className="mt-4">
          <Col>
            <small>
              <b
                className={
                  themeContext.current === THEMES.light
                    ? "text-black-50"
                    : "text-white-50"
                }
              >
                Modificación
              </b>
            </small>
          </Col>
        </Row>
        <Row className="mt-2">
          <Col>{note?.updated}</Col>
        </Row>
      </div>
    </Content>
  );
};

export default ViewNote;
