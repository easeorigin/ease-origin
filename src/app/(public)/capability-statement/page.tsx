"use client";

import Link from "next/link";
import {
  ArrowLeft,
  Award,
  Boxes,
  Building2,
  CheckCircle2,
  Download,
  Globe,
  Info,
  Mail,
  MapPin,
  Phone,
  Server,
  Shield,
  Star,
  Workflow,
} from "lucide-react";
import {
  companyInfo,
  attributionNotice,
  clearanceStatement,
} from "@/data/company-info";
import { programExperience, naicsCodes } from "@/data/program-experience";

/* ─── Core Competencies ────────────────────────────────────────────────────── */

/**
 * Four leading, four secondary. This split is EDITORIAL, not a truth claim.
 *
 * All eight competencies below are real hands-on experience. A capability
 * statement gets about six seconds of attention, so the four that match the
 * primary NAICS code and the certifications held lead as cards, and the rest
 * follow as a compact line. Nothing true is hidden.
 *
 * An earlier pass deleted the secondary four on the mistaken view that a
 * capability without a certification behind it could not be claimed. That
 * conflated two different things. A present-tense capability claim is fine and
 * should be complete. What needs attribution is a DELIVERY claim about a
 * specific past program, which is handled separately under `attributionNotice`.
 *
 * For a tailored version, promote whichever competencies match the
 * solicitation and demote the rest. Do not delete them.
 */
const coreCompetencies = [
  {
    icon: Server,
    title: "Cloud Platform Engineering",
    description:
      "Architecture, migration, and operations across AWS, Azure, GCP, and Oracle Cloud, including IL5 environments.",
    technologies: ["AWS", "Azure", "GCP", "OCI", "IL5"],
  },
  {
    icon: Workflow,
    title: "Infrastructure as Code & CI/CD",
    description:
      "Repeatable provisioning and delivery pipelines, from source control through automated deployment.",
    technologies: ["Terraform", "Terragrunt", "Jenkins", "GitLab"],
  },
  {
    icon: Boxes,
    title: "Kubernetes Platform Operations",
    description:
      "Managed cluster design, workload onboarding, and day-two operations for containerized platforms.",
    technologies: ["EKS", "AKS", "Helm", "ArgoCD"],
  },
  {
    icon: Shield,
    title: "Security & Compliance Automation",
    description:
      "Control implementation and evidence collection for regulated and classified environments.",
    technologies: ["STIG", "RMF", "NIST 800-53", "HIPAA"],
  },
];

/** Real capability, listed compactly so the four above still scan. */
const additionalCompetencies = [
  "Program management and PMO governance, including earned value management, integrated master scheduling, and OMB and CPIC reporting",
  "SAFe release train engineering, including PI planning facilitation and Agile Release Train coordination",
  "Data engineering and analytics, including pipeline development, business intelligence, and cloud data warehousing",
  "Enterprise AI platforms, including large language model orchestration and retrieval augmented generation pipelines",
  "Enterprise SaaS delivery across ServiceNow, Salesforce, SAP, and Microsoft Dynamics 365",
];

/* ─── Relevant Experience ──────────────────────────────────────────────────── */

/**
 * Renamed from `pastPerformance`, and no longer a separate hand-written list.
 *
 * "Past performance" is a term of art meaning contracts your company held.
 * EaseOrigin has none, so the section is titled Relevant Experience and reads
 * off `programExperience`, the same source the site and any proposal use. One
 * edit point, one story.
 *
 * Outcome metrics were cut. "100% STIG Compliance", "3x Faster Release Cycles",
 * "40% Cost Reduction", "70% Faster Audit Prep", "99.9% Uptime SLA", "5+
 * Programs Managed", and "100% Audit Readiness" all needed a baseline, a
 * measurement date, and someone else's data to defend under questioning. What
 * is left describes the scope of the work, which is checkable.
 */
const relevantExperience = programExperience.map((program) => ({
  slug: program.slug,
  agency: program.agency,
  title: program.programName,
  prime: program.prime,
  contractNumber: program.contractNumber,
  summary: program.description,
  scope: program.scope.slice(0, 3),
}));

/* ─── Differentiators ──────────────────────────────────────────────────────── */

/**
 * Specific and provable, never slogans. The removed line claimed a "proven
 * track record delivering through prime contractor partnerships" with four
 * named primes, which asserts a corporate relationship EaseOrigin does not
 * have. Every line below is either a capability claim in the present tense or
 * a fact about the principal that can be produced on request.
 */
const differentiators = [
  "Principal-performed delivery. The engineer who scopes the work is the engineer who does it.",
  "Our principal holds an active DoD security clearance and serves in the U.S. Army Reserve.",
  "AWS Solutions Architect, AWS SysOps Administrator, and AWS Developer; Azure Administrator; CompTIA Security+.",
  "Founder-led firm with 14+ years of hands-on enterprise technology and federal program engineering.",
  "Texas principal place of business, a scored factor under Texas Education Code 44.031(b).",
];

