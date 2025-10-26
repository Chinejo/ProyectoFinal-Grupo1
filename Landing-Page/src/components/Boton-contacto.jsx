const BotonContacto = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <button type="button" className="contact-toggle">Contacto</button>
    <div>
      <label className="field">
        <span>Nombre:</span>
        <input name="nombre" type="text" />
      </label>
    </div>
    <div>
      <label className="field">
        <span>Email:</span>
        <input name="email" type="email" />
      </label>
    </div>
    <div>
      <label className="field">
        <span>Celular:</span>
        <input name="celular" type="tel" />
      </label>
    </div>
    <div>
      <label className="field">
        <span>Mensaje:</span>
        <textarea name="mensaje" rows={4} />
      </label>
    </div> 
      <button type="submit">Enviar</button>
    </form>
  );
};

export default BotonContacto;
