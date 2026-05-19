import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function esc(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

// Simple in-memory rate limiter (per warm instance)
const submissions = new Map<string, number[]>();
const RATE_LIMIT_WINDOW = 60_000; // 1 minute
const RATE_LIMIT_MAX = 3; // max 3 submissions per minute per IP

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

const MAX_LEN = { name: 100, company: 150, email: 254, phone: 30, area: 200, message: 5000 };

export async function POST(request: Request) {
  try {
    // Rate limit by IP
    const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Demasiadas solicitudes. Intente en un minuto." },
        { status: 429 }
      );
    }

    // Reject oversized payloads
    const contentLength = request.headers.get("content-length");
    if (contentLength && parseInt(contentLength) > 50_000) {
      return NextResponse.json({ error: "Solicitud demasiado grande." }, { status: 413 });
    }

    const body = await request.json();
    const { name, company, email, phone, area, message } = body;

    // Honeypot: if the hidden field is filled, it's a bot
    if (body._hp) {
      // Silently accept to not reveal the trap
      return NextResponse.json({ success: true, message: "Solicitud recibida correctamente." });
    }

    // Validate required fields
    if (!name || !company || !email || !phone || !area || !message) {
      return NextResponse.json(
        { error: "Todos los campos son obligatorios." },
        { status: 400 }
      );
    }

    // Type + length checks
    if (
      typeof name !== "string" || name.length > MAX_LEN.name ||
      typeof company !== "string" || company.length > MAX_LEN.company ||
      typeof email !== "string" || email.length > MAX_LEN.email ||
      typeof phone !== "string" || phone.length > MAX_LEN.phone ||
      typeof area !== "string" || area.length > MAX_LEN.area ||
      typeof message !== "string" || message.length > MAX_LEN.message
    ) {
      return NextResponse.json(
        { error: "Datos inválidos o demasiado largos." },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Correo electrónico inválido." },
        { status: 400 }
      );
    }

    // Phone validation (digits, spaces, +, -, parens)
    if (!/^[+\d\s()-]{7,30}$/.test(phone)) {
      return NextResponse.json(
        { error: "Teléfono inválido." },
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
