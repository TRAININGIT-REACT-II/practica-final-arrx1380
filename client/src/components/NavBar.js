import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Check } from "react-bootstrap-icons";

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">TrainingNotes</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#new">Nueva tarjeta</Nav.Link>
          <NavDropdown title="Vista" id="view-nav-dropdown">
            <NavDropdown.Item href="#view/list">
              <Check /> Lista
            </NavDropdown.Item>
            <NavDropdown.Item href="#view/card">Tarjetas</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Ordernar por" id="sort-nav-dropdown">
            <NavDropdown.Item href="#sort/title">Título</NavDropdown.Item>
            <NavDropdown.Item href="#sort/created">
              Fecha de creación
            </NavDropdown.Item>
            <NavDropdown.Item href="#sort/update">
              <Check /> Fecha de actualización
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Tema" id="theme-nav-dropdown">
            <NavDropdown.Item href="#theme/light" selected>
              <Check /> Claro
            </NavDropdown.Item>
            <NavDropdown.Item href="#theme/dark">Oscuro</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#logout">Salir</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
