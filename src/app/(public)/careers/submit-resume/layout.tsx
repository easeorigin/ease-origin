import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Submit Resume",
  description:
    "Submit your resume to EaseOrigin for future career opportunities in federal IT consulting, cloud engineering, and cybersecurity.",
};

export default function SubmitResumeLayout({ children }: { children: React.ReactNode }) {
  return children;
}
