import OfertaAcademica from './componentes/OfertaAcademica'
import Galeria from './componentes/Galeria';
import BotonInicio from './components/Boton-inicio' 
import BotonContacto from './components/Boton-contacto';

const App = () => {
  return (
    <div>
      <OfertaAcademica />
      <Galeria />
      <BotonInicio />
      <BotonContacto />
    </div>
  )
}

export default App