import { useContext } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import ViewContext from "../contexts/view";
import SortContext from "../contexts/sort";
import ThemeContext from "../contexts/theme";
import NavDropdownItem from "./NavDropdownItem";
import { VIEWS } from "../constants/views";
import { SORTS } from "../constants/sorts";
import { THEMES } from "../constants/themes";

const NavBar = () => {
  // Contexts
  const viewContext = useContext(ViewContext);
  const sortContext = useContext(SortContext);
  const themeContext = useContext(ThemeContext);

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

  return (
    <Navbar
      variant={`${themeContext.current}`}
      bg={`${themeContext.current}`}
      expand="lg"
      className="px-3"
    >
      <Navbar.Brand>TrainingNotes</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link className="px-3">Nueva tarjeta</Nav.Link>
          <NavDropdown title="Vista" id="view-nav-dropdown" className="px-3">
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
            <NavDropdown.Item onClick={() => setSortContext(SORTS.created)}>
              <NavDropdownItem
                item="Fecha de creación"
                checked={sortContext.current === SORTS.created}
              />
            </NavDropdown.Item>
            <NavDropdown.Item onClick={() => setSortContext(SORTS.updated)}>
              <NavDropdownItem
                item="Fecha de actualización"
                checked={sortContext.current === SORTS.updated}
              />
            </NavDropdown.Item>
          </NavDropdown>
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
          <Nav.Link className="px-3">Salir</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
