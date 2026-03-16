"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Handshake, Award } from "lucide-react";
import { Section } from "@/components/ui/section";
import { WordReveal } from "@/components/word-reveal";

export function Credibility() {
  const features = [
    {
      icon: ShieldCheck,
      title: "14+ Years of IT Experience",
      description: "Delivering cloud, security, platform engineering, and program delivery solutions across government and enterprise environments."
    },
    {
      icon: Handshake,
      title: "Trusted Partnerships",
      description: "Proven relationships with prime contractors, government agencies, and commercial organizations built on reliability and results."
    },
    {
      icon: Award,
      title: "Certified Expertise",
      description: "Multi-cloud certified professionals across AWS, Azure, GCP, and Oracle Cloud with security credentials for regulated government and commercial environments."
    }
  ];

  return (
    <Section className="relative overflow-hidden border-b border-border-default">
      {/* Government building photo — very subtle background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url('/images/capitol-building.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center top",
          opacity: 0.12,
        }}
      />
      {/* Gradient wash over photo to keep text readable */}
      <div className="absolute inset-0 bg-linear-to-br from-slate-50/90 via-blue-50/85 to-indigo-50/80 dark:from-gray-900/90 dark:via-gray-900/85 dark:to-gray-800/80 pointer-events-none" />

      <div className="relative z-10 grid md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
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
