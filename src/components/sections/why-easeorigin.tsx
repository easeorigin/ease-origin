"use client";

import { motion } from "framer-motion";
import { UserCheck, Zap, ShieldCheck, Layers } from "lucide-react";
import { Section } from "@/components/ui/section";
import { fadeInUpWhileVisible } from "@/lib/animations";

const differentiators = [
  {
    icon: UserCheck,
    title: "Direct Access to Senior Talent",
    description:
      "No layers of management. Work directly with experienced engineers and consultants who understand your mission.",
    bg: "bg-blue-50 dark:bg-blue-950",
    border: "border-blue-100 dark:border-blue-900",
    iconColor: "text-eo-blue",
  },
  {
    icon: Zap,
    title: "Small Business Agility",
    description:
      "Move faster with streamlined processes, flexible engagement models, and rapid onboarding.",
    bg: "bg-amber-50 dark:bg-amber-950",
    border: "border-amber-100 dark:border-amber-900",
    iconColor: "text-amber-600",
  },
  {
    icon: ShieldCheck,
    title: "Cleared Workforce",
    description:
      "Our team holds active security clearances, ready for classified and sensitive government environments.",
    bg: "bg-emerald-50 dark:bg-emerald-950",
    border: "border-emerald-100 dark:border-emerald-900",
    iconColor: "text-emerald-600",
  },
  {
    icon: Layers,
    title: "Full-Stack Expertise",
    description:
      "From cloud infrastructure to program management, one partner covers your entire technology lifecycle.",
    bg: "bg-violet-50 dark:bg-violet-950",
    border: "border-violet-100 dark:border-violet-900",
    iconColor: "text-violet-600",
  },
];

export function WhyEaseOrigin() {
  return (
    <Section className="relative overflow-hidden bg-gradient-to-br from-slate-50 dark:from-gray-900 via-blue-50/30 dark:via-gray-900/30 to-indigo-50/20 dark:to-gray-800/20 border-b border-border-subtle">
      {/* Decorative glows */}
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-eo-gold/[0.06] rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-100/20 rounded-full blur-[100px] pointer-events-none" />

      <motion.div
        {...fadeInUpWhileVisible}
        className="text-center mb-14"
      >
        <p className="text-xs font-semibold uppercase tracking-widest text-eo-gold mb-2">
          Our Advantage
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
          Why EaseOrigin
        </h2>
      </motion.div>

      <div className="relative z-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {differentiators.map(
          ({ icon: Icon, title, description, bg, border, iconColor }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col bg-surface rounded-2xl border border-border-subtle shadow-sm p-7 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <div
                className={`w-12 h-12 rounded-xl ${bg} ${border} border flex items-center justify-center mb-5`}
              >
                <Icon className={`h-6 w-6 ${iconColor}`} />
              </div>
              <h3 className="text-base font-bold text-text-primary mb-2">
                {title}
              </h3>
              <p className="text-sm text-text-tertiary leading-relaxed">
                {description}
              </p>
            </motion.div>
          )
        )}
      </div>
    </Section>
  );
}
