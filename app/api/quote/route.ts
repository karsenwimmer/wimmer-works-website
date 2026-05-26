import { NextResponse } from "next/server";
import { Resend } from "resend";

type QuotePayload = {
  name?: string;
  phone?: string;
  email?: string;
  projectType?: string;
  city?: string;
  details?: string;
};

const requiredFields: Array<keyof QuotePayload> = [
  "name",
  "phone",
  "email",
  "projectType",
  "city",
  "details",
];

export async function POST(request: Request) {
  let payload: QuotePayload;

  try {
    payload = (await request.json()) as QuotePayload;
  } catch {
    return NextResponse.json(
      { message: "Please submit the form again." },
      { status: 400 },
    );
  }

  const missingField = requiredFields.find((field) => !clean(payload[field]));

  if (missingField) {
    return NextResponse.json(
      { message: "Please complete every field before sending." },
      { status: 400 },
    );
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const quoteToEmail = process.env.QUOTE_TO_EMAIL;
  const fromEmail =
    process.env.RESEND_FROM_EMAIL || "Wimmer Works <onboarding@resend.dev>";

  if (!resendApiKey || !quoteToEmail) {
    return NextResponse.json(
      { message: "Quote email is not configured yet." },
      { status: 500 },
    );
  }

  const quote = {
    name: clean(payload.name),
    phone: clean(payload.phone),
    email: clean(payload.email),
    projectType: clean(payload.projectType),
    city: clean(payload.city),
    details: clean(payload.details),
  };

  try {
    const resend = new Resend(resendApiKey);

    await resend.emails.send({
      from: fromEmail,
      to: quoteToEmail,
      replyTo: quote.email,
      subject: `New quote request: ${quote.projectType}`,
      html: quoteEmailHtml(quote),
      text: quoteEmailText(quote),
    });

    return NextResponse.json({ message: "Quote request sent." });
  } catch (error) {
    console.error("Quote email failed", error);

    return NextResponse.json(
      { message: "The quote request could not be sent. Please try again." },
      { status: 500 },
    );
  }
}

function clean(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function quoteEmailHtml(quote: Required<QuotePayload>) {
  const rows = [
    ["Name", quote.name],
    ["Phone", quote.phone],
    ["Email", quote.email],
    ["Project type", quote.projectType],
    ["City / area", quote.city],
    ["Project details", quote.details],
  ];

  return `
    <div style="font-family: Arial, sans-serif; color: #111111; line-height: 1.5;">
      <h1 style="font-family: Georgia, serif; font-size: 28px; margin: 0 0 18px;">
        New quote request
      </h1>
      <table style="border-collapse: collapse; width: 100%; max-width: 680px;">
        <tbody>
          ${rows
            .map(
              ([label, value]) => `
                <tr>
                  <td style="border-top: 1px solid #e6e0d5; padding: 12px 16px 12px 0; font-weight: 700; vertical-align: top; width: 160px;">
                    ${escapeHtml(label)}
                  </td>
                  <td style="border-top: 1px solid #e6e0d5; padding: 12px 0; white-space: pre-wrap;">
                    ${escapeHtml(value)}
                  </td>
                </tr>
              `,
            )
            .join("")}
        </tbody>
      </table>
    </div>
  `;
}

function quoteEmailText(quote: Required<QuotePayload>) {
  return [
    "New quote request",
    "",
    `Name: ${quote.name}`,
    `Phone: ${quote.phone}`,
    `Email: ${quote.email}`,
    `Project type: ${quote.projectType}`,
    `City / area: ${quote.city}`,
    "",
    "Project details:",
    quote.details,
  ].join("\n");
}
