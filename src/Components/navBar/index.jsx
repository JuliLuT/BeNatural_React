
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import CartWidget from '../cartWidget';
import "./navBar.css"
function navBar() {
  return (
    <Navbar className='cont' expand="lg">
      <Container className='cont'>
        <Navbar.Brand href="#home" className='title'>BeNatural</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#link" >Cuenta</Nav.Link>
            <NavDropdown className='drop' title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item className='drop' href="#action/3.1" >Serums</NavDropdown.Item>
              <NavDropdown.Item className='drop' href="#action/3.2" >
                Cremas hidratantes
              </NavDropdown.Item>
              <NavDropdown.Item className='drop' href="#action/3.3" >Protectores Solares</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link> <CartWidget></CartWidget> </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>


  );
}


export default navBar;