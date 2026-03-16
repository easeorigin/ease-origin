"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Clock, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface ReadNextPost {
  slug: string;
  title: string;
  category: string;
  readTimeMinutes: number;
}

interface ReadNextBarProps {
  post: ReadNextPost;
}

export function ReadNextBar({ post }: ReadNextBarProps) {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (dismissed) return;
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const clientHeight = window.innerHeight;
      const scrollPercent = (scrollTop + clientHeight) / scrollHeight;

      setVisible(scrollPercent >= 0.9);
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [dismissed]);

  const handleDismiss = () => {
    setDismissed(true);
    setVisible(false);
  };

  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 right-0 z-40 hidden md:block",
        "transition-transform duration-500 ease-out",
        visible && !dismissed
          ? "translate-y-0"
          : "translate-y-full"
      )}
    >
      <div className="bg-surface border-t border-border-subtle shadow-2xl shadow-eo-navy/10">
        <div className="max-w-5xl mx-auto px-6 py-3.5 flex items-center gap-4">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-text-muted">
                Read next
              </span>
              <span className="px-2 py-0.5 text-[11px] font-semibold rounded-full bg-eo-navy/10 text-eo-navy dark:bg-eo-blue/10 dark:text-eo-blue">
                {post.category}
              </span>
              <span className="text-xs text-text-muted flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {post.readTimeMinutes} min
              </span>
            </div>
            <p className="text-sm font-semibold text-text-primary truncate">
              {post.title}
            </p>
          </div>

          <Link
            href={`/blog/${post.slug}`}
            className="flex-shrink-0 px-5 py-2 text-sm font-semibold rounded-lg bg-eo-blue text-white hover:bg-eo-navy transition-colors focus:outline-none focus:ring-2 focus:ring-eo-blue focus:ring-offset-2"
          >
            Read Next
          </Link>

          <button
            onClick={handleDismiss}
            aria-label="Dismiss read next suggestion"
            className="flex-shrink-0 p-1.5 rounded-md text-text-muted hover:text-text-primary hover:bg-surface-muted transition-colors focus:outline-none focus:ring-2 focus:ring-eo-blue"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
