/* eslint-disable react-hooks/set-state-in-effect */

"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

interface ThemeToggleProps {
  isScrolled?: boolean; // Optional prop to adjust styling based on scroll state
}

export function ThemeToggle({ isScrolled }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return <div className="w-9 h-9" />;

  const toggle = () => {
    document.documentElement.classList.add("transitioning");
    setTheme(theme === "dark" ? "light" : "dark");
    setTimeout(() => {
      document.documentElement.classList.remove("transitioning");
    }, 350);
  };

  return (
    <button
      onClick={toggle}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className="relative w-9 h-9 rounded-lg flex items-center justify-center transition-colors hover:bg-white/10"
    >
      {theme === "dark" ? (
        <Sun className="h-4.5 w-4.5 text-eo-gold" />
      ) : (
        <Moon className={`h-4.5 w-4.5 transition-colors ${isScrolled ? "text-eo-navy" : "text-white"}`} />
      )}
    </button>
  );
}
