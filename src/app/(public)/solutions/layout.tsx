import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Explore EaseOrigin's federal IT capabilities, including cloud infrastructure, cybersecurity, DevOps, AI/ML, and data analytics solutions for government agencies.",
};

export default function SolutionsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
