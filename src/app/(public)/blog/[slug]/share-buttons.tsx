"use client";

import { useState } from "react";
import { Linkedin, Link2, Check, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

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

interface ShareButtonsProps {
  title: string;
  slug: string;
  layout?: "inline" | "floating";
}

export function ShareButtons({
  title,
  slug,
  layout = "inline",
}: ShareButtonsProps) {
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

  const buttonStyle = cn(
    "inline-flex items-center justify-center rounded-full border transition-all duration-200 focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2",
    layout === "floating"
      ? "w-10 h-10 bg-surface border-border-subtle text-text-secondary hover:text-eo-blue hover:border-eo-blue hover:shadow-md"
      : "w-9 h-9 bg-surface-muted border-border-subtle text-text-secondary hover:text-eo-blue hover:border-eo-blue"
  );

  const buttons = (
    <>
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className={buttonStyle}
        aria-label="Share on LinkedIn"
        title="Share on LinkedIn"
      >
        <Linkedin className="h-4 w-4" />
      </a>
      <a
        href={`https://x.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
        target="_blank"
        rel="noopener noreferrer"
        className={buttonStyle}
        aria-label="Share on X"
        title="Share on X"
      >
        <XIcon className="h-4 w-4" />
      </a>
      <a
        href={`mailto:?subject=${encodedTitle}&body=${encodedUrl}`}
        className={buttonStyle}
        aria-label="Share via email"
        title="Share via email"
      >
        <Mail className="h-4 w-4" />
      </a>
      <button
        onClick={handleCopyLink}
        className={buttonStyle}
        aria-label="Copy link to clipboard"
        title="Copy link to clipboard"
      >
        {copied ? (
          <Check className="h-4 w-4 text-green-500" />
        ) : (
          <Link2 className="h-4 w-4" />
        )}
      </button>
    </>
  );

  if (layout === "floating") {
    return (
      <div className="hidden xl:flex flex-col gap-3 sticky top-28">
        <span className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-1 text-center">
          Share
        </span>
        {buttons}
      </div>
    );
  }

  return (
    <div className="flex items-center gap-3 xl:hidden">
      <span className="text-sm font-medium text-text-muted">Share:</span>
      {buttons}
    </div>
  );
}
