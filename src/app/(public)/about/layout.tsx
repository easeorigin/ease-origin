import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about EaseOrigin LLC, a small business delivering federal IT consulting, cloud solutions, and cybersecurity services.",
  openGraph: {
    title: "About | EaseOrigin",
    description:
      "Learn about EaseOrigin LLC, a small business delivering federal IT consulting, cloud solutions, and cybersecurity services.",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
