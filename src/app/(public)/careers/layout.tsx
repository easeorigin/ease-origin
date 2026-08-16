import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "EaseOrigin has no open requisitions. We work with a network of independent engineers and small firms on federal cloud, platform, and security subcontracts.",
  openGraph: {
    title: "Careers | EaseOrigin",
    description:
      "EaseOrigin has no open requisitions. We work with a network of independent engineers and small firms on federal cloud, platform, and security subcontracts.",
  },
};

export default function CareersLayout({ children }: { children: React.ReactNode }) {
  return children;
}
