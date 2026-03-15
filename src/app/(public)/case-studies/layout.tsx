import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "See how EaseOrigin delivers results for government agencies and enterprises through cloud modernization, cybersecurity, DevOps, and data platform engagements.",
};

export default function CaseStudiesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
