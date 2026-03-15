"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Handshake, Award } from "lucide-react";
import { Section } from "@/components/ui/section";

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
    <Section className="relative overflow-hidden border-b border-gray-200">
      {/* Government building photo — very subtle background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url('images/capitol-building.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center top",
          opacity: 0.12,
        }}
      />
      {/* Gradient wash over photo to keep text readable */}
      <div className="absolute inset-0 bg-linear-to-br from-slate-50/90 via-blue-50/85 to-indigo-50/80 pointer-events-none" />

      <div className="relative z-10 grid md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.07)] border border-white hover:shadow-[0_8px_30px_-4px_rgba(30,58,95,0.15)] transition-shadow duration-300"
          >
            <div className="w-14 h-14 rounded-lg bg-blue-50 flex items-center justify-center mb-6">
              <feature.icon className="h-7 w-7 text-eo-blue" />
            </div>
            <h3 className="text-xl font-bold text-eo-navy mb-3">{feature.title}</h3>
            <p className="text-gray-600 leading-relaxed">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
