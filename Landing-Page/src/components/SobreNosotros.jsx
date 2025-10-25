import React from 'react'
import escuelaImg from '../assets/escuela.jpeg'
import '../styles/SobreNosotros.css'

function SobreNosotros() {
  return (
    <section id="sobre-nosotros" className="py-3 py-md-4 py-lg-5 px-3 px-md-4" style={{backgroundColor: 'rgb(202, 204, 223)'}}>
      <div className="container">
        <div className='rounded shadow-sm p-3 p-md-4 p-lg-5' style={{backgroundColor: 'seashell'}}>
          <h2 className='info-titulo text-center fw-bold text-uppercase mb-3 mb-md-4' style={{color: '#1d2659', letterSpacing: '3px'}}>
            SOBRE NOSOTROS
          </h2>
          <div className='row align-items-start'>
            <div className='col-12 col-md-7 col-lg-6 mb-3 mb-md-0 order-md-2'>
              <img 
                className='w-100 rounded' 
                src={escuelaImg} 
                alt="Foto de la fachada principal de la Escuela de Comercio Republica de Panamá" 
              />
            </div>
            <div className='col-12 col-md-5 col-lg-6 order-md-1'>
              <p className='info-contenido m-0' style={{color:'#333', lineHeight: '1.6'}}> 
                La <span className='fw-bold'>Escuela de Comercio República de Panamá</span>, ubicada en Concepción, Tucumán, es una institución pública fundada en la década de 1960, reconocida por su trayectoria en formación académica y humana. Especializada en <span className='fw-bold'>educación comercial y contable</span>, promueve valores como <span className='fw-bold'>responsabilidad, solidaridad y compromiso</span>, preparando a los estudiantes para los desafíos del mundo actual. Con un equipo docente capacitado, fomenta el <span className='fw-bold'>pensamiento crítico, el trabajo colaborativo y el uso responsable de la tecnología</span>. La escuela destaca por su compromiso con la comunidad, proyectos solidarios y actividades culturales, formando ciudadanos íntegros y profesionales.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SobreNosotros
