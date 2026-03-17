"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";

interface PageHeroProps {
  badge?: string;
  badgeIcon?: React.ReactNode;
  title: string;
  description: string;
  primaryCta?: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
  showScrollIndicator?: boolean;
  /** Extra content rendered below the description/CTAs (e.g. breadcrumb links) */
  children?: React.ReactNode;
  /** Optional className overrides for the outer section */
  className?: string;
  /** When true the hero uses min-h-[60vh] and vertically centers content */
  tall?: boolean;
  /** Optional background image displayed behind the hero content */
  backgroundImage?: { src: string; alt: string };
}

export function PageHero({
  badge,
  badgeIcon,
  title,
  description,
  primaryCta,
  secondaryCta,
  showScrollIndicator = false,
  children,
  className,
  tall = false,
  backgroundImage,
}: PageHeroProps) {
  return (
    <section
      className={`relative pt-32 pb-20 lg:pt-48 lg:pb-28 overflow-hidden bg-eo-navy text-white ${
        tall ? "min-h-[60vh] flex items-center" : ""
      } ${className ?? ""}`}
    >
      {/* Optional background image */}
      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          <Image
            src={backgroundImage.src}
            alt={backgroundImage.alt}
            aria-hidden="true"
            fill
            className="object-cover opacity-[0.12]"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-r from-eo-navy via-eo-navy/95 to-eo-navy/80" />
        </div>
      )}

      {/* Grid texture */}
      <div
        className="absolute inset-0 z-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      {/* Glow orbs */}
      <div className="absolute top-0 right-0 w-175 h-175 bg-eo-blue rounded-full blur-[180px] opacity-20 translate-x-1/3 -translate-y-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-125 h-125 bg-eo-gold rounded-full blur-[200px] opacity-[0.05] pointer-events-none" />

      {/* Abstract circuit lines */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.04] pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <line x1="0" y1="30%" x2="100%" y2="30%" stroke="white" strokeWidth="0.5" />
        <line x1="0" y1="60%" x2="100%" y2="60%" stroke="white" strokeWidth="0.5" />
        <line x1="20%" y1="0" x2="20%" y2="100%" stroke="white" strokeWidth="0.5" />
        <line x1="60%" y1="0" x2="60%" y2="100%" stroke="white" strokeWidth="0.5" />
        <line x1="85%" y1="0" x2="85%" y2="100%" stroke="white" strokeWidth="0.5" />
        <circle cx="20%" cy="30%" r="4" fill="none" stroke="white" strokeWidth="1" />
        <circle cx="60%" cy="60%" r="4" fill="none" stroke="white" strokeWidth="1" />
        <circle cx="85%" cy="30%" r="4" fill="none" stroke="white" strokeWidth="1" />
      </svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl flex flex-col"
        >
          {/* Optional children rendered above the badge (e.g. back links) */}
          {children}

          {/* Badge pill */}
          {badge && (
            <div className="flex self-start items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-sm font-medium text-eo-gold mb-6">
              {badgeIcon}
              {badge}
            </div>
          )}

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.06] mb-6">
            {title}
          </h1>

          {/* Description */}
          <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mb-10">
            {description}
          </p>

          {/* CTAs */}
          {(primaryCta || secondaryCta) && (
            <div className="flex flex-col sm:flex-row gap-4">
              {primaryCta && (
                <Link href={primaryCta.href}>
                  <span className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md bg-eo-gold text-eo-navy font-bold hover:bg-yellow-400 transition-all shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:-translate-y-0.5 cursor-pointer">
                    {primaryCta.label} <ArrowRight className="h-5 w-5" />
                  </span>
                </Link>
              )}
              {secondaryCta && (
                <Link href={secondaryCta.href}>
                  <span className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md border-2 border-white/30 text-white font-semibold hover:bg-white/10 transition-all cursor-pointer">
                    {secondaryCta.label}
                  </span>
                </Link>
              )}
            </div>
          )}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      {showScrollIndicator && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/40"
        >
          <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
          <ChevronDown className="h-4 w-4 animate-bounce" />
        </motion.div>
      )}
    </section>
  );
}
