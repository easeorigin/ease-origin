"use client";

import { useEffect, useState } from "react";
import { List, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import type { TocHeading } from "@/lib/blog-utils";

interface TableOfContentsProps {
  headings: TocHeading[];
  variant: "desktop" | "mobile";
}

export function TableOfContents({ headings, variant }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              a.boundingClientRect.top - b.boundingClientRect.top
          );

        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: "-80px 0px -70% 0px",
        threshold: 0,
      }
    );

    headings.forEach((h) => {
      const el = document.getElementById(h.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) return null;

  const NAVBAR_OFFSET = 80;

  const handleClick = (id: string) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - NAVBAR_OFFSET;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  if (variant === "desktop") {
    return (
      <nav
        aria-label="Table of contents"
        className="sticky top-28 max-h-[calc(100vh-8rem)] overflow-y-auto"
      >
        <h3 className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-4 flex items-center gap-2">
          <List className="h-4 w-4" />
          On this page
        </h3>
        <ul className="space-y-1">
          {headings.map((h) => (
            <li key={h.id}>
              <button
                onClick={() => handleClick(h.id)}
                className={cn(
                  "toc-link block w-full text-left text-sm py-1.5 pl-3 border-l-2 transition-all duration-200 ease-in-out",
                  activeId === h.id
                    ? "active text-eo-gold border-l-eo-gold font-semibold"
                    : "text-text-muted border-l-border-subtle hover:text-text-secondary hover:border-l-text-muted"
                )}
              >
                {h.text}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    );
  }

  // Mobile variant
  return (
    <div className="mb-8">
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="w-full flex items-center justify-between px-4 py-3 bg-surface-muted border border-border-subtle rounded-xl text-sm font-medium text-text-secondary hover:border-eo-blue transition-colors"
        aria-expanded={mobileOpen}
      >
        <span className="flex items-center gap-2">
          <List className="h-4 w-4" />
          Table of Contents
        </span>
        <ChevronDown
          className={cn(
            "h-4 w-4 transition-transform duration-200",
            mobileOpen && "rotate-180"
          )}
        />
      </button>
      {mobileOpen && (
        <div className="mt-2 p-4 bg-surface-muted border border-border-subtle rounded-xl">
          <ul className="space-y-1">
            {headings.map((h) => (
              <li key={h.id}>
                <button
                  onClick={() => handleClick(h.id)}
                  className="block w-full text-left text-sm py-1.5 pl-3 border-l-2 border-l-border-subtle text-text-muted hover:text-eo-blue hover:border-l-eo-blue transition-all duration-200 ease-in-out"
                >
                  {h.text}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
