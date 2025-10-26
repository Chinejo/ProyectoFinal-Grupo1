import React from 'react';
import './Boton-contacto.css';

const BotonContacto = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <button
    id="contacto-btn"
    className="contacto-btn"
    aria-label="Abrir formulario de contacto"
    onClick={handleToggle}
  >
    Contacto
  </button>

  <div
    id="formulario-contacto"
    className={`formulario-contacto ${visible ? 'visible' : ''}`}
    aria-label="Formulario de contacto"
  >
    <form onSubmit={handleSubmit} className="form-contacto">
      <div className="form-group">
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          placeholder="Tu nombre"
          aria-label="Nombre"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Tu email"
          aria-label="Email"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="celular">Celular:</label>
        <input
          type="tel"
          id="celular"
          name="celular"
          placeholder="Tu celular"
          aria-label="Celular"
        />
      </div>

      <div className="form-group">
        <label htmlFor="mensaje">Mensaje:</label>
        <textarea
          id="mensaje"
          name="mensaje"
          placeholder="Tu mensaje"
          aria-label="Mensaje"
          required
        />
      </div>

      <button type="submit" className="btn-enviar">
        Enviar
      </button>
    </form>
  </div>
</form> 
  );
};

export default BotonContacto;
