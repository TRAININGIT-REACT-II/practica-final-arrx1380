import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import CustomModal from "../components/CustomModal";
import ViewContext from "../contexts/view";
import SortContext from "../contexts/sort";
import ThemeContext from "../contexts/theme";
import { useHistory } from "react-router";
import { VIEWS } from "../constants/views";
import { SORTS } from "../constants/sorts";
import { THEMES } from "../constants/themes";
import { JournalBookmark } from "react-bootstrap-icons";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import NavDropdownItem from "./NavDropdownItem";

const NavBar = ({ home = true }) => {
  // States
  const [showModal, setShowModal] = useState(false);

  // Contexts
  const viewContext = useContext(ViewContext);
  const sortContext = useContext(SortContext);
  const themeContext = useContext(ThemeContext);

  // History
  const history = useHistory();

  // Setters
  const setViewContext = (ctx) => {
    viewContext.update(ctx);
  };
  const setSortContext = (ctx) => {
    sortContext.update(ctx);
  };
  const setThemeContext = (ctx) => {
    themeContext.update(ctx);
  };

  const modalClose = () => {
    setShowModal(false);
  };

  const modalConfirm = () => {
    setShowModal(false);
    history.push("/logout");
  };

  return (
    <>
      <CustomModal
        title="Salir"
        question="¿Seguro que quieres salir?"
        noButton="No"
        yesButton="Sí"
        show={showModal}
        modalClose={() => modalClose()}
        modalConfirm={() => modalConfirm()}
      />

      <Navbar
        variant={`${themeContext.current}`}
        bg={`${themeContext.current}`}
        expand="lg"
        className="px-3"
      >
        <Navbar.Brand>
          <Nav.Link className="px-3" as={Link} to="/">
            <JournalBookmark /> TrainingNotes
          </Nav.Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {home ? (
              <Nav.Link className="px-3" as={Link} to="/note/create">
                Añadir nota
              </Nav.Link>
            ) : null}
          </Nav>
          <Nav>
            {home ? (
              <>
                <NavDropdown
                  title="Vista"
                  id="view-nav-dropdown"
                  className="px-3"
                >
                  <NavDropdown.Item onClick={() => setViewContext(VIEWS.cards)}>
                    <NavDropdownItem
                      item="Tarjetas"
                      checked={viewContext.current === VIEWS.cards}
                    />
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={() => setViewContext(VIEWS.list)}>
                    <NavDropdownItem
                      item="Lista"
                      checked={viewContext.current === VIEWS.list}
                    />
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                  title="Ordernar por"
                  id="sort-nav-dropdown"
                  className="px-3"
                >
                  <NavDropdown.Item onClick={() => setSortContext(SORTS.title)}>
                    <NavDropdownItem
                      item="Título"
                      checked={sortContext.current === SORTS.title}
                    />
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    onClick={() => setSortContext(SORTS.createdAt)}
                  >
                    <NavDropdownItem
                      item="Fecha de creación"
                      checked={sortContext.current === SORTS.createdAt}
                    />
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    onClick={() => setSortContext(SORTS.updatedAt)}
                  >
                    <NavDropdownItem
                      item="Fecha de actualización"
                      checked={sortContext.current === SORTS.updatedAt}
                    />
                  </NavDropdown.Item>
                </NavDropdown>
              </>
            ) : null}

            <NavDropdown title="Tema" id="theme-nav-dropdown" className="px-3">
              <NavDropdown.Item onClick={() => setThemeContext(THEMES.light)}>
                <NavDropdownItem
                  item="Claro"
                  checked={themeContext.current === THEMES.light}
                />
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => setThemeContext(THEMES.dark)}>
                <NavDropdownItem
                  item="Oscuro"
                  checked={themeContext.current === THEMES.dark}
                />
              </NavDropdown.Item>
            </NavDropdown>

            {home ? (
              <Nav.Link className="px-3" onClick={() => setShowModal(true)}>
                Salir
              </Nav.Link>
            ) : (
              <Nav.Link className="px-3" as={Link} to="/">
                Volver
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavBar;
