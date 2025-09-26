import React, { useEffect, useState } from 'react';

const BotonInicio = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const mostrarBoton = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', mostrarBoton);
    return () => window.removeEventListener('scroll', mostrarBoton);
  }, []);

  const irArriba = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      id="boton-Inicio"
      aria-label="Volver al inicio"
      onClick={irArriba}
    
    >
      Enviar
    </button>
  );
};

export default BotonInicio;