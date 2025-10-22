import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../assets/LogoEscolar.jpg';
import '../styles/NavBar.css';

function BasicExample() {
  return (
    <div className="navbar-wrapper">
      {/* Navbar único con estructura personalizada */}
      <Navbar expand="lg" className="navbar-main bg-body-tertiary">
        <Container className="navbar-top-container">
          {/* Sección Superior */}
          <Navbar.Brand href="#inicio" className="navbar-brand-section">
            <img
              src={Logo}
              alt="Logo de la Escuela de Comercio República de Panamá"
              height="50"
              className="navbar-logo"
            />
            <span className="navbar-title">Escuela de Comercio República de Panamá</span>
          </Navbar.Brand>

          {/* Botón hamburguesa */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-toggle-mobile" />
        </Container>

        {/* Sección Inferior - Menú */}
        <Navbar.Collapse id="basic-navbar-nav" className="navbar-menu-section">
          <Container>
            <Nav className="mx-auto navbar-nav-custom">
              <Nav.Link href="#sobre-nosotros" className="nav-button">Sobre Nosotros</Nav.Link>
              <Nav.Link href="#info-planes" className="nav-button">Información de Planes</Nav.Link>
              <Nav.Link href="#galeria" className="nav-button">Galería</Nav.Link>
            </Nav>
          </Container>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default BasicExample;