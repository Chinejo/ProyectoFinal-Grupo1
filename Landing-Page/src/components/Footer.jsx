const Footer = () => {
  return (
    <footer className="footer">
        <img src="./src/assets/LogoEscolar.jpg" alt="Logo de la Escuela de Comercio República de Panamá" className="footer-logo" aria-hidden="true" />
      <div className="footer-content">
        <div className="footer-section">
          <h3>Escuela de Comercio República de Panamá</h3>
          <div className="social-links">
            <a 
              href="https://facebook.com/escueladecomerciorepublicadepanama" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Link a nuestra página de Facebook"
            >
              <img src="/icons/facebook.svg" alt="Facebook" aria-hidden="true" />
            </a>
            <a 
              href="https://facebook.com/escueladecomerciorepublicadepanama" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Link a la página del turno noche"
            >
              <img src="/icons/twitter.svg" alt="Twitter" aria-hidden="true" />
            </a>
            <a 
              href="https://instagram.com/tuempresa" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Link a nuestra página de Instagram"
            >
              <img src="/icons/instagram.svg" alt="Instagram" aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="footer-section">
          <h4>Shipton y San juan, Concepción, Tucumán</h4>
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
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Grupo 1.</p>
      </div>
    </footer>
  )
}

export default Footer
