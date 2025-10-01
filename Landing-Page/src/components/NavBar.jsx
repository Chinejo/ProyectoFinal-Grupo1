const NavBar = () => {
    return (
        <header>
            <nav>
                <div className="navbar-logo">
                    <a href="#inicio">
                        <img src="./src/assets/LogoEscolar.jpg" alt="Logo de la Escuela de Comercio República de Panamá"/>
                        <span className="navbar-title">Escuela de Comercio República de Panamá</span>
                    </a>
                </div>
                <ul>
                    <li><a href="#inicio">Inicio</a></li>
                    <li><a href="#sobre-nosotros">Sobre Nosotros</a></li>
                    <li><a href="#info-planes">Información de Planes</a></li>
                    <li><a href="#galeria">Galería</a></li>
                    <li><a href="#contacto">Contacto</a></li>
                </ul>
            </nav>
        </header>
    );
};
export default NavBar;