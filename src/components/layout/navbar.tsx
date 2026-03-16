"use client";

import { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { ThemeToggle } from "@/components/theme-toggle";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme } = useTheme();
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Solutions", href: "/solutions", internal: true },
    { name: "Contract Vehicles", href: "/contract-vehicles", internal: true },
    { name: "Case Studies", href: "/case-studies", internal: true },
    { name: "About", href: "/about", internal: true },
    { name: "Careers", href: "/careers", internal: true },
    { name: "Blog", href: "/blog", internal: true },
  ];

  return (
    <nav
      aria-label="Main navigation"
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 ease-in-out",
        isScrolled
          ? "bg-surface/90 backdrop-blur-md shadow-sm border-b border-border-subtle py-3"
          : "bg-transparent py-5",
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="shrink-0 flex items-center">
            <Link
              href="/"
              className={cn(
                "font-bold font-mont text-2xl tracking-tight transition-colors flex items-center",
                isScrolled ? "text-text-primary" : "text-white",
              )}
            >
            <Image
            src={isScrolled && theme !== "dark" ? "/logo/main-logo-2.webp" : "/logo/main-logo.webp"}
            alt="EaseOrigin Logo"
            width={60}
            height={50}
            className="object-contain"
            />
              <h2 className="">EaseOrigin</h2>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6 items-center">
              {navLinks.map((link) =>
                link.internal ? (
                  <Link key={link.name} href={link.href}>
                    <span
                      className={cn(
                        "text-sm font-medium transition-colors hover:text-eo-gold cursor-pointer",
                        isScrolled ? "text-text-secondary" : "text-gray-200",
                      )}
                    >
                      {link.name}
                    </span>
                  </Link>
                ) : (
                  <a
                    key={link.name}
                    href={link.href}
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-eo-gold",
                      isScrolled ? "text-text-secondary" : "text-gray-200",
                    )}
                  >
                    {link.name}
                  </a>
                ),
              )}
            </div>
            <ThemeToggle />
            <Link
              href="/contact"
              className={cn(
                "px-5 py-2.5 text-sm font-semibold rounded-md transition-all duration-200",
                isScrolled
                  ? "bg-eo-navy text-white hover:bg-eo-blue shadow-md hover:shadow-lg"
                  : "bg-white text-eo-navy hover:bg-gray-100 shadow-lg dark:bg-surface dark:text-text-primary dark:hover:bg-surface-muted",
              )}
            >
              Partner With Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={cn(
                "focus:outline-none",
                isScrolled ? "text-text-primary" : "text-white",
              )}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Progress Bar */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-0.5 bg-eo-gold origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden absolute w-full bg-surface border-b border-border-subtle shadow-xl transition-all duration-300 ease-in-out origin-top",
          isMobileMenuOpen
            ? "opacity-100 scale-y-100"
            : "opacity-0 scale-y-0 pointer-events-none",
        )}
      >
        <div className="px-4 pt-2 pb-6 space-y-1">
          {navLinks.map((link) =>
            link.internal ? (
              <Link key={link.name} href={link.href}>
                <span
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-3 text-base font-medium text-text-secondary hover:text-text-primary hover:bg-surface-muted rounded-md cursor-pointer"
                >
                  {link.name}
                </span>
              </Link>
            ) : (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-3 text-base font-medium text-text-secondary hover:text-text-primary hover:bg-surface-muted rounded-md"
              >
                {link.name}
              </a>
            ),
          )}
          <div className="pt-4 pb-2">
            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-center px-5 py-3 text-base font-medium bg-eo-navy text-white hover:bg-eo-blue rounded-md shadow-sm"
            >
              Partner With Us
            </Link>
          </div>
          <div className="pt-2 flex items-center gap-2 px-3">
            <ThemeToggle />
            <span className="text-sm text-text-muted">Toggle theme</span>
          </div>
        </div>
      </div>
    </nav>
  );
}
