"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import {
  governmentAgencies,
  primeContractors,
  commercialOrganizations,
} from "@/data/agencies";
import { attributionNotice, trademarkNotice } from "@/data/company-info";
import { fadeInUpWhileVisible } from "@/lib/animations";

function NameGrid({
  items,
}: {
  items: { name: string; industry?: string }[];
}) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
      {items.map((item, index) => (
        <motion.div
          key={item.name}
          {...fadeInUpWhileVisible}
          transition={{ duration: 0.3, delay: Math.min(index, 8) * 0.04 }}
          className="flex flex-col items-center justify-center text-center px-4 py-3 min-h-16 bg-white/5 border border-white/10 rounded-xl"
        >
          <span className="text-sm font-medium text-white/70">{item.name}</span>
          {item.industry && (
            <span className="mt-1 text-[11px] text-white/40">{item.industry}</span>
          )}
        </motion.div>
      ))}
    </div>
  );
}

export function Agencies() {
  return (
    <Section className="relative overflow-hidden border-y border-gray-200 dark:border-gray-800">
      <div className="absolute inset-0 bg-linear-to-br from-[#0A1628] via-[#0D1F3C] to-[#1E3A5F] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-100 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-0 w-75 h-75 bg-yellow-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 text-center max-w-3xl mx-auto mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Where Our People Have Delivered
        </h2>
        <p className="text-blue-200/70">
          Cloud, platform, and security engineering across defense, federal
          civilian, and commercial programs.
        </p>
      </div>

      <div className="relative z-10 max-w-3xl mx-auto mb-10 rounded-lg border border-eo-gold/30 bg-eo-gold/5 px-5 py-4">
        <p className="text-sm text-blue-100/80 leading-relaxed">
          {attributionNotice}
        </p>
      </div>

      <div className="relative z-10 mb-10">
        <p className="text-sm font-semibold uppercase tracking-widest text-eo-gold mb-4 text-center">
          Government Agencies
        </p>
        <NameGrid items={governmentAgencies.map((a) => ({ name: a.name }))} />
      </div>

      <div className="relative z-10 mb-10">
        <p className="text-sm font-semibold uppercase tracking-widest text-blue-300/60 mb-4 text-center">
          Prime Contractors Delivered Through
        </p>
        <NameGrid items={primeContractors} />
      </div>

      <div className="relative z-10 mb-8">
        <p className="text-sm font-semibold uppercase tracking-widest text-blue-300/60 mb-4 text-center">
          Commercial Organizations
        </p>
        <NameGrid items={commercialOrganizations} />
      </div>

      <p className="relative z-10 text-xs text-white/50 text-center max-w-3xl mx-auto leading-relaxed">
        {trademarkNotice}
      </p>
    </Section>
  );
}
