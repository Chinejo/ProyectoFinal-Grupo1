import React from 'react';
import '../styles/style-boton-contacto.css';



const BotonContacto = () => {
  return (
    <div>
      {/* Hidden checkbox controls the toggle (pure CSS). */}
      <input
        id="contact-toggle"
        className="contact-toggle-checkbox"
        type="checkbox"
        aria-hidden="true"
        style={{ position: 'absolute', left: '-9999px' }}
      />

      {/* Label acts as the floating button */}
      <label htmlFor="contact-toggle" className="contact-toggle" role="button" aria-pressed="false">
        <span className="icon" aria-hidden="true">✉️</span>
        <span>Contacto</span>
      </label>

      {/* The form placed immediately after the label so the adjacent sibling selector works. */}
      <form className="contact-form" action="#" method="post" aria-hidden="true">
        <div className="field">
          <label htmlFor="name">Nombre</label>
          <input id="name" name="name" type="text" placeholder="Tu nombre" />
        </div>

        <div className="field">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" placeholder="tu@correo.com" />
        </div>

        <div className="field">
          <label htmlFor="message">Mensaje</label>
          <textarea id="message" name="message" rows="4" placeholder="Escribe tu mensaje"></textarea>
        </div>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default BotonContacto;
