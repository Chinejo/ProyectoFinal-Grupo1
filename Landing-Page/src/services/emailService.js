import emailjs from '@emailjs/browser';

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const defaultRecipient = import.meta.env.VITE_EMAILJS_TO_EMAIL ?? 'esccomreppanama';

const ensureEnvConfigured = () => {
  if (!serviceId || !templateId || !publicKey) {
    throw new Error('Faltan las claves de EmailJS. Revisa las variables de entorno.');
  }
};

export const sendContactEmail = async ({ nombre, email, celular, mensaje }) => {
  ensureEnvConfigured();

  const templateParams = {
    to_email: defaultRecipient,
    from_name: nombre,
    reply_to: email,
    phone_number: celular,
    message: mensaje,
    subject: 'Nuevo contacto desde la landing',
  };

  try {
    const response = await emailjs.send(serviceId, templateId, templateParams, { publicKey });
    return response;
  } catch (error) {
    const message = error?.text || error?.message || 'No se pudo enviar el mensaje';
    throw new Error(message);
  }
};
