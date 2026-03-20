import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendSubscriptionEmail = async (to: string) => {
  const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;
  const LOGO_URL = process.env.EMAIL_LOGO_URL;

  await transporter.sendMail({
    from: `"EaseOrgin" <${process.env.EMAIL_USER}>`,
    to,
    subject: "You're on the list! 🎉",
    html: `
    <div style="margin:0;padding:0;background-color:#f3f4f6;">
      <table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 0;">
        <tr>
          <td align="center">

            <!-- Container -->
            <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:16px;overflow:hidden;border:1px solid #e5e7eb;">

              <!-- Header -->
              <tr>
                <td align="center" style="padding:40px;background:linear-gradient(135deg,#0A1429,#1E3A5F);">

                  <!-- Logo -->
                  <a href="${SITE_URL}" style="text-decoration:none; display:flex; flex-direction:row; align-items:center; justify-content:center; gap:12px; width:100%;">
                    <img src="${LOGO_URL}" alt="EaseOrgin" width="60"; height="40"; style="display:block;" />
                    <h1 style="color:#ffffff;font-size:24px;font-weight:800;">
                      Ease<span style="color:#F04A2A;">Origin</span>
                    </h1>

                  </a>

                  <!-- Icon substitute -->
                  <div style="width:60px;height:60px;border-radius:50%;border:2px solid #F04A2A;margin:0 auto 20px;line-height:60px;font-size:26px;color:#F04A2A;">
                    ✓
                  </div>

                  <h1 style="color:#ffffff;font-size:24px;margin:0 0 10px;font-weight:800;">
                    You're on the list!
                  </h1>

                  <p style="color:#94A3B8;font-size:14px;line-height:1.6;margin:0;">
                    Welcome to EaseOrgin's monthly intelligence brief — federal IT insights delivered straight to your inbox.
                  </p>

                </td>
              </tr>

              <!-- Body -->
              <tr>
                <td style="padding:40px;">

                  <p style="color:#374151;font-size:14px;margin:0 0 20px;">
                    Thank you for subscribing. Each month you'll receive curated insights on:
                  </p>

                  <!-- List -->
                  <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:30px;">
                    ${[
                      "Federal contract awards and IDIQ vehicle updates",
                      "Cybersecurity and FedRAMP policy changes",
                      "Cloud modernization trends across agencies",
                      "IT talent and clearance market intelligence",
                      "EaseOrgin case studies and capabilities spotlight",
                    ]
                      .map(
                        (item) => `
                      <tr>
                        <td style="padding:6px 0;font-size:14px;color:#4b5563;">
                          <span style="color:#F04A2A;font-weight:bold;">✓</span> ${item}
                        </td>
                      </tr>
                    `,
                      )
                      .join("")}
                  </table>

                  <!-- Divider -->
                  <hr style="border:none;border-top:1px solid #e5e7eb;margin:30px 0;" />

                  <!-- CTA Grid -->
                  <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:30px;">
                    <tr>
                      <td align="center" style="padding:5px;">
                        <a href="${SITE_URL}/careers/jobs"
                          style="display:inline-block;padding:10px 14px;background:#1F3B5F;color:#ffffff;border-radius:8px;font-size:12px;font-weight:bold;text-decoration:none;">
                          View Open Roles
                        </a>
                      </td>
                      <td align="center" style="padding:5px;">
                        <a href="${SITE_URL}/case-studies"
                          style="display:inline-block;padding:10px 14px;background:#F8FAFC;color:#0A1628;border:1px solid #E2E8F0;border-radius:8px;font-size:12px;font-weight:bold;text-decoration:none;">
                          Case Studies
                        </a>
                      </td>
                      <td align="center" style="padding:5px;">
                        <a href="${SITE_URL}/contact"
                          style="display:inline-block;padding:10px 14px;background:#F8FAFC;color:#0A1628;border:1px solid #E2E8F0;border-radius:8px;font-size:12px;font-weight:bold;text-decoration:none;">
                          Contact Us
                        </a>
                      </td>
                    </tr>
                  </table>

                  <!-- Big CTA -->
                  <table width="100%" cellpadding="0" cellspacing="0" style="background:linear-gradient(135deg,#0A1628,#1E3A5F);border-radius:12px;padding:30px;text-align:center;">
                    <tr>
                      <td>
                        <p style="color:#ffffff;font-weight:bold;font-size:14px;margin:0 0 8px;">
                          Looking for federal IT talent?
                        </p>
                        <p style="color:#94A3B8;font-size:12px;margin:0 0 20px;">
                          EaseOrgin connects agencies and prime contractors with cleared, mission-ready consultants.
                        </p>
                        <a href="${SITE_URL}/contact"
                          style="display:inline-block;padding:12px 24px;background:#F04A2A;color:#FFFFFF;font-weight:bold;border-radius:8px;text-decoration:none;">
                          Partner With Us →
                        </a>
                      </td>
                    </tr>
                  </table>

                </td>
              </tr>

              <!-- Footer -->
              <tr>
                <td align="center" style="padding:25px;background:#f9fafb;border-top:1px solid #e5e7eb;">
                  <p style="font-weight:800;color:#1F3B5F;margin:0 0 5px;">
                    Ease<span style="color:#F04A2A;">Orign</span>
                  </p>

                  <p style="color:#9ca3af;font-size:12px;margin:0;">
                    211 E Avenue G, 306 Midlothian, TX 76065
                  </p>

                  <p style="color:#cbd5e1;font-size:12px;margin:8px 0;">
                    © ${new Date().getFullYear()} EaseOrgin LLC
                  </p>

                  <p style="margin:10px 0 0;">
                    <a href="${SITE_URL}" style="color:#94A3B8;font-size:11px;margin:0 8px;text-decoration:none;">Privacy</a>
                    <a href="${SITE_URL}" style="color:#94A3B8;font-size:11px;margin:0 8px;text-decoration:none;">Unsubscribe</a>
                    <a href="${SITE_URL}/contact" style="color:#94A3B8;font-size:11px;margin:0 8px;text-decoration:none;">Contact</a>
                  </p>
                </td>
              </tr>

            </table>

          </td>
        </tr>
      </table>
    </div>
    `,
  });
};

