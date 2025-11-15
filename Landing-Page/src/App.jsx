import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/NavBar.jsx"
import HeroSection from './components/HeroSection.jsx';  
import SobreNosotros from './components/SobreNosotros.jsx'
import OfertaAcademica from './components/OfertaAcademica.jsx'
import Galeria from './components/Galeria.jsx'
import Botoninscripcion from './components/Boton-inscripcion.jsx'
import BotonContacto from './components/Boton-contacto.jsx'
import Footer from "./components/Footer.jsx"

function App() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <SobreNosotros />
      <OfertaAcademica />
      <Galeria />
      <Botoninscripcion />
      <BotonContacto />
      <Footer />
    </>
  );
}

export default App
