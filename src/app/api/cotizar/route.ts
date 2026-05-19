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

interface QuoteItem {
  name: string;
  category: string;
  quantity: string;
  notes: string;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, company, email, phone, message, items } = body;

    if (!name || !company || !email || !phone || !items || items.length === 0) {
      return NextResponse.json(
        {
          error:
            "Complete los campos obligatorios y seleccione al menos un producto.",
        },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Correo electrónico inválido." },
        { status: 400 }
      );
    }

    const itemRows = items
      .map(
        (item: QuoteItem) =>
          `<tr>
          <td style="padding:8px;border:1px solid #ddd">${esc(item.category)}</td>
          <td style="padding:8px;border:1px solid #ddd">${esc(item.name)}</td>
          <td style="padding:8px;border:1px solid #ddd;text-align:center">${esc(item.quantity)}</td>
          <td style="padding:8px;border:1px solid #ddd">${esc(item.notes || "—")}</td>
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
