import NavBar from "./components/NavBar.jsx"
import SobreNosotros from './components/SobreNosotros.jsx'
import OfertaAcademica from './components/OfertaAcademica.jsx'
import MapaUbicacion from './components/Mapa-ubicacion.jsx'
import BotonInicio from './components/Boton-inicio' 
import BotonContacto from './components/Boton-contacto'
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <NavBar />
      <SobreNosotros />
      <OfertaAcademica />
      <MapaUbicacion />
      <BotonInicio />
      <BotonContacto />
      <Footer />
    </>
  );
}

export default App
