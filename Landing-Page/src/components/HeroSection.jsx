import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Book } from 'react-bootstrap-icons';
import '../styles/heroSection.css';
import logoEscuela from '../assets/LogoEscolar.jpg';
import collageEscuela from '../assets/collage.jpg';

function HeroSection() {
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const [text3, setText3] = useState('');
  const [showCursor1, setShowCursor1] = useState(false);
  const [showCursor2, setShowCursor2] = useState(false);
  const [showCursor3, setShowCursor3] = useState(false);

  useEffect(() => {
    const line1 = 'Escuela de Comercio';
    const line2 = 'República de';
    const line3 = 'Panamá';
    let index = 0;

    const interval = setInterval(() => {
      if (index < line1.length) {
        setText1(line1.slice(0, index + 1));
        setShowCursor1(true);
      } else if (index === line1.length) {
        setShowCursor1(false);
        setShowCursor2(true);
      } else if (index < line1.length + line2.length) {
        setText2(line2.slice(0, index - line1.length + 1));
        setShowCursor2(true);
      } else if (index === line1.length + line2.length) {
        setShowCursor2(false);
        setShowCursor3(true);
      } else if (index < line1.length + line2.length + line3.length) {
        setText3(line3.slice(0, index - line1.length - line2.length + 1));
        setShowCursor3(true);
      } else {
        setShowCursor3(false);
        clearInterval(interval);
      }
      index++;
    }, 100); // Velocidad de escritura

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-section d-flex align-items-center">
      <Container fluid className="h-100 px-0">
        <Row className="h-100 align-items-center g-0">
          {/* Columna Izquierda - Logo y Título */}
          <Col lg={6} md={12} className="text-center px-3 left-content">
            <div className="logo-container mb-4">
              <img src={logoEscuela} alt="Logo Escuela de Comercio República de Panamá" className="school-logo" />
            </div>
            
            <h1 className="school-title mb-3">
              {text1}{showCursor1 && <span className="cursor">|</span>}<br />
              {text2}{showCursor2 && <span className="cursor">|</span>}<br />
              {text3}{showCursor3 && <span className="cursor">|</span>}
            </h1>
            
            <p className="school-subtitle mb-4">
              Educamos con valores, acompañamos con compromiso
            </p>

            <a href="#info-planes" className="academic-offer-btn">
              <Book className="me-2" size={20} />
              Oferta Académica
            </a>
          </Col>

          {/* Columna Derecha - Imagen Collage */}
          <Col lg={6} md={12} className="p-0 collage-column">
            <div className="collage-container">
              <img 
                src={collageEscuela} 
                alt="Collage de actividades escolares" 
                className="collage-image"
              />
              <div className="collage-overlay"></div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default HeroSection;