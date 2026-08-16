"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  ShieldCheck, Users, Lightbulb, Star,
  Cloud, Lock, Layers,
  CheckCircle2, Award, Bot,
  Linkedin, Mail, Workflow, Building2, GraduationCap
} from "lucide-react";
import { Section } from "@/components/ui/section";
import { PageHero } from "@/components/shared/page-hero";
import { CTASection } from "@/components/shared/cta-section";
import { AnimatedCounter } from "@/components/animated-counter";
import { companyInfo, attributionNotice } from "@/data/company-info";
import { fadeInUpWhileVisible, fadeInUpWhileVisibleLarge, staggeredFadeInUp } from "@/lib/animations";

// ─── Who We Are ───────────────────────────────────────────────────────────────

function WhoWeAre() {
  const capabilities = [
    // Keep in sync with the capability statement. A capability published here
    // but dropped there is the kind of gap a contracting officer notices, and
    // an earlier pass cut real capability on the mistaken view that a short
    // list was a safer list. Short is an editorial choice; accurate is not.
    { icon: Cloud,     label: "Cloud Platform Engineering" },
    { icon: Bot,       label: "AI & LLM Infrastructure" },
    { icon: Workflow,  label: "Infrastructure as Code & CI/CD" },
    { icon: Layers,    label: "Kubernetes Operations" },
    { icon: Lock,      label: "Security & Compliance" },
    { icon: Users,     label: "Forward Deployed Engineering" },
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
            EaseOrigin builds and operates cloud infrastructure for organizations that answer to a regulator or a contracting officer. Most of our federal work is delivered as a subcontract under a prime.
          </p>
          <p className="text-text-tertiary leading-relaxed mb-8">
            The work runs from landing zone design and infrastructure as code through Kubernetes operations and the security controls that have to hold up in an audit. We stay narrow on purpose. A firm our size is more useful deep than broad.
          </p>

          {/* Mission statement */}
          <div className="border-l-4 border-eo-gold pl-6 py-1">
            <p className="text-sm font-semibold uppercase tracking-widest text-eo-gold mb-2">Our Mission</p>
            <p className="text-text-primary font-medium leading-relaxed">
              Build platforms that hold up under audit and still get out of the engineers&apos; way. Tell clients what we can and cannot do, before they ask.
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
          {/* Stats box. Every number here has to be sourceable on request. */}
          <div className="col-span-2 bg-eo-navy rounded-2xl p-7 flex gap-8">
            {[
              { num: "14+", label: "Years of hands-on engineering" },
              { num: "6", label: "Professional certifications" },
              { num: "6", label: "Distinct federal programs" },
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

/*
  Roles and dates match the principal's record exactly.

  The 2012 entry previously read "enterprise infrastructure and automation at
  large scale", which promoted a support engineering role into something it was
  not. Support is where the operational instincts came from, and saying so is
  both accurate and more interesting than the inflated version.
*/
const timelineItems = [
  {
    year: "2012",
    title: "Support Engineering",
    description: "Endpoint and escalation support at Google across Windows, macOS, and Linux, with the repetitive parts automated away in Bash and PowerShell. Unglamorous, and where the operational instincts came from.",
  },
  {
    year: "2016",
    title: "Cloud & Regulated Environments",
    description: "Linux and cloud engineering at McKesson, then Blue Cross Blue Shield. Migrations onto AWS, production Kubernetes, and the first real exposure to HIPAA-aligned controls and audit trails.",
  },
  {
    year: "2018",
    title: "Consulting at AWS",
    description: "DevOps consulting on customer architectures. Reusable infrastructure modules, GitOps rollouts, and migration playbooks, which is where the taste for boring, repeatable builds came from.",
  },
  {
    year: "2019",
    title: "EaseOrigin Founded",
    description: "EaseOrigin LLC was formed in Oklahoma in August 2019. The firm registered to transact business in Texas in 2023 and now runs from Midlothian.",
  },
  {
    year: "2021",
    title: "Federal Platform & AI Infrastructure",
    description: "Principal-level platform engineering at Akamai: a federal and defense government-cloud program at IL4 through IL6, alongside production LLM infrastructure and multi-agent systems.",
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
        <p className="text-xs font-semibold uppercase tracking-widest text-eo-gold mb-2">Background</p>
        <h2 className="text-3xl md:text-4xl font-bold text-text-primary">How We Got Here</h2>
        <p className="text-text-tertiary mt-4 max-w-2xl mx-auto leading-relaxed">
          Entries before 2019 are our principal&apos;s engineering background,
          not work performed by the firm.
        </p>
      </motion.div>

      <div className="relative z-10 max-w-3xl mx-auto mb-12 rounded-xl border border-eo-gold/40 bg-eo-gold/5 px-6 py-5">
        <p className="text-sm text-text-secondary leading-relaxed">
          {attributionNotice}
        </p>
      </div>

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
  /** Technical focus line under the company title. */
  subtitle: string;
  photo: string;
  /** Paragraphs. Kept as an array so the card can space them properly. */
  bio: string[];
  focusAreas: string[];
  /**
   * Exact certificate names, including level. An evaluator who checks and
   * finds Associate where Professional was implied stops believing the rest
   * of the page, so the level is stated rather than left ambiguous.
   */
  certifications: string[];
  education: { degree: string; institution: string }[];
  linkedIn: string;
  email: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Jimi Umar",
    initials: "JU",
    title: "Founder & Principal Engineer",
    subtitle: "Cloud Platform & AI Infrastructure",
    photo: "",
    /*
      Third rewrite, and the first one that is accurate.

      Two errors were corrected here. The first version said "for clients
      spanning federal agencies", which reads as EaseOrigin's client list. The
      second said he "built and ran platforms at Google", when the Google role
      was endpoint and escalation support. Overstating a support role is the
      same failure this site was cleaned up to remove, so it is stated
      correctly in the timeline instead.

      Voice: earlier drafts ran on filler. "Deep expertise across",
      "hands-on leadership in", "trusted consulting services" say nothing.
      The specifics below carry the weight on their own.
    */
    bio: [
      "Jimi Umar has spent fourteen years in cloud platform engineering and now works at principal level. The current work is a large U.S. federal and defense government-cloud program running across four environments and more than twenty tenancies at IL4, IL5, IL6, and C2Ops boundaries. That covers managed Kubernetes, container registry, object storage, KMS-backed secrets vaults, and identity domains, all of it held to continuous compliance with STIG, CIS Benchmark, and ACAS scanning. He led an ACAS vulnerability burndown and contributed to an ATO and RMF authorization package.",
      "The commercial half of the record runs on the same patterns at different scale. Multi-account AWS foundations across twenty-seven accounts and more than a hundred ECS Fargate services. Terragrunt at scale, backed by a thirty-seven component shared module library and forty reusable Terraform modules. Roughly two dozen Kubernetes clusters across two regions, delivered through GitOps with autoscaling tuned to keep the bill honest.",
      "More of the recent work is AI infrastructure. He architected enterprise AI platform components serving fifteen thousand concurrent users, with LangChain and LangGraph orchestration, retrieval pipelines drawing on more than forty data connectors, and multi-provider model integration. He builds multi-agent systems on Model Context Protocol using custom FastMCP servers, and runs an agent-orchestration layer of roughly thirty specialized agents against infrastructure operations.",
      "Much of it is forward deployed work: sitting with the customer, turning ambiguous product, security, and operational requirements into architecture, runbooks, and systems that survive contact with production. He holds an active DoD security clearance and serves in the U.S. Army Reserve.",
    ],
    focusAreas: [
      "Cloud platform engineering across AWS, Azure, GCP, and Oracle Cloud",
      "AI and LLM infrastructure: LangChain, LangGraph, RAG, Model Context Protocol",
      "Kubernetes platform operations and GitOps delivery",
      "Infrastructure as code with Terraform and Terragrunt at scale",
      "Security and compliance automation: STIG, RMF, NIST 800-53",
      "Forward deployed engineering and customer implementation",
    ],
    certifications: [
      "AWS Certified Solutions Architect, Associate",
      "AWS Certified SysOps Administrator, Associate",
      "AWS Certified Developer, Associate",
      "Microsoft Certified: Azure Administrator Associate",
      "CompTIA Security+",
      "Certified Python Associate (PCAP)",
    ],
    education: [
      {
        degree: "MS, Applied Artificial Intelligence",
        institution: "Northeastern University",
      },
      { degree: "MBA", institution: "Woolfe University" },
      {
        degree: "BS, Mechanical Engineering",
        institution: "University of Lagos",
      },
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
        {/*
          Short form of the attribution notice. The full text renders in the
          timeline above; repeating it verbatim here would be clumsy, but the
          card carries programs and metrics, so it needs the disclosure too.
        */}
        <p className="text-text-tertiary mt-4 max-w-2xl mx-auto leading-relaxed text-sm">
          Credentials and experience below belong to our principal, earned as an
          employee of the organizations named rather than under an EaseOrigin
          contract.
        </p>
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
                  <p className="text-sm text-text-muted mt-0.5">
                    {member.subtitle}
                  </p>
                </div>

                <div className="mb-6 flex flex-col gap-3">
                  {member.bio.map((para, idx) => (
                    <p
                      key={idx}
                      className="text-text-tertiary leading-relaxed text-sm sm:text-base"
                    >
                      {para}
                    </p>
                  ))}
                </div>

                {/* Focus areas */}
                <div className="mb-6">
                  <p className="text-xs font-semibold uppercase tracking-widest text-text-muted mb-3">
                    Focus
                  </p>
                  <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
                    {member.focusAreas.map((area) => (
                      <li key={area} className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-eo-gold shrink-0 mt-0.5" />
                        <span className="text-sm text-text-tertiary">{area}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Certifications and education */}
                <div className="mb-6 grid sm:grid-cols-2 gap-6">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-text-muted mb-3">
                      Certifications
                    </p>
                    <ul className="flex flex-col gap-2">
                      {member.certifications.map((cert) => (
                        <li key={cert} className="flex items-start gap-2">
                          <Award className="h-3.5 w-3.5 text-eo-gold shrink-0 mt-0.5" />
                          <span className="text-sm text-text-tertiary">{cert}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-text-muted mb-3">
                      Education
                    </p>
                    <ul className="flex flex-col gap-2">
                      {member.education.map((ed) => (
                        <li key={ed.degree} className="flex items-start gap-2">
                          <GraduationCap className="h-3.5 w-3.5 text-eo-gold shrink-0 mt-0.5" />
                          <span className="text-sm text-text-tertiary">
                            <span className="font-medium text-text-secondary">
                              {ed.degree}
                            </span>
                            <br />
                            {ed.institution}
                          </span>
                        </li>
                      ))}
                    </ul>
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

// ─── Our Expertise ───────────────────────────────────────────────────────────

const expertiseCards = [
  {
    icon: Award,
    title: "Cloud Architecture",
    description: "Certified on AWS and Azure at associate level, with production delivery across GCP and Oracle Cloud alongside them.",
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
    icon: Bot,
    title: "AI Infrastructure",
    description: "Production LLM platforms: orchestration, retrieval pipelines, multi-agent systems on Model Context Protocol, and the observability to run them safely. Backed by a master's in applied artificial intelligence.",
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
          What our principal is certified in, cleared for, and has actually run in production.
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
    description: "We operate with transparency and accountability. We understand the responsibility of working in trusted environments across government and industry.",
    bg: "bg-blue-50 dark:bg-blue-950",
    border: "border-blue-100 dark:border-blue-900",
    iconColor: "text-eo-blue",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We work inside your existing process rather than around it, whether that is a prime contractor on a federal program or an enterprise technology group.",
    bg: "bg-emerald-50 dark:bg-emerald-950",
    border: "border-emerald-100 dark:border-emerald-900",
    iconColor: "text-emerald-600",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We work at the edge of what is currently practical, including production LLM infrastructure and multi-agent systems, without betting a client's program on something unproven.",
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
          How we work with clients, primes, and the specialists we bring in on a subcontract.
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

/**
 * Company-level counts were removed here. "22+ Projects Delivered" and
 * "14 Organizations Served" were corporate claims EaseOrigin cannot source,
 * and a single unsourceable number takes the credibility of the whole page
 * with it. What is left is checkable.
 */
const impactStats = [
  { num: "14+", label: "Years of Hands-On Engineering" },
  { num: "6", label: "Professional Certifications" },
  { num: "6", label: "Distinct Federal Programs" },
  { num: "4", label: "Cloud Platforms in Production" },
];

const impactPoints = [
  "Landing zones and account structure for regulated cloud environments",
  "Infrastructure as code, so a rebuild is a pipeline run rather than a project",
  "STIG and RMF control automation, with the evidence collected as it goes",
  "Kubernetes platform operations, including day-two work most teams postpone",
  "Migrations off platforms that have reached end of life",
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
            EaseOrigin works on programs that keep infrastructure secure and running. The work is mostly unglamorous: hardening what exists, automating the compliance evidence, and moving systems off platforms that are past end of life.
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
          description="Cloud platform engineering, AI infrastructure, and compliance automation for federal programs and regulated industries."
          backgroundImage={{ src: "/images/about-team.jpg", alt: "EaseOrigin team collaboration" }}
        />
        <WhoWeAre />
        <Timeline />
        <Leadership />
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
