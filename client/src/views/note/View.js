import { useContext } from "react";
import ThemeContext from "../../contexts/theme";
import { THEMES } from "../../constants/themes";
import Content from "../../components/Content";
import NavBar from "../../components/NavBar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ViewNote = () => {
  // Contexts
  const themeContext = useContext(ThemeContext);

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
          <Col>aosidha odhaosid haosihdoasi hdoiahd o</Col>
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
          <Col>
            aosidha odhaosid haosihqwjeoq wjeoiq weojqw oejqowie jqowije ioqwjei
            qweoiwj qoeij qwoiejoqwijeoqjeoqdoasi hdoiahd o
          </Col>
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
          <Col>2022-04-54 12:33:44</Col>
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
          <Col>2022-04-54 12:33:44</Col>
        </Row>
      </div>
    </Content>
  );
};

export default ViewNote;
