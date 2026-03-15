"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Section } from "@/components/ui/section";

interface CTASectionProps {
  variant?: "navy" | "gradient" | "card";
  title: string;
  description: string;
  primaryCta: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
  /** Optional eyebrow text above the title */
  eyebrow?: string;
  /** Optional id for anchor linking */
  id?: string;
}

export function CTASection({
  variant = "navy",
  title,
  description,
  primaryCta,
  secondaryCta,
  eyebrow,
  id,
}: CTASectionProps) {
  // ── Card variant (white card on blue background) ─────────────────────────
  if (variant === "card") {
    return (
      <Section id={id} className="bg-eo-blue py-20">
        <div className="bg-white rounded-3xl p-10 md:p-16 text-center max-w-5xl mx-auto shadow-2xl relative overflow-hidden">
          {/* Decorative corner elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gray-50 rounded-bl-[100px] z-0" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-eo-gold/10 rounded-tr-[80px] z-0" />

          <div className="relative z-10 max-w-3xl mx-auto">
            {eyebrow && (
              <p className="text-xs font-semibold uppercase tracking-widest text-eo-gold mb-3">
                {eyebrow}
              </p>
            )}
            <h2 className="text-3xl md:text-4xl font-extrabold text-eo-navy mb-4">
              {title}
            </h2>
            <p className="text-lg text-gray-600 mb-10">{description}</p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href={primaryCta.href}>
                <span className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold rounded-md bg-eo-navy text-white hover:bg-eo-blue transition-colors shadow-md hover:shadow-lg cursor-pointer">
                  {primaryCta.label} <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
              {secondaryCta && (
                <Link href={secondaryCta.href}>
                  <span className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold rounded-md bg-gray-100 text-eo-navy hover:bg-gray-200 transition-colors border border-gray-200 cursor-pointer">
                    {secondaryCta.label}
                  </span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </Section>
    );
  }

  // ── Gradient variant (blue-to-navy gradient background) ──────────────────
  if (variant === "gradient") {
    return (
      <Section id={id} className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-eo-blue via-eo-navy to-[#050B14] pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,.8) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {eyebrow && (
              <h2 className="text-sm font-semibold uppercase tracking-widest text-eo-gold mb-4">
                {eyebrow}
              </h2>
            )}
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">
              {title}
            </h3>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto">
              {description}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href={primaryCta.href}>
                <span className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md bg-eo-gold text-eo-navy font-bold hover:bg-yellow-400 transition-all shadow-lg hover:-translate-y-0.5 cursor-pointer">
                  {primaryCta.label} <ArrowRight className="h-5 w-5" />
                </span>
              </Link>
              {secondaryCta && (
                <Link href={secondaryCta.href}>
                  <span className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md border-2 border-white/30 text-white font-semibold hover:bg-white/10 transition-all cursor-pointer">
                    {secondaryCta.label} <ChevronRight className="h-5 w-5" />
                  </span>
                </Link>
              )}
            </div>
          </motion.div>
        </div>
      </Section>
    );
  }

  // ── Navy variant (solid navy background — default) ───────────────────────
  return (
    <Section id={id} className="bg-eo-navy">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
        className="max-w-2xl mx-auto text-center text-white"
      >
        {eyebrow && (
          <p className="text-xs font-semibold uppercase tracking-widest text-eo-gold mb-3">
            {eyebrow}
          </p>
        )}
        <h2 className="text-3xl md:text-4xl font-bold mb-5">{title}</h2>
        <p className="text-gray-300 leading-relaxed mb-8">{description}</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href={primaryCta.href}>
            <span className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-white text-eo-navy font-bold text-sm hover:bg-gray-100 transition-all shadow-md cursor-pointer">
              {primaryCta.label} <ArrowRight className="h-4 w-4" />
            </span>
          </Link>
          {secondaryCta && (
            <Link href={secondaryCta.href}>
              <span className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg border-2 border-white/25 text-white font-bold text-sm hover:bg-white/10 transition-all cursor-pointer">
                {secondaryCta.label}
              </span>
            </Link>
          )}
        </div>
      </motion.div>
    </Section>
  );
}
