"use client";

import { useState } from "react";
import { Linkedin, Link2, Check } from "lucide-react";

function XIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export function ShareButtons({
  title,
  slug,
}: {
  title: string;
  slug: string;
}) {
  const [copied, setCopied] = useState(false);

  const articleUrl =
    typeof window !== "undefined"
      ? `${window.location.origin}/blog/${slug}`
      : `/blog/${slug}`;

  const encodedUrl = encodeURIComponent(articleUrl);
  const encodedTitle = encodeURIComponent(title);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(articleUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback: do nothing if clipboard API is unavailable
    }
  };

  return (
    <div className="flex items-center gap-3">
      <span className="text-sm font-medium text-text-muted">Share:</span>
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-surface-muted border border-border-subtle text-text-secondary hover:text-eo-blue hover:border-eo-blue transition-colors"
        aria-label="Share on LinkedIn"
      >
        <Linkedin className="h-4 w-4" />
      </a>
      <a
        href={`https://x.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-surface-muted border border-border-subtle text-text-secondary hover:text-eo-blue hover:border-eo-blue transition-colors"
        aria-label="Share on X"
      >
        <XIcon className="h-4 w-4" />
      </a>
      <button
        onClick={handleCopyLink}
        className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-surface-muted border border-border-subtle text-text-secondary hover:text-eo-blue hover:border-eo-blue transition-colors"
        aria-label="Copy link to clipboard"
      >
        {copied ? (
          <Check className="h-4 w-4 text-green-500" />
        ) : (
          <Link2 className="h-4 w-4" />
        )}
      </button>
    </div>
  );
}
