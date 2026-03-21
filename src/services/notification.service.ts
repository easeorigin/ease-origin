import { transporter } from "@/lib/mailer";
import { getSettings } from "@/lib/settings";

export const NotificationService = {
  async sendNewSubscriberEmail(email: string) {
    const settings = await getSettings();

    if (!settings.notifications.newSubscriber) return;

    await transporter.sendMail({
      from: `"Your App" <${process.env.SMTP_USER}>`,
      to: settings.company.email,
      subject: "New Subscriber",
      html: `<p><strong>${email}</strong> just subscribed.</p>`,
    });
  },

  async sendResumeUploadEmail(data: {
    name: string;
    resumeUrl: string;
  }) {
    const settings = await getSettings();

    if (!settings.notifications.newResume) return;

    await transporter.sendMail({
      from: `"Your App" <${process.env.SMTP_USER}>`,
      to: settings.company.email,
      subject: "New Resume Uploaded",
      html: `
        <p>${data.name} uploaded a resume.</p>
        <a href="${data.resumeUrl}">View Resume</a>
      `,
    });
  },

  async sendJobApplicationEmail(data: {
    name: string;
    jobTitle: string;
  }) {
    const settings = await getSettings();

    if (!settings.notifications.newJobApplication) return;

    await transporter.sendMail({
      from: `"Your App" <${process.env.SMTP_USER}>`,
      to: process.env.EMAIL_USER,
      subject: "New Job Application",
      html: `
        <p>${data.name} applied for <strong>${data.jobTitle}</strong></p>
      `,
    });
  },
};