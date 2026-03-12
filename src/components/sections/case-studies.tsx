"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Section } from "@/components/ui/section";
import { CaseStudyCard } from "@/components/case-study-card";
import { caseStudies } from "@/data/case-studies";

export function CaseStudies() {
  const featured = caseStudies.slice(0, 3);

  return (
    <Section id="case-studies" className="relative overflow-hidden">
      {/* DC skyline / monument photo — very subtle */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url("images/dc-skyline-monument.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center bottom",
          opacity: 0.07,
        }}
      />
      {/* Warm gradient wash */}
      <div className="absolute inset-0 bg-linear-to-br from-white/97 via-amber-50/90 to-blue-50/85 pointer-events-none" />
      {/* Decorative corner glows */}
      <div className="absolute -top-20 -right-20 w-125 h-125 bg-linear-to-bl from-yellow-100/25 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-100 h-100 bg-linear-to-tr from-blue-100/15 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col md:flex-row justify-between items-end mb-12">
        <div className="max-w-2xl mb-6 md:mb-0">
          <h2 className="text-tg-gold font-semibold tracking-wider uppercase text-sm mb-3">
            Proven Success
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-tg-navy">
            Delivering Results for Federal Clients
          </h3>
        </div>
        <Link href="/case-studies">
          <span className="hidden md:inline-flex items-center text-tg-navy font-semibold hover:text-tg-blue transition-colors cursor-pointer group">
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
          <span className="inline-flex items-center text-tg-navy font-semibold hover:text-tg-blue transition-colors cursor-pointer">
            View all case studies <ArrowRight className="ml-2 h-4 w-4" />
          </span>
        </Link>
      </div>
    </Section>
  );
}
