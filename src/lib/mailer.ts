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
                <td align="center" style="padding:40px;background:linear-gradient(135deg,#0A1628,#1E3A5F);">

                  <!-- Logo -->
                  <a href="${SITE_URL}" style="text-decoration:none;">
                    <img src="${LOGO_URL}" alt="EaseOrgin" width="140" style="display:block;margin:0 auto 20px;" />
                  </a>

                  <!-- Icon substitute -->
                  <div style="width:60px;height:60px;border-radius:50%;border:2px solid rgba(255,255,255,0.2);margin:0 auto 20px;line-height:60px;font-size:26px;color:#D4AF37;">
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
                      "EaseOrgin case studies and capabilities spotlight"
                    ].map(item => `
                      <tr>
                        <td style="padding:6px 0;font-size:14px;color:#4b5563;">
                          <span style="color:#D4AF37;font-weight:bold;">✓</span> ${item}
                        </td>
                      </tr>
                    `).join("")}
                  </table>

                  <!-- Divider -->
                  <hr style="border:none;border-top:1px solid #e5e7eb;margin:30px 0;" />

                  <!-- CTA Grid -->
                  <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:30px;">
                    <tr>
                      <td align="center" style="padding:5px;">
                        <a href="${SITE_URL}/careers/jobs"
                          style="display:inline-block;padding:10px 14px;background:#0A1628;color:#ffffff;border-radius:8px;font-size:12px;font-weight:bold;text-decoration:none;">
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
                          style="display:inline-block;padding:12px 24px;background:#D4AF37;color:#0A1628;font-weight:bold;border-radius:8px;text-decoration:none;">
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
                  <p style="font-weight:800;color:#0A1628;margin:0 0 5px;">
                    TG <span style="color:#D4AF37;">Federal</span>
                  </p>

                  <p style="color:#9ca3af;font-size:12px;margin:0;">
                    4501 Fairfax Dr Suite 500, Arlington, VA 22203
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