"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight, Heart, Users, DollarSign, Shield, ChevronDown
} from "lucide-react";
import { Section } from "@/components/ui/section";
import { jobs } from "@/data/jobs";

function CareersHero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-24 overflow-hidden bg-eo-navy text-white">
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-eo-blue rounded-full blur-[160px] opacity-20 translate-x-1/3 -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-eo-gold rounded-full blur-[160px] opacity-[0.06] -translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-sm font-medium text-eo-gold mb-6">
              <span className="flex h-2 w-2 rounded-full bg-eo-gold animate-pulse" />
              {jobs.length} Open Position{jobs.length !== 1 ? "s" : ""}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.08] mb-5">
              Careers at EaseOrigin
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8 max-w-2xl">
              Join a team of highly skilled consultants delivering mission-critical technology solutions for government agencies and private sector organizations nationwide.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/careers/jobs">
                <span className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-eo-gold text-eo-navy font-bold text-sm hover:bg-yellow-400 transition-all shadow-lg cursor-pointer">
                  View Open Positions <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
              <Link href="/careers/submit-resume">
                <span className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg border-2 border-white/25 text-white font-bold text-sm hover:bg-white/10 transition-all cursor-pointer">
                  Submit Resume
                </span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 opacity-40">
        <ChevronDown className="h-5 w-5 text-white animate-bounce" />
      </div>
    </section>
  );
}

const benefits = [
  {
    icon: Heart,
    title: "Meaningful Work",
    description:
      "Support technology initiatives that directly impact government operations, enterprise systems, and public services at a national scale.",
    color: "text-rose-500",
    bg: "bg-rose-50",
    border: "border-rose-100",
  },
  {
    icon: Users,
    title: "Consultant Support",
    description:
      "We partner with our consultants to provide career guidance, mentorship, and professional development at every stage.",
    color: "text-eo-blue",
    bg: "bg-blue-50",
    border: "border-blue-100",
  },
  {
    icon: DollarSign,
    title: "Competitive Benefits",
    description:
      "Competitive compensation, benefits packages, and long-term placement opportunities on government and commercial programs.",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    border: "border-emerald-100",
  },
  {
    icon: Shield,
    title: "Clearance Support",
    description:
      "We guide consultants through the security clearance process and connect cleared professionals with high-value opportunities.",
    color: "text-eo-gold",
    bg: "bg-amber-50",
    border: "border-amber-100",
  },
];

function WhyWorkWithUs() {
  return (
    <Section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20 border-b border-gray-100">
      {/* Subtle glows */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-blue-100/15 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-eo-gold/10 rounded-full blur-[80px] pointer-events-none" />
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <p className="text-sm font-semibold uppercase tracking-widest text-eo-gold mb-2">Why EaseOrigin</p>
        <h2 className="text-3xl md:text-4xl font-bold text-eo-navy">Why Work With Us</h2>
        <p className="mt-4 text-gray-500 max-w-xl mx-auto leading-relaxed">
          We believe great technology starts with great people. Here's what makes EaseOrigin different.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {benefits.map(({ icon: Icon, title, description, color, bg, border }, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.1 }}
            className="flex flex-col bg-white rounded-2xl border border-gray-100 shadow-sm p-7 hover:shadow-md transition-shadow"
          >
            <div className={`w-12 h-12 rounded-xl ${bg} ${border} border flex items-center justify-center mb-5`}>
              <Icon className={`h-6 w-6 ${color}`} />
            </div>
            <h3 className="text-base font-bold text-eo-navy mb-2">{title}</h3>
            <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function CareersCTA() {
  return (
    <Section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-blue-50/15 to-slate-50 border-b border-gray-100">
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-blue-100/15 rounded-full blur-[80px] pointer-events-none" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
        className="relative z-10 max-w-3xl mx-auto"
      >
        <div className="bg-eo-navy rounded-3xl p-10 md:p-14 relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
          <div className="absolute top-0 right-0 w-64 h-64 bg-eo-blue/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 text-center text-white">
            <p className="text-sm font-semibold uppercase tracking-widest text-eo-gold mb-3">Join Our Team</p>
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              Explore Opportunities With EaseOrigin
            </h2>
            <p className="text-gray-300 leading-relaxed mb-8 max-w-xl mx-auto">
              We're actively hiring technology professionals across cloud, cybersecurity, data, AI/ML, and DevOps disciplines.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/careers/jobs">
                <span className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-eo-gold text-eo-navy font-bold text-sm hover:bg-yellow-400 transition-all shadow-md cursor-pointer">
                  View Open Positions <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
              <Link href="/careers/submit-resume">
                <span className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg border-2 border-white/25 text-white font-bold text-sm hover:bg-white/10 transition-all cursor-pointer">
                  Submit Resume
                </span>
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <CareersHero />
        <WhyWorkWithUs />
        <CareersCTA />
      </main>
    </div>
  );
}
