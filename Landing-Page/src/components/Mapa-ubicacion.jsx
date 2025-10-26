
import { Container } from 'react-bootstrap';
import '../styles/mapaubi.css';

const MapaUbicacion = () => {
  return (
    <Container fluid className="py-5 bg-light" id="mapa-ubicacion">
      <Container>
        <h2 className="text-center display-5 mb-4">¿Dónde estamos?</h2>
        <div className="d-flex justify-content-center">
          <div className="map-wrapper position-relative w-100" style={{ maxWidth: '1200px', height: '60vh', minHeight: '300px', maxHeight: '600px' }}>
            <iframe
              className="rounded shadow-sm w-100 h-100"
              loading="lazy"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3543.935570390435!2d-65.60410532561093!3d-27.346482711465466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sar!4v1758771788343!5m2!1ses!2sar"
              allowFullScreen=""
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa de ubicación"
            ></iframe>
          </div>
        </div>
      </Container>
    </Container>
  );
};

export default MapaUbicacion;
