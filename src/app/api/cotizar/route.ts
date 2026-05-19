import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function esc(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

// Simple in-memory rate limiter
const submissions = new Map<string, number[]>();
const RATE_LIMIT_WINDOW = 60_000;
const RATE_LIMIT_MAX = 3;

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

interface QuoteItem {
  name: string;
  category: string;
  quantity: string;
  notes: string;
}

const MAX_LEN = { name: 100, company: 150, email: 254, phone: 30, message: 5000 };

export async function POST(request: Request) {
  try {
    const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Demasiadas solicitudes. Intente en un minuto." },
        { status: 429 }
      );
    }

    const contentLength = request.headers.get("content-length");
    if (contentLength && parseInt(contentLength) > 100_000) {
      return NextResponse.json({ error: "Solicitud demasiado grande." }, { status: 413 });
    }

    const body = await request.json();
    const { name, company, email, phone, message, items } = body;

    // Honeypot
    if (body._hp) {
      return NextResponse.json({ success: true, message: "Cotización recibida correctamente." });
    }

    if (!name || !company || !email || !phone || !items || !Array.isArray(items) || items.length === 0) {
      return NextResponse.json(
        { error: "Complete los campos obligatorios y seleccione al menos un producto." },
        { status: 400 }
      );
    }

    if (items.length > 50) {
      return NextResponse.json({ error: "Máximo 50 productos por cotización." }, { status: 400 });
    }

    if (
      typeof name !== "string" || name.length > MAX_LEN.name ||
      typeof company !== "string" || company.length > MAX_LEN.company ||
      typeof email !== "string" || email.length > MAX_LEN.email ||
      typeof phone !== "string" || phone.length > MAX_LEN.phone ||
      (message && (typeof message !== "string" || message.length > MAX_LEN.message))
    ) {
      return NextResponse.json({ error: "Datos inválidos o demasiado largos." }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Correo electrónico inválido." },
        { status: 400 }
      );
    }

    if (!/^[+\d\s()-]{7,30}$/.test(phone)) {
      return NextResponse.json({ error: "Teléfono inválido." }, { status: 400 });
    }

    const itemRows = items
      .map(
        (item: QuoteItem) =>
          `<tr>
          <td style="padding:8px;border:1px solid #ddd">${esc(String(item.category || "").slice(0, 200))}</td>
          <td style="padding:8px;border:1px solid #ddd">${esc(String(item.name || "").slice(0, 200))}</td>
          <td style="padding:8px;border:1px solid #ddd;text-align:center">${esc(String(item.quantity || "").slice(0, 50))}</td>
          <td style="padding:8px;border:1px solid #ddd">${esc(String(item.notes || "—").slice(0, 500))}</td>
        </tr>`
      )
      .join("");

    await resend.emails.send({
      from: "Grupo Sande Web <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL || "lfsandeg@gmail.com",
      replyTo: email,
      subject: `[Cotización Web] ${items.length} producto(s) — ${esc(name)} (${esc(company)})`,
      html: `
        <h2>Nueva solicitud de cotización — gruposande.cl</h2>
        <table style="border-collapse:collapse;width:100%;margin-bottom:20px">
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;width:120px">Nombre</td><td style="padding:8px;border:1px solid #ddd">${esc(name)}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Empresa</td><td style="padding:8px;border:1px solid #ddd">${esc(company)}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Email</td><td style="padding:8px;border:1px solid #ddd">${esc(email)}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Teléfono</td><td style="padding:8px;border:1px solid #ddd">${esc(phone)}</td></tr>
        </table>
        <h3>Productos solicitados (${items.length}):</h3>
        <table style="border-collapse:collapse;width:100%;margin-bottom:20px">
          <tr style="background:#f5f5f5">
            <th style="padding:8px;border:1px solid #ddd;text-align:left">Categoría</th>
            <th style="padding:8px;border:1px solid #ddd;text-align:left">Producto</th>
            <th style="padding:8px;border:1px solid #ddd;text-align:center">Cantidad</th>
            <th style="padding:8px;border:1px solid #ddd;text-align:left">Notas</th>
          </tr>
          ${itemRows}
        </table>
        ${message ? `<h3>Mensaje adicional:</h3><p style="white-space:pre-wrap">${esc(message)}</p>` : ""}
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Cotización recibida correctamente.",
    });
  } catch (error) {
    console.error("Cotización email error:", error);
    return NextResponse.json(
      { error: "Error al procesar la cotización." },
      { status: 500 }
    );
  }
}
