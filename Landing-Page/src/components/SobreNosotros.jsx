import { Container, Row, Col, Image, Card } from 'react-bootstrap'
import escuelaImg from '../assets/escuela.jpeg'
import '../styles/animations.css'
import '../styles/sobreNosotros.css'
import { useFontSizes } from '../context/FontSizeContext'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { useCountUp } from '../hooks/useCountUp'

function SobreNosotros() {
  const fontSizes = useFontSizes();
  
  const [tituloRef, tituloVisible] = useScrollAnimation();
  const [imagenRef, imagenVisible] = useScrollAnimation();
  const [contenidoRef, contenidoVisible] = useScrollAnimation();
  const [statsRef, statsVisible] = useScrollAnimation();
  const [card1Ref, card1Visible] = useScrollAnimation();
  const [card2Ref, card2Visible] = useScrollAnimation();
  const [card3Ref, card3Visible] = useScrollAnimation();

  const count1 = useCountUp(60, 2000, statsVisible);
  const count2 = useCountUp(1200, 2000, statsVisible);
  const count3 = useCountUp(95, 2000, statsVisible);

  return (
    <section id="sobre-nosotros" className="pt-5 pb-4">
      <Container>
        <div className='rounded p-4 p-md-5'>
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
            <Col xs={12} lg={6} className='order-lg-1 d-flex flex-column justify-content-center'>
              <p 
                ref={contenidoRef}
                className={`info-contenido mb-3 animate-on-scroll ${contenidoVisible ? 'animated' : ''}`}
                style={{ fontSize: fontSizes.contentText }}
              > 
                La Escuela de Comercio República de Panamá es una institución pública que forma estudiantes íntegros en el área comercial y contable. Promovemos valores, pensamiento crítico y compromiso con la comunidad, integrando formación académica y desarrollo personal.
              </p>

              <div 
                ref={statsRef}
                className={`stats-container animate-on-scroll ${statsVisible ? 'animated' : ''}`}
              >
                <Row className="text-center g-3">
                  <Col xs={4}>
                    <div className="stat-item">
                      <div className="stat-icon mb-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-award stat-svg" viewBox="0 0 16 16">
                          <path d="M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702z"/>
                          <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1z"/>
                        </svg>
                      </div>
                      <div className="stat-number fw-bold mb-2" style={{ fontSize: '1.5rem', color: '#2c3e50' }}>
                        {count1}
                      </div>
                      <div className="stat-label" style={{ fontSize: '0.75rem', color: '#666' }}>
                        Años de Trayectoria
                      </div>
                    </div>
                  </Col>
                  <Col xs={4}>
                    <div className="stat-item">
                      <div className="stat-icon mb-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-people-fill stat-svg" viewBox="0 0 16 16">
                          <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/>
                        </svg>
                      </div>
                      <div className="stat-number fw-bold mb-2" style={{ fontSize: '1.5rem', color: '#2c3e50' }}>
                        {count2}
                      </div>
                      <div className="stat-label" style={{ fontSize: '0.75rem', color: '#666' }}>
                        Estudiantes
                      </div>
                    </div>
                  </Col>
                  <Col xs={4}>
                    <div className="stat-item">
                      <div className="stat-icon mb-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-trophy-fill stat-svg" viewBox="0 0 16 16">
                          <path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5q0 .807-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33 33 0 0 1 2.5.5m.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935m10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935"/>
                        </svg>
                      </div>
                      <div className="stat-number fw-bold mb-2" style={{ fontSize: '1.5rem', color: '#2c3e50' }}>
                        {count3}%
                      </div>
                      <div className="stat-label" style={{ fontSize: '0.75rem', color: '#666' }}>
                        % Graduación
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>

          <Row className="mt-5 g-4">
            <Col xs={12} md={4}>
              <div ref={card1Ref}>
                <Card className={`feature-card h-100 border-0 shadow-sm animate-on-scroll ${card1Visible ? 'animated' : ''}`}>
                  <Card.Body className="text-center p-4">
                    <div className="feature-icon-wrapper mb-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" className="bi bi-book feature-icon" viewBox="0 0 16 16">
                        <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783"/>
                      </svg>
                    </div>
                    <Card.Title className="feature-title fw-bold mb-3" style={{ fontSize: fontSizes.subtitle }}>
                      Formación
                    </Card.Title>
                    <Card.Text className="feature-description" style={{ fontSize: fontSizes.contentText, color: '#666' }}>
                      Educamos para el mundo real, combinando saberes técnicos con valores humanos
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </Col>

            <Col xs={12} md={4}>
              <div ref={card2Ref}>
                <Card className={`feature-card h-100 border-0 shadow-sm animate-on-scroll ${card2Visible ? 'animated' : ''}`}>
                  <Card.Body className="text-center p-4">
                    <div className="feature-icon-wrapper mb-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-heart-fill feature-icon" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                      </svg>
                    </div>
                    <Card.Title className="feature-title fw-bold mb-3" style={{ fontSize: fontSizes.subtitle }}>
                      Valores
                    </Card.Title>
                    <Card.Text className="feature-description" style={{ fontSize: fontSizes.contentText, color: '#666' }}>
                      Promovemos responsabilidad, solidaridad y compromiso en cada etapa del aprendizaje
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </Col>

            <Col xs={12} md={4}>
              <div ref={card3Ref}>
                <Card className={`feature-card h-100 border-0 shadow-sm animate-on-scroll ${card3Visible ? 'animated' : ''}`}>
                  <Card.Body className="text-center p-4">
                    <div className="feature-icon-wrapper mb-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-lightbulb feature-icon" viewBox="0 0 16 16">
                        <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13a.5.5 0 0 1 0 1 .5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.446-.317L4.31 11.31A6.985 6.985 0 0 1 2 6zm5 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm2 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm2 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm-6.5 7.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 13.5a.5.5 0 0 1 .5-.5z"/>
                      </svg>
                    </div>
                    <Card.Title className="feature-title fw-bold mb-3" style={{ fontSize: fontSizes.subtitle }}>
                      Proyección
                    </Card.Title>
                    <Card.Text className="feature-description" style={{ fontSize: fontSizes.contentText, color: '#666' }}>
                      Los preparamos para desafíos actuales, con pensamiento crítico y participación.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  )
}

export default SobreNosotros
