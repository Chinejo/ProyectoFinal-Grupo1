import React from 'react'
import escuelaImg from '../assets/escuela.jpeg'

function SobreNosotros() {
  return (
    <section id="sobre-nosotros">
        <h2>SOBRE NOSOTROS</h2>
        <p>La Escuela de Comercio República de Panamá, situada en el corazón de Concepción, Tucumán, es una institución pública con una sólida trayectoria en la formación académica y humana de jóvenes. Fundada en la década de 1960, nació como respuesta a la creciente demanda de educación comercial en el sur tucumano, consolidándose con el tiempo como un referente educativo en la región.</p>
        <p>Desde sus inicios, la escuela ha mantenido un firme compromiso con la comunidad, promoviendo valores de responsabilidad, respeto y vocación de servicio. A lo largo de los años, ha formado generaciones de estudiantes que hoy se desempeñan en ámbitos contables, administrativos, empresariales y educativos, llevando consigo el sello de una formación ética y profesional.</p> 
        <p>Nuestra misión es ofrecer una educación de calidad, inclusiva y actualizada, que prepare a los estudiantes para enfrentar los desafíos del mundo contemporáneo. A través de una propuesta pedagógica orientada al área comercial y contable, promovemos el pensamiento crítico, el trabajo colaborativo y el uso responsable de las tecnologías como herramientas para el aprendizaje.</p>
        <p>Contamos con un equipo docente altamente capacitado, que acompaña de manera cercana y profesional el proceso formativo de cada estudiante. Fomentamos valores como la responsabilidad, la solidaridad y el compromiso, pilares fundamentales para la construcción de una ciudadanía activa y consciente.</p>
        <p>La Escuela se distingue por su participación en proyectos solidarios, actividades culturales y espacios de formación que trascienden el aula. Creemos en una educación que transforma, que conecta con la realidad y que impulsa a cada joven a construir su futuro con integridad, conocimiento y vocación.</p>
        <img src={escuelaImg} alt="Foto de la fachada principal de la Escuela de Comercio Republica de Panamá" />
    </section>
  )
}

export default SobreNosotros
