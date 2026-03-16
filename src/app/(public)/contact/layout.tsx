import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with EaseOrigin to discuss your federal IT consulting, cloud modernization, or cybersecurity needs.",
  openGraph: {
    title: "Contact Us | EaseOrigin",
    description:
      "Get in touch with EaseOrigin to discuss your federal IT consulting, cloud modernization, or cybersecurity needs.",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
