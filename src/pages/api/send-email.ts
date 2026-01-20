// src/pages/api/send-email.ts
export const prerender = false;

import type { APIRoute } from 'astro';
import { Resend } from 'resend';

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const POST: APIRoute = async ({ request }) => {
  try {
    // Leemos los datos (Soporta JSON y FormData)
    const formData = await request.json();
    const { name, email, subject, message } = formData;

    // Validación de seguridad
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: 'Faltan campos requeridos' }),
        { status: 400 }
      );
    }

    // ENVÍO OFICIAL (PRODUCCIÓN)
    const { data: emailData, error } = await resend.emails.send({
      from: 'PortfolioWeb <dev@meloclaps.com>',
      // ⬆️ Si falla, prueba: "Luciano <dev@send.meloclaps.com>"

      to: ['meloclapsluciano@gmail.com'], // Tu Gmail donde recibes
      replyTo: email, // Para responderle al cliente
      subject: `Mensaje: ${subject}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #6d28d9;">Nuevo mensaje de ${name}</h2>
          <p><strong>De:</strong> ${email}</p>
          <p><strong>Asunto:</strong> ${subject}</p>
          <hr style="border: 1px solid #eee; margin: 20px 0;" />
          <p style="font-size: 16px; line-height: 1.5;">${message}</p>
          <br />
          <p style="font-size: 12px; color: #888;">Enviado desde meloclaps.com</p>
        </div>
      `,
    });

    if (error) {
      console.error('Error Resend:', error);
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
      });
    }

    return new Response(JSON.stringify({ success: true, id: emailData?.id }), {
      status: 200,
    });
  } catch (e) {
    console.error('Error Servidor:', e);
    return new Response(
      JSON.stringify({ error: 'Error interno del servidor' }),
      { status: 500 }
    );
  }
};
