import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../assets/LogoEscolar.jpg';
import '../styles/NavBar.css';

function NavBar() {
  return (
    <Navbar className="navbar-main py-1" sticky="top">
      <Row className="w-100">
        <Container fluid>
          <Navbar.Brand href="#inicio" className="d-flex align-items-center px-3">
            <img
              src={Logo}
              alt="Logo de la Escuela de Comercio República de Panamá"
              height="50"
              className="m-3"
            />
            <span className="navbar-title fw-bold d-inline mb-0">
              Escuela de Comercio<br className="d-block d-md-none" /> República de Panamá
            </span>
          </Navbar.Brand>
        </Container>

        <Container fluid>
          <Row>
            <Col xxl={3} xl={3} lg={3} md={6} sm={6} className="d-flex justify-content-center">
              <Nav.Link 
                href="#sobre-nosotros" 
                className="nav-button fw-bold px-4 py-1 rounded-pill text-center text-nowrap"
              >
                Sobre Nosotros
              </Nav.Link>
            </Col>
            <Col xxl={3} xl={3} lg={3} md={6} sm={6} className="d-flex justify-content-center">
              <Nav.Link 
                href="#info-planes" 
                className="nav-button fw-bold px-4 py-1 rounded-pill text-center text-nowrap"
              >
                Información de Planes
              </Nav.Link>
            </Col>
            <Col xxl={3} xl={3} lg={3} md={6} sm={6} className="d-flex justify-content-center">
              <Nav.Link 
                href="#galeria" 
                className="nav-button fw-bold px-4 py-1 rounded-pill text-center text-nowrap"
              >
                Galería
              </Nav.Link>
            </Col>
            <Col xxl={3} xl={3} lg={3} md={6} sm={6} className="d-flex justify-content-center">
              <Nav.Link 
                href="#mapa-ubicacion" 
                className="nav-button fw-bold px-4 py-1 rounded-pill text-center text-nowrap"
              >
                Ubicación
              </Nav.Link>
            </Col>
          </Row>
        </Container>
      </Row>
    </Navbar>
  );
}

export default NavBar;