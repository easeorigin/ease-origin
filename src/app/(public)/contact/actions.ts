"use server";

// Requires RESEND_API_KEY environment variable to be set.
// Optional: SLACK_WEBHOOK_URL for instant Slack notifications.
// See .env.example for the expected format.

import { Resend } from "resend";

// ─── Types ───────────────────────────────────────────────────────────────────

interface ContactFormData {
  name: string;
  email: string;
  company: string;
  subject: string;
  message: string;
}

export interface ContactFormResponse {
  success: boolean;
  error?: string;
}

// ─── Rate Limiting ───────────────────────────────────────────────────────────

const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000; // 15 minutes
const RATE_LIMIT_MAX = 5; // max submissions per window

function isRateLimited(email: string): boolean {
  const now = Date.now();
  const key = email.toLowerCase().trim();
  const entry = rateLimitMap.get(key);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(key, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  if (entry.count >= RATE_LIMIT_MAX) {
    return true;
  }

  entry.count += 1;
  return false;
}

// ─── Validation ──────────────────────────────────────────────────────────────

function validate(data: ContactFormData): string | null {
  if (!data.name || !data.name.trim()) return "Full name is required.";
  if (!data.email || !data.email.trim()) return "Email address is required.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
    return "Please enter a valid email address.";
  if (!data.company || !data.company.trim())
    return "Company or organization is required.";
  if (!data.subject || !data.subject.trim()) return "Subject is required.";
  if (!data.message || !data.message.trim()) return "Message is required.";
  if (data.message.trim().length < 20)
    return "Message must be at least 20 characters.";
  return null;
}

// ─── Server Action ───────────────────────────────────────────────────────────

export async function submitContactForm(
  data: ContactFormData
): Promise<ContactFormResponse> {
  // Validate
  const validationError = validate(data);
  if (validationError) {
    return { success: false, error: validationError };
  }

  // Rate limit
  if (isRateLimited(data.email)) {
    return {
      success: false,
      error: "Too many submissions. Please try again later.",
    };
  }

  // Check for API key
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
      from: process.env.RESEND_FROM_EMAIL || "EaseOrigin Contact Form <onboarding@resend.dev>",
      to: "info@easeorigin.com",
      replyTo: data.email,
      subject: `[Contact Form] ${data.subject}`,
      text: [
        `Name: ${data.name}`,
        `Email: ${data.email}`,
        `Company: ${data.company}`,
        `Subject: ${data.subject}`,
        "",
        "Message:",
        data.message,
      ].join("\n"),
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #0A1628; padding: 24px 32px; border-radius: 8px 8px 0 0;">
            <h1 style="color: #ffffff; font-size: 20px; margin: 0;">New Contact Form Submission</h1>
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
                <td style="padding: 8px 0; color: #6b7280; font-size: 14px; vertical-align: top;">Company</td>
                <td style="padding: 8px 0; color: #111827; font-size: 14px;">${escapeHtml(data.company)}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6b7280; font-size: 14px; vertical-align: top;">Subject</td>
                <td style="padding: 8px 0; color: #111827; font-size: 14px;">${escapeHtml(data.subject)}</td>
              </tr>
            </table>
            <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 16px 0;" />
            <p style="color: #6b7280; font-size: 14px; margin: 0 0 8px 0;">Message</p>
            <p style="color: #111827; font-size: 14px; line-height: 1.6; white-space: pre-wrap; margin: 0;">${escapeHtml(data.message)}</p>
          </div>
        </div>
      `.trim(),
    });

    if (error) {
      console.error("Resend API error:", error);
      return {
        success: false,
        error: "Failed to send message. Please try again.",
      };
    }

    // TODO: Uncomment to enable Slack notifications (requires SLACK_WEBHOOK_URL)
    // notifySlack(data).catch((slackErr) =>
    //   console.error("Slack notification failed:", slackErr)
    // );

    return { success: true };
  } catch (err) {
    console.error("Contact form submission error:", err);
    return {
      success: false,
      error: "An unexpected error occurred. Please try again.",
    };
  }
}

// ─── Slack Notification ──────────────────────────────────────────────────────

async function notifySlack(data: ContactFormData): Promise<void> {
  const webhookUrl = process.env.SLACK_WEBHOOK_URL;
  if (!webhookUrl) return;

  await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      text: `New contact form submission from *${data.name}*`,
      blocks: [
        {
          type: "header",
          text: { type: "plain_text", text: "New Contact Form Submission" },
        },
        {
          type: "section",
          fields: [
            { type: "mrkdwn", text: `*Name:*\n${data.name}` },
            { type: "mrkdwn", text: `*Email:*\n${data.email}` },
            { type: "mrkdwn", text: `*Company:*\n${data.company}` },
            { type: "mrkdwn", text: `*Subject:*\n${data.subject}` },
          ],
        },
        {
          type: "section",
          text: { type: "mrkdwn", text: `*Message:*\n>${data.message.replace(/\n/g, "\n>")}` },
        },
      ],
    }),
  });
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
