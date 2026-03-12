"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";

export function Agencies() {
  const agencies = [
    "Department of Defense (DoD)",
    "Department of Homeland Security (DHS)",
    "Veterans Affairs (VA)",
    "Health and Human Services (HHS)",
    "Department of Justice (DOJ)",
    "General Services Administration (GSA)",
    "Department of Energy (DoE)",
    "NASA"
  ];

  return (
    <Section className="relative overflow-hidden border-y border-gray-200">
      {/* Deep navy-to-blue gradient with gold shimmer accent */}
      <div className="absolute inset-0 bg-linear-to-br from-[#0A1628] via-[#0D1F3C] to-[#1E3A5F] pointer-events-none" />
      {/* Subtle radial glow centers */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-100 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-0 w-75 h-75 bg-yellow-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Trusted by Federal Agencies</h2>
        <p className="text-blue-200/70">Supporting the agencies that serve our nation through prime contractor partnerships and direct engagements.</p>
      </div>

      <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {agencies.map((agency, index) => {
          // Extract abbreviation for the box display
          const abbrMatch = agency.match(/\(([^)]+)\)/);
          const abbr = abbrMatch ? abbrMatch[1] : agency;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="group relative flex items-center justify-center p-6 h-28 bg-white/5 border border-white/10 rounded-xl cursor-default hover:bg-white/10 hover:border-tg-gold/50 hover:shadow-[0_0_20px_rgba(212,175,55,0.1)] transition-all duration-300"
            >
              <span className="text-2xl font-black text-white/40 group-hover:text-tg-gold transition-colors duration-300">
                {abbr}
              </span>
              
              {/* Tooltip for full name on hover */}
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-white text-tg-navy text-xs font-medium rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none z-10">
                {agency}
                <div className="absolute -top-1 left-1/2 -translate-x-1/2 border-solid border-b-white border-b-[6px] border-x-transparent border-x-[6px] border-t-0"></div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
