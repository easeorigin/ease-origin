"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Section } from "@/components/ui/section";
import { CaseStudyCard } from "@/components/case-study-card";
import { caseStudies } from "@/data/case-studies";
import { WordReveal } from "@/components/word-reveal";
import { NetworkParticles } from "@/components/ui/network-particles";

export function CaseStudies() {
  const [featured] = useState(() => {
  const pool = caseStudies.filter((cs) => cs.featured);
  const shuffled = [...pool].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, 3);
});

  return (
    <Section id="case-studies" className="relative overflow-hidden">
      {/* Animated network background */}
      <div className="absolute inset-0 pointer-events-none">
        <NetworkParticles
          particleCount={40}
          speed={0.2}
          connectionDistance={130}
          particleColor="rgba(212, 175, 55, 0.25)"
          lineColor="rgba(30, 58, 95, 0.12)"
        />
      </div>
      {/* Warm gradient wash */}
      <div className="absolute inset-0 bg-linear-to-br from-white/92 via-amber-50/85 to-blue-50/78 dark:from-gray-900/92 dark:via-gray-900/85 dark:to-gray-800/78 pointer-events-none" />
      {/* Decorative corner glows */}
      <div className="absolute -top-20 -right-20 w-125 h-125 bg-linear-to-bl from-yellow-100/25 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-100 h-100 bg-linear-to-tr from-blue-100/15 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col md:flex-row justify-between items-end mb-12">
        <div className="max-w-2xl mb-6 md:mb-0">
          <h2 className="text-eo-gold font-semibold tracking-wider uppercase text-sm mb-3">
            Proven Success
          </h2>
          <WordReveal text="Delivering Results for Our Clients" as="h3" className="text-3xl md:text-4xl font-bold text-text-primary" />
        </div>
        <Link href="/case-studies">
          <span className="hidden md:inline-flex items-center text-text-primary font-semibold hover:text-eo-blue transition-colors cursor-pointer group">
            View all case studies
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </span>
        </Link>
      </div>

      <div className="relative z-10 grid md:grid-cols-3 gap-8">
        {featured.map((study, index) => (
          <CaseStudyCard key={study.slug} study={study} index={index} />
        ))}
      </div>

      <div className="mt-8 md:hidden relative z-10">
        <Link href="/case-studies">
          <span className="inline-flex items-center text-text-primary font-semibold hover:text-eo-blue transition-colors cursor-pointer">
            View all case studies <ArrowRight className="ml-2 h-4 w-4" />
          </span>
        </Link>
      </div>
    </Section>
  );
}
