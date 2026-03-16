import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join EaseOrigin and build technology solutions for government agencies and enterprises. Explore open positions in cloud, cybersecurity, DevOps, AI/ML, and program management.",
  openGraph: {
    title: "Careers | EaseOrigin",
    description:
      "Join EaseOrigin and build technology solutions for government agencies and enterprises. Explore open positions in cloud, cybersecurity, DevOps, AI/ML, and program management.",
  },
};

export default function CareersLayout({ children }: { children: React.ReactNode }) {
  return children;
}
