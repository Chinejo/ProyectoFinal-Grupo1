import { Container, Row, Col, Image } from 'react-bootstrap'
import escuelaImg from '../assets/escuela.jpeg'
import '../styles/animations.css'
import '../styles/sobreNosotros.css'
import { useFontSizes } from '../context/FontSizeContext'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

function SobreNosotros() {
  const fontSizes = useFontSizes();
  
  // Referencias para cada elemento que queremos animar
  const [tituloRef, tituloVisible] = useScrollAnimation();
  const [imagenRef, imagenVisible] = useScrollAnimation();
  const [contenidoRef, contenidoVisible] = useScrollAnimation();

  return (
    <section id="sobre-nosotros" className="pt-5 pb-4">
      <Container>
        <div className='rounded shadow-sm p-4 p-md-5'>
          <h2 
            ref={tituloRef}
            className={`info-titulo text-center fw-bold text-uppercase mb-3 mb-md-4 animate-on-scroll ${tituloVisible ? 'animated' : ''}`}
            style={{ fontSize: fontSizes.sectionTitle, wordBreak: 'break-word', hyphens: 'auto' }}
          >
            SOBRE NOSOTROS
          </h2>
          <Row>
            <Col xs={12} lg={6} className='mb-3 mb-lg-0 order-lg-2'>
              <div ref={imagenRef}>
                <Image 
                  src={escuelaImg} 
                  alt="Foto de la fachada principal de la Escuela de Comercio Republica de Panamá"
                  fluid
                  rounded
                  className={`info-imagen animate-on-scroll ${imagenVisible ? 'animated' : ''}`}
                />
              </div>
            </Col>
            <Col xs={12} lg={6} className='order-lg-1'>
              <p 
                ref={contenidoRef}
                className={`info-contenido m-0 animate-on-scroll ${contenidoVisible ? 'animated' : ''}`}
                style={{ fontSize: fontSizes.contentText }}
              > 
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
