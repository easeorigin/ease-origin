"use client";

import { useEffect, useState } from "react";
import { Clock } from "lucide-react";
import { cn } from "@/lib/utils";

interface ReadingRemainingProps {
  totalMinutes: number;
}

export function ReadingRemaining({ totalMinutes }: ReadingRemainingProps) {
  const [remaining, setRemaining] = useState(totalMinutes);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      if (docHeight <= 0) return;

      const progress = Math.min(scrollTop / docHeight, 1);
      const minutesLeft = Math.max(
        Math.ceil(totalMinutes * (1 - progress)),
        0
      );

      setRemaining(minutesLeft);
      setVisible(scrollTop > 200 && progress < 0.95);
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [totalMinutes]);

  return (
    <div
      className={cn(
        "fixed top-4 right-4 z-40 flex items-center gap-1.5 px-3 py-1.5 rounded-full",
        "bg-surface/90 backdrop-blur-md border border-border-subtle shadow-sm",
        "text-xs font-medium text-text-secondary",
        "transition-all duration-300",
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-2 pointer-events-none"
      )}
    >
      <Clock className="h-3 w-3 text-eo-blue" />
      {remaining} min remaining
    </div>
  );
}
