"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  ShieldCheck, Users, Lightbulb, Star,
  Cloud, Lock, BarChart3, Layers,
  CheckCircle2, Award, Code,
  Linkedin, Mail, ClipboardList, Workflow, Building2
} from "lucide-react";
import { Section } from "@/components/ui/section";
import { PageHero } from "@/components/shared/page-hero";
import { CTASection } from "@/components/shared/cta-section";
import { AnimatedCounter } from "@/components/animated-counter";
import { companyInfo } from "@/data/company-info";
import { fadeInUpWhileVisible, fadeInUpWhileVisibleLarge, staggeredFadeInUp } from "@/lib/animations";

// ─── Who We Are ───────────────────────────────────────────────────────────────

function WhoWeAre() {
  const capabilities = [
    { icon: Cloud,          label: "Cloud Infrastructure" },
    { icon: Lock,           label: "Cybersecurity"        },
    { icon: Layers,         label: "Enterprise Platforms" },
    { icon: BarChart3,      label: "Data & Analytics"     },
    { icon: ClipboardList,  label: "Program Management"   },
    { icon: Workflow,       label: "Agile Delivery"       },
  ];

  return (
    <Section className="relative overflow-hidden bg-linear-to-br from-slate-50 via-blue-50/40 to-indigo-50/30 dark:from-gray-900 dark:via-gray-900/40 dark:to-gray-800/30 border-b border-border-subtle">
      {/* Subtle glow */}
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-blue-100/20 rounded-full blur-[100px] pointer-events-none" />
      {/* Gold glow orb */}
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-amber-100/15 rounded-full blur-[80px] pointer-events-none" />
      <div className="relative z-10 grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-eo-gold mb-2">Our Story</p>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6 leading-tight">Who We Are</h2>
          <p className="text-text-tertiary leading-relaxed mb-4 text-lg">
            EaseOrigin is a technology consulting firm that partners with government agencies, prime contractors, and private sector organizations to deliver specialized IT expertise across mission-critical initiatives.
          </p>
          <p className="text-text-tertiary leading-relaxed mb-8">
            Our team delivers deep expertise in cloud infrastructure, cybersecurity, enterprise platforms, data analytics, and program delivery, helping organizations across government and industry modernize systems and strengthen their technological foundation.
          </p>

          {/* Mission statement */}
          <div className="border-l-4 border-eo-gold pl-6 py-1">
            <p className="text-sm font-semibold uppercase tracking-widest text-eo-gold mb-2">Our Mission</p>
            <p className="text-text-primary font-medium leading-relaxed">
              To be the most trusted technology consulting partner, delivering expertise and outcomes that strengthen the technology foundation of organizations across government and industry.
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
              {...staggeredFadeInUp(i)}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col items-start gap-4 bg-surface-muted rounded-2xl border border-border-subtle p-7 hover:shadow-md hover:border-blue-100 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950 border border-blue-100 dark:border-blue-900 flex items-center justify-center">
                <Icon className="h-6 w-6 text-eo-blue" />
              </div>
              <p className="text-sm font-bold text-text-primary">{label}</p>
            </motion.div>
          ))}
          {/* Stats box */}
          <div className="col-span-2 bg-eo-navy rounded-2xl p-7 flex gap-8">
            {[
              { num: "14+", label: "Years of IT experience" },
              { num: "14", label: "Organizations served" },
              { num: "30+", label: "Team certifications" },
            ].map(({ num, label }, i) => (
              <div key={i} className="text-center flex-1">
                <AnimatedCounter value={num} className="text-2xl font-extrabold text-eo-gold" />
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
    year: "2012",
    title: "Engineering Roots",
    description: "Our journey began in enterprise technology, building deep expertise in infrastructure, automation, and large-scale systems at one of the world's leading technology companies.",
  },
  {
    year: "2016",
    title: "Cloud & Healthcare",
    description: "Expanded into cloud engineering and regulated environments, developing critical capabilities in compliant infrastructure and healthcare technology systems.",
  },
  {
    year: "2018",
    title: "Enterprise Consulting",
    description: "Transitioned to cloud consulting, designing scalable architectures and infrastructure automation for organizations ranging from startups to large enterprises.",
  },
  {
    year: "2019",
    title: "EaseOrigin Founded",
    description: "Launched EaseOrigin to deliver enterprise-grade technology consulting to both government agencies and private sector organizations, bridging commercial innovation with mission-critical reliability.",
  },
  {
    year: "2021",
    title: "Scaling Impact",
    description: "Took on platform engineering leadership at enterprise scale, managing complex multi-cloud environments with comprehensive containerization and observability.",
  },
];

function Timeline() {
  return (
    <Section className="relative overflow-hidden bg-linear-to-b from-slate-50 dark:from-gray-900 via-white dark:via-gray-900 to-slate-50 dark:to-gray-900 border-b border-border-subtle">
      {/* Blue glow orb */}
      <div className="absolute -top-10 -right-20 w-80 h-80 bg-blue-100/20 rounded-full blur-[90px] pointer-events-none" />
      <motion.div
        {...fadeInUpWhileVisible}
        className="text-center mb-14"
      >
        <p className="text-xs font-semibold uppercase tracking-widest text-eo-gold mb-2">Company History</p>
        <h2 className="text-3xl md:text-4xl font-bold text-text-primary">Our Journey</h2>
      </motion.div>

      {/* Vertical timeline */}
      <div className="relative max-w-3xl mx-auto">
        {/* Vertical line */}
        <div className="absolute left-7 md:left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-eo-blue/30 via-eo-blue/60 to-eo-blue/10 -translate-x-1/2" />

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
                  <div className={`inline-block bg-surface rounded-2xl border border-border-subtle shadow-sm p-6 hover:shadow-md transition-shadow max-w-xs w-full ${isLeft ? "md:ml-auto" : ""}`}>
                    <span className="inline-block px-2.5 py-1 bg-blue-50 dark:bg-blue-950 border border-blue-100 dark:border-blue-900 text-eo-blue text-xs font-bold rounded-full mb-3">
                      {item.year}
                    </span>
                    <h3 className="text-base font-bold text-text-primary mb-1.5">{item.title}</h3>
                    <p className="text-sm text-text-tertiary leading-relaxed">{item.description}</p>
                  </div>
                </div>

                {/* Center dot */}
                <div className="absolute left-7 md:left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-eo-navy border-4 border-white shadow-md flex items-center justify-center shrink-0 z-10 top-6 md:top-auto">
                  <div className="w-2 h-2 rounded-full bg-eo-gold" />
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

// ─── Leadership ──────────────────────────────────────────────────────────────

interface TeamMember {
  name: string;
  initials: string;
  title: string;
  photo: string;
  bio: string;
  certifications: string[];
  linkedIn: string;
  email: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Jimi Umar",
    initials: "JU",
    title: "Founder & CEO",
    photo: "",
    bio: "With over 14 years of experience in enterprise technology and cloud infrastructure, Jimi Umar founded EaseOrigin to deliver trusted consulting services to government agencies and private sector organizations. An Army Reservist with an active security clearance, he brings deep expertise across AWS, Azure, and GCP, with hands-on leadership in DevOps, cybersecurity, AI/ML platforms, and large-scale infrastructure modernization for clients spanning federal agencies (DoW, DHS, NIH, GSA) and commercial enterprises in financial services, healthcare, retail, and logistics.",
    certifications: [
      "AWS Solutions Architect",
      "AWS SysOps Administrator",
      "AWS Developer",
      "Azure Administrator",
      "CompTIA Security+",
      "Certified Python Developer",
    ],
    linkedIn: "https://linkedin.com/in/jimiuumar",
    email: companyInfo.email,
  },
];

function LeadershipPhoto({ member }: { member: TeamMember }) {
  const [imgError, setImgError] = useState(false);

  if (!member.photo || imgError) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-linear-to-br from-eo-navy to-eo-blue">
        <span className="text-4xl sm:text-5xl font-extrabold text-eo-gold select-none">
          {member.initials}
        </span>
      </div>
    );
  }

  return (
    <Image
      src={member.photo}
      alt={member.name}
      fill
      className="object-cover"
      onError={() => setImgError(true)}
    />
  );
}

