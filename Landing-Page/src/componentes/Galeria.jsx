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
      <p>Estos son algunos sectores de nuestra institución</p>
        <div>
            <img src={bibliotecaImg} alt="Biblioteca" />
            <p>Nuestra biblioteca</p>
        </div>
        <div>
            <img src={actividadesImg} alt="Alumnos realizando teatro" />
            <p>Teatro realizado por alumnos y profesores</p>
        </div>
        <div>
            <img src={escenarioImg} alt="Escenario" />
            <p>Escenario para eventos</p>
        </div>
        <div>
            <img src={patioImg} alt="Patio" />
            <p>Patio central</p>   
        </div>
        <div>
            <img src={mastilImg} alt="Mástil" />
            <p>Mástil en el patio exterior</p>
        </div>
        <div>
            <img src={canchaImg} alt="Canchas" />
            <p>Canchas de fútbol, voley y básquet</p>
        </div>
    </section>
  )
}

export default Galeria
