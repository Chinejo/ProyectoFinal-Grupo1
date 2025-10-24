import React, { useState } from 'react';
import '../styles/style-boton-contacto.css';



const BotonContacto = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen((v) => !v);

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: handle form submit (send data, show success, etc.)
    // For now we'll just close the form
    setOpen(false);
  };

  return (
    <div>
      {/* Button controls the toggle (React state). */}
      <button
        type="button"
        className="contact-toggle"
        aria-expanded={open}
        aria-controls="contact-form"
        onClick={toggle}
      >
        <span className="icon" aria-hidden="true">✉️</span>
        <span>Contacto</span>
      </button>

      {/* The form is shown/hidden via the `show` class and aria-hidden updated. */}
      <form
        id="contact-form"
        className={`contact-form ${open ? 'show' : ''}`}
        action="#"
        method="post"
        aria-hidden={!open}
        onSubmit={handleSubmit}
      >
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
