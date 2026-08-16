"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Handshake, Award } from "lucide-react";
import { Section } from "@/components/ui/section";
import { WordReveal } from "@/components/word-reveal";
import { fadeInUpWhileVisible } from "@/lib/animations";
import { GridPattern } from "@/components/ui/grid-pattern";

export function Credibility() {
  const features = [
    {
      icon: ShieldCheck,
      title: "14+ Years of Hands-On Engineering",
      description: "Cloud, security, platform engineering, and program delivery across government and enterprise environments."
    },
    {
      icon: Handshake,
      title: "Prime Contractor Delivery",
      description: "Federal work delivered as a subcontractor under established primes, with a partner network we draw on when a program needs scope we do not cover ourselves."
    },
    {
      icon: Award,
      title: "Certified Practice",
      description: "Hands-on across AWS, Azure, GCP, and Oracle Cloud, plus enterprise SaaS platforms including ServiceNow, Salesforce, SAP, and Dynamics 365. Certifications are held on AWS and Azure, plus CompTIA Security+; the rest is delivery experience rather than a certificate."
    }
  ];

  return (
    <Section className="relative overflow-hidden border-b border-border-default">
      {/* Animated tech grid background */}
      <GridPattern
        cellSize={48}
        lineColor="rgba(30, 58, 95, 0.06)"
        glowColor="rgba(212, 175, 55, 0.04)"
      />
      {/* Gradient wash over photo to keep text readable */}
      <div className="absolute inset-0 bg-linear-to-br from-slate-50/90 via-blue-50/85 to-indigo-50/80 dark:from-gray-900/90 dark:via-gray-900/85 dark:to-gray-800/80 pointer-events-none" />

      <div className="relative z-10 grid md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            {...fadeInUpWhileVisible}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-surface/80 backdrop-blur-sm rounded-xl p-8 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.07)] border border-border-subtle hover:shadow-[0_8px_30px_-4px_rgba(30,58,95,0.15)] transition-shadow duration-300"
          >
            <div className="w-14 h-14 rounded-lg bg-blue-50 dark:bg-blue-950 flex items-center justify-center mb-6">
              <feature.icon className="h-7 w-7 text-eo-blue" />
            </div>
            <WordReveal text={feature.title} as="h3" className="text-xl font-bold text-text-primary mb-3" />
            <p className="text-text-tertiary leading-relaxed">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
