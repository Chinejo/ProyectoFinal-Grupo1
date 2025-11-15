import logo from "../assets/LogoEscolar.jpg"
import '../styles/footer.css';
import { Facebook } from 'react-bootstrap-icons';
import { OverlayTrigger, Tooltip, Container, Row, Col } from 'react-bootstrap';
import { useFontSizes } from '../context/FontSizeContext';

const Footer = () => {
  const fontSizes = useFontSizes();

  return (
    <footer id="footer" className="footer" style={{ fontSize: fontSizes.footerText }}>
      <Container className="px-3 py-3">
        <Row className="g-3 align-items-center">
          <Col xs={12} lg={6} className="footer-info-section">
            <div className="footer-info-content">
              <div className="text-center mb-3">
                <img 
                  src={logo} 
                  alt="Logo de la Escuela de Comercio República de Panamá" 
                  className="footer-logo mb-2" 
                  aria-hidden="true" 
                />
                <h3 className="m-0 fw-bold mb-1" style={{ fontSize: fontSizes.footerTitle }}>
                  Escuela de Comercio República de Panamá
                </h3>
              </div>

              <div className="text-center mb-3">
                <h4 className="m-0 fw-normal mb-1" style={{ fontSize: fontSizes.footerSubtitle }}>
                  Shipton y San juan, Concepción, Tucumán
                </h4>
                <p className="m-0 mb-1" style={{ fontSize: fontSizes.footerSubtitle }}>
                  <a 
                    href="mailto:esccomreppanama@gmail.com"
                    aria-label="Envíanos un correo electrónico"
                    className="contact-link"
                  >
                    esccomreppanama@gmail.com
                  </a>
                </p>
              </div>

              <div className="text-center">
                <h5 className="fw-normal mb-2" style={{ fontSize: fontSizes.footerSubtitle }}>
                  Síguenos
                </h5>
                <div className="d-flex justify-content-center gap-3">
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
                      href="https://www.facebook.com/profile.php?id=61560700463128&_rdr" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label="Link a la página del turno noche"
                      className="social-link"
                    >
                      <Facebook size={18} />
                    </a>
                  </OverlayTrigger>
                </div>
              </div>
            </div>
          </Col>

          <Col xs={12} lg={6} className="footer-map-section">
            <div className="h-100 d-flex flex-column justify-content-center">
              <h4 className="text-center fw-normal mb-2" style={{ fontSize: fontSizes.footerSubtitle }}>
                ¿Dónde encontrarnos?
              </h4>
              <div className="map-container">
                <iframe
                  className="footer-map rounded shadow-sm w-100 h-100"
                  loading="lazy"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3543.9355703904134!2d-65.60410532521031!3d-27.346482711466123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9423cf327ede5647%3A0xf86bca369bb48b4d!2sEscuela%20de%20Comercio%20Rep%C3%BAblica%20de%20Panam%C3%A1!5e0!3m2!1sen!2sar!4v1762956696928!5m2!1sen!2sar"
                  allowFullScreen=""
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mapa de ubicación de la escuela"
                ></iframe>
              </div>
            </div>
          </Col>
        </Row>

        <Row className="justify-content-center mt-2">
          <Col xs={12} className="footer-bottom text-center">
            <p className="m-0" style={{ fontSize: fontSizes.footerSmall }}>
              &copy; 2025 Grupo 1. Todos los derechos reservados.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
