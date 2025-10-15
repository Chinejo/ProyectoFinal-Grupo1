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
            <p>La <span>Escuela de Comercio República de Panamá</span>, situada en el corazón de Concepción, Tucumán, es una institución pública con una sólida trayectoria en la formación académica y humana de jóvenes. Fundada en la <span>década de 1960</span>, nació como respuesta a la creciente demanda de educación comercial en el sur tucumano, consolidándose con el tiempo como un <span>referente educativo</span> en la región.</p>
            <p>Desde sus inicios, la escuela ha mantenido un firme compromiso con la comunidad, promoviendo valores de <span>responsabilidad, respeto y vocación</span> de servicio. A lo largo de los años, ha formado generaciones de estudiantes que hoy se desempeñan en ámbitos contables, administrativos, empresariales y educativos, llevando consigo el sello de una formación ética y profesional.</p> 
            <p>Nuestra misión es ofrecer una <span>educación de calidad</span>, inclusiva y actualizada, que prepare a los estudiantes para enfrentar los desafíos del mundo contemporáneo. A través de una propuesta pedagógica orientada al área <span>comercial y contable</span>, promovemos el pensamiento crítico, el trabajo colaborativo y el uso responsable de las tecnologías como herramientas para el aprendizaje.</p>
            <p>Contamos con un equipo docente <span>altamente capacitado</span>, que acompaña de manera cercana y profesional el proceso formativo de cada estudiante. Fomentamos valores como la responsabilidad, la solidaridad y el compromiso, pilares fundamentales para la construcción de una <span>ciudadanía activa y consciente</span>.</p>
            <p>La escuela se distingue por su participación en proyectos solidarios, actividades culturales y espacios de formación que trascienden el aula. Creemos en una <span>educación que transforma</span>, que conecta con la realidad y que impulsa a cada joven a construir su futuro con <span>integridad, conocimiento y vocación</span>.</p>
        </div>
      </div>
    </section>
  )
}

export default SobreNosotros
