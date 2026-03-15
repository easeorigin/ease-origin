import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Open Positions",
  description:
    "Browse current job openings at EaseOrigin. We are hiring cloud engineers, cybersecurity analysts, data engineers, and more.",
};

export default function JobsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
