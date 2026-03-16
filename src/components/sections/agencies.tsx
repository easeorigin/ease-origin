"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Section } from "@/components/ui/section";
import { governmentAgencies, industryPartners } from "@/data/agencies";
import { fadeInUpWhileVisible } from "@/lib/animations";

function AgencyLogo({ src, alt, abbr, className }: { src: string; alt: string; abbr: string; className: string }) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <span className="text-2xl font-black text-white/40 group-hover:text-eo-gold transition-colors duration-300">
        {abbr}
      </span>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={56}
      height={56}
      className={className}
      onError={() => setHasError(true)}
    />
  );
}

function PartnerLogo({ src, alt, name, className }: { src: string; alt: string; name: string; className: string }) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <span className="text-sm font-bold text-white/40 group-hover:text-blue-300 transition-colors duration-300 text-center">
        {name}
      </span>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={80}
      height={32}
      className={className}
      onError={() => setHasError(true)}
    />
  );
}

export function Agencies() {
  return (
    <Section className="relative overflow-hidden border-y border-gray-200 dark:border-gray-800">
      <div className="absolute inset-0 bg-linear-to-br from-[#0A1628] via-[#0D1F3C] to-[#1E3A5F] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-100 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-0 w-75 h-75 bg-yellow-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Where Our Work Makes an Impact</h2>
        <p className="text-blue-200/70">Delivering technology solutions across government agencies and private sector organizations through subcontracting and direct engagements.</p>
      </div>

      {/* Government Agencies */}
      <div className="relative z-10 mb-10">
        <p className="text-sm font-semibold uppercase tracking-widest text-eo-gold mb-4 text-center">Government Agencies</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {governmentAgencies.map((agency, index) => (
            <motion.div
              key={index}
              {...fadeInUpWhileVisible}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="group relative flex flex-col items-center justify-center p-4 h-28 bg-white/5 border border-white/10 rounded-xl cursor-default hover:bg-white/10 hover:border-eo-gold/50 hover:shadow-[0_0_20px_rgba(212,175,55,0.1)] transition-all duration-300"
            >
              <AgencyLogo
                src={agency.logo}
                alt={agency.name}
                abbr={agency.abbr}
                className="h-14 w-auto object-contain brightness-0 invert opacity-60 group-hover:opacity-100 transition-opacity duration-300"
              />
              <span className="text-xs text-white/30 mt-2 group-hover:text-white/60 transition-colors duration-300">
                {agency.abbr}
              </span>

              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-white text-eo-navy text-xs font-medium rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none z-10">
                {agency.name}
                <div className="absolute -top-1 left-1/2 -translate-x-1/2 border-solid border-b-white border-b-[6px] border-x-transparent border-x-[6px] border-t-0"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <p className="relative z-10 text-[10px] text-white/20 text-center mt-4 max-w-2xl mx-auto leading-relaxed">
        Agency names are used for identification purposes only and do not imply endorsement.
      </p>

      {/* Industry Partners - Infinite Marquee */}
      <div className="relative z-10 mt-10">
        <p className="text-sm font-semibold uppercase tracking-widest text-blue-300/60 mb-4 text-center">Industry Partners</p>
        <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex gap-6 w-max animate-marquee hover:[animation-play-state:paused]">
            {[...industryPartners, ...industryPartners].map((partner, index) => (
              <div
                key={`${partner.id}-${index}`}
                className="group relative flex flex-col items-center justify-center p-4 h-24 w-40 shrink-0 bg-white/5 border border-white/10 rounded-xl cursor-default hover:bg-white/10 hover:border-blue-400/30 hover:shadow-[0_0_20px_rgba(96,165,250,0.1)] transition-all duration-300"
              >
                <PartnerLogo
                  src={partner.logo}
                  alt={partner.name}
                  name={partner.name}
                  className="h-8 w-auto object-contain brightness-0 invert opacity-50 group-hover:opacity-90 transition-opacity duration-300"
                />
                <span className="text-[10px] text-white/25 mt-1.5 group-hover:text-white/50 transition-colors duration-300">
                  {partner.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
