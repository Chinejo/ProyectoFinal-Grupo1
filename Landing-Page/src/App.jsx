import React from 'react'
import OfertaAcademica from './componentes/OfertaAcademica'

function App() {
  return (
    <div>
        <OfertaAcademica />
    </div>
  )
}

export default App
import React from 'react';
import Galeria from './componentes/Galeria';
import React from 'react'
import BotonInicio from './components/Boton-inicio' 
import BotonContacto from './components/Boton-contacto';

const App = () => {
  return (
    <div>
      <Galeria />
      <BotonInicio />
      <BotonContacto />
    </div>
  )
}

export default App
