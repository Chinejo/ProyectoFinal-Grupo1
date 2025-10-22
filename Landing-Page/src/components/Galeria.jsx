import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import actividades from "../assets/actividades.jpg";
import biblioteca from '../assets/biblioteca.jpg';
import canchas from '../assets/cancha.jpg';
import escenario from '../assets/escenario.jpg';
import mastil from '../assets/mastil.jpg';
import patio from '../assets/patio.jpg';
import '../styles/galeria.css';


function GridExample() {
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
            text: 'Espacio depotivo amplio.',
            imgSrc: canchas,
        },
        {
            title: 'Escenario',
            text: 'Eventos y presentaciones escolares.',
            imgSrc: escenario,
        },
        {
            title: 'Mastil',
            text: 'Simbolo de nuestra bandera.',
            imgSrc: mastil,
        },
        {
            title: 'Patio',
            text: 'Espacio para encuentro y recreo.',
            imgSrc: patio,
        },
    ];
  return (
    <section className="galeria-container">
      <h2 className="galeria-titulo">Sectores de nuestro establecimiento</h2>
    <Row xs={1} md={3} className="g-4 galeria-row"> 
      {cards.map((card, idx) => (
        <Col key={idx}>
          <Card className='galeria-card'>
            <Card.Img variant="top" src={card.imgSrc}/>
            <Card.Body>
              <Card.Title>{card.title}</Card.Title>
              <Card.Text></Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    </section>
  );
}

export default GridExample;
