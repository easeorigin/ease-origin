"use client";

import { motion } from "framer-motion";
import {
  Cloud, Server, Shield, Database, ArrowRight, CheckCircle2,
  ChevronRight, FileCheck, Building2, Hash
} from "lucide-react";
import { Section } from "@/components/ui/section";
import Link from "next/link";
import Image from "next/image";

// ─── Data ────────────────────────────────────────────────────────────────────

const capabilities = [
  {
    id: "saas",
    icon: Cloud,
    title: "SaaS Solutions",
    shortDesc:
      "Enterprise platform expertise including Salesforce, ServiceNow, SAP, and Microsoft Dynamics to help agencies modernize digital services.",
    services: [
      "Salesforce CRM implementation & customization",
      "ServiceNow ITSM & workflow automation",
      "SAP ERP deployment & migration",
      "Microsoft Dynamics 365 integration",
      "Platform configuration, training & support",
    ],
    image: `images/saas-solutions.png`,
    imageAlt: "Enterprise SaaS platform implementation",
  },
  {
    id: "cloud",
    icon: Server,
    title: "Cloud & Infrastructure",
    shortDesc:
      "Designing and implementing scalable cloud architectures, application modernization, and infrastructure transformation for federal environments.",
    services: [
      "Cloud migration strategy & execution",
      "Cloud architecture design (AWS, Azure, GCP)",
      "Application modernization & containerization",
      "Infrastructure automation & IaC",
      "DevSecOps pipeline implementation",
    ],
    image: `images/cloud-infrastructure.png`,
    imageAlt: "Cloud infrastructure data center",
  },
  {
    id: "cyber",
    icon: Shield,
    title: "Cybersecurity",
    shortDesc:
      "Advanced cybersecurity solutions including threat intelligence, risk management, compliance, and secure federal system design.",
    services: [
      "NIST / FISMA / FedRAMP compliance",
      "Zero Trust architecture implementation",
      "Threat detection & incident response",
      "Risk management framework (RMF) support",
      "Security assessment & authorization (SA&A)",
    ],
    image: `images/cybersecurity.png`,
    imageAlt: "Cybersecurity operations center",
  },
  {
    id: "data",
    icon: Database,
    title: "Data & Analytics",
    shortDesc:
      "Data science, business intelligence, and advanced analytics that support mission-critical decision making across federal agencies.",
    services: [
      "Data engineering & pipeline development",
      "Business intelligence & visualization (Power BI, Tableau)",
      "Machine learning & predictive analytics",
      "Data governance & quality frameworks",
      "Cloud data warehousing (Snowflake, BigQuery)",
    ],
    image: `images/data-analytics.png`,
    imageAlt: "Data analytics dashboards and charts",
  },
];

const contractVehicles = [
  {
    icon: FileCheck,
    title: "GSA Multiple Award Schedule",
    label: "GSA MAS",
    detail: "IT Schedule 70 — Professional IT services, software, and solutions",
    number: "GS-35F-XXXXX",
  },
  {
    icon: Building2,
    title: "NAICS Codes",
    label: "Primary Codes",
    detail: "541511 · 541512 · 541513 · 541519 · 541690",
    number: "Custom IT solutions",
  },
  {
    icon: Hash,
    title: "Small Business Set-Asides",
    label: "SBA Certified",
    detail: "Eligible for small business set-aside contracts and subcontracting",
    number: "CAGE / UEI registered",
  },
];

const agencies = [
  { abbr: "DoD", full: "Department of Defense" },
  { abbr: "DHS", full: "Department of Homeland Security" },
  { abbr: "VA", full: "Veterans Affairs" },
  { abbr: "HHS", full: "Health and Human Services" },
  { abbr: "DOJ", full: "Department of Justice" },
  { abbr: "GSA", full: "General Services Administration" },
  { abbr: "DoE", full: "Department of Energy" },
  { abbr: "NASA", full: "National Aeronautics and Space Administration" },
];

// ─── Sections ─────────────────────────────────────────────────────────────────