function Leadership() {
  return (
    <Section className="relative overflow-hidden bg-linear-to-br from-white dark:from-gray-900 via-slate-50/40 dark:via-gray-900/40 to-blue-50/20 dark:to-gray-800/20 border-b border-border-subtle">
      {/* Subtle background accent */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-blue-50/40 rounded-full blur-[100px] pointer-events-none" />
      {/* Gold glow bottom-left */}
      <div className="absolute -bottom-16 -left-16 w-72 h-72 bg-amber-100/15 rounded-full blur-[80px] pointer-events-none" />

      <motion.div
        {...fadeInUpWhileVisible}
        className="text-center mb-12"
      >
        <p className="text-xs font-semibold uppercase tracking-widest text-eo-gold mb-2">
          Meet Our Founder
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
          Leadership
        </h2>
      </motion.div>

      <div className="relative z-10 flex flex-col gap-12">
        {teamMembers.map((member, i) => (
          <motion.div
            key={member.name}
            {...fadeInUpWhileVisibleLarge}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className="bg-surface-muted rounded-2xl border border-border-subtle shadow-sm overflow-hidden hover:shadow-md transition-shadow"
          >
            <div className="flex flex-col md:flex-row">
              {/* Photo / Avatar */}
              <div className="relative w-full md:w-72 lg:w-80 h-72 md:h-auto shrink-0">
                <LeadershipPhoto member={member} />
              </div>

              {/* Content */}
              <div className="flex-1 p-7 sm:p-8 lg:p-10 flex flex-col justify-center">
                <div className="mb-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-text-primary">
                    {member.name}
                  </h3>
                  <p className="text-sm font-semibold text-eo-gold mt-1">
                    {member.title}
                  </p>
                </div>

                <p className="text-text-tertiary leading-relaxed mb-6 text-sm sm:text-base">
                  {member.bio}
                </p>

                {/* Certifications */}
                <div className="mb-6">
                  <p className="text-xs font-semibold uppercase tracking-widest text-text-muted mb-3">
                    Certifications
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {member.certifications.map((cert) => (
                      <span
                        key={cert}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950 border border-blue-100 dark:border-blue-900 text-xs font-medium text-eo-navy dark:text-blue-200"
                      >
                        <Award className="h-3 w-3 text-eo-gold shrink-0" />
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Contact links */}
                <div className="flex flex-wrap gap-3">
                  <a
                    href={member.linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-eo-navy text-white text-sm font-medium hover:bg-eo-blue transition-colors"
                  >
                    <Linkedin className="h-4 w-4" />
                    LinkedIn
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-border-default bg-surface text-text-primary text-sm font-medium hover:border-eo-blue/30 hover:bg-blue-50/50 transition-colors"
                  >
                    <Mail className="h-4 w-4" />
                    {member.email}
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

console.log("Leadership", Leadership);

// ─── Our Expertise ───────────────────────────────────────────────────────────

const expertiseCards = [
  {
    icon: Award,
    title: "Cloud Architecture",
    description: "Multiple cloud platform certifications ensuring best-practice design and delivery across AWS, Azure, and multi-cloud environments.",
    bg: "bg-blue-50 dark:bg-blue-950",
    border: "border-blue-100 dark:border-blue-900",
    iconColor: "text-eo-blue",
  },
  {
    icon: ShieldCheck,
    title: "Security Cleared",
    description: "Active security clearance with military service background, qualified for work in classified and sensitive government environments.",
    bg: "bg-emerald-50 dark:bg-emerald-950",
    border: "border-emerald-100 dark:border-emerald-900",
    iconColor: "text-emerald-600",
  },
  {
    icon: Cloud,
    title: "Compliance & Security",
    description: "Certified in cloud administration and cybersecurity, enabling secure deployments across regulated industries including healthcare and defense.",
    bg: "bg-violet-50 dark:bg-violet-950",
    border: "border-violet-100 dark:border-violet-900",
    iconColor: "text-violet-600",
  },
  {
    icon: Code,
    title: "Full-Stack Engineering",
    description: "Deep technical expertise spanning cloud infrastructure, AI/ML platforms, DevOps pipelines, modern data engineering, and program delivery.",
    bg: "bg-amber-50 dark:bg-amber-950",
    border: "border-amber-100 dark:border-amber-900",
    iconColor: "text-amber-600",
  },
];

function OurExpertise() {
  return (
    <Section className="relative overflow-hidden bg-linear-to-br from-slate-50 dark:from-gray-900 via-blue-50/30 dark:via-gray-900/30 to-indigo-50/20 dark:to-gray-800/20 border-b border-border-subtle">
      {/* Decorative corner glow */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-100/20 rounded-full blur-[80px] pointer-events-none" />
      {/* Dot pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: "radial-gradient(circle, #1E3A8A 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      <motion.div
        {...fadeInUpWhileVisible}
        className="text-center mb-12"
      >
        <p className="text-xs font-semibold uppercase tracking-widest text-eo-gold mb-2">Credentials</p>
        <h2 className="text-3xl md:text-4xl font-bold text-text-primary">Our Expertise</h2>
        <p className="mt-4 text-text-tertiary max-w-xl mx-auto leading-relaxed">
          Certified, cleared, and experienced across the technologies that matter most to government and enterprise organizations.
        </p>
      </motion.div>

      <div className="relative z-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {expertiseCards.map(({ icon: Icon, title, description, bg, border, iconColor }, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="flex flex-col bg-surface rounded-2xl border border-border-subtle shadow-sm p-7 hover:shadow-md transition-shadow"
          >
            <div className={`w-12 h-12 rounded-xl ${bg} ${border} border flex items-center justify-center mb-5`}>
              <Icon className={`h-6 w-6 ${iconColor}`} />
            </div>
            <h3 className="text-base font-bold text-text-primary mb-2">{title}</h3>
            <p className="text-sm text-text-tertiary leading-relaxed">{description}</p>
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
    description: "We operate with transparency and accountability. Our team understands the responsibility of working in trusted environments across government and industry.",
    bg: "bg-blue-50 dark:bg-blue-950",
    border: "border-blue-100 dark:border-blue-900",
    iconColor: "text-eo-blue",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We integrate seamlessly with your teams, whether supporting prime contractors on government missions or partnering with enterprise technology organizations.",
    bg: "bg-emerald-50 dark:bg-emerald-950",
    border: "border-emerald-100 dark:border-emerald-900",
    iconColor: "text-emerald-600",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "From AI-powered platforms to cloud-native architectures, we bring modern solutions and forward-thinking approaches to every engagement.",
    bg: "bg-amber-50 dark:bg-amber-950",
    border: "border-amber-100 dark:border-amber-900",
    iconColor: "text-amber-600",
  },
  {
    icon: Star,
    title: "Excellence",
    description: "We measure success by outcomes: reliable infrastructure, compliant systems, and scalable platforms that perform under real-world demands.",
    bg: "bg-violet-50 dark:bg-violet-950",
    border: "border-violet-100 dark:border-violet-900",
    iconColor: "text-violet-600",
  },
];

function OurValues() {
  return (
    <Section className="relative overflow-hidden bg-linear-to-br from-slate-50 dark:from-gray-900 via-blue-50/20 dark:via-gray-900/20 to-amber-50/15 dark:to-gray-800/15 border-b border-border-subtle">
      {/* Accent glow */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-amber-100/15 rounded-full blur-[80px] pointer-events-none" />
      {/* Blue glow bottom-right */}
      <div className="absolute -bottom-16 -right-16 w-72 h-72 bg-blue-100/20 rounded-full blur-[80px] pointer-events-none" />
      <motion.div
        {...fadeInUpWhileVisible}
        className="text-center mb-12"
      >
        <p className="text-xs font-semibold uppercase tracking-widest text-eo-gold mb-2">What Drives Us</p>
        <h2 className="text-3xl md:text-4xl font-bold text-text-primary">Our Values</h2>
        <p className="mt-4 text-text-tertiary max-w-xl mx-auto leading-relaxed">
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
            className="flex flex-col bg-surface rounded-2xl border border-border-subtle shadow-sm p-7 hover:shadow-md transition-shadow"
          >
            <div className={`w-12 h-12 rounded-xl ${bg} ${border} border flex items-center justify-center mb-5`}>
              <Icon className={`h-6 w-6 ${iconColor}`} />
            </div>
            <h3 className="text-base font-bold text-text-primary mb-2">{title}</h3>
            <p className="text-sm text-text-tertiary leading-relaxed">{description}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

// ─── Impact ───────────────────────────────────────────────────────────────────

const impactStats = [
  { num: "14+", label: "Years of IT Experience" },
  { num: "22+", label: "Projects Delivered" },
  { num: "30+", label: "Team Certifications" },
  { num: "14", label: "Organizations Served" },
];

const impactPoints = [
  "Strengthening cybersecurity across government and commercial organizations",
  "Modernizing mission-critical systems and enterprise infrastructure",
  "Enabling cloud adoption and platform engineering at scale",
  "Delivering AI-powered solutions and data-driven insights for federal and private sector clients",
  "Providing structured program management and agile delivery across industries",
];

function Impact() {
  return (
    <Section className="relative overflow-hidden bg-linear-to-br from-slate-50 dark:from-gray-900 via-blue-50/25 dark:via-gray-900/25 to-white dark:to-gray-900 border-b border-border-subtle">
      {/* Subtle glow */}
      <div className="absolute -bottom-10 -left-10 w-80 h-80 bg-blue-100/20 rounded-full blur-[90px] pointer-events-none" />
      <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-eo-gold mb-2">Our Reach</p>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-8">Supporting Mission-Critical Technology</h2>

          <div className="grid grid-cols-2 gap-4">
            {impactStats.map(({ num, label }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-eo-navy rounded-2xl p-6 text-center"
              >
                <AnimatedCounter value={num} className="text-3xl font-extrabold text-eo-gold mb-1" />
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
          <p className="text-text-tertiary leading-relaxed mb-4">
            EaseOrigin supports programs that strengthen infrastructure, enhance cybersecurity, and modernize critical systems, making technology across government and industry more resilient, efficient, and mission-ready.
          </p>
          {impactPoints.map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex items-center gap-3 bg-surface-muted rounded-xl border border-border-subtle px-5 py-4"
            >
              <CheckCircle2 className="h-5 w-5 text-eo-gold shrink-0" />
              <span className="text-sm font-medium text-text-primary">{point}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-surface">
      <main>
        <PageHero
          badge="Est. 2019 | Midlothian, TX"
          badgeIcon={<Building2 className="h-3.5 w-3.5" />}
          title="About EaseOrigin"
          description="Delivering trusted technology consulting services that help government agencies and private sector organizations modernize systems, strengthen security, and drive mission success."
          backgroundImage={{ src: "/images/about-team.jpg", alt: "EaseOrigin team collaboration" }}
        />
        <WhoWeAre />
        <Timeline />
        {/* <Leadership /> — Ready to enable when team data is finalized */}
        <OurExpertise />
        <OurValues />
        <Impact />
        <CTASection
          variant="navy"
          eyebrow="Partner With Us"
          title="Work With EaseOrigin"
          description="Whether you're a government agency, prime contractor, or private sector organization, we would love to partner with you on your next technology initiative."
          primaryCta={{ href: "/solutions", label: "View Solutions" }}
          secondaryCta={{ href: "/contact", label: "Contact Us" }}
        />
      </main>
    </div>
  );
}
