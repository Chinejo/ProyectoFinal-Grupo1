# Landing Page – Configuración de EmailJS

Este proyecto usa Vite + React y ahora integra EmailJS para enviar los mensajes del formulario de contacto directamente a **esccomreppanama**.

## Configuración requerida

1. Copia `.env.example` a `.env.local` y completa las claves reales que obtienes de [EmailJS](https://www.emailjs.com/).
	```env
	VITE_EMAILJS_SERVICE_ID=service_xxx
	VITE_EMAILJS_TEMPLATE_ID=template_xxx
	VITE_EMAILJS_PUBLIC_KEY=public_xxx
	VITE_EMAILJS_TO_EMAIL=esccomreppanama
	```
2. En el panel de EmailJS crea/actualiza una plantilla que utilice los siguientes campos:
	- `to_email`: email de destino (se rellena con `esccomreppanama`).
	- `from_name`: nombre ingresado por la persona.
	- `reply_to`: email del remitente para poder contestar directamente.
	- `phone_number`: número de celular.
	- `message`: cuerpo del mensaje escrito por la persona.
	- `subject` *(opcional)*: el asunto "Nuevo contacto desde la landing" ya se envía listo para usarse.

> EmailJS construirá el cuerpo del correo con esos campos, garantizando que siempre incluya nombre, email, celular y mensaje provistos por el usuario.

## Scripts

- `npm run dev`: modo desarrollo con HMR.
- `npm run build`: compila la app para producción.
- `npm run preview`: levanta la build previamente generada.