function SolutionsHero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-tg-navy text-white min-h-[60vh] flex items-center">
      {/* Background texture */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)", backgroundSize: "50px 50px" }} />
        <div className="absolute top-0 right-0 w-175 h-175 bg-tg-blue rounded-full blur-[130px] opacity-30 translate-x-1/3 -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 w-125 h-125 bg-tg-gold rounded-full blur-[160px] opacity-[0.06] -translate-x-1/3 translate-y-1/4" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-sm font-medium text-tg-gold mb-6">
            <span className="flex h-2 w-2 rounded-full bg-tg-gold animate-pulse" />
            Federal IT Consulting
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6">
            Our Solutions
          </h1>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl">
            EaseOrigin delivers specialized technology consulting services that help government agencies and prime contractors modernize systems, strengthen security, and unlock the value of data.
          </p>
          <Link href="/solutions#contact">
            <span className="inline-flex items-center gap-2 px-8 py-4 rounded-md bg-tg-gold text-tg-navy font-bold hover:bg-yellow-400 transition-all shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:-translate-y-0.5 cursor-pointer">
              Partner With Us <ArrowRight className="h-5 w-5" />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function OverviewGrid() {
  return (
    <Section className="relative overflow-hidden bg-white border-b border-gray-100">
      <div className="absolute inset-0 bg-linear-to-br from-white via-slate-50/70 to-blue-50/40 pointer-events-none" />
      <div className="relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-tg-gold mb-3">Capabilities</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-tg-navy">Comprehensive Federal IT Solutions</h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((cap, i) => {
            const Icon = cap.icon;
            return (
              <motion.div
                key={cap.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group relative bg-white border border-gray-100 rounded-2xl p-8 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-linear-to-br from-tg-navy to-tg-blue opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-14 h-14 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-5 group-hover:bg-white/15 group-hover:border-white/20 transition-colors duration-300">
                    <Icon className="h-7 w-7 text-tg-blue group-hover:text-tg-gold transition-colors duration-300" />
                  </div>
                  <h4 className="text-lg font-bold text-tg-navy mb-3 group-hover:text-white transition-colors duration-300">{cap.title}</h4>
                  <p className="text-sm text-gray-500 leading-relaxed grow group-hover:text-gray-300 transition-colors duration-300">{cap.shortDesc}</p>
                  <a href={`#${cap.id}`} className="inline-flex items-center gap-1 mt-5 text-sm font-semibold text-tg-blue group-hover:text-tg-gold transition-colors duration-300">
                    Learn more <ChevronRight className="h-4 w-4" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

function CapabilityDetails() {
  return (
    <div className="bg-white">
      {capabilities.map((cap, i) => {
        const Icon = cap.icon;
        const isEven = i % 2 === 0;

        return (
          <section
            key={cap.id}
            id={cap.id}
            className={`relative overflow-hidden py-20 md:py-28 border-b border-gray-100 ${isEven ? "bg-white" : "bg-slate-50/60"}`}
          >
            {/* Background government building photo (subtle) */}
            {i === 0 && (
              <>
                <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: `url(images/federal-building-columns.png)`, backgroundSize: "cover", backgroundPosition: "center", opacity: 0.04 }} />
                <div className="absolute inset-0 bg-white/96 pointer-events-none" />
              </>
            )}

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${!isEven ? "lg:[&>*:first-child]:order-2" : ""}`}>

                {/* Text */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="inline-flex items-center gap-2 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center">
                      <Icon className="h-5 w-5 text-tg-blue" />
                    </div>
                    <span className="text-sm font-semibold uppercase tracking-widest text-tg-gold">Capability</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-tg-navy mb-5">{cap.title}</h3>
                  <p className="text-lg text-gray-600 leading-relaxed mb-8">{cap.shortDesc}</p>

                  <div className="space-y-3">
                    {cap.services.map((service, j) => (
                      <motion.div
                        key={j}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: j * 0.06 }}
                        className="flex items-start gap-3"
                      >
                        <CheckCircle2 className="h-5 w-5 text-tg-blue shrink-0 mt-0.5" />
                        <span className="text-gray-700">{service}</span>
                      </motion.div>
                    ))}
                  </div>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 mt-10 px-7 py-3.5 rounded-md bg-tg-navy text-white font-semibold hover:bg-tg-blue transition-colors shadow-md"
                  >
                    Discuss {cap.title} <ArrowRight className="h-4 w-4" />
                  </a>
                </motion.div>

                {/* Image */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="relative"
                >
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-4/3">
                    <Image
                      src={cap.image}
                      alt={cap.imageAlt}
                      fill
                      className="w-full h-full object-cover"
                    />
                    {/* Subtle overlay */}
                    <div className="absolute inset-0 bg-linear-to-tr from-tg-navy/30 to-transparent" />
                    {/* Floating label badge */}
                    <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2 shadow-lg">
                      <Icon className="h-4 w-4 text-tg-blue" />
                      <span className="text-sm font-bold text-tg-navy">{cap.title}</span>
                    </div>
                  </div>
                  {/* Decorative offset frame */}
                  <div className={`absolute -z-10 w-full h-full rounded-2xl border-2 border-tg-gold/20 ${isEven ? "-bottom-4 -right-4" : "-bottom-4 -left-4"}`} />
                </motion.div>

              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}

function ContractVehicles() {
  return (
    <Section className="relative overflow-hidden bg-tg-navy text-white">
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
      <div className="absolute top-0 right-0 w-125 h-125 bg-tg-blue/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10">
        <div className="max-w-2xl mb-14">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-tg-gold mb-3">Procurement</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-5">Contract Vehicles</h3>
          <p className="text-lg text-gray-300 leading-relaxed">
            EaseOrigin provides services through approved government contract vehicles, making it easier for agencies and prime contractors to access our expertise quickly and compliantly.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {contractVehicles.map((v, i) => {
            const Icon = v.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-tg-gold/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-tg-gold/20 transition-colors duration-300">
                  <Icon className="h-6 w-6 text-tg-gold" />
                </div>
                <div className="inline-block px-3 py-1 rounded-full bg-tg-gold/10 border border-tg-gold/20 text-tg-gold text-xs font-bold uppercase tracking-wider mb-4">
                  {v.label}
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{v.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{v.detail}</p>
                <div className="pt-4 border-t border-white/10">
                  <span className="text-xs text-gray-500 font-mono">{v.number}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

function AgenciesGrid() {
  return (
    <Section className="relative overflow-hidden bg-white border-b border-gray-100">
      <div className="absolute inset-0 bg-linear-to-br from-white via-slate-50/60 to-blue-50/30 pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: `url(images/capitol-building.png)`, backgroundSize: "cover", backgroundPosition: "center", opacity: 0.04 }} />

      <div className="relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-tg-gold mb-3">Partners</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-tg-navy mb-4">Agencies We Support</h3>
          <p className="text-gray-500 text-lg">Supporting the agencies that serve our nation through specialized IT expertise and prime contractor partnerships.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {agencies.map((agency, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="group relative flex flex-col items-center justify-center p-6 h-32 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-lg hover:border-tg-blue/30 hover:-translate-y-1 transition-all duration-300 cursor-default"
            >
              <span className="text-2xl font-black text-gray-300 group-hover:text-tg-blue transition-colors duration-300 mb-2">
                {agency.abbr}
              </span>
              <span className="text-[10px] font-medium text-gray-400 group-hover:text-gray-600 transition-colors text-center leading-tight">
                {agency.full}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function SolutionsCTA() {
  return (
    <Section id="contact" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-br from-tg-blue via-tg-navy to-[#050B14] pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,.8) 1px, transparent 1px)", backgroundSize: "30px 30px" }} />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-semibold uppercase tracking-widest text-tg-gold mb-4">Get Started</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Partner With EaseOrigin
          </h3>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto">
            Our team works alongside government agencies and prime contractors to deliver high-impact technology solutions tailored to your mission.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/">
              <span className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md bg-tg-gold text-tg-navy font-bold hover:bg-yellow-400 transition-all shadow-lg hover:-translate-y-0.5 cursor-pointer">
                Partner With Us <ArrowRight className="h-5 w-5" />
              </span>
            </Link>
            <Link href="/">
              <span className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md border-2 border-white/30 text-white font-semibold hover:bg-white/10 transition-all cursor-pointer">
                Contact Us <ChevronRight className="h-5 w-5" />
              </span>
            </Link>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <SolutionsHero />
        <OverviewGrid />
        <CapabilityDetails />
        <ContractVehicles />
        <AgenciesGrid />
        <SolutionsCTA />
      </main>
    </div>
  );
}
