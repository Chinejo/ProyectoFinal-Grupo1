import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { EnvelopeFill } from 'react-bootstrap-icons';
import '../styles/boton-contacto.css';

const BotonContacto = () => {
  const [show, setShow] = useState(false);

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
            >
              <EnvelopeFill size={24} />
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
          <Offcanvas.Title>Formulario de Contacto</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Container fluid>
            <Row>
              <Col xs={12}>
                <Form>
                  <Form.Group className="mb-3" controlId="formNombre">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Ingresa tu nombre"
                      name="nombre"
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Ingresa tu email"
                      name="email"
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formCelular">
                    <Form.Label>Celular</Form.Label>
                    <Form.Control
                      type="tel"
                      placeholder="Ingresa tu celular"
                      name="celular"
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formMensaje">
                    <Form.Label>Mensaje</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={4}
                      placeholder="Escribe tu mensaje"
                      name="mensaje"
                      required
                    />
                  </Form.Group>

                  <Row>
                    <Col xs={12} className="d-grid">
                      <Button variant="primary" type="submit" size="lg">
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