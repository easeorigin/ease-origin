import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Capability Statement",
  description:
    "EaseOrigin capability statement: core competencies, relevant program experience, NAICS and PSC codes, and company data for federal procurement.",
  openGraph: {
    title: "Capability Statement | EaseOrigin",
    description:
      "EaseOrigin capability statement: core competencies, relevant program experience, NAICS and PSC codes, and company data for federal procurement.",
  },
};

export default function CapabilityStatementLayout({ children }: { children: React.ReactNode }) {
  return children;
}
