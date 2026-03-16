"use client";

import { motion } from "framer-motion";
import {
  Cloud, Server, Shield, Database, ArrowRight,
  ChevronRight, Cpu, Bot, ClipboardList, Workflow, FileCheck
} from "lucide-react";
import { Section } from "@/components/ui/section";
import { CTASection } from "@/components/shared/cta-section";
import { PageHero } from "@/components/shared/page-hero";
import { fadeInUpWhileVisible } from "@/lib/animations";
import Link from "next/link";
import { GridPattern } from "@/components/ui/grid-pattern";

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
    image: `images/cloud-infrastructure.jpg`,
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
    image: `images/cybersecurity.jpg`,
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

// Agency data imported from centralized source
import { governmentAgencies } from "@/data/agencies";

// ─── Sections ─────────────────────────────────────────────────────────────────

function SolutionsHero() {
  return (
    <PageHero
      badge="Technology Consulting"
      title="Our Solutions"
      description="We build the technology and manage the programs that deliver it. EaseOrigin provides specialized consulting services that help government agencies, prime contractors, and private sector organizations modernize systems, strengthen security, and accelerate delivery."
      primaryCta={{ href: "/contact", label: "Partner With Us" }}
      tall
      backgroundImage={{ src: "/images/solutions-hero.jpg", alt: "Technology solutions and infrastructure" }}
    />
  );
}

function OverviewGrid() {
  return (
    <Section className="relative overflow-hidden bg-surface border-b border-border-subtle">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/40 to-indigo-50/30 dark:from-gray-900 dark:via-gray-900/40 dark:to-gray-800/30 pointer-events-none" />
      {/* Blue glow top-right */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-blue-100/20 rounded-full blur-[100px] pointer-events-none" />
      {/* Gold glow bottom-left */}
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-eo-gold/[0.07] rounded-full blur-[100px] pointer-events-none" />
      <div className="relative z-10">
        {/* Technology Solutions */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-eo-gold mb-3">Capabilities</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-text-primary">Technology Solutions</h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {technologySolutions.map((cap, i) => {
            const Icon = cap.icon;
            return (
              <motion.div
                key={cap.id}
                {...fadeInUpWhileVisible}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group relative bg-surface border border-border-subtle rounded-2xl p-8 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-eo-navy to-eo-blue opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-14 h-14 rounded-xl bg-blue-50 dark:bg-blue-950 border border-blue-100 dark:border-blue-900 flex items-center justify-center mb-5 group-hover:bg-white/15 group-hover:border-white/20 transition-colors duration-300">
                    <Icon className="h-7 w-7 text-eo-blue group-hover:text-eo-gold transition-colors duration-300" />
                  </div>
                  <h4 className="text-lg font-bold text-text-primary mb-3 group-hover:text-white transition-colors duration-300">{cap.title}</h4>
                  <p className="text-sm text-text-tertiary leading-relaxed flex-grow group-hover:text-gray-300 transition-colors duration-300">{cap.shortDesc}</p>
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
          <h3 className="text-3xl md:text-4xl font-bold text-text-primary">Program Delivery & Advisory</h3>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {advisorySolutions.map((cap, i) => {
            const Icon = cap.icon;
            return (
              <motion.div
                key={cap.id}
                {...fadeInUpWhileVisible}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group relative bg-surface border border-border-subtle rounded-2xl p-8 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-eo-navy to-eo-blue opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-14 h-14 rounded-xl bg-purple-50 dark:bg-purple-950 border border-purple-100 dark:border-purple-900 flex items-center justify-center mb-5 group-hover:bg-white/15 group-hover:border-white/20 transition-colors duration-300">
                    <Icon className="h-7 w-7 text-purple-600 dark:text-purple-400 group-hover:text-eo-gold transition-colors duration-300" />
                  </div>
                  <h4 className="text-lg font-bold text-text-primary mb-3 group-hover:text-white transition-colors duration-300">{cap.title}</h4>
                  <p className="text-sm text-text-tertiary leading-relaxed flex-grow group-hover:text-gray-300 transition-colors duration-300">{cap.shortDesc}</p>
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

function ContractVehiclesCallout() {
  return (
    <Section className="relative overflow-hidden bg-eo-navy text-white">
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-eo-blue/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          {...fadeInUpWhileVisible}
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
    <Section className="relative overflow-hidden bg-surface border-b border-border-subtle">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/40 to-indigo-50/30 dark:from-gray-900 dark:via-gray-900/40 dark:to-gray-800/30 pointer-events-none" />
      <GridPattern
        cellSize={44}
        lineColor="rgba(30, 58, 95, 0.05)"
        glowColor="rgba(212, 175, 55, 0.03)"
      />
      <div className="absolute -bottom-16 -right-16 w-96 h-96 bg-indigo-100/20 rounded-full blur-[100px] pointer-events-none" />
      {/* Gold glow top-left */}
      <div className="absolute -top-16 -left-16 w-72 h-72 bg-eo-gold/[0.06] rounded-full blur-[90px] pointer-events-none" />

      <div className="relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-eo-gold mb-3">Partners</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">Agencies We&apos;ve Supported</h3>
          <p className="text-gray-500 text-lg">Supporting the agencies that serve our nation through specialized IT expertise and prime contractor partnerships.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {governmentAgencies.map((agency, i) => (
            <motion.div
              key={agency.id}
              {...fadeInUpWhileVisible}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="group relative flex flex-col items-center justify-center p-6 h-32 bg-surface border border-border-subtle rounded-2xl shadow-sm hover:shadow-lg hover:border-eo-blue/30 hover:-translate-y-1 transition-all duration-300 cursor-default"
            >
              <span className="text-2xl font-black text-text-muted group-hover:text-eo-blue transition-colors duration-300 mb-2">
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
    <CTASection
      variant="gradient"
      eyebrow="Get Started"
      title="Partner With EaseOrigin"
      description="Our team works alongside government agencies and prime contractors to deliver high-impact technology solutions tailored to your mission."
      primaryCta={{ href: "/contact", label: "Partner With Us" }}
      secondaryCta={{ href: "/contact", label: "Contact Us" }}
    />
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-surface">
      <main>
        <SolutionsHero />
        <OverviewGrid />
        <ContractVehiclesCallout />
        <AgenciesGrid />
        <SolutionsCTA />
      </main>
    </div>
  );
}
