
// Vercel Serverless Function
// Path: api/send-email.ts

export const config = {
  runtime: 'edge',
};

declare const process: {
  env: {
    RESEND_API_KEY: string;
  };
};

export default async function handler(req: Request) {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), { status: 405 });
  }

  try {
    const body = await req.json();
    const { type, name, email, phone, project, message } = body;

    const RESEND_API_KEY = process.env.RESEND_API_KEY;

    if (!RESEND_API_KEY) {
      return new Response(JSON.stringify({ error: 'API Key not configured' }), { status: 500 });
    }

    // 1. Correo para el Administrador (Kairo)
    const adminEmailHtml = `
      <div style="font-family: 'Montserrat', sans-serif; color: #0B1220; max-width: 600px; margin: 0 auto; border: 1px solid #f0f0f0; border-radius: 24px; overflow: hidden;">
        <div style="background-color: #0B1220; padding: 40px; text-align: center;">
          <img src="https://kairoweb.com/assets/logo-horizontal-white.svg" alt="Kairo Logo" style="height: 40px;">
        </div>
        <div style="padding: 40px; background-color: #ffffff;">
          <h1 style="font-size: 24px; font-weight: 900; margin-bottom: 24px;">🚀 Nuevo Lead: ${type === 'roadmap' ? 'Suscripción Roadmap' : 'Contacto Directo'}</h1>
          <div style="background-color: #f8fafc; padding: 24px; border-radius: 16px; margin-bottom: 24px;">
            <p style="margin: 8px 0;"><strong>Nombre:</strong> ${name}</p>
            <p style="margin: 8px 0;"><strong>Email:</strong> ${email}</p>
            ${phone ? `<p style="margin: 8px 0;"><strong>Teléfono:</strong> ${phone}</p>` : ''}
            ${project ? `<p style="margin: 8px 0;"><strong>Proyecto:</strong> ${project}</p>` : ''}
          </div>
          <div style="padding: 24px; border-left: 4px solid #2F80ED; background-color: #f0f7ff;">
            <p style="margin: 0; font-style: italic;">"${message || 'Sin mensaje adicional'}"</p>
          </div>
        </div>
        <div style="background-color: #f8fafc; padding: 20px; text-align: center; font-size: 12px; color: #94a3b8;">
          © 2026 Kairo Digital Agency • Sistema de Notificaciones
        </div>
      </div>
    `;

    // 2. Correo para el Cliente (Bienvenida)
    const clientEmailHtml = type === 'roadmap' ? `
      <div style="font-family: 'Montserrat', sans-serif; color: #0B1220; max-width: 600px; margin: 0 auto; border: 1px solid #f0f0f0; border-radius: 24px; overflow: hidden;">
        <div style="background-color: #0B1220; padding: 40px; text-align: center; position: relative;">
          <img src="https://kairoweb.com/assets/logo-horizontal-white.svg" alt="Kairo Logo" style="height: 40px;">
        </div>
        <div style="padding: 40px; background-color: #ffffff;">
          <span style="background-color: #eff6ff; color: #2F80ED; padding: 6px 12px; border-radius: 100px; font-size: 10px; font-weight: 900; letter-spacing: 1px;">RECURSO EXCLUSIVO</span>
          <h1 style="font-size: 32px; font-weight: 900; margin: 16px 0 24px; line-height: 1.1;">Tu Roadmap 2026 está listo.</h1>
          <p style="font-size: 16px; color: #64748b; line-height: 1.6; margin-bottom: 32px;">
            Hola <strong>${name}</strong>, gracias por confiar en Kairo. Has dado el primer paso para dominar el ecosistema digital del 2026.
          </p>
          <a href="https://kairoweb.com/roadmap" style="display: inline-block; background-color: #2F80ED; color: #ffffff; padding: 18px 32px; border-radius: 16px; font-weight: 800; text-decoration: none; box-shadow: 0 10px 15px -3px rgba(47, 128, 237, 0.4);">
            DESCARGAR ROADMAP 2026 (PDF)
          </a>
          <div style="margin-top: 48px; padding-top: 32px; border-t: 1px solid #f1f5f9;">
            <h4 style="margin-bottom: 16px;">¿Quieres ejecutar este plan más rápido?</h4>
            <p style="font-size: 14px; color: #64748b;">Agenda una auditoría técnica gratuita de 15 minutos con nuestro equipo.</p>
            <a href="https://kairoweb.com/contacto" style="color: #2F80ED; font-weight: 700; text-decoration: none;">Agendar ahora →</a>
          </div>
        </div>
      </div>
    ` : `
      <div style="font-family: 'Montserrat', sans-serif; color: #0B1220; max-width: 600px; margin: 0 auto; border-radius: 24px; overflow: hidden; border: 1px solid #f0f0f0;">
        <div style="background-color: #0B1220; padding: 40px; text-align: center;">
          <img src="https://kairoweb.com/assets/logo-horizontal-white.svg" alt="Kairo Logo" style="height: 40px;">
        </div>
        <div style="padding: 40px; background-color: #ffffff;">
          <h1 style="font-size: 24px; font-weight: 900; margin-bottom: 16px;">Recibimos tu mensaje, ${name}.</h1>
          <p style="font-size: 16px; color: #64748b; line-height: 1.6;">
            Nuestro equipo técnico está analizando tu desafío. Te contactaremos en menos de 24 horas para darte una perspectiva clara y honesta.
          </p>
          <div style="margin-top: 32px; background-color: #f8fafc; padding: 24px; border-radius: 16px;">
            <p style="font-size: 14px; color: #94a3b8; margin: 0;">Mientras tanto, puedes seguirnos en nuestras redes para ver cómo transformamos negocios.</p>
          </div>
        </div>
      </div>
    `;

    // Envío a Administrador
    const resAdmin = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'Kairo Web <leads@kairoweb.com>',
        to: ['tu-email@gmail.com'], // CAMBIAR POR TU EMAIL REAL
        subject: `🚀 Nuevo Lead: ${name}`,
        html: adminEmailHtml,
      }),
    });

    // Envío a Cliente
    const resClient = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'Kairo Team <hello@kairoweb.com>',
        to: [email],
        subject: type === 'roadmap' ? '📥 Tu Roadmap 2026 de Kairo está listo' : '✅ Recibimos tu mensaje - Kairo Web',
        html: clientEmailHtml,
      }),
    });

    if (!resAdmin.ok || !resClient.ok) {
        const errorData = await resAdmin.json();
        return new Response(JSON.stringify({ error: 'Error sending emails', details: errorData }), { status: 500 });
    }

    return new Response(JSON.stringify({ success: true }), { status: 200 });

  } catch (error) {
    return new Response(JSON.stringify({ error: 'Internal server error' }), { status: 500 });
  }
}
