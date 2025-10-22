import React from 'react'
import escuelaImg from '../assets/escuela.jpeg'
import '../styles/SobreNosotros.css'

function SobreNosotros() {
  return (
    <section id="sobre-nosotros">
      <div className='info-contenedor-blanco' >
        <h2 className='info-titulo'>SOBRE NOSOTROS</h2>
        <div className='info-contenido'>
          <img className='info-imagen' src={escuelaImg} alt="Foto de la fachada principal de la Escuela de Comercio Republica de Panamá" />
            <p>
              La <span>Escuela de Comercio República de Panamá</span>, ubicada en Concepción, Tucumán, es una institución pública fundada en la década de 1960, reconocida por su trayectoria en formación académica y humana. Especializada en <span>educación comercial y contable</span>, promueve valores como <span>responsabilidad, solidaridad y compromiso</span>, preparando a los estudiantes para los desafíos del mundo actual. Con un equipo docente capacitado, fomenta el <span>pensamiento crítico, el trabajo colaborativo y el uso responsable de la tecnología</span>. La escuela destaca por su compromiso con la comunidad, proyectos solidarios y actividades culturales, formando ciudadanos íntegros y profesionales.
            </p>
        </div>
      </div>
    </section>
  )
}

export default SobreNosotros
