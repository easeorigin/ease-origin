import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "EaseOrigin technology solutions: cloud infrastructure, cybersecurity, DevOps, AI/ML, data analytics, SaaS, program management, and agile delivery for government and enterprise.",
  openGraph: {
    title: "Solutions | EaseOrigin",
    description:
      "EaseOrigin technology solutions: cloud infrastructure, cybersecurity, DevOps, AI/ML, data analytics, SaaS, program management, and agile delivery for government and enterprise.",
  },
};

export default function SolutionsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
