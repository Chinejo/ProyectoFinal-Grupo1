import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/NavBar.jsx"
import HeroSection from './components/HeroSection.jsx';  
import SobreNosotros from './components/SobreNosotros.jsx'
import OfertaAcademica from './components/OfertaAcademica.jsx'
import Galeria from './components/Galeria.jsx'
import BotonInicio from './components/Boton-inicio' 
import BotonContacto from './components/Boton-contacto'
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <SobreNosotros />
      <OfertaAcademica />
      <Galeria />
      <BotonInicio />
      <BotonContacto />
      <Footer />
    </>
  );
}

export default App
