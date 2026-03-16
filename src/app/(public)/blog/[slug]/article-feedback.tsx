/* eslint-disable react-hooks/set-state-in-effect */

"use client";

import { useEffect, useState } from "react";

interface ArticleFeedbackProps {
  slug: string;
}

export function ArticleFeedback({ slug }: ArticleFeedbackProps) {
  const storageKey = `article-feedback-${slug}`;
  const [voted, setVoted] = useState<"helpful" | "not-helpful" | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem(storageKey);
    if (stored === "helpful" || stored === "not-helpful") {
      setVoted(stored);
    }
  }, [storageKey]);

  const handleVote = (value: "helpful" | "not-helpful") => {
    localStorage.setItem(storageKey, value);
    setVoted(value);
  };

  if (!mounted) return null;

  return (
    <div className="mt-12 mb-2 py-6 px-6 border border-border-subtle rounded-xl bg-surface-muted text-center">
      {voted ? (
        <p className="text-sm text-text-secondary font-medium">
          Thank you for your feedback!
        </p>
      ) : (
        <>
          <p className="text-sm text-text-secondary font-medium mb-4">
            Was this article helpful?
          </p>
          <div className="flex items-center justify-center gap-3">
            <button
              onClick={() => handleVote("helpful")}
              aria-label="Yes, this article was helpful"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg border border-border-subtle bg-surface text-text-secondary hover:border-eo-blue hover:text-eo-blue transition-colors focus:outline-none focus:ring-2 focus:ring-eo-blue focus:ring-offset-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 10v12" />
                <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
              </svg>
              Yes
            </button>
            <button
              onClick={() => handleVote("not-helpful")}
              aria-label="No, this article was not helpful"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg border border-border-subtle bg-surface text-text-secondary hover:border-red-400 hover:text-red-500 transition-colors focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M17 14V2" />
                <path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a3.13 3.13 0 0 1-3-3.88Z" />
              </svg>
              No
            </button>
          </div>
        </>
      )}
    </div>
  );
}
