import bibliotecaImg from '../assets/biblioteca.jpg'
import actividadesImg from '../assets/actividades.jpg'
import escenarioImg from '../assets/escenario.jpg'
import patioImg from '../assets/patio.jpg'
import mastilImg from '../assets/mastil.jpg'
import canchaImg from '../assets/cancha.jpg'

const Galeria = () => {
  return (
    <section>
      <h2>Galería</h2>
      <p>Algunos sectores de nuestra institución</p>
      <img src={bibliotecaImg} alt="Biblioteca" />
      <p>Nuestra biblioteca</p>
      <img src={actividadesImg} alt="Alumnos realizando teatro" />
      <p>Teatro realizado por alumnos y profesores</p>
      <img src={escenarioImg} alt="Escenario" />
      <p>Escenario para eventos</p>
      <img src={patioImg} alt="Patio" />
      <p>Patio central</p>
      <img src={mastilImg} alt="Mástil" />
      <p>Mástil en el patio exterior</p>
      <img src={canchaImg} alt="Canchas" />
      <p>Canchas de fútbol, voley y básquet</p>
    </section>
  )
}

export default Galeria
