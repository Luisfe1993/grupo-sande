import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function esc(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

const submissions = new Map<string, number[]>();
const RATE_LIMIT_WINDOW = 60_000;
const RATE_LIMIT_MAX = 2;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = (submissions.get(ip) || []).filter(
    (t) => now - t < RATE_LIMIT_WINDOW
  );
  if (timestamps.length >= RATE_LIMIT_MAX) return true;
  timestamps.push(now);
  submissions.set(ip, timestamps);
  return false;
}

const MAX_LEN = { name: 100, company: 150, sector: 200, email: 254, phone: 30, message: 5000 };

export async function POST(request: Request) {
  try {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Demasiadas solicitudes. Intente en un minuto." },
        { status: 429 }
      );
    }

    const contentLength = request.headers.get("content-length");
    if (contentLength && parseInt(contentLength) > 50_000) {
      return NextResponse.json({ error: "Solicitud demasiado grande." }, { status: 413 });
    }

    const body = await request.json();
    const { name, company, sector, email, phone, message } = body;

    // Honeypot
    if (body._hp) {
      return NextResponse.json({ success: true });
    }

    if (!name || !company || !sector || !email || !phone) {
      return NextResponse.json(
        { error: "Complete los campos obligatorios." },
        { status: 400 }
      );
    }

    if (
      typeof name !== "string" || name.length > MAX_LEN.name ||
      typeof company !== "string" || company.length > MAX_LEN.company ||
      typeof sector !== "string" || sector.length > MAX_LEN.sector ||
      typeof email !== "string" || email.length > MAX_LEN.email ||
      typeof phone !== "string" || phone.length > MAX_LEN.phone ||
      (message && (typeof message !== "string" || message.length > MAX_LEN.message))
    ) {
      return NextResponse.json({ error: "Datos inválidos." }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Correo electrónico inválido." }, { status: 400 });
    }

    if (!/^[+\d\s()-]{7,30}$/.test(phone)) {
      return NextResponse.json({ error: "Teléfono inválido." }, { status: 400 });
    }

    const contactEmail = process.env.CONTACT_EMAIL || "contacto@gruposande.cl";

    await resend.emails.send({
      from: "Grupo Sande <onboarding@resend.dev>",
      to: contactEmail,
      subject: `🔒 CONFIDENCIAL — Consulta de Crecimiento: ${esc(company)}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto">
          <div style="background:#111827;color:white;padding:24px;border-radius:12px 12px 0 0">
            <h1 style="margin:0;font-size:20px">🔒 Consulta Confidencial — Crecimiento</h1>
            <p style="margin:8px 0 0;color:#9ca3af;font-size:14px">Nueva consulta de integración al grupo</p>
          </div>
          <div style="padding:24px;border:1px solid #e5e7eb;border-top:none;border-radius:0 0 12px 12px">
            <table style="width:100%;border-collapse:collapse">
              <tr><td style="padding:8px 0;color:#6b7280;font-size:14px;width:120px">Nombre:</td><td style="padding:8px 0;font-weight:bold">${esc(name)}</td></tr>
              <tr><td style="padding:8px 0;color:#6b7280;font-size:14px">Empresa:</td><td style="padding:8px 0;font-weight:bold">${esc(company)}</td></tr>
              <tr><td style="padding:8px 0;color:#6b7280;font-size:14px">Sector:</td><td style="padding:8px 0">${esc(sector)}</td></tr>
              <tr><td style="padding:8px 0;color:#6b7280;font-size:14px">Email:</td><td style="padding:8px 0"><a href="mailto:${esc(email)}">${esc(email)}</a></td></tr>
              <tr><td style="padding:8px 0;color:#6b7280;font-size:14px">Teléfono:</td><td style="padding:8px 0"><a href="tel:${esc(phone)}">${esc(phone)}</a></td></tr>
            </table>
            ${message ? `<div style="margin-top:16px;padding:16px;background:#f9fafb;border-radius:8px"><p style="margin:0;color:#6b7280;font-size:12px;text-transform:uppercase;letter-spacing:1px">Mensaje</p><p style="margin:8px 0 0;color:#111827">${esc(message)}</p></div>` : ""}
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Growth form error:", error);
    return NextResponse.json(
      { error: "Error interno. Intente nuevamente." },
      { status: 500 }
    );
  }
}
