import { Container, Col, Row } from 'react-bootstrap';
import '../styles/galeria.css';
import '../styles/animations.css';
import { useFontSizes } from '../context/FontSizeContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import GaleriaCard from './GaleriaCard';
import { galeriaData } from '../data/galeriaData.jsx';

function Galeria() {
    const fontSizes = useFontSizes();

    const [tituloRef, tituloVisible] = useScrollAnimation();
    const [introRef, introVisible] = useScrollAnimation();

    return (
        <section id="galeria" className="py-4">
            <Container>
                <h2 
                    ref={tituloRef}
                    className={`info-titulo text-center fw-bold text-uppercase mb-3 pb-3 animate-on-scroll ${tituloVisible ? 'animated' : ''}`}
                    style={{ fontSize: fontSizes.galeriaTitle, wordBreak: 'break-word', hyphens: 'auto' }}
                >
                    SECTORES DE NUESTRO ESTABLECIMIENTO
                </h2>

                <p 
                    ref={introRef}
                    className={`galeria-intro text-start mb-4 animate-on-scroll ${introVisible ? 'animated' : ''}`}
                    style={{ fontSize: fontSizes.contentText, maxWidth: '800px' }}
                >
                    Conoce los distintos sectores de nuestra institución.
                </p>
                
                <Row xs={1} sm={2} md={3} className="g-4">
                    {galeriaData.map((card, idx) => (
                        <Col key={idx}>
                            <GaleriaCard card={card} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
}

export default Galeria;
