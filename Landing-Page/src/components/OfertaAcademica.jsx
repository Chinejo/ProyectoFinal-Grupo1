import { Container, Accordion } from 'react-bootstrap'
import '../styles/ofertaAcademica.css'
import '../styles/animations.css'
import { useFontSizes } from '../context/FontSizeContext'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

function OfertaAcademica() {
  const fontSizes = useFontSizes();

  // Referencias para animaciones
  const [tituloRef, tituloVisible] = useScrollAnimation();
  const [introRef, introVisible] = useScrollAnimation();
  const [turnoMañanaRef, turnoMañanaVisible] = useScrollAnimation();
  const [turnoNocheRef, turnoNocheVisible] = useScrollAnimation();

  return (
    <section id="info-planes" className="py-4">
      <Container>
        <div className="planes-contenedor rounded p-4 p-md-5">
          <h2 
            ref={tituloRef}
            className={`planes-titulo text-center fw-bold text-uppercase mb-3 pb-3 animate-on-scroll ${tituloVisible ? 'animated' : ''}`}
            style={{ fontSize: fontSizes.planesTitle, wordBreak: 'break-word', hyphens: 'auto' }}
          >
            OFERTA ACADÉMICA
          </h2>

          <p 
            ref={introRef}
            className={`planes-intro text-start mb-4 animate-on-scroll ${introVisible ? 'animated' : ''}`}
            style={{ fontSize: fontSizes.contentText, maxWidth: '800px' }}
          >
            Descubre nuestras modalidades educativas diseñadas para formar profesionales íntegros y preparados para los desafíos del siglo XXI.
          </p>
          
          <section 
            ref={turnoMañanaRef}
            className={`planes-contenedor-turnos mb-3 rounded p-3 p-md-4 shadow-sm animate-on-scroll ${turnoMañanaVisible ? 'animated' : ''}`}
          >
            <h3 className="planes-turnos h5 fw-semibold mb-3 pb-2" style={{ fontSize: fontSizes.planesTurnos }}>
              Turno mañana y tarde:
            </h3>
            <Accordion flush>
              <Accordion.Item eventKey="0" className="accordion-item-planes mb-3 rounded overflow-hidden border-0">
                <Accordion.Header className="fw-semibold" style={{ fontSize: fontSizes.planesAccordion }}>
                  Ciencias Sociales
                </Accordion.Header>
                <Accordion.Body className="planes-descripcion-body p-3 p-md-4" style={{ fontSize: fontSizes.planesDescription }}>
                  <p className="mb-3 lh-base text-dark">
                    Esta modalidad fomenta el pensamiento crítico, la comprensión histórica y el análisis de fenómenos sociales. Ideal para estudiantes interesados en la ciudadanía, la comunicación y el trabajo comunitario.
                  </p> 
                  <div className="planes-info-box rounded p-3 mt-3">
                    <dl className="row g-3 mb-0">
                      <dt className="col-12 col-sm-4 col-md-3 planes-dt fw-bold mb-0" style={{ fontSize: fontSizes.planesInfoTitle }}>Duración:</dt>
                      <dd className="col-12 col-sm-8 col-md-9 mb-2 mb-sm-0">6 años</dd>
                      <dt className="col-12 col-sm-4 col-md-3 planes-dt fw-bold mb-0" style={{ fontSize: fontSizes.planesInfoTitle }}>Horarios:</dt>
                      <dd className="col-12 col-sm-8 col-md-9 mb-2 mb-sm-0">De 08:00 a 12:00 en la mañana y de 14:00 a 18:00 en la tarde</dd>
                      <dt className="col-12 col-sm-4 col-md-3 planes-dt fw-bold mb-0" style={{ fontSize: fontSizes.planesInfoTitle }}>Edad:</dt>
                      <dd className="col-12 col-sm-8 col-md-9 mb-2 mb-sm-0">De 12 años a 17 años</dd>
                      <dt className="col-12 col-sm-4 col-md-3 planes-dt fw-bold mb-0" style={{ fontSize: fontSizes.planesInfoTitle }}>Alcance:</dt>
                      <dd className="col-12 col-sm-8 col-md-9 mb-0">Nacional y Mercosur</dd>
                    </dl>
                  </div>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="1" className="accordion-item-planes mb-3 rounded overflow-hidden border-0">
                <Accordion.Header className="fw-semibold" style={{ fontSize: fontSizes.planesAccordion }}>
                  Ciencias Naturales
                </Accordion.Header>
                <Accordion.Body className="planes-descripcion-body p-3 p-md-4" style={{ fontSize: fontSizes.planesDescription }}>
                  <p className="mb-3 lh-base text-dark">
                    Esta modalidad promueve el desarrollo del pensamiento lógico y científico a través del estudio de la biología, química, física y matemática. Está orientada a estudiantes con interés en la investigación, el medio ambiente y las ciencias aplicadas.
                  </p> 
                  <div className="planes-info-box rounded p-3 mt-3">
                    <dl className="row g-3 mb-0">
                      <dt className="col-12 col-sm-4 col-md-3 planes-dt fw-bold mb-0" style={{ fontSize: fontSizes.planesInfoTitle }}>Duración:</dt>
                      <dd className="col-12 col-sm-8 col-md-9 mb-2 mb-sm-0">6 años</dd>
                      <dt className="col-12 col-sm-4 col-md-3 planes-dt fw-bold mb-0" style={{ fontSize: fontSizes.planesInfoTitle }}>Horarios:</dt>
                      <dd className="col-12 col-sm-8 col-md-9 mb-2 mb-sm-0">De 08:00 a 12:00 en la mañana y de 14:00 a 18:00 en la tarde</dd>
                      <dt className="col-12 col-sm-4 col-md-3 planes-dt fw-bold mb-0" style={{ fontSize: fontSizes.planesInfoTitle }}>Edad:</dt>
                      <dd className="col-12 col-sm-8 col-md-9 mb-2 mb-sm-0">De 12 años a 17 años</dd>
                      <dt className="col-12 col-sm-4 col-md-3 planes-dt fw-bold mb-0" style={{ fontSize: fontSizes.planesInfoTitle }}>Alcance:</dt>
                      <dd className="col-12 col-sm-8 col-md-9 mb-0">Nacional y Mercosur</dd>
                    </dl>
                  </div>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="2" className="accordion-item-planes mb-3 rounded overflow-hidden border-0">
                <Accordion.Header className="fw-semibold" style={{ fontSize: fontSizes.planesAccordion }}>
                  Economía
                </Accordion.Header>
                <Accordion.Body className="planes-descripcion-body p-3 p-md-4" style={{ fontSize: fontSizes.planesDescription }}>
                  <p className="mb-3 lh-base text-dark">
                    Esta orientación introduce a los estudiantes en el mundo de la administración, la contabilidad y las finanzas. Se enfoca en el desarrollo de habilidades organizativas, análisis económico y gestión de recursos.
                  </p> 
                  <div className="planes-info-box rounded p-3 mt-3">
                    <dl className="row g-3 mb-0">
                      <dt className="col-12 col-sm-4 col-md-3 planes-dt fw-bold mb-0" style={{ fontSize: fontSizes.planesInfoTitle }}>Duración:</dt>
                      <dd className="col-12 col-sm-8 col-md-9 mb-2 mb-sm-0">6 años</dd>
                      <dt className="col-12 col-sm-4 col-md-3 planes-dt fw-bold mb-0" style={{ fontSize: fontSizes.planesInfoTitle }}>Horarios:</dt>
                      <dd className="col-12 col-sm-8 col-md-9 mb-2 mb-sm-0">De 08:00 a 12:00 en la mañana y de 14:00 a 18:00 en la tarde</dd>
                      <dt className="col-12 col-sm-4 col-md-3 planes-dt fw-bold mb-0" style={{ fontSize: fontSizes.planesInfoTitle }}>Edad:</dt>
                      <dd className="col-12 col-sm-8 col-md-9 mb-2 mb-sm-0">De 12 años a 17 años</dd>
                      <dt className="col-12 col-sm-4 col-md-3 planes-dt fw-bold mb-0" style={{ fontSize: fontSizes.planesInfoTitle }}>Alcance:</dt>
                      <dd className="col-12 col-sm-8 col-md-9 mb-0">Nacional y Mercosur</dd>
                    </dl>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </section>

          <section 
            ref={turnoNocheRef}
            className={`planes-contenedor-turnos mb-0 rounded p-3 p-md-4 shadow-sm animate-on-scroll ${turnoNocheVisible ? 'animated' : ''}`}
          >
            <h3 className="planes-turnos h5 fw-semibold mb-3 pb-2" style={{ fontSize: fontSizes.planesTurnos }}>
              Turno noche:
            </h3>
            <Accordion flush>
              <Accordion.Item eventKey="0" className="accordion-item-planes mb-3 rounded overflow-hidden border-0">
                <Accordion.Header className="fw-semibold" style={{ fontSize: fontSizes.planesAccordion }}>
                  Economía (Integrado)
                </Accordion.Header>
                <Accordion.Body className="planes-descripcion-body p-3 p-md-4" style={{ fontSize: fontSizes.planesDescription }}>
                  <p className="mb-3 lh-base text-dark">
                    Modalidad pensada para jóvenes menores de 17 años cumplidos al 30 de junio. Ofrece formación en ciencias económicas y administración, con un plan de estudios adaptado a sus necesidades.
                  </p>
                  <div className="planes-info-box rounded p-3 mt-3">
                    <dl className="row g-3 mb-0">
                      <dt className="col-12 col-sm-4 col-md-3 planes-dt fw-bold mb-0" style={{ fontSize: fontSizes.planesInfoTitle }}>Duración:</dt>
                      <dd className="col-12 col-sm-8 col-md-9 mb-2 mb-sm-0">4 años</dd>
                      <dt className="col-12 col-sm-4 col-md-3 planes-dt fw-bold mb-0" style={{ fontSize: fontSizes.planesInfoTitle }}>Horarios:</dt>
                      <dd className="col-12 col-sm-8 col-md-9 mb-2 mb-sm-0">19:45 a 00:00</dd>
                      <dt className="col-12 col-sm-4 col-md-3 planes-dt fw-bold mb-0" style={{ fontSize: fontSizes.planesInfoTitle }}>Edad:</dt>
                      <dd className="col-12 col-sm-8 col-md-9 mb-2 mb-sm-0">Menores a 17 años</dd>
                      <dt className="col-12 col-sm-4 col-md-3 planes-dt fw-bold mb-0" style={{ fontSize: fontSizes.planesInfoTitle }}>Alcance:</dt>
                      <dd className="col-12 col-sm-8 col-md-9 mb-0">Nacional y Mercosur</dd>
                    </dl>
                  </div>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="1" className="accordion-item-planes mb-3 rounded overflow-hidden border-0">
                <Accordion.Header className="fw-semibold" style={{ fontSize: fontSizes.planesAccordion }}>
                  Economía (Integrado +17 años)
                </Accordion.Header>
                <Accordion.Body className="planes-descripcion-body p-3 p-md-4" style={{ fontSize: fontSizes.planesDescription }}>
                  <p className="mb-3 lh-base text-dark">
                    Diseñada para personas mayores de 17 años cumplidos al 30 de junio, esta modalidad brinda una formación sólida en economía y gestión, con un enfoque práctico y flexible.
                  </p>
                  <div className="planes-info-box rounded p-3 mt-3">
                    <dl className="row g-3 mb-0">
                      <dt className="col-12 col-sm-4 col-md-3 planes-dt fw-bold mb-0" style={{ fontSize: fontSizes.planesInfoTitle }}>Duración:</dt>
                      <dd className="col-12 col-sm-8 col-md-9 mb-2 mb-sm-0">4 años</dd>
                      <dt className="col-12 col-sm-4 col-md-3 planes-dt fw-bold mb-0" style={{ fontSize: fontSizes.planesInfoTitle }}>Horarios:</dt>
                      <dd className="col-12 col-sm-8 col-md-9 mb-2 mb-sm-0">19:45 a 00:00</dd>
                      <dt className="col-12 col-sm-4 col-md-3 planes-dt fw-bold mb-0" style={{ fontSize: fontSizes.planesInfoTitle }}>Edad:</dt>
                      <dd className="col-12 col-sm-8 col-md-9 mb-2 mb-sm-0">Mayores a 17 años</dd>
                      <dt className="col-12 col-sm-4 col-md-3 planes-dt fw-bold mb-0" style={{ fontSize: fontSizes.planesInfoTitle }}>Alcance:</dt>
                      <dd className="col-12 col-sm-8 col-md-9 mb-0">Nacional y Mercosur</dd>
                    </dl>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </section>
        </div>
      </Container>
    </section>
  )
}

export default OfertaAcademica
