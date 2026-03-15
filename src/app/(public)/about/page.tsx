"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ShieldCheck, Users, Lightbulb, Star,
  ArrowRight, Cloud, Lock, BarChart3, Layers,
  CheckCircle2, Building2
} from "lucide-react";
import { Section } from "@/components/ui/section";

// ─── Hero ─────────────────────────────────────────────────────────────────────

function AboutHero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-28 overflow-hidden bg-tg-navy text-white">
      {/* Grid texture */}
      <div
        className="absolute inset-0 z-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />
      {/* Glow orbs */}
      <div className="absolute top-0 right-0 w-175 h-175 bg-tg-blue rounded-full blur-[180px] opacity-20 translate-x-1/3 -translate-y-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-125 h-125 bg-tg-gold rounded-full blur-[200px] opacity-[0.05] pointer-events-none" />

      {/* Abstract circuit lines */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.04] pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <line x1="0" y1="30%" x2="100%" y2="30%" stroke="white" strokeWidth="0.5" />
        <line x1="0" y1="60%" x2="100%" y2="60%" stroke="white" strokeWidth="0.5" />
        <line x1="20%" y1="0" x2="20%" y2="100%" stroke="white" strokeWidth="0.5" />
        <line x1="60%" y1="0" x2="60%" y2="100%" stroke="white" strokeWidth="0.5" />
        <line x1="85%" y1="0" x2="85%" y2="100%" stroke="white" strokeWidth="0.5" />
        <circle cx="20%" cy="30%" r="4" fill="none" stroke="white" strokeWidth="1" />
        <circle cx="60%" cy="60%" r="4" fill="none" stroke="white" strokeWidth="1" />
        <circle cx="85%" cy="30%" r="4" fill="none" stroke="white" strokeWidth="1" />
      </svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-sm font-medium text-tg-gold mb-6">
            <Building2 className="h-3.5 w-3.5" />
            Est. 2017 · Dallas, TX
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.06] mb-6">
            About EaseOrigin
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
            Delivering trusted technology consulting services that help government agencies modernize systems, strengthen security, and drive mission success.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Who We Are ───────────────────────────────────────────────────────────────

