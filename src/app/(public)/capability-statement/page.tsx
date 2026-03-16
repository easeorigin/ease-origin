"use client";

import Link from "next/link";
import {
  ArrowLeft,
  Download,
  Server,
  Shield,
  Cpu,
  Bot,
  Database,
  Cloud,
  CheckCircle2,
  Award,
  MapPin,
  Phone,
  Mail,
  Globe,
  Building2,
  Star,
  ClipboardList,
  Workflow,
} from "lucide-react";
import { companyInfo } from "@/data/company-info";

/* ─── Core Competency Data ─────────────────────────────────────────────────── */

const coreCompetencies = [
  {
    icon: Server,
    title: "Cloud & Infrastructure",
    description: "Multi-cloud architecture, migration, and automation across AWS, Azure, GCP, and Oracle Cloud.",
    technologies: ["AWS", "Azure", "GCP", "OCI", "Terraform", "Docker"],
  },
  {
    icon: Shield,
    title: "Cybersecurity & Compliance",
    description: "NIST, FISMA, FedRAMP, HIPAA, and zero-trust security frameworks for regulated environments.",
    technologies: ["NIST 800-53", "RMF", "DISA STIGs", "Snyk", "Vanta"],
  },
  {
    icon: Cpu,
    title: "DevOps & Platform Engineering",
    description: "CI/CD pipelines, GitOps workflows, Kubernetes orchestration, and infrastructure as code.",
    technologies: ["Kubernetes", "GitLab CI", "ArgoCD", "Helm", "Jenkins"],
  },
  {
    icon: Bot,
    title: "AI/ML & Intelligent Automation",
    description: "Enterprise AI platforms, LLM orchestration, RAG pipelines, and intelligent automation.",
    technologies: ["LangChain", "AWS Bedrock", "OpenAI", "FastAPI", "Python"],
  },
  {
    icon: Database,
    title: "Data & Analytics",
    description: "Data engineering, BI/visualization, governance frameworks, and cloud data warehousing.",
    technologies: ["Airflow", "dbt", "Tableau", "Power BI", "MongoDB"],
  },
  {
    icon: Cloud,
    title: "SaaS Solutions",
    description: "Enterprise platform implementation including Salesforce, ServiceNow, SAP, and Dynamics 365.",
    technologies: ["ServiceNow", "Salesforce", "SAP", "Jira", "Power BI"],
  },
  {
    icon: ClipboardList,
    title: "Program Management",
    description: "Federal PMO governance, earned value management, integrated scheduling, and OMB reporting.",
    technologies: ["MS Project", "Primavera P6", "Jira", "Power BI", "ServiceNow"],
  },
  {
    icon: Workflow,
    title: "Agile Delivery & RTM",
    description: "SAFe Release Train Engineering, PI Planning facilitation, and Lean-Agile transformation.",
    technologies: ["Jira Align", "Rally", "Azure DevOps", "Miro", "Confluence"],
  },
];

const contractVehicles = [
  { name: "SAIC Cloud One", scope: "DoW / U.S. Air Force" },
  { name: "Leidos Kobayashi Maru", scope: "U.S. Space Force (SSC)" },
  { name: "NAWCAD N0042118D0006", scope: "U.S. Navy" },
  { name: "GSA Schedule", scope: "Federal Civilian Agencies" },
];

const pastPerformance = [
  {
    client: "U.S. Air Force / DoW",
    title: "DoW Cloud Infrastructure on Oracle Cloud",
    metrics: ["IL5 Security Compliance", "100% STIG Compliance"],
    summary:
      "Deployed and managed secure Oracle Cloud Infrastructure environments for DoW programs with automated provisioning, compartment-based isolation, and 24/7 security monitoring.",
  },
  {
    client: "U.S. Space Force (SSC)",
    title: "Space Command & Control Software Factory",
    metrics: ["3x Faster Release Cycles", "100% Automated Security Scans"],
    summary:
      "Established DevSecOps pipelines and containerized deployments for Space Force C2 applications, enabling continuous delivery with integrated security scanning at every stage.",
  },
  {
    client: "Enterprise Technology Organization",
    title: "Cloud Modernization & Multi-Account Strategy",
    metrics: ["40% Cost Reduction", "200+ Containers in Production"],
    summary:
      "Redesigned cloud infrastructure from a monolithic setup to a segmented multi-account architecture with fully containerized workloads and automated IaC provisioning.",
  },
  {
    client: "Regional Healthcare Provider",
    title: "HIPAA-Compliant Infrastructure",
    metrics: ["70% Faster Audit Prep", "99.9% Uptime SLA"],
    summary:
      "Designed and implemented HIPAA-compliant cloud infrastructure with production container orchestration, automated audit trails, and centralized observability.",
  },
  {
    client: "U.S. Navy / NAWCAD",
    title: "Navy IT Program Governance & EVM Oversight",
    metrics: ["5+ Programs Managed", "100% Audit Readiness"],
    summary:
      "Stood up PMO governance and earned value management across Navy IT programs, achieving full audit readiness and reducing program reporting cycles by 40%.",
  },
];

