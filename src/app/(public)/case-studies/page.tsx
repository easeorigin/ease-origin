"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { CaseStudyCard } from "@/components/case-study-card";
import { caseStudies, type Sector } from "@/data/case-studies";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { CTASection } from "@/components/shared/cta-section";
import { PageHero } from "@/components/shared/page-hero";
import { fadeInUpWhileVisible } from "@/lib/animations";

function CaseStudiesGrid() {
  const [activeSector, setActiveSector] = useState<Sector | "">("");

  const availableSectors = useMemo(() => {
    const sectors = new Set<Sector>();
    caseStudies.forEach((cs) => {
      if (cs.sector) sectors.add(cs.sector);
    });
    return Array.from(sectors);
  }, []);

  const filtered = useMemo(() => {
    if (!activeSector) return caseStudies;
    return caseStudies.filter((cs) => cs.sector === activeSector);
  }, [activeSector]);

  return (
    <Section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-900 border-b border-border-subtle">
      {/* Decorative glow orbs */}
      <div className="absolute -top-20 -right-20 w-72 h-72 bg-blue-100/15 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-eo-gold/10 rounded-full blur-[80px] pointer-events-none" />

      <div className="text-center mb-12">
        <motion.div
          {...fadeInUpWhileVisible}
        >
          <h2 className="text-sm font-semibold uppercase tracking-widest text-eo-gold mb-2">Our Work</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-text-primary">Proven Delivery. Measurable Results.</h3>
          <p className="mt-4 text-text-tertiary max-w-xl mx-auto leading-relaxed">
            Each engagement reflects our commitment to mission-driven technology and accountable delivery.
          </p>
        </motion.div>
      </div>

      {/* Sector filter pills */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        <button
          aria-pressed={activeSector === ""}
          onClick={() => setActiveSector("")}
          className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
            activeSector === ""
              ? "bg-eo-navy text-white shadow-md"
              : "bg-surface text-text-tertiary border border-border-default hover:border-eo-navy hover:text-eo-navy"
          }`}
        >
          All
        </button>
        {availableSectors.map((sector) => (
          <button
            key={sector}
            aria-pressed={activeSector === sector}
            onClick={() => setActiveSector(sector)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
              activeSector === sector
                ? "bg-eo-navy text-white shadow-md"
                : "bg-surface text-text-tertiary border border-border-default hover:border-eo-navy hover:text-eo-navy"
            }`}
          >
            {sector}
          </button>
        ))}
      </div>

      {/* Count */}
      <p className="text-center text-sm text-gray-400 mb-8">
        {filtered.length} of {caseStudies.length} case studies
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((study, i) => (
          <CaseStudyCard key={study.slug} study={study} index={i} />
        ))}
      </div>
    </Section>
  );
}

function CaseStudiesCTA() {
  return (
    <CTASection
      variant="navy"
      title="Ready to Work with EaseOrigin?"
      description="Our team is ready to support your agency's next technology initiative, from cloud modernization to cybersecurity, program delivery, and data strategy."
      primaryCta={{ href: "/solutions", label: "View Solutions" }}
      secondaryCta={{ href: "/contact", label: "Contact Us" }}
    />
  );
}

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-surface">
      <main>
        <PageHero
          badge="Past Performance"
          title="Case Studies"
          description="Discover how EaseOrigin delivers impactful technology solutions for government agencies and prime contractors."
          backgroundImage={{ src: "/images/case-studies-hero.jpg", alt: "Technology case studies and project delivery" }}
        />
        <CaseStudiesGrid />
        <CaseStudiesCTA />
      </main>
    </div>
  );
}
