import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "EaseOrigin LLC is a small business that builds and operates secure cloud infrastructure for federal programs and regulated commercial environments.",
  openGraph: {
    title: "About | EaseOrigin",
    description:
      "EaseOrigin LLC is a small business that builds and operates secure cloud infrastructure for federal programs and regulated commercial environments.",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
