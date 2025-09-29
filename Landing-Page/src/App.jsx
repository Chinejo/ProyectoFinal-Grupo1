import NavBar from "./components/Nav-Bar.jsx"
import OfertaAcademica from './componentes/OfertaAcademica'
import Galeria from './componentes/Galeria'
import BotonInicio from './components/Boton-inicio' 
import BotonContacto from './components/Boton-contacto'
import MapaUbicacion from './componentes/Mapa-ubicacion'
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <NavBar />
      <OfertaAcademica />
      <Galeria />
      <BotonInicio />
      <BotonContacto />
      <MapaUbicacion />
      <Footer />
    </>
  );
}

export default App
