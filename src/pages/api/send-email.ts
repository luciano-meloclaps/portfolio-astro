// src/pages/api/send-email.ts
export const prerender = false; // IMPORTANTE: Esto habilita el modo servidor en Vercel

import type { APIRoute } from 'astro';
import { Resend } from 'resend';

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    const { name, email, subject, message } = data;

    // Validación simple
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: 'Faltan campos requeridos' }),
        { status: 400 }
      );
    }

    // ENVÍO DEL EMAIL
    const { data: emailData, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: ['meloclapsluciano@gmail.com'],
      replyTo: email, // <--- CORREGIDO (T mayúscula, sin guion bajo)
      subject: `Portfolio: ${subject}`,
      html: `
        <h3>Nuevo mensaje de ${name}</h3>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong></p>
        <blockquote style="border-left: 2px solid #ccc; padding-left: 10px;">
          ${message}
        </blockquote>
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
