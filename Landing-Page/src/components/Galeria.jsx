import { Container, Card, Col, Row } from 'react-bootstrap';
import actividades from "../assets/actividades.jpg";
import biblioteca from '../assets/biblioteca.jpg';
import canchas from '../assets/cancha.jpg';
import escenario from '../assets/escenario.jpg';
import mastil from '../assets/mastil.jpg';
import patio from '../assets/patio.jpg';
import '../styles/galeria.css';

function Galeria() {
    const cards = [
        {
            title: 'Actividades',
            text: 'Obras de teatro.',
            imgSrc: actividades,
        },
        {
            title: 'Biblioteca',
            text: 'Un espacio para la lectura y el aprendizaje.',
            imgSrc: biblioteca,
        },
        {
            title: 'Canchas',
            text: 'Espacio deportivo amplio.',
            imgSrc: canchas,
        },
        {
            title: 'Escenario',
            text: 'Eventos y presentaciones escolares.',
            imgSrc: escenario,
        },
        {
            title: 'Mástil',
            text: 'Símbolo de nuestra bandera.',
            imgSrc: mastil,
        },
        {
            title: 'Patio',
            text: 'Espacio para encuentro y recreo.',
            imgSrc: patio,
        },
    ];

    return (
        <section id="galeria" className="py-4">
            <Container>
                <h2 className="text-center fw-bold text-uppercase mb-4 pb-3">SECTORES DE NUESTRO ESTABLECIMIENTO</h2>
                <Row xs={1} sm={2} md={3} className="g-4">
                    {cards.map((card, idx) => (
                        <Col key={idx}>
                            <Card className="h-100 galeria-card">
                                <Card.Img 
                                    variant="top" 
                                    src={card.imgSrc} 
                                    className="card-img-custom"
                                />
                                <Card.Body className="d-flex flex-column">
                                    <Card.Title className="text-center">{card.title}</Card.Title>
                                    <Card.Text className="text-center flex-grow-1">{card.text}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
}

export default Galeria;
