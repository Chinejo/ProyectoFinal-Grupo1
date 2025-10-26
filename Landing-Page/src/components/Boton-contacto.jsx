import '../styles/boton-contacto.css';

const BotonContacto = () => {
  return (
    <div className="contact-wrapper">
      <button type="button" className="contact-toggle">
        Contacto
      </button>
      
      <form className="contact-form">
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
    </div>
  );
};

export default BotonContacto;