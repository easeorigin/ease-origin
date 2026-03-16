import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Real-world results from EaseOrigin engagements across cloud migration, cybersecurity, DevOps, AI/ML, and program management for federal agencies and commercial clients.",
  openGraph: {
    title: "Case Studies | EaseOrigin",
    description:
      "Real-world results from EaseOrigin engagements across cloud migration, cybersecurity, DevOps, AI/ML, and program management for federal agencies and commercial clients.",
  },
};

export default function CaseStudiesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
