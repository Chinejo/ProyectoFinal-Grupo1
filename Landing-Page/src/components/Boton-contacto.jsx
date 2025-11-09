import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { EnvelopeFill } from 'react-bootstrap-icons';
import '../styles/boton-contacto.css';
import { useFontSizes } from '../context/FontSizeContext';

const BotonContacto = () => {
  const [show, setShow] = useState(false);
  const fontSizes = useFontSizes();
  const iconSize = Number.parseFloat(fontSizes.buttonIconSize ?? '') || 24;

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Container
        fluid
        className="position-fixed bottom-0 end-0 p-3 contact-container"
      >
  <Row className="justify-content-end">
          <Col xs="auto">
            <Button
              variant="primary"
              onClick={handleShow}
              className="boton-contacto rounded-circle d-flex align-items-center justify-content-center shadow"
              style={{ 
                width: fontSizes.buttonSize, 
                height: fontSizes.buttonSize,
                minWidth: fontSizes.buttonSize,
                minHeight: fontSizes.buttonSize
              }}
            >
              <EnvelopeFill size={iconSize} />
            </Button>
          </Col>
        </Row>
      </Container>

      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="end"
        className="offcanvas-contacto"
        backdrop={true}
        scroll={false}
      >
        <Offcanvas.Header closeButton className="border-bottom">
          <Offcanvas.Title style={{ fontSize: fontSizes.formTitle }}>Formulario de Contacto</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Container fluid>
            <Row>
              <Col xs={12}>
                <Form>
                  <Form.Group className="mb-3" controlId="formNombre">
                    <Form.Label style={{ fontSize: fontSizes.formLabel }}>Nombre</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Ingresa tu nombre"
                      name="nombre"
                      required
                      style={{ fontSize: fontSizes.formInput }}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label style={{ fontSize: fontSizes.formLabel }}>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Ingresa tu email"
                      name="email"
                      required
                      style={{ fontSize: fontSizes.formInput }}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formCelular">
                    <Form.Label style={{ fontSize: fontSizes.formLabel }}>Celular</Form.Label>
                    <Form.Control
                      type="tel"
                      placeholder="Ingresa tu celular"
                      name="celular"
                      required
                      style={{ fontSize: fontSizes.formInput }}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formMensaje">
                    <Form.Label style={{ fontSize: fontSizes.formLabel }}>Mensaje</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={4}
                      placeholder="Escribe tu mensaje"
                      name="mensaje"
                      required
                      style={{ fontSize: fontSizes.formInput }}
                    />
                  </Form.Group>

                  <Row>
                    <Col xs={12} className="d-grid">
                      <Button variant="primary" type="submit" size="lg" style={{ fontSize: fontSizes.buttonText }}>
                        Enviar
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>
          </Container>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default BotonContacto;