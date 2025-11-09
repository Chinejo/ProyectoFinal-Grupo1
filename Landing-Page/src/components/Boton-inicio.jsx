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

  return (
    <Container fluid className="position-fixed bottom-0 start-0 p-3">
      <Row>
        <Col xs="auto">
          <Button
            variant="primary"
            href="#inicio"
            className="boton-inicio rounded-circle d-flex align-items-center justify-content-center"
            style={{ 
              width: fontSizes.buttonSize, 
              height: fontSizes.buttonSize,
              minWidth: fontSizes.buttonSize,
              minHeight: fontSizes.buttonSize
            }}
          >
            <ArrowUp size={iconSize} />
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default BotonInicio;
