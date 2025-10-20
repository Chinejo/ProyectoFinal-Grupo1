import logo from "../assets/LogoEscolar.jpg"
import '../styles/Footer.css';
import { Instagram, Facebook } from 'react-bootstrap-icons';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo */}
        <div className="footer-section">
          <img src={logo} alt="Logo de la Escuela de Comercio República de Panamá" className="footer-logo" aria-hidden="true" />
        </div>
        
        {/* Título */}
        <div className="footer-section">
          <h3>Escuela de Comercio República de Panamá</h3>
        </div>
        
        {/* Redes Sociales */}
        <div className="footer-section">
          <div className="social-links">
            <OverlayTrigger placement="top" overlay={<Tooltip>Link a nuestra página de Facebook</Tooltip>}>
              <a 
                href="https://facebook.com/escueladecomerciorepublicadepanama" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Link a nuestra página de Facebook"
              >
                <Facebook size={20} />
              </a>
            </OverlayTrigger>
            <OverlayTrigger placement="top" overlay={<Tooltip>Link a la página del turno noche</Tooltip>}>
              <a 
                href="https://facebook.com/escueladecomerciorepublicadepanama" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Link a la página del turno noche"
              >
                <Facebook size={20} />
              </a>
            </OverlayTrigger>
            <OverlayTrigger placement="top" overlay={<Tooltip>Link a nuestra página de Instagram</Tooltip>}>
              <a 
                href="https://instagram.com/tuempresa" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Link a nuestra página de Instagram"
              >
                <Instagram size={20} />
              </a>
            </OverlayTrigger>
          </div>
        </div>
        
        {/* Dirección */}
        <div className="footer-section">
          <h4>Shipton y San juan, Concepción, Tucumán</h4>
        </div>
        
        {/* Correo */}
        <div className="footer-section">
          <p>
            <a 
              href="mailto:esccomreppanama@gmail.com"
              aria-label="Envíanos un correo electrónico"
              className="contact-link"
            >
              esccomreppanama@gmail.com
            </a>
          </p>
        </div>
        
        {/* Copyright */}
        <div className="footer-bottom">
          <p>&copy; 2025 Grupo 1.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
