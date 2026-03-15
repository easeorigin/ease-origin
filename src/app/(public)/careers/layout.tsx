import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join EaseOrigin and build your career in federal IT consulting. Explore open positions in cloud engineering, cybersecurity, DevOps, and more.",
};

export default function CareersLayout({ children }: { children: React.ReactNode }) {
  return children;
}