/* ─── Company Data ─────────────────────────────────────────────────────────── */

const companyData = [
  { label: "Legal Name", value: companyInfo.name },
  {
    label: "Founded",
    value: companyInfo.founded,
    note: `An ${companyInfo.formationStateName} limited liability company, registered to transact business in Texas since ${companyInfo.texasRegisteredSince}.`,
  },
  { label: "Business Size", value: companyInfo.identifiers.businessType },
  {
    label: "Principal Place of Business",
    value: `${companyInfo.address.city}, ${companyInfo.address.state}`,
  },
];

/* ─── Page Component ───────────────────────────────────────────────────────── */

export default function CapabilityStatementPage() {
  const handlePrint = () => {
    window.print();
  };

  const naicsLine = naicsCodes
    .map((n) => (n.primary ? `${n.code} (primary)` : n.code))
    .join(", ");

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

          /* Kept for when content grows past one side. Unused today. */
          .cap-page-break {
            page-break-before: always;
            break-before: page;
          }

          /* Never split a card across a page boundary */
          .cap-block {
            page-break-inside: avoid;
            break-inside: avoid;
          }

          /* Ensure content fits */
          .cap-statement {
            font-size: 9.5pt;
            line-height: 1.35;
          }

          .cap-statement h1 {
            font-size: 22pt;
          }

          .cap-statement h2 {
            font-size: 13pt;
          }

          .cap-statement h3 {
            font-size: 10.5pt;
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

      <div className="cap-statement bg-surface print:bg-white min-h-screen">

        {/* Navy Header Banner */}
        <div className="bg-eo-navy text-white py-8 px-8 print:py-5 print:px-6">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-1">
              {companyInfo.name}
            </h1>
            <p className="text-lg text-gray-300 font-medium">
              Cloud platform and DevSecOps engineering for federal programs
            </p>
          </div>
        </div>

        {/* Gold Accent Bar: the three things a buyer scans for first */}
        <div className="bg-eo-gold/10 border-y border-eo-gold/30 py-3 px-8 print:py-2 print:px-6">
          <div className="max-w-5xl mx-auto flex flex-wrap items-center gap-x-5 gap-y-1 text-sm font-semibold text-text-primary">
            <span>UEI: {companyInfo.identifiers.uei}</span>
            <span className="text-eo-gold/60">|</span>
            <span>CAGE: {companyInfo.identifiers.cage}</span>
            <span className="text-eo-gold/60">|</span>
            <span>{companyInfo.identifiers.businessType}</span>
            <span className="text-eo-gold/60">|</span>
            <span className="font-normal">NAICS: {naicsLine}</span>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-8 print:px-6">

          {/* Company Overview */}
          <div className="cap-block py-6 border-b border-border-default">
            <h2 className="text-lg font-bold text-text-primary mb-3 flex items-center gap-2">
              <Building2 className="h-5 w-5 text-eo-blue shrink-0" />
              Company Overview
            </h2>
            <p className="text-text-tertiary leading-relaxed text-sm mb-3">
              {companyInfo.name} designs and operates secure cloud platforms for
              regulated environments. We take on cloud migration, infrastructure
              automation, Kubernetes platform operations, and security
              compliance as complete workstreams, for federal agencies, prime
              contractors, and commercial organizations.
            </p>
            <p className="text-text-tertiary leading-relaxed text-sm">
              Our people have delivered on programs for the Department of War,
              the U.S. Navy, the U.S. Space Force, and federal civilian
              agencies, and on HIPAA-regulated commercial infrastructure.{" "}
              {clearanceStatement} EaseOrigin holds no facility clearance, so
              classified work is performed under a prime&apos;s FCL.
            </p>
          </div>

          {/* Core Competencies */}
          <div className="cap-block py-6 border-b border-border-default">
            <h2 className="text-lg font-bold text-text-primary mb-4 flex items-center gap-2">
              <Star className="h-5 w-5 text-eo-blue shrink-0" />
              Core Competencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 print:grid-cols-4 print:gap-3">
              {coreCompetencies.map((comp) => {
                const Icon = comp.icon;
                return (
                  <div
                    key={comp.title}
                    className="border border-border-default rounded-lg p-4 print:p-3"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 rounded-md bg-eo-navy/5 flex items-center justify-center shrink-0 print:w-6 print:h-6">
                        <Icon className="h-4 w-4 text-eo-blue print:h-3 print:w-3" />
                      </div>
                    </div>
                    <h3 className="text-sm font-bold text-text-primary mb-1.5">
                      {comp.title}
                    </h3>
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

          {/* Differentiators */}
          <div className="cap-block py-6 border-b border-border-default">
            <h2 className="text-lg font-bold text-text-primary mb-4 flex items-center gap-2">
              <Star className="h-5 w-5 text-eo-blue shrink-0" />
              Differentiators
            </h2>
            <div className="space-y-2">
              {differentiators.map((diff) => (
                <div key={diff} className="flex items-start gap-3">
                  <CheckCircle2 className="h-4 w-4 text-eo-gold shrink-0 mt-0.5" />
                  <p className="text-sm text-text-tertiary leading-relaxed">
                    {diff}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-xs text-text-tertiary leading-relaxed mt-4">
              <span className="font-semibold text-text-secondary">Also delivered: </span>
              {additionalCompetencies.join("; ")}.
            </p>
          </div>

          {/* Relevant Experience */}
          <div className="py-6 border-b border-border-default">
            <h2 className="text-lg font-bold text-text-primary mb-3 flex items-center gap-2">
              <Award className="h-5 w-5 text-eo-blue shrink-0" />
              Relevant Experience
            </h2>

            {/* Attribution first, before any program name is read. */}
            <div className="cap-block flex items-start gap-3 rounded-lg border border-eo-gold/40 bg-eo-gold/5 px-4 py-3 mb-4">
              <Info className="h-4 w-4 text-eo-gold shrink-0 mt-0.5" />
              <p className="text-xs text-text-secondary leading-relaxed">
                {attributionNotice}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 print:grid-cols-2 print:gap-3">
              {relevantExperience.map((exp) => (
                <div
                  key={exp.slug}
                  className="cap-block border border-border-default rounded-lg p-4 print:p-3"
                >
                  <p className="text-[10px] font-bold uppercase tracking-wider text-eo-gold mb-1">
                    {exp.agency}
                  </p>
                  <h3 className="text-sm font-bold text-text-primary mb-1.5">
                    {exp.title}
                  </h3>
                  <p className="text-xs text-text-muted mb-2">
                    Delivered under {exp.prime}
                    {exp.contractNumber ? ` | Contract ${exp.contractNumber}` : ""}
                  </p>
                  <p className="text-xs text-text-tertiary leading-relaxed mb-2">
                    {exp.summary}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {exp.scope.map((item) => (
                      <span
                        key={item}
                        className="inline-block px-2 py-0.5 rounded text-[10px] font-medium bg-eo-navy/5 text-text-secondary border border-border-default print:text-[8pt]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Company Data */}
          <div className="cap-block py-6 border-b border-border-default">
            <h2 className="text-lg font-bold text-text-primary mb-4 flex items-center gap-2">
              <Building2 className="h-5 w-5 text-eo-blue shrink-0" />
              Company Data
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4 print:grid-cols-4">
              {companyData.map((detail) => (
                <div
                  key={detail.label}
                  className="bg-eo-navy/3 border border-border-default rounded-lg p-3 print:p-2"
                >
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-text-muted mb-1">
                    {detail.label}
                  </p>
                  <p className="text-sm font-bold text-text-primary">
                    {detail.value}
                  </p>
                  {detail.note && (
                    <p className="text-[10px] text-text-muted leading-snug mt-1">
                      {detail.note}
                    </p>
                  )}
                </div>
              ))}
            </div>

            {/*
              Stated plainly, not buried. Holding no vehicle is the predicate
              for a neutral past performance rating under FAR 15.305(a)(2)(iv),
              and a buyer finds out either way.
            */}
            <div className="rounded-lg border border-border-default bg-eo-navy/3 px-4 py-3">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-text-muted mb-1">
                Contract Vehicles
              </p>
              <p className="text-sm text-text-secondary">
                None held. Available as a subcontractor on prime-held vehicles.
              </p>
            </div>
          </div>

          {/* Contact Footer */}
          <div className="cap-block py-6">
            <div className="bg-eo-navy rounded-lg p-6 print:p-4">
              <h2 className="text-lg font-bold text-white mb-1">Contact</h2>
              <p className="text-sm text-eo-gold font-medium mb-4">
                Jimi Umar, Founder
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 print:grid-cols-4 print:gap-3">
                <div className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 text-eo-gold shrink-0 mt-0.5" />
                  <div className="text-sm text-gray-300">
                    <p>{companyInfo.address.street}</p>
                    <p>
                      {companyInfo.address.city}, {companyInfo.address.state}{" "}
                      {companyInfo.address.zip}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-eo-gold shrink-0" />
                  <span className="text-sm text-gray-300">
                    {companyInfo.phone}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-eo-gold shrink-0" />
                  <span className="text-sm text-gray-300">
                    {companyInfo.email}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="h-4 w-4 text-eo-gold shrink-0" />
                  <span className="text-sm text-gray-300">
                    {companyInfo.domain}
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
