import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../assets/LogoEscolar.jpg';
import '../styles/NavBar.css';

function NavBar() {
  return (
    <Navbar className="navbar-main" sticky="top">
      <Row>
        {/* Primer container: Logo y título hacia el lado izquierdo */}
        <Container fluid>
          <Navbar.Brand href="#inicio" className="navbar-brand-section d-flex align-items-center">
            <img
              src={Logo}
              alt="Logo de la Escuela de Comercio República de Panamá"
              height="50"
              className="navbar-logo m-3"
            />
            <span className="navbar-title d-inline mb-0">Escuela de Comercio<br className="d-block d-md-none" /> República de Panamá</span>
          </Navbar.Brand>
        </Container>

        {/* Segundo container: Elementos del nav distribuidos uniformemente */}
        <Container fluid>
          <Row>
            <Col xxl={3} xl={3} lg={3} md={6} sm={6} className="d-flex justify-content-center">
              <Nav.Link href="#sobre-nosotros" className="nav-button">Sobre Nosotros</Nav.Link>
            </Col>
            <Col xxl={3} xl={3} lg={3} md={6} sm={6} className="d-flex justify-content-center">
              <Nav.Link href="#info-planes" className="nav-button">Información de Planes</Nav.Link>
            </Col>
            <Col xxl={3} xl={3} lg={3} md={6} sm={6} className="d-flex justify-content-center">
              <Nav.Link href="#galeria" className="nav-button">Galería</Nav.Link>
            </Col>
            <Col xxl={3} xl={3} lg={3} md={6} sm={6} className="d-flex justify-content-center">
              <Nav.Link href="#mapa-ubicacion" className="nav-button">Ubicación</Nav.Link>
            </Col>
          </Row>
        </Container>
      </Row>
    </Navbar>
  );
}

export default NavBar;