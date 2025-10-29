import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import escuelaImg from '../assets/escuela.jpeg'
import '../styles/SobreNosotros.css'

function SobreNosotros() {
  return (
    <section id="sobre-nosotros" className="py-3 py-md-4 py-lg-5 px-3 px-md-4">
      <Container>
        <div className='info-contenedor-blanco rounded shadow-sm p-3 p-md-4 p-lg-5'>
          <h2 className='info-titulo text-center fw-bold text-uppercase mb-3 mb-md-4'>
            SOBRE NOSOTROS
          </h2>
          <Row className='align-items-start'>
            <Col xs={12} md={7} lg={6} className='mb-3 mb-md-0 order-md-2'>
              <Image 
                src={escuelaImg} 
                alt="Foto de la fachada principal de la Escuela de Comercio Republica de Panamá"
                fluid
                rounded
              />
            </Col>
            <Col xs={12} md={5} lg={6} className='order-md-1'>
              <p className='info-contenido m-0'> 
                La <span className='fw-bold'>Escuela de Comercio República de Panamá</span>, ubicada en Concepción, Tucumán, es una institución pública fundada en la década de 1960, reconocida por su trayectoria en formación académica y humana. Especializada en <span className='fw-bold'>educación comercial y contable</span>, promueve valores como <span className='fw-bold'>responsabilidad, solidaridad y compromiso</span>, preparando a los estudiantes para los desafíos del mundo actual. Con un equipo docente capacitado, fomenta el <span className='fw-bold'>pensamiento crítico, el trabajo colaborativo y el uso responsable de la tecnología</span>. La escuela destaca por su compromiso con la comunidad, proyectos solidarios y actividades culturales, formando ciudadanos íntegros y profesionales.
              </p>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  )
}

export default SobreNosotros
