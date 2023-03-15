import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import CartWidget from "../cartWidget";
import "./navBar.css";
import { NavLink } from "react-router-dom";
function NavBar() {
  return (
    <Navbar className="cont" expand="lg">
      <Container className="cont">
        <Navbar.Brand className="title"><NavLink to={'/'}>BeNatural</NavLink></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ">
            <Nav.Link>
              <NavLink>Cuenta</NavLink>
            </Nav.Link>
            <NavDropdown
              className="drop"
              title="Productos"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item className="drop">
                {" "}
                <NavLink to={"/category/serum"}>Serums</NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item className="drop">
                <NavLink to={"/category/cremahidratante"}>
                  Cremas hidratantes
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item className="drop">
                <NavLink to={"/category/protectorsolar"}>
                  Protectores solares
                </NavLink>
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link>
              {" "}
              <CartWidget></CartWidget>{" "}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
