"use server";

import { Resend } from "resend";

interface ResumeFormData {
  name: string;
  email: string;
  country: string;
  expertise: string;
  message: string;
}

export interface ResumeFormResponse {
  success: boolean;
  error?: string;
}

const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const RATE_LIMIT_MAX = 5;

function isRateLimited(email: string): boolean {
  const now = Date.now();
  const key = email.toLowerCase().trim();
  const entry = rateLimitMap.get(key);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(key, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  if (entry.count >= RATE_LIMIT_MAX) return true;
  entry.count += 1;
  return false;
}

function validate(data: ResumeFormData): string | null {
  if (!data.name || !data.name.trim()) return "Full name is required.";
  if (!data.email || !data.email.trim()) return "Email address is required.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
    return "Please enter a valid email address.";
  if (!data.country || !data.country.trim()) return "Country is required.";
  if (!data.expertise || !data.expertise.trim())
    return "Area of expertise is required.";
  return null;
}

export async function submitResumeForm(
  data: ResumeFormData
): Promise<ResumeFormResponse> {
  const validationError = validate(data);
  if (validationError) {
    return { success: false, error: validationError };
  }

  if (isRateLimited(data.email)) {
    return {
      success: false,
      error: "Too many submissions. Please try again later.",
    };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not configured");
    return {
      success: false,
      error: "Email service is not configured. Please try again later.",
    };
  }

  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send({
      from:
        process.env.RESEND_FROM_EMAIL ||
        "EaseOrigin Careers <onboarding@resend.dev>",
      to: "info@easeorigin.com",
      replyTo: data.email,
      subject: `[Resume Submission] ${data.name} - ${data.expertise}`,
      text: [
        `Name: ${data.name}`,
        `Email: ${data.email}`,
        `Country: ${data.country}`,
        `Expertise: ${data.expertise}`,
        "",
        "Additional Notes:",
        data.message || "(none)",
      ].join("\n"),
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #0A1628; padding: 24px 32px; border-radius: 8px 8px 0 0;">
            <h1 style="color: #ffffff; font-size: 20px; margin: 0;">New Resume Submission</h1>
          </div>
          <div style="padding: 32px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 8px 8px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; color: #6b7280; font-size: 14px; width: 100px; vertical-align: top;">Name</td>
                <td style="padding: 8px 0; color: #111827; font-size: 14px;">${escapeHtml(data.name)}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6b7280; font-size: 14px; vertical-align: top;">Email</td>
                <td style="padding: 8px 0; color: #111827; font-size: 14px;"><a href="mailto:${escapeHtml(data.email)}">${escapeHtml(data.email)}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6b7280; font-size: 14px; vertical-align: top;">Country</td>
                <td style="padding: 8px 0; color: #111827; font-size: 14px;">${escapeHtml(data.country)}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6b7280; font-size: 14px; vertical-align: top;">Expertise</td>
                <td style="padding: 8px 0; color: #111827; font-size: 14px;">${escapeHtml(data.expertise)}</td>
              </tr>
            </table>
            <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 16px 0;" />
            <p style="color: #6b7280; font-size: 14px; margin: 0 0 8px 0;">Additional Notes</p>
            <p style="color: #111827; font-size: 14px; line-height: 1.6; white-space: pre-wrap; margin: 0;">${escapeHtml(data.message || "(none)")}</p>
          </div>
        </div>
      `.trim(),
    });

    if (error) {
      console.error("Resend API error:", error);
      return {
        success: false,
        error: "Failed to send submission. Please try again.",
      };
    }

    return { success: true };
  } catch (err) {
    console.error("Resume form submission error:", err);
    return {
      success: false,
      error: "An unexpected error occurred. Please try again.",
    };
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
