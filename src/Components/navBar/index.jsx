
import { Container,Nav,Navbar,NavDropdown } from 'react-bootstrap';
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
              <NavDropdown title="Productos" id="basic-nav-dropdown" className='menu'>
                <NavDropdown.Item href="#action/3.1" className='menu'>Serums</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2" className='menu'>
                  Cremas hidratantes
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3" className='menu'>Protectores Solares</NavDropdown.Item>
                <NavDropdown.Divider />
              </NavDropdown>
              <div><CartWidget></CartWidget></div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
     
      
    );
  }
  
  
  export default navBar;