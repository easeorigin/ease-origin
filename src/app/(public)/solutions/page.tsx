"use client";

import { motion } from "framer-motion";
import {
  Cloud, Server, Shield, Database, ArrowRight, CheckCircle2,
  ChevronRight, Cpu, Bot, ClipboardList, Workflow, FileCheck
} from "lucide-react";
import { Section } from "@/components/ui/section";
import Image from "next/image";
import Link from "next/link";

// ─── Data ────────────────────────────────────────────────────────────────────

const technologySolutions = [
  {
    id: "cloud",
    slug: "cloud-infrastructure",
    icon: Server,
    title: "Cloud & Infrastructure",
    shortDesc:
      "Enterprise cloud architecture across AWS, Azure, GCP, and Oracle Cloud, spanning migration strategy, containerization, and full-scale infrastructure automation.",
    services: [
      "Cloud migration strategy & execution",
      "Cloud architecture design (AWS, Azure, GCP)",
      "Oracle Cloud architecture & management",
      "Multi-cloud strategy (AWS, Azure, GCP, OCI)",
      "Application modernization & containerization",
      "Infrastructure automation & IaC",
      "DevSecOps pipeline implementation",
    ],
    image: `images/cloud-infrastructure.png`,
    imageAlt: "Cloud infrastructure data center",
  },
  {
    id: "devops",
    slug: "devops-platform",
    icon: Cpu,
    title: "DevOps & Platform Engineering",
    shortDesc:
      "Accelerate delivery with modern CI/CD powered by Jenkins, GitLab CI, and GitHub Actions, plus Kubernetes orchestration, infrastructure as code, and end-to-end observability.",
    services: [
      "CI/CD pipeline architecture",
      "GitLab CI/CD pipelines",
      "Bitbucket Pipelines",
      "Kubernetes management & orchestration",
      "Harbor container registry",
      "Infrastructure as Code (Terraform)",
      "GitOps & continuous delivery",
      "Observability & monitoring platforms",
      "Container orchestration & optimization",
    ],
    image: `images/devops-pipeline.jpg`,
    imageAlt: "DevOps platform engineering dashboard",
  },
  {
    id: "cyber",
    slug: "cybersecurity",
    icon: Shield,
    title: "Cybersecurity",
    shortDesc:
      "Protect critical systems with compliance frameworks (NIST, FISMA, FedRAMP, HIPAA), zero-trust architectures, and integrated tooling including Snyk, SonarCloud, and Vanta.",
    services: [
      "NIST / FISMA / FedRAMP compliance",
      "Zero Trust architecture implementation",
      "Snyk vulnerability scanning",
      "SonarCloud code quality",
      "Vanta compliance automation",
      "Threat detection & incident response",
      "Risk management framework (RMF) support",
      "Security assessment & authorization (SA&A)",
    ],
    image: `images/cybersecurity.png`,
    imageAlt: "Cybersecurity operations center",
  },
  {
    id: "aiml",
    slug: "ai-ml",
    icon: Bot,
    title: "AI/ML Infrastructure",
    shortDesc:
      "Design and deploy production-ready AI platforms with intelligent orchestration, knowledge retrieval, and scalable model serving.",
    services: [
      "Enterprise AI platform design",
      "LLM deployment & orchestration",
      "RAG pipeline development",
      "Intelligent automation solutions",
      "Model serving & optimization",
      "AI/ML observability & cost tracking",
    ],
    image: `images/ai-ml-platform.jpg`,
    imageAlt: "AI and machine learning infrastructure",
  },
  {
    id: "data",
    slug: "data-analytics",
    icon: Database,
    title: "Data & Analytics",
    shortDesc:
      "Data engineering, business intelligence, and advanced analytics powering mission-critical decisions across government and enterprise.",
    services: [
      "Data engineering & pipeline development",
      "Business intelligence & visualization (Power BI, Tableau)",
      "Machine learning & predictive analytics",
      "Data governance & quality frameworks",
      "Cloud data warehousing (Snowflake, BigQuery)",
      "MongoDB management",
      "Nexus artifact management",
    ],
    image: `images/data-dashboard.jpg`,
    imageAlt: "Data analytics dashboards and charts",
  },
  {
    id: "saas",
    slug: "saas-solutions",
    icon: Cloud,
    title: "SaaS Solutions",
    shortDesc:
      "Enterprise platform expertise including Salesforce, ServiceNow, SAP, and Microsoft Dynamics for government and commercial clients.",
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
];

const advisorySolutions = [
  {
    id: "pm",
    slug: "program-management",
    icon: ClipboardList,
    title: "Program Management",
    shortDesc:
      "Federal PMO governance, earned value management, integrated master scheduling, and OMB reporting for mission-critical IT programs.",
    services: [
      "PMO standup and governance frameworks",
      "Earned Value Management (EVM) implementation",
      "Integrated Master Schedule (IMS) development",
      "Risk management and mitigation planning",
      "Cost performance analysis and forecasting",
      "OMB reporting and CPIC compliance",
      "Acquisition strategy and contract support",
      "GAO/IG audit readiness",
    ],
    image: `images/program-management.jpg`,
    imageAlt: "Program management governance",
  },
  {
    id: "agile",
    slug: "agile-delivery",
    icon: Workflow,
    title: "Agile Delivery & Release Train Management",
    shortDesc:
      "SAFe Release Train Engineering, PI Planning facilitation, and Lean-Agile transformation for federal programs and multi-contractor environments.",
    services: [
      "Release Train Engineering (RTE-as-a-Service)",
      "PI Planning facilitation and coordination",
      "Agile Release Train launch and design",
      "Scrum of Scrums and ART Sync facilitation",
      "Agile metrics and executive dashboards",
      "Value stream mapping and flow optimization",
      "SAFe transformation roadmaps",
      "Lean-Agile contract strategy (TechFAR-aligned)",
    ],
    image: `images/agile-delivery.jpg`,
    imageAlt: "Agile delivery and release train management",
  },
];

const allCapabilities = [...technologySolutions, ...advisorySolutions];

// Agency data imported from centralized source
import { governmentAgencies } from "@/data/agencies";

// ─── Sections ─────────────────────────────────────────────────────────────────

function SolutionsHero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-eo-navy text-white min-h-[60vh] flex items-center">
      {/* Background texture */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)", backgroundSize: "50px 50px" }} />
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-eo-blue rounded-full blur-[130px] opacity-30 translate-x-1/3 -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-eo-gold rounded-full blur-[160px] opacity-[0.06] -translate-x-1/3 translate-y-1/4" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-sm font-medium text-eo-gold mb-6">
            <span className="flex h-2 w-2 rounded-full bg-eo-gold animate-pulse" />
            Technology Consulting
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6">
            Our Solutions
          </h1>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl">
            We build the technology and manage the programs that deliver it. EaseOrigin provides specialized consulting services that help government agencies, prime contractors, and private sector organizations modernize systems, strengthen security, and accelerate delivery.
          </p>
          <Link href="/solutions#contact">
            <span className="inline-flex items-center gap-2 px-8 py-4 rounded-md bg-eo-gold text-eo-navy font-bold hover:bg-yellow-400 transition-all shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:-translate-y-0.5 cursor-pointer">
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
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/40 to-indigo-50/30 pointer-events-none" />
      {/* Blue glow top-right */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-blue-100/20 rounded-full blur-[100px] pointer-events-none" />
      {/* Gold glow bottom-left */}
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-eo-gold/[0.07] rounded-full blur-[100px] pointer-events-none" />
      <div className="relative z-10">
        {/* Technology Solutions */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-eo-gold mb-3">Capabilities</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-eo-navy">Technology Solutions</h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {technologySolutions.map((cap, i) => {
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
                <div className="absolute inset-0 bg-gradient-to-br from-eo-navy to-eo-blue opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-14 h-14 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-5 group-hover:bg-white/15 group-hover:border-white/20 transition-colors duration-300">
                    <Icon className="h-7 w-7 text-eo-blue group-hover:text-eo-gold transition-colors duration-300" />
                  </div>
                  <h4 className="text-lg font-bold text-eo-navy mb-3 group-hover:text-white transition-colors duration-300">{cap.title}</h4>
                  <p className="text-sm text-gray-500 leading-relaxed flex-grow group-hover:text-gray-300 transition-colors duration-300">{cap.shortDesc}</p>
                  <Link href={`/solutions/${cap.slug}`} className="inline-flex items-center gap-1 mt-5 text-sm font-semibold text-eo-blue group-hover:text-eo-gold transition-colors duration-300">
                    Learn more <ChevronRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Program Delivery & Advisory */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-eo-gold mb-3">Program Delivery</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-eo-navy">Program Delivery & Advisory</h3>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {advisorySolutions.map((cap, i) => {
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
                <div className="absolute inset-0 bg-gradient-to-br from-eo-navy to-eo-blue opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-14 h-14 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center mb-5 group-hover:bg-white/15 group-hover:border-white/20 transition-colors duration-300">
                    <Icon className="h-7 w-7 text-purple-600 group-hover:text-eo-gold transition-colors duration-300" />
                  </div>
                  <h4 className="text-lg font-bold text-eo-navy mb-3 group-hover:text-white transition-colors duration-300">{cap.title}</h4>
                  <p className="text-sm text-gray-500 leading-relaxed flex-grow group-hover:text-gray-300 transition-colors duration-300">{cap.shortDesc}</p>
                  <Link href={`/solutions/${cap.slug}`} className="inline-flex items-center gap-1 mt-5 text-sm font-semibold text-eo-blue group-hover:text-eo-gold transition-colors duration-300">
                    Learn more <ChevronRight className="h-4 w-4" />
                  </Link>
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
      {allCapabilities.map((cap, i) => {
        const Icon = cap.icon;
        const isEven = i % 2 === 0;

        return (
          <section
            key={cap.id}
            id={cap.id}
            className={`relative overflow-hidden py-20 md:py-28 border-b border-gray-100 ${isEven ? "bg-gradient-to-br from-slate-50 via-blue-50/30 to-white" : "bg-gradient-to-bl from-blue-50/50 via-slate-50/40 to-white"}`}
          >
            {/* Glow orb per section */}
            {isEven ? (
              <div className="absolute -top-20 -left-20 w-80 h-80 bg-eo-gold/[0.06] rounded-full blur-[100px] pointer-events-none" />
            ) : (
              <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-blue-200/20 rounded-full blur-[100px] pointer-events-none" />
            )}
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
                      <Icon className="h-5 w-5 text-eo-blue" />
                    </div>
                    <span className="text-sm font-semibold uppercase tracking-widest text-eo-gold">Capability</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-eo-navy mb-5">{cap.title}</h3>
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
                        <CheckCircle2 className="h-5 w-5 text-eo-blue flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{service}</span>
                      </motion.div>
                    ))}
                  </div>

                  <Link
                    href={`/solutions/${cap.slug}`}
                    className="inline-flex items-center gap-2 mt-10 px-7 py-3.5 rounded-md bg-eo-navy text-white font-semibold hover:bg-eo-blue transition-colors shadow-md"
                  >
                    Explore {cap.title} <ArrowRight className="h-4 w-4" />
                  </Link>
                </motion.div>

                {/* Image */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="relative"
                >
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
                    <Image
                      src={`/${cap.image}`}
                      alt={cap.imageAlt}
                      fill
                      className="object-cover"
                    />
                    {/* Subtle overlay */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-eo-navy/30 to-transparent" />
                    {/* Floating label badge */}
                    <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2 shadow-lg">
                      <Icon className="h-4 w-4 text-eo-blue" />
                      <span className="text-sm font-bold text-eo-navy">{cap.title}</span>
                    </div>
                  </div>
                  {/* Decorative offset frame */}
                  <div className={`absolute -z-10 w-full h-full rounded-2xl border-2 border-eo-gold/20 ${isEven ? "-bottom-4 -right-4" : "-bottom-4 -left-4"}`} />
                </motion.div>

              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}

function ContractVehiclesCallout() {
  return (
    <Section className="relative overflow-hidden bg-eo-navy text-white">
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-eo-blue/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mx-auto mb-6">
            <FileCheck className="h-8 w-8 text-eo-gold" />
          </div>
          <h2 className="text-sm font-semibold uppercase tracking-widest text-eo-gold mb-3">Procurement</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-5">Contract Vehicles</h3>
          <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-2xl mx-auto">
            EaseOrigin delivers through established government contract vehicles including SAIC Cloud One, Leidos Kobayashi Maru, NAWCAD, and GSA Schedule, making it easy for agencies and primes to access our expertise compliantly.
          </p>
          <Link href="/contract-vehicles">
            <span className="inline-flex items-center gap-2 px-8 py-4 rounded-md bg-eo-gold text-eo-navy font-bold hover:bg-yellow-400 transition-all shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:-translate-y-0.5 cursor-pointer">
              View Contract Vehicles <ArrowRight className="h-5 w-5" />
            </span>
          </Link>
        </motion.div>
      </div>
    </Section>
  );
}

function AgenciesGrid() {
  return (
    <Section className="relative overflow-hidden bg-white border-b border-gray-100">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/40 to-indigo-50/30 pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: `url(images/capitol-building.png)`, backgroundSize: "cover", backgroundPosition: "center", opacity: 0.08 }} />
      <div className="absolute -bottom-16 -right-16 w-96 h-96 bg-indigo-100/20 rounded-full blur-[100px] pointer-events-none" />
      {/* Gold glow top-left */}
      <div className="absolute -top-16 -left-16 w-72 h-72 bg-eo-gold/[0.06] rounded-full blur-[90px] pointer-events-none" />

      <div className="relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-eo-gold mb-3">Partners</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-eo-navy mb-4">Agencies We&apos;ve Supported</h3>
          <p className="text-gray-500 text-lg">Supporting the agencies that serve our nation through specialized IT expertise and prime contractor partnerships.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {governmentAgencies.map((agency, i) => (
            <motion.div
              key={agency.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="group relative flex flex-col items-center justify-center p-6 h-32 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-lg hover:border-eo-blue/30 hover:-translate-y-1 transition-all duration-300 cursor-default"
            >
              <span className="text-2xl font-black text-gray-300 group-hover:text-eo-blue transition-colors duration-300 mb-2">
                {agency.abbr}
              </span>
              <span className="text-[10px] font-medium text-gray-400 group-hover:text-gray-600 transition-colors text-center leading-tight">
                {agency.name}
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
      <div className="absolute inset-0 bg-gradient-to-br from-eo-blue via-eo-navy to-[#050B14] pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,.8) 1px, transparent 1px)", backgroundSize: "30px 30px" }} />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-semibold uppercase tracking-widest text-eo-gold mb-4">Get Started</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Partner With EaseOrigin
          </h3>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto">
            Our team works alongside government agencies and prime contractors to deliver high-impact technology solutions tailored to your mission.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact">
              <span className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md bg-eo-gold text-eo-navy font-bold hover:bg-yellow-400 transition-all shadow-lg hover:-translate-y-0.5 cursor-pointer">
                Partner With Us <ArrowRight className="h-5 w-5" />
              </span>
            </Link>
            <Link href="/contact">
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
        <ContractVehiclesCallout />
        <AgenciesGrid />
        <SolutionsCTA />
      </main>
    </div>
  );
}
