import OfertaAcademica from './componentes/OfertaAcademica'
import Galeria from './componentes/Galeria'
import BotonInicio from './components/Boton-inicio' 
import BotonContacto from './components/Boton-contacto'
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <OfertaAcademica />
      <Galeria />
      <BotonInicio />
      <BotonContacto />
      <Footer />
    </>
  );
}

export default App
import './App.css'
import MapaUbicacion from './componentes/Mapa-ubicacion'

const App = () => {
  return (
    <>
      <MapaUbicacion />
    </>
  )
}

export default App