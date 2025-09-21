import React from "react";
import logoEscolar from "../assets/LogoEscolar.jpg";

const NavBar = () => {
    return (
        <header>
            <nav className="navbar" style={{ position: "sticky", top: 0, zIndex: 1000 }}>
                <div className="navbar-logo">
                    <a href="#inicio">
                        <img src={logoEscolar} alt="Logo de la Escuela de Comercio República de Panamá" style={{ height: "40px" }} />
                        <span className="navbar-title">Escuela de Comercio República de Panamá</span>
                    </a>
                </div>
                <button className="navbar-toggle" aria-label="Abrir menú" aria-expanded="false" aria-controls="navbar-menu">
                    {/* Ícono de menú hamburguesa SVG */}
                    <svg width="30" height="30" viewBox="0 0 30 30">
                        <rect y="6" width="30" height="3" rx="1.5" fill="#333" />
                        <rect y="13.5" width="30" height="3" rx="1.5" fill="#333" />
                        <rect y="21" width="30" height="3" rx="1.5" fill="#333" />
                    </svg>
                </button>
                <ul className="navbar-menu" id="navbar-menu" hidden>
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