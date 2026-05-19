import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function esc(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, company, email, phone, area, message } = body;

    // Validate required fields
    if (!name || !company || !email || !phone || !area || !message) {
      return NextResponse.json(
        { error: "Todos los campos son obligatorios." },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Correo electrónico inválido." },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "Grupo Sande Web <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL || "lfsandeg@gmail.com",
      replyTo: email,
      subject: `[Contacto Web] ${esc(area)} — ${esc(name)} (${esc(company)})`,
      html: `
        <h2>Nueva consulta desde gruposande.cl</h2>
        <table style="border-collapse:collapse;width:100%">
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Nombre</td><td style="padding:8px;border:1px solid #ddd">${esc(name)}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Empresa</td><td style="padding:8px;border:1px solid #ddd">${esc(company)}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Email</td><td style="padding:8px;border:1px solid #ddd">${esc(email)}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Teléfono</td><td style="padding:8px;border:1px solid #ddd">${esc(phone)}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Área</td><td style="padding:8px;border:1px solid #ddd">${esc(area)}</td></tr>
        </table>
        <h3>Mensaje:</h3>
        <p style="white-space:pre-wrap">${esc(message)}</p>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Solicitud recibida correctamente.",
    });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json(
      { error: "Error al procesar la solicitud." },
      { status: 500 }
    );
  }
}
