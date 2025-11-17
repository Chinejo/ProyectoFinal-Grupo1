import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { List } from 'react-bootstrap-icons';
import '../styles/navBar.css';

function NavBar() {
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['inicio', 'sobre-nosotros', 'info-planes', 'galeria', 'footer'];
      let current = 'inicio';

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = id;
          }
        }
      });

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'inicio', label: 'Inicio', href: '#inicio' },
    { id: 'sobre-nosotros', label: 'Sobre Nosotros', href: '#sobre-nosotros' },
    { id: 'info-planes', label: 'Información de Planes', href: '#info-planes' },
    { id: 'galeria', label: 'Galería', href: '#galeria' },
    { id: 'footer', label: 'Donde encontrarnos', href: '#footer' }
  ];

  const handleNavClick = (event, id) => {
    event.preventDefault();
    event.stopPropagation();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }

    setTimeout(() => {
      if (event.currentTarget && typeof event.currentTarget.blur === 'function') {
        event.currentTarget.blur();
      }
      if (document.activeElement && typeof document.activeElement.blur === 'function') {
        document.activeElement.blur();
      }
    }, 0);
  };

  return (
    <Navbar expand="lg" className="navbar-main" sticky="top">
      <Container fluid className="px-4">
        <Navbar.Toggle aria-controls="navbar-nav" className="border-0 ms-auto">
          <List size={26} color="white" />
        </Navbar.Toggle>

        <Navbar.Collapse id="navbar-nav" className="justify-content-center">
          <Nav className="align-items-center">
            {navLinks.map((link) => (
              <Nav.Link
                key={link.id}
                href={link.href}
                className={`nav-button px-3 mx-1 ${activeSection === link.id ? 'active' : ''}`}
                onClick={(event) => handleNavClick(event, link.id)}
              >
                {link.label}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;