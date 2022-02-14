import React from 'react';
import { Navbar, Container, Nav,Offcanvas ,NavDropdown,Form,FormControl,Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
//importa el menu item con sus elementos para incluirlos mas abajo en el render
import { MenuItems } from '../data/PaginasApp';
import './header.css';

class BootstrapHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
<Navbar bg="light" expand={false}>
  <Container fluid>
    <Navbar.Brand bg="light" href="#">Menu</Navbar.Brand>
            <img
              className="logo-image"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png"
            />
            <i className="fas fa-user-graduate" />
    <Navbar.Toggle aria-controls="offcanvasNavbar" />
    <Navbar.Offcanvas
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
      placement="end"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title id="offcanvasNavbarLabel">Ejercicios del examen</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className="justify-content-end flex-grow-1 pe-3">
          
          Mostramos los ejercicios del examen
              {MenuItems.map((item) => {
                return (
                  <Nav.Link as={Link} to={item.path}>
                    {item.title}
                  </Nav.Link>
                );
              })}
        </Nav>
        
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  </Container>
</Navbar>
      /*<Navbar bg="light" expand={false}>
      <Container fluid>
        <Navbar.Brand href="#">EXAMEN DI</Navbar.Brand>
        <img
              className="logo-image"
              src="https://eu01.edcwb.com/buscador/img/centros/logogrande/7348-a9c730d6b2b644f5b9910364ba6af277.jpg"
            />
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">Offcanvas</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
          <Nav>
             Mostramos los elementos de menu item
              {MenuItems.map((item) => {
                return (
                  <Nav.Link as={Link} to={item.path}>
                    {item.title}
                  </Nav.Link>
                );
              })}
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>*/
      
    );
  }
}

export default BootstrapHeader;