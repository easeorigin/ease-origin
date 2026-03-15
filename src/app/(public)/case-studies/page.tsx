"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { CaseStudyCard } from "@/components/case-study-card";
import { caseStudies, type Sector } from "@/data/case-studies";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

function CaseStudiesHero() {
  return (
    <section className="relative pt-32 pb-16 lg:pt-44 lg:pb-20 overflow-hidden bg-eo-navy text-white">
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-eo-blue rounded-full blur-[140px] opacity-25 translate-x-1/3 -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-eo-gold rounded-full blur-[160px] opacity-[0.06] -translate-x-1/3 translate-y-1/4" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-sm font-medium text-eo-gold mb-6">
            <span className="flex h-2 w-2 rounded-full bg-eo-gold animate-pulse" />
            Past Performance
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.08] mb-5">
            Case Studies
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Discover how EaseOrigin delivers impactful technology solutions for government agencies and prime contractors.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

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
    <Section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 border-b border-gray-100">
      {/* Decorative glow orbs */}
      <div className="absolute -top-20 -right-20 w-72 h-72 bg-blue-100/15 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-eo-gold/10 rounded-full blur-[80px] pointer-events-none" />

      <div className="text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-sm font-semibold uppercase tracking-widest text-eo-gold mb-2">Our Work</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-eo-navy">Proven Delivery. Measurable Results.</h3>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto leading-relaxed">
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
              : "bg-white text-gray-600 border border-gray-200 hover:border-eo-navy hover:text-eo-navy"
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
                : "bg-white text-gray-600 border border-gray-200 hover:border-eo-navy hover:text-eo-navy"
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
    <Section className="relative overflow-hidden bg-gradient-to-br from-eo-navy via-eo-navy to-[#0f2035]">
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)", backgroundSize: "50px 50px" }} />
      {/* Blue glow orb */}
      <div className="absolute -top-20 -right-20 w-72 h-72 bg-eo-blue/20 rounded-full blur-[80px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
        className="relative z-10 max-w-2xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to Work with EaseOrigin?
        </h2>
        <p className="text-gray-300 leading-relaxed mb-8">
          Our team is ready to support your agency&apos;s next technology initiative, from cloud modernization to cybersecurity, program delivery, and data strategy.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/solutions">
            <span className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-eo-gold text-eo-navy font-bold text-sm hover:bg-yellow-400 transition-all shadow-md cursor-pointer">
              View Solutions <ArrowRight className="h-4 w-4" />
            </span>
          </Link>
          <Link href="/contact">
            <span className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg border-2 border-white/25 text-white font-bold text-sm hover:bg-white/10 transition-all cursor-pointer">
              Contact Us
            </span>
          </Link>
        </div>
      </motion.div>
    </Section>
  );
}

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <CaseStudiesHero />
        <CaseStudiesGrid />
        <CaseStudiesCTA />
      </main>
    </div>
  );
}