const differentiators = [
  "Small business with active security clearance, qualified for classified government environments",
  "Deep expertise across all three major cloud providers (AWS, Azure, GCP) plus Oracle Cloud for DoW workloads",
  "Proven track record delivering through prime contractor partnerships with SAIC, Leidos, Booz Allen Hamilton, and TG Federal",
  "Full-spectrum capability spanning cloud infrastructure, cybersecurity, DevSecOps, AI/ML, enterprise platforms, program management, and agile delivery",
  "Founder-led firm with 14+ years of hands-on enterprise technology and federal consulting experience",
];

/* ─── Page Component ───────────────────────────────────────────────────────── */

export default function CapabilityStatementPage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      {/* Print-specific styles */}
      <style>{`
        @media print {
          @page {
            size: letter;
            margin: 0.4in 0.5in;
          }

          /* Hide site navigation and footer */
          nav, footer, header {
            display: none !important;
          }

          /* Force background colors to print */
          * {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
            color-adjust: exact !important;
          }

          /* Remove animations */
          * {
            animation: none !important;
            transition: none !important;
          }

          /* Page break for page 2 */
          .cap-page-break {
            page-break-before: always;
            break-before: page;
          }

          /* Ensure content fits */
          .cap-statement {
            font-size: 10pt;
            line-height: 1.4;
          }

          .cap-statement h1 {
            font-size: 22pt;
          }

          .cap-statement h2 {
            font-size: 14pt;
          }

          .cap-statement h3 {
            font-size: 11pt;
          }
        }
      `}</style>

      {/* Sticky Action Bar (hidden on print) */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-surface/95 backdrop-blur-sm border-b border-border-default print:hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-text-primary hover:text-eo-blue transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-eo-navy text-white text-sm font-semibold hover:bg-eo-blue transition-colors shadow-sm"
          >
            <Download className="h-4 w-4" />
            Download PDF
          </button>
        </div>
      </div>

      {/* Spacer for sticky bar (hidden on print) */}
      <div className="h-16 print:hidden" />

      {/* Capability Statement Content */}
      <div className="cap-statement bg-surface print:bg-white min-h-screen">

        {/* ══════════════════════════════════════════════════════════════════════
            PAGE 1
           ══════════════════════════════════════════════════════════════════════ */}

        {/* Navy Header Banner */}
        <div className="bg-eo-navy text-white py-8 px-8 print:py-6 print:px-6">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-1">
              EaseOrigin LLC
            </h1>
            <p className="text-lg text-gray-300 font-medium">
              Federal IT Consulting & Cloud Solutions
            </p>
          </div>
        </div>

        {/* Gold Accent Bar */}
        <div className="bg-eo-gold/10 border-y border-eo-gold/30 py-3 px-8 print:py-2 print:px-6">
          <div className="max-w-5xl mx-auto flex flex-wrap items-center gap-x-6 gap-y-1 text-sm font-semibold text-text-primary">
            <span>UEI: GTWUARASDLN5</span>
            <span className="text-eo-gold/60">|</span>
            <span>CAGE: 8DUE2</span>
            <span className="text-eo-gold/60">|</span>
            <span>NAICS: 541511, 541512, 541519, 541611</span>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-8 print:px-6">

          {/* Company Overview */}
          <div className="py-6 border-b border-border-default">
            <h2 className="text-lg font-bold text-text-primary mb-3 flex items-center gap-2">
              <Building2 className="h-5 w-5 text-eo-blue shrink-0" />
              Company Overview
            </h2>
            <p className="text-text-tertiary leading-relaxed text-sm">
              EaseOrigin LLC is a small business delivering specialized technology consulting
              services to federal agencies, prime contractors, and private sector organizations. With deep expertise
              in cloud infrastructure, cybersecurity, DevSecOps, enterprise platforms, program management, and agile delivery, we help organizations
              modernize mission-critical systems, achieve regulatory compliance, and accelerate digital
              transformation. Our team holds active security clearances and has supported programs across DoW, DHS,
              NIH, GSA, and the U.S. Space Force.
            </p>
          </div>

          {/* Core Competencies */}
          <div className="py-6 border-b border-border-default">
            <h2 className="text-lg font-bold text-text-primary mb-4 flex items-center gap-2">
              <Star className="h-5 w-5 text-eo-blue shrink-0" />
              Core Competencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 print:grid-cols-3 print:gap-3">
              {coreCompetencies.map((comp) => {
                const Icon = comp.icon;
                return (
                  <div
                    key={comp.title}
                    className="border border-border-default rounded-lg p-4 print:p-3 hover:border-eo-blue/30 transition-colors"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 rounded-md bg-eo-navy/5 flex items-center justify-center shrink-0 print:w-6 print:h-6">
                        <Icon className="h-4 w-4 text-eo-blue print:h-3 print:w-3" />
                      </div>
                      <h3 className="text-sm font-bold text-text-primary">{comp.title}</h3>
                    </div>
                    <p className="text-xs text-text-tertiary leading-relaxed mb-2">
                      {comp.description}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {comp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="inline-block px-2 py-0.5 rounded text-[10px] font-medium bg-blue-50 text-eo-blue border border-blue-100 print:text-[8pt]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Contract Vehicles */}
          <div className="py-6 border-b border-border-default">
            <h2 className="text-lg font-bold text-text-primary mb-4 flex items-center gap-2">
              <Award className="h-5 w-5 text-eo-blue shrink-0" />
              Contract Vehicles
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 print:grid-cols-2 print:gap-2">
              {contractVehicles.map((cv) => (
                <div
                  key={cv.name}
                  className="flex items-center gap-3 bg-eo-navy/3 border border-border-default rounded-lg px-4 py-3 print:px-3 print:py-2"
                >
                  <CheckCircle2 className="h-4 w-4 text-eo-gold shrink-0" />
                  <div>
                    <p className="text-sm font-bold text-text-primary">{cv.name}</p>
                    <p className="text-xs text-text-tertiary">{cv.scope}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Company Details */}
          <div className="py-6">
            <h2 className="text-lg font-bold text-text-primary mb-4 flex items-center gap-2">
              <Building2 className="h-5 w-5 text-eo-blue shrink-0" />
              Company Details
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 print:grid-cols-4 print:gap-3">
              {[
                { label: "Business Type", value: "Small Business" },
                { label: "Security", value: "Active Security Clearance" },
                { label: "Founded", value: "2019" },
                { label: "Headquarters", value: "Midlothian, TX" },
              ].map((detail) => (
                <div
                  key={detail.label}
                  className="bg-eo-navy/3 border border-border-default rounded-lg p-4 print:p-3 text-center"
                >
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-text-muted mb-1">
                    {detail.label}
                  </p>
                  <p className="text-sm font-bold text-text-primary">{detail.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════════════════
            PAGE 2
           ══════════════════════════════════════════════════════════════════════ */}

        <div className="cap-page-break">
          {/* Repeat Header for Page 2 */}
          <div className="bg-eo-navy text-white py-4 px-8 print:py-3 print:px-6">
            <div className="max-w-5xl mx-auto flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold">EaseOrigin LLC</h2>
                <p className="text-sm text-text-muted">
                  Capability Statement (continued)
                </p>
              </div>
              <div className="text-right text-xs text-text-muted">
                <p>UEI: GTWUARASDLN5 | CAGE: 8DUE2</p>
              </div>
            </div>
          </div>

          <div className="max-w-5xl mx-auto px-8 print:px-6">

            {/* Past Performance */}
            <div className="py-6 border-b border-border-default">
              <h2 className="text-lg font-bold text-text-primary mb-4 flex items-center gap-2">
                <Award className="h-5 w-5 text-eo-blue shrink-0" />
                Past Performance
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 print:grid-cols-2 print:gap-3">
                {pastPerformance.map((pp) => (
                  <div
                    key={pp.title}
                    className="border border-border-default rounded-lg p-4 print:p-3"
                  >
                    <p className="text-[10px] font-bold uppercase tracking-wider text-eo-gold mb-1">
                      {pp.client}
                    </p>
                    <h3 className="text-sm font-bold text-text-primary mb-2">
                      {pp.title}
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {pp.metrics.map((metric) => (
                        <span
                          key={metric}
                          className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-eo-navy text-white print:text-[8pt]"
                        >
                          {metric}
                        </span>
                      ))}
                    </div>
                    <p className="text-xs text-text-tertiary leading-relaxed">
                      {pp.summary}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Differentiators */}
            <div className="py-6 border-b border-border-default">
              <h2 className="text-lg font-bold text-text-primary mb-4 flex items-center gap-2">
                <Star className="h-5 w-5 text-eo-blue shrink-0" />
                Differentiators
              </h2>
              <div className="space-y-2.5">
                {differentiators.map((diff, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 text-eo-gold shrink-0 mt-0.5" />
                    <p className="text-sm text-text-tertiary leading-relaxed">
                      {diff}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Footer */}
            <div className="py-6">
              <div className="bg-eo-navy rounded-lg p-6 print:p-4">
                <h2 className="text-lg font-bold text-white mb-4">Contact</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 print:grid-cols-4 print:gap-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-4 w-4 text-eo-gold shrink-0 mt-0.5" />
                    <div className="text-sm text-gray-300">
                      <p>{companyInfo.address.street}</p>
                      <p>{companyInfo.address.city}, {companyInfo.address.state} {companyInfo.address.zip}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-eo-gold shrink-0" />
                    <span className="text-sm text-gray-300">{companyInfo.phone}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-eo-gold shrink-0" />
                    <span className="text-sm text-gray-300">{companyInfo.email}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Globe className="h-4 w-4 text-eo-gold shrink-0" />
                    <span className="text-sm text-gray-300">{companyInfo.domain}</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </>
  );
}