function WhoWeAre() {
  const capabilities = [
    { icon: Cloud,      label: "Cloud Infrastructure" },
    { icon: Lock,       label: "Cybersecurity"         },
    { icon: Layers,     label: "Enterprise Platforms"  },
    { icon: BarChart3,  label: "Data & Analytics"      },
  ];

  return (
    <Section className="bg-white border-b border-gray-100">
      <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-tg-gold mb-2">Our Story</p>
          <h2 className="text-3xl md:text-4xl font-bold text-tg-navy mb-6 leading-tight">Who We Are</h2>
          <p className="text-gray-600 leading-relaxed mb-4 text-lg">
            EaseOrigin is a technology consulting firm that partners with government agencies and prime contractors to deliver specialized IT expertise across mission-critical initiatives.
          </p>
          <p className="text-gray-500 leading-relaxed mb-8">
            Our consultants support federal programs through deep expertise in cloud infrastructure, cybersecurity, enterprise platforms, and advanced data analytics — helping agencies modernize systems and strengthen their technological foundation.
          </p>

          {/* Mission statement */}
          <div className="border-l-4 border-tg-gold pl-6 py-1">
            <p className="text-sm font-semibold uppercase tracking-widest text-tg-gold mb-2">Our Mission</p>
            <p className="text-tg-navy font-medium leading-relaxed">
              To be the most trusted federal IT consulting partner, delivering expertise and outcomes that strengthen the technology foundation of the U.S. government.
            </p>
          </div>
        </motion.div>

        {/* Capabilities grid */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 gap-4"
        >
          {capabilities.map(({ icon: Icon, label }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className="flex flex-col items-start gap-4 bg-slate-50 rounded-2xl border border-gray-100 p-7 hover:shadow-md hover:border-blue-100 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center">
                <Icon className="h-6 w-6 text-tg-blue" />
              </div>
              <p className="text-sm font-bold text-tg-navy">{label}</p>
            </motion.div>
          ))}
          {/* Stats box */}
          <div className="col-span-2 bg-tg-navy rounded-2xl p-7 flex gap-8">
            {[
              { num: "20+", label: "Years of experience" },
              { num: "100+", label: "Federal engagements" },
              { num: "5", label: "Core capabilities" },
            ].map(({ num, label }, i) => (
              <div key={i} className="text-center flex-1">
                <p className="text-2xl font-extrabold text-tg-gold">{num}</p>
                <p className="text-xs text-gray-400 mt-1 leading-snug">{label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

// ─── Timeline ─────────────────────────────────────────────────────────────────

const timelineItems = [
  {
    year: "2002",
    title: "Founded",
    description: "The company was founded as The Goal Inc., providing IT consulting and staffing services.",
  },
  {
    year: "2008",
    title: "INC 500 Recognition",
    description: "Recognized among the INC 500 fastest-growing private companies in the United States.",
  },
  {
    year: "2019",
    title: "Beyond Small Business",
    description: "Company transitioned beyond small business status, reflecting significant growth and maturity.",
  },
  {
    year: "2021",
    title: "Motion Recruitment Partners",
    description: "Joined Motion Recruitment Partners, expanding resources and reach across the federal market.",
  },
  {
    year: "2023",
    title: "Rebranded as EaseOrigin",
    description: "Rebranded as EaseOrigin to reflect our focused commitment to federal IT consulting and mission support.",
  },
];

function Timeline() {
  return (
    <Section className="bg-slate-50 border-b border-gray-100 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-14"
      >
        <p className="text-xs font-semibold uppercase tracking-widest text-tg-gold mb-2">Company History</p>
        <h2 className="text-3xl md:text-4xl font-bold text-tg-navy">Our Journey</h2>
      </motion.div>

      {/* Vertical timeline */}
      <div className="relative max-w-3xl mx-auto">
        {/* Vertical line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-tg-blue/30 via-tg-blue/60 to-tg-blue/10 -translate-x-1/2" />

        <div className="flex flex-col gap-0">
          {timelineItems.map((item, i) => {
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative flex ${isLeft ? "md:flex-row" : "md:flex-row-reverse"} items-start md:items-center gap-0 mb-8`}
              >
                {/* Content card */}
                <div className={`flex-1 pl-16 md:pl-0 ${isLeft ? "md:pr-10 md:text-right" : "md:pl-10"}`}>
                  <div className={`inline-block bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-md transition-shadow max-w-xs w-full ${isLeft ? "md:ml-auto" : ""}`}>
                    <span className="inline-block px-2.5 py-1 bg-blue-50 border border-blue-100 text-tg-blue text-xs font-bold rounded-full mb-3">
                      {item.year}
                    </span>
                    <h3 className="text-base font-bold text-tg-navy mb-1.5">{item.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
                  </div>
                </div>

                {/* Center dot */}
                <div className="absolute left-7 md:left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-tg-navy border-4 border-white shadow-md flex items-center justify-center shrink-0 z-10 top-6 md:top-auto">
                  <div className="w-2 h-2 rounded-full bg-tg-gold" />
                </div>

                {/* Spacer for opposite side */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

// ─── Leadership ───────────────────────────────────────────────────────────────

const leaders = [
  {
    name: "Michael Thompson",
    title: "Chief Executive Officer",
    bio: "20+ years leading federal IT consulting engagements across civilian and defense agencies. Former federal program executive with deep expertise in large-scale technology transformations.",
    initials: "MT",
    color: "bg-blue-600",
  },
  {
    name: "Sandra Williams",
    title: "Chief Operating Officer",
    bio: "Operational leader with extensive experience managing multi-million dollar federal contracts and consultant delivery programs across the DoD and civilian agency landscape.",
    initials: "SW",
    color: "bg-teal-600",
  },
  {
    name: "James Carter",
    title: "VP, Technology Solutions",
    bio: "Cloud and cybersecurity specialist with 15 years supporting federal agencies in FedRAMP authorization, cloud modernization, and security compliance programs.",
    initials: "JC",
    color: "bg-violet-600",
  },
  {
    name: "Angela Brooks",
    title: "VP, Talent & Partnerships",
    bio: "Expert in federal workforce solutions and strategic partnerships. Leads consultant recruitment, clearance support, and prime contractor relationship management.",
    initials: "AB",
    color: "bg-rose-600",
  },
];

function Leadership() {
  return (
    <Section className="bg-white border-b border-gray-100">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <p className="text-xs font-semibold uppercase tracking-widest text-tg-gold mb-2">Our Team</p>
        <h2 className="text-3xl md:text-4xl font-bold text-tg-navy">Leadership</h2>
        <p className="mt-4 text-gray-500 max-w-xl mx-auto leading-relaxed">
          Experienced leaders with deep roots in federal technology, consulting, and workforce solutions.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {leaders.map(({ name, title, bio, initials, color }, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="flex flex-col bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
          >
            {/* Avatar */}
            <div className="relative h-44 bg-slate-50 flex items-center justify-center border-b border-gray-100">
              <div className="absolute inset-0 bg-linear-to-br from-slate-50 to-blue-50/40" />
              <div className={`relative z-10 w-20 h-20 rounded-2xl ${color} flex items-center justify-center shadow-lg`}>
                <span className="text-white text-2xl font-bold">{initials}</span>
              </div>
              {/* Decorative */}
              <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/60 blur-lg" />
              <div className="absolute bottom-4 left-4 w-8 h-8 rounded-full bg-blue-100/40 blur-md" />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col grow">
              <h3 className="text-base font-bold text-tg-navy mb-0.5 group-hover:text-tg-blue transition-colors">
                {name}
              </h3>
              <p className="text-xs font-semibold text-tg-gold uppercase tracking-wider mb-3">{title}</p>
              <p className="text-sm text-gray-500 leading-relaxed">{bio}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

// ─── Values ───────────────────────────────────────────────────────────────────

const values = [
  {
    icon: ShieldCheck,
    title: "Integrity",
    description: "We build lasting relationships through transparency, trust, and ethical practices in everything we do.",
    bg: "bg-blue-50",
    border: "border-blue-100",
    iconColor: "text-tg-blue",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We work closely with agencies, contractors, and consultants to deliver successful outcomes together.",
    bg: "bg-emerald-50",
    border: "border-emerald-100",
    iconColor: "text-emerald-600",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We bring modern technology solutions and fresh thinking to complex government challenges.",
    bg: "bg-amber-50",
    border: "border-amber-100",
    iconColor: "text-amber-600",
  },
  {
    icon: Star,
    title: "Excellence",
    description: "We strive to deliver high-quality consulting services that exceed expectations on every engagement.",
    bg: "bg-violet-50",
    border: "border-violet-100",
    iconColor: "text-violet-600",
  },
];

function OurValues() {
  return (
    <Section className="bg-slate-50 border-b border-gray-100">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <p className="text-xs font-semibold uppercase tracking-widest text-tg-gold mb-2">What Drives Us</p>
        <h2 className="text-3xl md:text-4xl font-bold text-tg-navy">Our Values</h2>
        <p className="mt-4 text-gray-500 max-w-xl mx-auto leading-relaxed">
          Our values shape how we engage with clients, partners, and the consultants who carry our mission forward.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {values.map(({ icon: Icon, title, description, bg, border, iconColor }, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="flex flex-col bg-white rounded-2xl border border-gray-100 shadow-sm p-7 hover:shadow-md transition-shadow"
          >
            <div className={`w-12 h-12 rounded-xl ${bg} ${border} border flex items-center justify-center mb-5`}>
              <Icon className={`h-6 w-6 ${iconColor}`} />
            </div>
            <h3 className="text-base font-bold text-tg-navy mb-2">{title}</h3>
            <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

// ─── Impact ───────────────────────────────────────────────────────────────────

const impactStats = [
  { num: "20+", label: "Years Supporting Federal IT" },
  { num: "100+", label: "Federal Engagements Delivered" },
  { num: "50+", label: "Active Consultants Placed" },
  { num: "10+", label: "Federal Agencies Supported" },
];

const impactPoints = [
  "Strengthening national cybersecurity infrastructure",
  "Modernizing mission-critical agency systems",
  "Supporting federal cloud adoption at scale",
  "Advancing data-driven decision making in government",
];

function Impact() {
  return (
    <Section className="bg-white border-b border-gray-100">
      <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-tg-gold mb-2">Our Reach</p>
          <h2 className="text-3xl md:text-4xl font-bold text-tg-navy mb-8">Supporting Mission-Critical Technology</h2>

          <div className="grid grid-cols-2 gap-4">
            {impactStats.map(({ num, label }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-tg-navy rounded-2xl p-6 text-center"
              >
                <p className="text-3xl font-extrabold text-tg-gold mb-1">{num}</p>
                <p className="text-xs text-gray-400 leading-snug">{label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Points */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col gap-4"
        >
          <p className="text-gray-600 leading-relaxed mb-4">
            EaseOrigin consultants support programs that strengthen national infrastructure, enhance cybersecurity, and modernize federal systems — making government technology more resilient, efficient, and mission-ready.
          </p>
          {impactPoints.map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex items-center gap-3 bg-slate-50 rounded-xl border border-gray-100 px-5 py-4"
            >
              <CheckCircle2 className="h-5 w-5 text-tg-gold shrink-0" />
              <span className="text-sm font-medium text-tg-navy">{point}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}

// ─── CTA ──────────────────────────────────────────────────────────────────────

function AboutCTA() {
  return (
    <Section className="bg-tg-navy">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
        className="max-w-2xl mx-auto text-center text-white"
      >
        <p className="text-xs font-semibold uppercase tracking-widest text-tg-gold mb-3">Partner With Us</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-5">Work With EaseOrigin</h2>
        <p className="text-gray-300 leading-relaxed mb-8">
          Whether you're a government agency, prime contractor, or consultant, we would love to partner with you on your next federal technology initiative.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/solutions">
            <span className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-white text-tg-navy font-bold text-sm hover:bg-gray-100 transition-all shadow-md cursor-pointer">
              View Solutions <ArrowRight className="h-4 w-4" />
            </span>
          </Link>
          <Link href="/contact">
            <span className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg border-2 border-white/25 text-white font-bold text-sm hover:bg-white/10 transition-all cursor-pointer">
              Contact Us
            </span>
          </Link>
        </div>
      </motion.div>
    </Section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <AboutHero />
        <WhoWeAre />
        <Timeline />
        <Leadership />
        <OurValues />
        <Impact />
        <AboutCTA />
      </main>
    </div>
  );
}
