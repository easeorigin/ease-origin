import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about EaseOrigin LLC, a service-disabled veteran-owned small business delivering federal IT consulting, cloud solutions, and cybersecurity services.",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
