import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { ArrowUp } from 'react-bootstrap-icons';
import '../styles/boton-inicio.css';

function BotonInicio() {
  return (
    <Container fluid className="position-fixed bottom-0 start-0 p-3">
      <Row>
        <Col xs="auto">
          <Button
            variant="primary"
            href="#inicio"
            className="boton-inicio rounded-circle d-flex align-items-center justify-content-center"
          >
            <ArrowUp size={24} />
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default BotonInicio;
