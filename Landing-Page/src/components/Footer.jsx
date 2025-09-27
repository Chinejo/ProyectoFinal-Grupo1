const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <nav>
            <ul>
              <li><a href="#inicio" aria-label="Ir a inicio">Inicio</a></li>
              <li><a href="#servicios" aria-label="Ver nuestros servicios">Servicios</a></li>
              <li><a href="#contacto" aria-label="Ir a la sección de contacto">Contacto</a></li>
            </ul>
          </nav>
        </div>
        <div className="footer-section">
          <h3>Síguenos</h3>
          <div className="social-links">
            <a 
              href="https://facebook.com/tuempresa" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Visita nuestra página de Facebook"
            >
              <img src="/icons/facebook.svg" alt="Facebook" aria-hidden="true" />
            </a>
            <a 
              href="https://twitter.com/tuempresa" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Síguenos en Twitter"
            >
              <img src="/icons/twitter.svg" alt="Twitter" aria-hidden="true" />
            </a>
            <a 
              href="https://instagram.com/tuempresa" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Síguenos en Instagram"
            >
              <img src="/icons/instagram.svg" alt="Instagram" aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="footer-section">
          <h3>Contáctanos</h3>
          <p>
            <a 
              href="mailto:contacto@tuempresa.com"
              aria-label="Envíanos un correo electrónico"
              className="contact-link"
            >
              contacto@tuempresa.com
            </a>
          </p>
          <p>Teléfono: <a href="tel:+123456789" aria-label="Llámanos">+123 456 789</a></p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Tu Empresa. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}

export default Footer