interface ContactFormData {
  name: string;
  email: string;
  message: string;
  company?: string;
  subject?: string;
}

export const sendContactEmail = async (data: ContactFormData) => {
  const { name, email, company, subject, message } = data;
  const EMAIL_USER = process.env.EMAIL_USER;
  const safeMessage = message
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\n/g, "<br/>");
  const mailOptions = {
    from: `"${name}" <${email}>`,
    to: EMAIL_USER,
    subject: `${subject || "New Contact Form Submission"} from ${name}`,
    text: `
Name: ${name}
Email: ${email}
company: ${company || "N/A"}
Message: ${safeMessage}
      `,
    html: `
        <body
    style="
      margin: 0;
      padding: 0;
      background-color: #f8fafc;
      font-family: Arial, Helvetica, sans-serif;
      color: #1e293e;
    "
  >
    <table width="100%" cellpadding="0" cellspacing="0">
      <tr>
        <td align="center" style="padding: 24px">
          <!-- Email Container -->
          <table
            width="100%"
            cellpadding="0"
            cellspacing="0"
            style="
              max-width: 600px;
              background-color: #ffffff;
              border-radius: 8px;
              overflow: hidden;
              box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
            "
          >
            <!-- Header -->
            <tr>
              <td
                style="
                  background-color: #1e293e;
                  padding: 20px 24px;
                  color: #ffffff;
                "
              >
                <h2 style="margin: 0; font-size: 20px; font-weight: 600">
                  New Contact Form Submission
                </h2>
              </td>
            </tr>

            <!-- Content -->
            <tr>
              <td style="padding: 24px">
                <p style="margin: 0 0 16px; font-size: 14px; color: #475569">
                  You’ve received a new message via the contact form. Details
                  are below:
                </p>

                <table
                  width="100%"
                  cellpadding="0"
                  cellspacing="0"
                  style="font-size: 14px"
                >
                  <tr>
                    <td
                      style="
                        padding: 8px 0;
                        font-weight: bold;
                        color: #1e293e;
                        width: 120px;
                      "
                    >
                      Name:
                    </td>
                    <td style="padding: 8px 0">${name}</td>
                  </tr>
                  <tr>
                    <td
                      style="
                        padding: 8px 0;
                        font-weight: bold;
                        color: #1e293e;
                      "
                    >
                      Email:
                    </td>
                    <td style="padding: 8px 0">${email}</td>
                  </tr>
                  <tr>
                    <td
                      style="
                        padding: 8px 0;
                        font-weight: bold;
                        color: #1e293e;
                      "
                    >
                      Company:
                    </td>
                    <td style="padding: 8px 0">
                      ${company || "N/A"}
                    </td>
                  </tr>
                </table>

                <!-- Message Box -->
                <div
                  style="
                    margin-top: 20px;
                    padding: 16px;
                    background-color: #f1f5f9;
                    border-left: 4px solid #d75023;
                    border-radius: 4px;
                  "
                >
                  <p
                    style="
                      margin: 0 0 8px;
                      font-weight: bold;
                      color: #1e293e;
                    "
                  >
                    Message:
                  </p>
                  <p style="margin: 0; line-height: 1.6; color: #334155">
                    ${safeMessage}
                  </p>
                </div>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td
                style="
                  background-color: #f8fafc;
                  padding: 16px 24px;
                  font-size: 12px;
                  color: #64748b;
                  text-align: center;
                "
              >
                This email was generated automatically from your website
                contact form.
                <br />
                <span style="color: #d75023">Please do not reply directly.</span>
              </td>
            </tr>
          </table>
          <!-- End Container -->
        </td>
      </tr>
    </table>
  </body>
      `,
  };

  await transporter.sendMail(mailOptions);
};
