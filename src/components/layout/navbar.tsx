"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Solutions", href: "/solutions", internal: true },
    { name: "Case Studies", href: "/case-studies", internal: true },
    { name: "Careers", href: "/careers", internal: true },
    { name: "About", href: "/about", internal: false },
    { name: "Contact", href: "/contact", internal: true },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 ease-in-out",
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100 py-3"
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
                isScrolled ? "text-[#202433]" : "text-white",
              )}
            >
            <Image 
            src={isScrolled ? "/logo/main-logo-2.png" : "/logo/main-logo.png"}            
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
                        "text-sm font-medium transition-colors hover:text-tg-gold cursor-pointer",
                        isScrolled ? "text-gray-600" : "text-gray-200",
                      )}
                    >
                      {link.name}
                    </span>
                  </Link>
                ) : (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-tg-gold",
                      isScrolled ? "text-gray-600" : "text-gray-200",
                    )}
                  >
                    {link.name}
                  </Link>
                ),
              )}
            </div>
            <Link
              href="#contact"
              className={cn(
                "px-5 py-2.5 text-sm font-semibold rounded-md transition-all duration-200",
                isScrolled
                  ? "bg-tg-navy text-white hover:bg-tg-blue shadow-md hover:shadow-lg"
                  : "bg-white text-tg-navy hover:bg-gray-100 shadow-lg",
              )}
            >
              Partner With Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={cn(
                "focus:outline-none",
                isScrolled ? "text-tg-navy" : "text-white",
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

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden absolute w-full bg-white border-b border-gray-100 shadow-xl transition-all duration-300 ease-in-out origin-top",
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
                  className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-tg-navy hover:bg-gray-50 rounded-md cursor-pointer"
                >
                  {link.name}
                </span>
              </Link>
            ) : (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-tg-navy hover:bg-gray-50 rounded-md"
              >
                {link.name}
              </Link>
            ),
          )}
          <div className="pt-4 pb-2">
            <Link
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-center px-5 py-3 text-base font-medium bg-tg-navy text-white hover:bg-tg-blue rounded-md shadow-sm"
            >
              Partner With Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
