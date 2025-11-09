import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../styles/carrusel.css';
import maratonDeLectura from '../assets/maratonDeLectura.jpg';
import feriaDeCiencias from '../assets/feriaDeCiencias.jpg';
import olimpiadaAtacalar from '../assets/olimpiadaAtacalar.jpg';
import { useFontSizes } from '../context/FontSizeContext';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);
  const fontSizes = useFontSizes();

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
          <h3 className="fw-bold text-white mb-3 text-uppercase" style={{ fontSize: fontSizes.carouselTitle, wordBreak: 'break-word', hyphens: 'auto' }}>Maratón de lectura 2025 turno noche</h3> 
          <p className="d-none d-md-block text-white mb-0" style={{ fontSize: fontSizes.carouselText, wordBreak: 'break-word' }}>Nuestra escuela escucha las voces de los antagonistas en la literatura.</p>
          <p className="d-md-none text-white mb-0" style={{ fontSize: fontSizes.carouselCaption, wordBreak: 'break-word' }}>Voces de los antagonistas en la literatura.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img 
          src={feriaDeCiencias} 
          alt="Imagen de los abanderados dando inicio a la Feria de Ciencias" 
          className="d-block w-100 carousel-image-height"
        />
        <Carousel.Caption className="carousel-caption-animated carousel-caption-center text-center py-4 px-3">
          <h3 className="fw-bold text-white mb-3 text-uppercase" style={{ fontSize: fontSizes.carouselTitle, wordBreak: 'break-word', hyphens: 'auto' }}>Feria de Ciencias Steam Instancia Zonal</h3>
          <p className="d-none d-md-block text-white mb-0" style={{ fontSize: fontSizes.carouselText, wordBreak: 'break-word' }}>Se llevó a cabo la instancia zonal de la feria de ciencias en nuestro establecimiento.</p>
          <p className="d-md-none text-white mb-0" style={{ fontSize: fontSizes.carouselCaption, wordBreak: 'break-word' }}>Instancia zonal en nuestro establecimiento.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img 
          src={olimpiadaAtacalar} 
          alt="Imagen de los chicos participando en la Olimpiada Atacalar" 
          className="d-block w-100 carousel-image-height"
        />
        <Carousel.Caption className="carousel-caption-animated carousel-caption-center text-center py-4 px-3">
          <h3 className="fw-bold text-white mb-3 text-uppercase" style={{ fontSize: fontSizes.carouselTitle, wordBreak: 'break-word', hyphens: 'auto' }}>Olimpiada Atacalar Instancia Zonal</h3>
          <p className="d-none d-md-block text-white mb-0" style={{ fontSize: fontSizes.carouselText, wordBreak: 'break-word' }}>
            Se llevó a cabo en nuestra institución la instancia zonal de la Olimpiada Internacional Atacalar de Matemática.
          </p>
          <p className="d-md-none text-white mb-0" style={{ fontSize: fontSizes.carouselCaption, wordBreak: 'break-word' }}>Olimpiada Internacional Atacalar de Matemática.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;