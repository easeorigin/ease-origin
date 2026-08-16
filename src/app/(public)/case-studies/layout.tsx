import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Engineering work our people have delivered across cloud migration, security compliance, and platform operations. Program experience is attributed to the organization that held the contract.",
  openGraph: {
    title: "Case Studies | EaseOrigin",
    description:
      "Engineering work our people have delivered across cloud migration, security compliance, and platform operations. Program experience is attributed to the organization that held the contract.",
  },
};

export default function CaseStudiesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
