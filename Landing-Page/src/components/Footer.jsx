import logo from "../assets/LogoEscolar.jpg"
import '../styles/Footer.css';
import { Instagram, Facebook } from 'react-bootstrap-icons';
import { OverlayTrigger, Tooltip, Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="footer">
      <Container className="px-3">
        <Row className="justify-content-center">
          <Col xs={12} className="mb-2 text-center">
            <img src={logo} alt="Logo de la Escuela de Comercio República de Panamá" className="footer-logo" aria-hidden="true" />
          </Col>
        </Row>
        
        <Row className="justify-content-center">
          <Col xs={12} md={10} lg={8} className="mb-2 text-center">
            <h3 className="m-0 fw-semibold">Escuela de Comercio República de Panamá</h3>
          </Col>
        </Row>
        
        <Row className="justify-content-center">
          <Col xs={12} className="mb-2 text-center">
            <div className="d-flex justify-content-center gap-3 mt-0">
              <OverlayTrigger placement="top" overlay={<Tooltip>Link a nuestra página de Facebook</Tooltip>}>
                <a 
                  href="https://facebook.com/escueladecomerciorepublicadepanama" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Link a nuestra página de Facebook"
                  className="social-link"
                >
                  <Facebook size={18} />
                </a>
              </OverlayTrigger>
              <OverlayTrigger placement="top" overlay={<Tooltip>Link a la página del turno noche</Tooltip>}>
                <a 
                  href="https://facebook.com/escueladecomerciorepublicadepanama" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Link a la página del turno noche"
                  className="social-link"
                >
                  <Facebook size={18} />
                </a>
              </OverlayTrigger>
              <OverlayTrigger placement="top" overlay={<Tooltip>Link a nuestra página de Instagram</Tooltip>}>
                <a 
                  href="https://instagram.com/tuempresa" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Link a nuestra página de Instagram"
                  className="social-link"
                >
                  <Instagram size={18} />
                </a>
              </OverlayTrigger>
            </div>
          </Col>
        </Row>
        
        <Row className="justify-content-center">
          <Col xs={12} md={10} lg={8} className="mb-2 text-center">
            <h4 className="m-0 fw-normal">Shipton y San juan, Concepción, Tucumán</h4>
          </Col>
        </Row>
        
        <Row className="justify-content-center">
          <Col xs={12} className="mb-2 text-center">
            <p className="m-0">
              <a 
                href="mailto:esccomreppanama@gmail.com"
                aria-label="Envíanos un correo electrónico"
                className="contact-link"
              >
                esccomreppanama@gmail.com
              </a>
            </p>
          </Col>
        </Row>
        
        <Row className="justify-content-center">
          <Col xs={12} className="footer-bottom text-center">
            <p className="m-0">&copy; 2025 Grupo 1.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
