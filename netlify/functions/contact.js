import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const TO_EMAIL = "contact@brightproit.com";

const escapeHtml = (str = "") =>
  str.replace(/[&<>"']/g, (c) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  }[c]));

const buildEmailHtml = ({ name, email, phone, service, message }) => {
  const row = (label, value) => `
    <tr>
      <td style="padding:14px 0;border-bottom:1px solid #1E2D4A;">
        <p style="margin:0 0 4px;font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#60A5FA;font-family:Arial,Helvetica,sans-serif;">${label}</p>
        <p style="margin:0;font-size:15px;color:#E5E7EB;font-family:Arial,Helvetica,sans-serif;">${value}</p>
      </td>
    </tr>`;

  return `
  <!DOCTYPE html>
  <html>
    <body style="margin:0;padding:0;background-color:#050B18;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#050B18;padding:32px 16px;">
        <tr>
          <td align="center">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background-color:#080F20;border:1px solid #1E2D4A;border-radius:16px;overflow:hidden;">
              <tr>
                <td style="background:linear-gradient(90deg,#3B82F6,#8B5CF6);padding:2px;">
                  <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                    <tr>
                      <td style="background-color:#080F20;padding:28px 32px;border-radius:14px 14px 0 0;">
                        <p style="margin:0;font-size:12px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#8B5CF6;font-family:Arial,Helvetica,sans-serif;">BrightPro IT Solutions</p>
                        <h1 style="margin:6px 0 0;font-size:22px;color:#FFFFFF;font-family:Arial,Helvetica,sans-serif;">New Contact Form Submission</h1>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              <tr>
                <td style="padding:8px 32px 8px;">
                  <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                    ${row("Name", escapeHtml(name))}
                    ${row("Email", `<a href="mailto:${escapeHtml(email)}" style="color:#60A5FA;text-decoration:none;">${escapeHtml(email)}</a>`)}
                    ${row("Phone", escapeHtml(phone || "-"))}
                    ${row("Service Needed", escapeHtml(service || "-"))}
                  </table>
                </td>
              </tr>
              <tr>
                <td style="padding:20px 32px 32px;">
                  <p style="margin:0 0 8px;font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#60A5FA;font-family:Arial,Helvetica,sans-serif;">Message</p>
                  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#0A1628;border:1px solid #1E2D4A;border-radius:10px;">
                    <tr>
                      <td style="padding:16px 18px;">
                        <p style="margin:0;font-size:15px;line-height:1.6;color:#E5E7EB;font-family:Arial,Helvetica,sans-serif;">${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
                      </td>
                    </tr>
                  </table>
                  <table role="presentation" cellpadding="0" cellspacing="0" style="margin-top:24px;">
                    <tr>
                      <td style="border-radius:8px;background:linear-gradient(90deg,#3B82F6,#22D3EE);">
                        <a href="mailto:${escapeHtml(email)}" style="display:inline-block;padding:12px 22px;font-size:14px;font-weight:700;color:#050B18;text-decoration:none;font-family:Arial,Helvetica,sans-serif;">Reply to ${escapeHtml(name)}</a>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              <tr>
                <td style="padding:18px 32px;border-top:1px solid #1E2D4A;">
                  <p style="margin:0;font-size:12px;color:#4B5563;font-family:Arial,Helvetica,sans-serif;">This message was sent from the contact form on brightproit.com</p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
  </html>`;
};

export const handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  let data;
  try {
    data = JSON.parse(event.body);
  } catch {
    return { statusCode: 400, body: JSON.stringify({ error: "Invalid JSON" }) };
  }

  const { name, email, phone, service, message } = data;

  if (!name || !email || !message) {
    return { statusCode: 400, body: JSON.stringify({ error: "Missing required fields" }) };
  }

  try {
    await resend.emails.send({
      from: "BrightPro Contact Form <contact@brightproit.com>",
      to: TO_EMAIL,
      replyTo: email,
      subject: `New contact form message from ${name}`,
      html: buildEmailHtml({ name, email, phone, service, message }),
    });

    return { statusCode: 200, body: JSON.stringify({ ok: true }) };
  } catch (err) {
    console.error(err);
    return { statusCode: 500, body: JSON.stringify({ error: "Failed to send email" }) };
  }
};
