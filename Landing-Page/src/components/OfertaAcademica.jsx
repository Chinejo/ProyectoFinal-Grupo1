import React from 'react'
import { Container, Accordion } from 'react-bootstrap'
import '../styles/OfertaAcademica.css'

function OfertaAcademica() {
  return (
    <section id="info-planes" className="py-4">
      <Container>
        <div className="planes-contenedor-blanco rounded shadow p-4 p-md-5">
          <h2 className="planes-titulo text-center fw-bold text-uppercase mb-4 pb-3">
            OFERTA ACADÉMICA
          </h2>
          
          <section className="planes-contenedor-turnos mb-4 border rounded p-3 p-md-4">
            <h3 className="planes-turnos h5 fw-semibold mb-3 pb-2">Turno mañana y tarde:</h3>
            <Accordion>
              <Accordion.Item eventKey="0" className="accordion-item-custom mb-3 border-2 rounded overflow-hidden">
                <Accordion.Header className="fw-semibold">Ciencias Sociales</Accordion.Header>
                <Accordion.Body className="planes-descripcion-body p-3 p-md-4">
                  <p className="text-dark mb-3 lh-base">
                    Esta modalidad fomenta el pensamiento crítico, la comprensión histórica y el análisis de fenómenos sociales. Ideal para estudiantes interesados en la ciudadanía, la comunicación y el trabajo comunitario.
                  </p> 
                  <div className="planes-info-box rounded p-3">
                    <dl className="row g-2 mb-0">
                      <dt className="col-12 col-sm-4 col-md-3 planes-dt fw-bold">Duración:</dt>
                      <dd className="col-12 col-sm-8 col-md-9 text-dark">6 años</dd>
                      <dt className="col-12 col-sm-4 col-md-3 planes-dt fw-bold">Horarios:</dt>
                      <dd className="col-12 col-sm-8 col-md-9 text-dark">De 08:00 a 12:00 en la mañana y de 14:00 a 18:00 en la tarde</dd>
                      <dt className="col-12 col-sm-4 col-md-3 planes-dt fw-bold">Edad:</dt>
                      <dd className="col-12 col-sm-8 col-md-9 text-dark">De 12 años a 17 años</dd>
                      <dt className="col-12 col-sm-4 col-md-3 planes-dt fw-bold">Alcance:</dt>
                      <dd className="col-12 col-sm-8 col-md-9 text-dark">Nacional y Mercosur</dd>
                    </dl>
                  </div>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="1" className="accordion-item-custom mb-3 border-2 rounded overflow-hidden">
                <Accordion.Header className="fw-semibold">Ciencias Naturales</Accordion.Header>
                <Accordion.Body className="planes-descripcion-body p-3 p-md-4">
                  <p className="text-dark mb-3 lh-base">
                    Esta modalidad promueve el desarrollo del pensamiento lógico y científico a través del estudio de la biología, química, física y matemática. Está orientada a estudiantes con interés en la investigación, el medio ambiente y las ciencias aplicadas.
                  </p> 
                  <div className="planes-info-box rounded p-3">
                    <dl className="row g-2 mb-0">
                      <dt className="col-12 col-sm-4 col-md-3 planes-dt fw-bold">Duración:</dt>
                      <dd className="col-12 col-sm-8 col-md-9 text-dark">6 años</dd>
                      <dt className="col-12 col-sm-4 col-md-3 planes-dt fw-bold">Horarios:</dt>
                      <dd className="col-12 col-sm-8 col-md-9 text-dark">De 08:00 a 12:00 en la mañana y de 14:00 a 18:00 en la tarde</dd>
                      <dt className="col-12 col-sm-4 col-md-3 planes-dt fw-bold">Edad:</dt>
                      <dd className="col-12 col-sm-8 col-md-9 text-dark">De 12 años a 17 años</dd>
                      <dt className="col-12 col-sm-4 col-md-3 planes-dt fw-bold">Alcance:</dt>
                      <dd className="col-12 col-sm-8 col-md-9 text-dark">Nacional y Mercosur</dd>
                    </dl>
                  </div>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="2" className="accordion-item-custom mb-3 border-2 rounded overflow-hidden">
                <Accordion.Header className="fw-semibold">Economía</Accordion.Header>
                <Accordion.Body className="planes-descripcion-body p-3 p-md-4">
                  <p className="text-dark mb-3 lh-base">
                    Esta orientación introduce a los estudiantes en el mundo de la administración, la contabilidad y las finanzas. Se enfoca en el desarrollo de habilidades organizativas, análisis económico y gestión de recursos.
                  </p> 
                  <div className="planes-info-box rounded p-3">
                    <dl className="row g-2 mb-0">
                      <dt className="col-12 col-sm-4 col-md-3 planes-dt fw-bold">Duración:</dt>
                      <dd className="col-12 col-sm-8 col-md-9 text-dark">6 años</dd>
                      <dt className="col-12 col-sm-4 col-md-3 planes-dt fw-bold">Horarios:</dt>
                      <dd className="col-12 col-sm-8 col-md-9 text-dark">De 08:00 a 12:00 en la mañana y de 14:00 a 18:00 en la tarde</dd>
                      <dt className="col-12 col-sm-4 col-md-3 planes-dt fw-bold">Edad:</dt>
                      <dd className="col-12 col-sm-8 col-md-9 text-dark">De 12 años a 17 años</dd>
                      <dt className="col-12 col-sm-4 col-md-3 planes-dt fw-bold">Alcance:</dt>
                      <dd className="col-12 col-sm-8 col-md-9 text-dark">Nacional y Mercosur</dd>
                    </dl>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </section>

          <section className="planes-contenedor-turnos mb-0 border rounded p-3 p-md-4">
            <h3 className="planes-turnos h5 fw-semibold mb-3 pb-2">Turno noche:</h3>
            <Accordion>
              <Accordion.Item eventKey="0" className="accordion-item-custom mb-3 border-2 rounded overflow-hidden">
                <Accordion.Header className="fw-semibold">Economía (Integrado)</Accordion.Header>
                <Accordion.Body className="planes-descripcion-body p-3 p-md-4">
                  <p className="text-dark mb-3 lh-base">
                    Modalidad pensada para jóvenes menores de 17 años cumplidos al 30 de junio. Ofrece formación en ciencias económicas y administración, con un plan de estudios adaptado a sus necesidades.
                  </p>
                  <div className="planes-info-box rounded p-3">
                    <dl className="row g-2 mb-0">
                      <dt className="col-12 col-sm-4 col-md-3 planes-dt fw-bold">Duración:</dt>
                      <dd className="col-12 col-sm-8 col-md-9 text-dark">4 años</dd>
                      <dt className="col-12 col-sm-4 col-md-3 planes-dt fw-bold">Horarios:</dt>
                      <dd className="col-12 col-sm-8 col-md-9 text-dark">19:45 a 00:00</dd>
                      <dt className="col-12 col-sm-4 col-md-3 planes-dt fw-bold">Edad:</dt>
                      <dd className="col-12 col-sm-8 col-md-9 text-dark">Menores a 17 años</dd>
                      <dt className="col-12 col-sm-4 col-md-3 planes-dt fw-bold">Alcance:</dt>
                      <dd className="col-12 col-sm-8 col-md-9 text-dark">Nacional y Mercosur</dd>
                    </dl>
                  </div>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="1" className="accordion-item-custom mb-3 border-2 rounded overflow-hidden">
                <Accordion.Header className="fw-semibold">Economía (Integrado +17 años)</Accordion.Header>
                <Accordion.Body className="planes-descripcion-body p-3 p-md-4">
                  <p className="text-dark mb-3 lh-base">
                    Diseñada para personas mayores de 17 años cumplidos al 30 de junio, esta modalidad brinda una formación sólida en economía y gestión, con un enfoque práctico y flexible.
                  </p>
                  <div className="planes-info-box rounded p-3">
                    <dl className="row g-2 mb-0">
                      <dt className="col-12 col-sm-4 col-md-3 planes-dt fw-bold">Duración:</dt>
                      <dd className="col-12 col-sm-8 col-md-9 text-dark">4 años</dd>
                      <dt className="col-12 col-sm-4 col-md-3 planes-dt fw-bold">Horarios:</dt>
                      <dd className="col-12 col-sm-8 col-md-9 text-dark">19:45 a 00:00</dd>
                      <dt className="col-12 col-sm-4 col-md-3 planes-dt fw-bold">Edad:</dt>
                      <dd className="col-12 col-sm-8 col-md-9 text-dark">Mayores a 17 años</dd>
                      <dt className="col-12 col-sm-4 col-md-3 planes-dt fw-bold">Alcance:</dt>
                      <dd className="col-12 col-sm-8 col-md-9 text-dark">Nacional y Mercosur</dd>
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
