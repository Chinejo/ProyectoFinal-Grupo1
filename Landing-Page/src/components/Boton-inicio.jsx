import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { ArrowUp } from 'react-bootstrap-icons';
import '../styles/boton-inicio.css';
import { useFontSizes } from '../context/FontSizeContext';

function BotonInicio() {
  const fontSizes = useFontSizes();
  const iconSize = Number.parseFloat(fontSizes.buttonIconSize ?? '') || 24;
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <Container fluid className="position-fixed bottom-0 start-0 p-3">
      <Row>
        <Col xs="auto">
          <Button
            variant="primary"
            onClick={scrollToTop}
            className={`boton-inicio rounded-circle d-flex align-items-center justify-content-center ${isVisible ? 'visible' : ''}`}
            style={{ 
              width: fontSizes.buttonSize, 
              height: fontSizes.buttonSize,
              minWidth: fontSizes.buttonSize,
              minHeight: fontSizes.buttonSize
            }}
            aria-label="Volver al inicio"
          >
            <ArrowUp size={iconSize} />
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default BotonInicio;
