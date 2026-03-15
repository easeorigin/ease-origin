"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Section } from "@/components/ui/section";
import Link from "next/link";

export function Recruitment() {
  const benefits = [
    "Competitive compensation & comprehensive benefits",
    "Exciting variety of high-impact federal projects",
    "Dedicated career growth and clearance support"
  ];

  return (
    <Section id="careers" className="bg-tg-navy text-white relative overflow-hidden py-20 md:py-32">
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-tg-gold font-semibold tracking-wider uppercase text-sm mb-4">Careers</h2>
          <h3 className="text-3xl md:text-5xl font-bold mb-6">Join Our Team of Experts</h3>
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            EaseOrigin supports consultants throughout their careers with strong partnerships, competitive benefits, and opportunities to work on exciting, mission-critical federal projects.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center text-sm md:text-base text-gray-200">
                <CheckCircle2 className="h-5 w-5 text-tg-gold mr-2 shrink-0" />
                <span className="text-left">{benefit}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/careers"
              className="px-8 py-4 text-base font-semibold rounded-md bg-tg-gold text-tg-navy hover:bg-white transition-colors shadow-lg"
            >
              View Open Positions
            </Link>
            <Link
              href="/careers/submit-resume"
              className="px-8 py-4 text-base font-semibold rounded-md bg-transparent border-2 border-white text-white hover:bg-white/10 transition-colors"
            >
              Submit Resume
            </Link>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
