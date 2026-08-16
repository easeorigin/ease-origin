import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Cloud platform engineering, DevSecOps, cybersecurity, data and analytics, AI platforms, enterprise SaaS, program management, and agile delivery across AWS, Azure, GCP, and Oracle Cloud.",
  openGraph: {
    title: "Solutions | EaseOrigin",
    description:
      "Cloud platform engineering, DevSecOps, cybersecurity, data and analytics, AI platforms, enterprise SaaS, program management, and agile delivery across AWS, Azure, GCP, and Oracle Cloud.",
  },
};

export default function SolutionsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
