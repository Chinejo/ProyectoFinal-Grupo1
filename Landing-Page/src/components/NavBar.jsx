import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { List } from 'react-bootstrap-icons';
import Logo from '../assets/LogoEscolar.jpg';
import '../styles/NavBar.css';

function NavBar() {
  return (
    <Navbar expand="lg" className="navbar-main py-1" sticky="top">
      <Row className="w-100">
        <Container fluid>
          <Row className="align-items-center">
            <Col xs={10} lg={12}>
              <Navbar.Brand href="#inicio" className="d-flex align-items-center px-3">
                <img
                  src={Logo}
                  alt="Logo de la Escuela de Comercio República de Panamá"
                  height="50"
                  className="m-2"
                />
                <span className="navbar-title fw-bold d-inline mb-0">
                  Escuela de Comercio<br className="d-block d-md-none" /> República de Panamá
                </span>
              </Navbar.Brand>
            </Col>
            <Col xs={2} className="d-lg-none d-flex justify-content-end pe-1">
              <Navbar.Toggle aria-controls="navbar-nav" className="btn-sm bg-transparent border-0 text-white">
                <List size={30} color="white" />
              </Navbar.Toggle>
            </Col>
          </Row>
        </Container>

        <Navbar.Collapse id="navbar-nav">
          <Container fluid>
            <Row>
              <Col xxl={3} xl={3} lg={3} md={6} sm={6} xs={12} className="d-flex justify-content-center py-0">
                <Nav.Link 
                  href="#sobre-nosotros" 
                  className="nav-button fw-bold px-4 py-1 rounded-pill text-center text-nowrap"
                >
                  Sobre Nosotros
                </Nav.Link>
              </Col>
              <Col xxl={3} xl={3} lg={3} md={6} sm={6} xs={12} className="d-flex justify-content-center py-0">
                <Nav.Link 
                  href="#info-planes" 
                  className="nav-button fw-bold px-4 py-1 rounded-pill text-center text-nowrap"
                >
                  Información de Planes
                </Nav.Link>
              </Col>
              <Col xxl={3} xl={3} lg={3} md={6} sm={6} xs={12} className="d-flex justify-content-center py-0">
                <Nav.Link 
                  href="#galeria" 
                  className="nav-button fw-bold px-4 py-1 rounded-pill text-center text-nowrap"
                >
                  Galería
                </Nav.Link>
              </Col>
              <Col xxl={3} xl={3} lg={3} md={6} sm={6} xs={12} className="d-flex justify-content-center py-0">
                <Nav.Link 
                  href="#mapa-ubicacion" 
                  className="nav-button fw-bold px-4 py-1 rounded-pill text-center text-nowrap"
                >
                  Ubicación
                </Nav.Link>
              </Col>
            </Row>
          </Container>
        </Navbar.Collapse>
      </Row>
    </Navbar>
  );
}

export default NavBar;