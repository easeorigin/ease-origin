"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { Section } from "@/components/ui/section";
import { fadeInUpWhileVisible } from "@/lib/animations";

export function Recruitment() {
  /**
   * EaseOrigin has no open requisitions and does not carry a standing bench.
   * What it does have is a network of independent engineers and small firms it
   * teams with when a program needs scope the practice does not cover. This
   * section says that plainly instead of implying a hiring pipeline.
   */
  const points = [
    "Cloud, platform, and compliance workstreams on federal programs",
    "Specialists brought in on the scope that fits them",
    "Subcontract terms, rates agreed up front",
  ];

  return (
    <Section id="careers" className="bg-eo-navy text-white relative overflow-hidden py-20 md:py-32">
      {/* Background Graphic */}
      <div className="absolute inset-0 opacity-10">
         <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="recruitment-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#recruitment-grid)" />
          </svg>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          {...fadeInUpWhileVisible}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-eo-gold font-semibold tracking-wider uppercase text-sm mb-4">Our Network</h2>
          <h3 className="text-3xl md:text-5xl font-bold mb-6">Build With Us</h3>
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            We deliver federal scope as subcontracts and draw on a network of
            engineers and small firms to cover what a program needs. If you work
            in cloud, platform, or security engineering, we would rather know
            what you do before the work lands than after.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-12">
            {points.map((point, index) => (
              <div key={index} className="flex items-center text-sm md:text-base text-gray-200">
                <CheckCircle2 className="h-5 w-5 text-eo-gold mr-2 shrink-0" />
                <span className="text-left">{point}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/careers/submit-resume"
              className="px-8 py-4 text-base font-semibold rounded-md bg-eo-gold text-eo-navy hover:bg-white transition-colors shadow-lg"
            >
              Join Our Network
            </Link>
            <Link
              href="/program-experience"
              className="px-8 py-4 text-base font-semibold rounded-md bg-transparent border-2 border-white text-white hover:bg-white/10 transition-colors"
            >
              How We Team
            </Link>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
