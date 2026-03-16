import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Capability Statement",
  description:
    "EaseOrigin capability statement: core competencies, contract vehicles, past performance, NAICS codes, and company details for federal procurement.",
  openGraph: {
    title: "Capability Statement | EaseOrigin",
    description:
      "EaseOrigin capability statement: core competencies, contract vehicles, past performance, NAICS codes, and company details for federal procurement.",
  },
};

export default function CapabilityStatementLayout({ children }: { children: React.ReactNode }) {
  return children;
}
