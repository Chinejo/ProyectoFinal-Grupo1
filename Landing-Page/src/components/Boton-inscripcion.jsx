import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import '../styles/boton-inscripcion.css';
import { useFontSizes } from '../context/FontSizeContext';

const PaperPenIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" style={{ display: 'block' }}>
    <rect x="2" y="1.5" width="17" height="19" rx="1" fill="#ffffff" stroke="#233159" strokeWidth="1" />
    <path d="M13 1.5v5h5" fill="none" stroke="#233159" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="5" y1="8.2" x2="16.5" y2="8.2" stroke="#233159" strokeWidth="1" strokeLinecap="round" />
    <line x1="5" y1="10.6" x2="16.5" y2="10.6" stroke="#233159" strokeWidth="1" strokeLinecap="round" />
    <line x1="5" y1="13" x2="12.5" y2="13" stroke="#233159" strokeWidth="1" strokeLinecap="round" />
    <path d="M10 16l6-6" stroke="#233159" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M15.2 9.8l1 1-4.2 4.2-1-1L15.2 9.8z" fill="#233159" />
  </svg>
);

function BotonInscripcion() {
  const fontSizes = useFontSizes();
  const iconSize = Number.parseFloat(fontSizes.buttonIconSize ?? '') || 24;
  const [isVisible, setIsVisible] = useState(false);

  const GOOGLE_FORM_URL = import.meta.env.VITE_GOOGLE_FORM_URL || 'https://docs.google.com/forms/d/e/1FAIpQLSeddZhVfhkkO-IQxK7wWY9eiKSt809yLXpzK1VDMKfks99ydw/viewform';

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

  const handleClick = (e) => {
    e.preventDefault();
    if (GOOGLE_FORM_URL && !GOOGLE_FORM_URL.includes('REPLACE_WITH_YOUR_FORM')) {
      window.open(GOOGLE_FORM_URL, '_blank', 'noopener,noreferrer');
      return;
    }

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <Container fluid className="position-fixed bottom-0 start-0 p-3">
      <Row>
        <Col xs="auto">
          <OverlayTrigger placement="top" overlay={<Tooltip>Link al formulario de inscripciones</Tooltip>}>
            <Button
              variant="primary"
              onClick={handleClick}
              className={`boton-inicio rounded-circle d-flex align-items-center justify-content-center ${isVisible ? 'visible' : ''}`}
              style={{ 
                width: fontSizes.buttonSize, 
                height: fontSizes.buttonSize,
                minWidth: fontSizes.buttonSize,
                minHeight: fontSizes.buttonSize
              }}
              aria-label="Link al formulario de inscripciones"
            >
              <PaperPenIcon size={iconSize} />
            </Button>
          </OverlayTrigger>
        </Col>
      </Row>
    </Container>
  );
}

export default BotonInscripcion;
