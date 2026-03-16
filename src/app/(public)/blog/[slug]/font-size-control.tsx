/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useEffect, useState, useCallback } from "react";
import { cn } from "@/lib/utils";

const FONT_SIZES = [
  { label: "A-", value: 16, ariaLabel: "Small font size" },
  { label: "A", value: 18, ariaLabel: "Default font size" },
  { label: "A+", value: 20, ariaLabel: "Large font size" },
] as const;

const STORAGE_KEY = "blog-font-size";
const STYLE_ID = "blog-font-size-override";

/**
 * Injects (or updates) a <style> tag that overrides Tailwind prose's
 * element-level font sizes so the user's preference actually takes effect
 * on paragraphs, list items, blockquotes, etc.
 */
function injectFontSizeStyle(size: number) {
  let style = document.getElementById(STYLE_ID) as HTMLStyleElement | null;
  if (!style) {
    style = document.createElement("style");
    style.id = STYLE_ID;
    document.head.appendChild(style);
  }

  // Scale line-height proportionally: base 18px -> 1.75, scale from there
  const lineHeight = Math.round((size / 18) * 1.75 * 100) / 100;

  style.textContent = `
    .markdown-content,
    .markdown-content p,
    .markdown-content li,
    .markdown-content td,
    .markdown-content th,
    .markdown-content blockquote,
    .markdown-content dd,
    .markdown-content dt {
      font-size: ${size}px !important;
      line-height: ${lineHeight} !important;
    }
  `;
}

export function FontSizeControl() {
  const [activeSize, setActiveSize] = useState(18);
  const [mounted, setMounted] = useState(false);

  const applyFontSize = useCallback((size: number) => {
    // If the markdown-content element exists, apply immediately.
    // If not (e.g. on initial mount before MarkdownRenderer paints),
    // use a MutationObserver to wait for it to appear, then apply.
    const target = document.querySelector(".markdown-content");
    if (target) {
      injectFontSizeStyle(size);
      return;
    }

    // Content not in the DOM yet; observe until it appears
    const observer = new MutationObserver((_mutations, obs) => {
      if (document.querySelector(".markdown-content")) {
        injectFontSizeStyle(size);
        obs.disconnect();
      }
    });
    observer.observe(document.body, { childList: true, subtree: true });

    // Safety: disconnect after 5 seconds to avoid memory leaks
    setTimeout(() => observer.disconnect(), 5000);
  }, []);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = parseInt(stored, 10);
      if ([16, 18, 20].includes(parsed)) {
        setActiveSize(parsed);
        applyFontSize(parsed);
      }
    }

    // Cleanup: remove injected style when component unmounts
    return () => {
      const style = document.getElementById(STYLE_ID);
      if (style) style.remove();
    };
  }, [applyFontSize]);

  const handleChange = (size: number) => {
    setActiveSize(size);
    localStorage.setItem(STORAGE_KEY, String(size));
    applyFontSize(size);
  };

  if (!mounted) return null;

  return (
    <div
      className="inline-flex items-center gap-0.5 rounded-lg border border-border-subtle bg-surface-muted p-0.5"
      role="group"
      aria-label="Adjust font size"
    >
      {FONT_SIZES.map(({ label, value, ariaLabel }) => (
        <button
          key={value}
          onClick={() => handleChange(value)}
          aria-label={ariaLabel}
          aria-pressed={activeSize === value}
          className={cn(
            "px-2 py-1 text-xs font-semibold rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-eo-blue focus:ring-offset-1",
            activeSize === value
              ? "bg-eo-blue text-white shadow-sm"
              : "text-text-muted hover:text-text-secondary hover:bg-surface"
          )}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
