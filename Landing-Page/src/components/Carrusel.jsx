import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../styles/Carrusel.css';
import maratonDeLectura from '../assets/maratonDeLectura.jpg';
import feriaDeCiencias from '../assets/feriaDeCiencias.jpg';
import olimpiadaAtacalar from '../assets/olimpiadaAtacalar.jpg';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} className="carousel-full-width">
      <Carousel.Item>
        <img 
          src={maratonDeLectura} 
          alt="Imagen de chicos reunidos listos para leer" 
          className="d-block w-100 carousel-image-height"
        />
        <Carousel.Caption className="carousel-caption-animated carousel-caption-center text-center py-4 px-3">
          <h3 className="fs-2 fs-md-1 fw-bold text-white mb-3 text-uppercase">Maratón de lectura 2025 turno noche</h3> 
          <p className="d-none d-md-block fs-4 fs-lg-3 text-white mb-0">Nuestra escuela escucha las voces de los antagonistas en la literatura.</p>
          <p className="d-md-none fs-6 text-white mb-0">Voces de los antagonistas en la literatura.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img 
          src={feriaDeCiencias} 
          alt="Imagen de los abanderados dando inicio a la Feria de Ciencias" 
          className="d-block w-100 carousel-image-height"
        />
        <Carousel.Caption className="carousel-caption-animated carousel-caption-center text-center py-4 px-3">
          <h3 className="fs-2 fs-md-1 fw-bold text-white mb-3 text-uppercase">Feria de Ciencias Steam Instancia Zonal</h3>
          <p className="d-none d-md-block fs-4 fs-lg-3 text-white mb-0">Se llevó a cabo la instancia zonal de la feria de ciencias en nuestro establecimiento.</p>
          <p className="d-md-none fs-6 text-white mb-0">Instancia zonal en nuestro establecimiento.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img 
          src={olimpiadaAtacalar} 
          alt="Imagen de los chicos participando en la Olimpiada Atacalar" 
          className="d-block w-100 carousel-image-height"
        />
        <Carousel.Caption className="carousel-caption-animated carousel-caption-center text-center py-4 px-3">
          <h3 className="fs-2 fs-md-1 fw-bold text-white mb-3 text-uppercase">Olimpiada Atacalar Instancia Zonal</h3>
          <p className="d-none d-md-block fs-4 fs-lg-3 text-white mb-0">
            Se llevó a cabo en nuestra institución la instancia zonal de la Olimpiada Internacional Atacalar de Matemática.
          </p>
          <p className="d-md-none fs-6 text-white mb-0">Olimpiada Internacional Atacalar de Matemática.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;