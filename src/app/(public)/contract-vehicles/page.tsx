import type { Metadata } from "next";
import Link from "next/link";
import {
  Briefcase,
  CheckCircle2,
  ChevronRight,
  FileCheck,
  Building2,
  Shield,
  Hash,
} from "lucide-react";
import { Section } from "@/components/ui/section";
import { PageHero } from "@/components/shared/page-hero";
import { CTASection } from "@/components/shared/cta-section";
import {
  contractVehicles,
  naicsCodes,
  registrationInfo,
} from "@/data/contract-vehicles";
import { getCaseStudyBySlug } from "@/data/case-studies";
import { getSolutionBySlug } from "@/data/solutions";

export const metadata: Metadata = {
  title: "Contract Vehicles & Procurement Pathways | EaseOrigin",
  description:
    "Access EaseOrigin services through SAIC Cloud One, Leidos Kobayashi Maru, NAWCAD N0042118D0006, and GSA Schedule contract vehicles. SAM.gov registered, NAICS 541511, 541512, 541519, 541611.",
  openGraph: {
    title: "Contract Vehicles & Procurement Pathways | EaseOrigin",
    description:
      "Federal contract vehicles, NAICS codes, and procurement pathways for accessing EaseOrigin technology consulting services.",
    type: "website",
  },
};

export default function ContractVehiclesPage() {
  return (
    <div className="min-h-screen bg-surface">
      <main>
        <PageHero
          badge="Procurement"
          badgeIcon={<FileCheck className="h-4 w-4" />}
          title="Contract Vehicles & Procurement Pathways"
          description="EaseOrigin delivers through established government contract vehicles, making it easy for agencies and prime contractors to access our technology consulting expertise quickly and compliantly."
        />

        {/* Vehicle Cards */}
        <Section className="relative overflow-hidden bg-gradient-to-b from-slate-50/60 dark:from-gray-900/60 via-white dark:via-gray-900 to-slate-50/40 dark:to-gray-900/40 border-b border-border-subtle">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-100/20 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-sm font-semibold uppercase tracking-widest text-eo-gold mb-3">
                Active Vehicles
              </h2>
              <h3 className="text-2xl font-bold text-text-primary mb-8">
                Contract Vehicles
              </h3>

              <div className="grid md:grid-cols-2 gap-6">
                {contractVehicles.map((vehicle) => {
                  const caseStudy = vehicle.relatedCaseStudySlugs[0]
                    ? getCaseStudyBySlug(vehicle.relatedCaseStudySlugs[0])
                    : undefined;

                  return (
                    <div
                      key={vehicle.slug}
                      className="bg-surface border border-border-subtle rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <span className="inline-block px-3 py-1 rounded-full bg-eo-gold/10 border border-eo-gold/20 text-eo-gold text-xs font-bold uppercase tracking-wider">
                          {vehicle.role}
                        </span>
                      </div>

                      <h4 className="text-xl font-bold text-text-primary mb-2">
                        {vehicle.vehicleName}
                      </h4>

                      <div className="space-y-1 mb-4">
                        <p className="text-sm text-text-tertiary">
                          <span className="font-semibold text-text-secondary">
                            Agency:
                          </span>{" "}
                          {vehicle.agency}
                        </p>
                        <p className="text-sm text-text-tertiary">
                          <span className="font-semibold text-text-secondary">
                            Prime:
                          </span>{" "}
                          {vehicle.prime}
                        </p>
                        <p className="text-xs text-text-muted font-mono">
                          {vehicle.contractNumber}
                        </p>
                      </div>

                      <p className="text-sm text-text-tertiary leading-relaxed mb-5">
                        {vehicle.description}
                      </p>

                      <div className="space-y-2 mb-6">
                        {vehicle.scope.map((item, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-eo-blue flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-text-tertiary">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>

                      <div className="pt-4 border-t border-border-subtle flex flex-wrap gap-3">
                        {caseStudy && (
                          <Link
                            href={`/case-studies/${caseStudy.slug}`}
                            className="inline-flex items-center gap-1 text-xs font-semibold text-eo-blue hover:text-eo-navy transition-colors"
                          >
                            View Case Study{" "}
                            <ChevronRight className="h-3 w-3" />
                          </Link>
                        )}
                        {vehicle.relatedSolutionSlugs
                          .slice(0, 2)
                          .map((solSlug) => {
                            const sol = getSolutionBySlug(solSlug);
                            return sol ? (
                              <Link
                                key={solSlug}
                                href={`/solutions/${solSlug}`}
                                className="inline-block px-2 py-0.5 rounded text-[10px] font-medium bg-blue-50 text-eo-blue border border-blue-100"
                              >
                                {sol.title}
                              </Link>
                            ) : null;
                          })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Section>

        {/* Government Registration */}
        <Section className="relative overflow-hidden bg-surface border-b border-border-subtle">
          <div className="absolute -top-16 -right-16 w-72 h-72 bg-blue-100/15 rounded-full blur-[90px] pointer-events-none" />

          <div className="max-w-4xl mx-auto relative z-10">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-eo-gold mb-3">
              Registration
            </h2>
            <h3 className="text-2xl font-bold text-text-primary mb-8">
              Government Registration
            </h3>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-eo-navy/[0.03] border border-border-default rounded-xl p-5 text-center">
                <p className="text-[10px] font-semibold uppercase tracking-widest text-text-muted mb-1">
                  UEI
                </p>
                <p className="text-lg font-bold text-text-primary font-mono">
                  {registrationInfo.uei}
                </p>
              </div>
              <div className="bg-eo-navy/[0.03] border border-border-default rounded-xl p-5 text-center">
                <p className="text-[10px] font-semibold uppercase tracking-widest text-text-muted mb-1">
                  CAGE Code
                </p>
                <p className="text-lg font-bold text-text-primary font-mono">
                  {registrationInfo.cage}
                </p>
              </div>
              <div className="bg-eo-navy/[0.03] border border-border-default rounded-xl p-5 text-center">
                <p className="text-[10px] font-semibold uppercase tracking-widest text-text-muted mb-1">
                  Business Type
                </p>
                <p className="text-lg font-bold text-text-primary">
                  {registrationInfo.businessType}
                </p>
              </div>
              <div className="bg-eo-navy/[0.03] border border-border-default rounded-xl p-5 text-center">
                <p className="text-[10px] font-semibold uppercase tracking-widest text-text-muted mb-1">
                  SAM.gov
                </p>
                <div className="flex items-center justify-center gap-2">
                  <span className="flex h-2 w-2 rounded-full bg-green-500" />
                  <p className="text-lg font-bold text-text-primary">
                    {registrationInfo.samStatus}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* NAICS Codes */}
        <Section className="relative overflow-hidden bg-gradient-to-br from-slate-50 dark:from-gray-900 via-blue-50/20 dark:via-gray-900/20 to-slate-50 dark:to-gray-900 border-b border-border-subtle">
          <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-eo-gold/[0.06] rounded-full blur-[80px] pointer-events-none" />

          <div className="max-w-4xl mx-auto relative z-10">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-950 border border-blue-100 dark:border-blue-900 flex items-center justify-center">
                <Hash className="h-5 w-5 text-eo-blue" />
              </div>
              <div>
                <h2 className="text-sm font-semibold uppercase tracking-widest text-eo-gold">
                  Classification
                </h2>
                <h3 className="text-2xl font-bold text-text-primary">
                  NAICS Codes
                </h3>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {naicsCodes.map((naics) => (
                <div
                  key={naics.code}
                  className="flex items-start gap-4 bg-surface rounded-xl border border-border-subtle px-5 py-4 shadow-sm"
                >
                  <span className="inline-block px-3 py-1 rounded-lg bg-eo-navy text-white text-sm font-bold font-mono flex-shrink-0">
                    {naics.code}
                  </span>
                  <div>
                    <p className="text-sm font-medium text-text-primary">
                      {naics.description}
                    </p>
                    <p className="text-xs text-text-muted mt-0.5">
                      Size Standard: {naics.sizeStandard}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* How to Work With Us */}
        <Section className="relative overflow-hidden bg-surface border-b border-border-subtle">
          <div className="absolute top-1/3 right-0 w-80 h-80 bg-blue-100/15 rounded-full blur-[100px] pointer-events-none" />

          <div className="max-w-4xl mx-auto relative z-10">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-950 border border-blue-100 dark:border-blue-900 flex items-center justify-center">
                <Building2 className="h-5 w-5 text-eo-blue" />
              </div>
              <div>
                <h2 className="text-sm font-semibold uppercase tracking-widest text-eo-gold">
                  Partnerships
                </h2>
                <h3 className="text-2xl font-bold text-text-primary">
                  How to Work With Us
                </h3>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-slate-50 dark:from-gray-900 to-blue-50/30 dark:to-gray-800/30 border border-border-subtle rounded-2xl p-8">
                <div className="w-10 h-10 rounded-lg bg-eo-navy flex items-center justify-center mb-4">
                  <Shield className="h-5 w-5 text-eo-gold" />
                </div>
                <h4 className="text-lg font-bold text-text-primary mb-3">
                  For Government Agencies
                </h4>
                <p className="text-sm text-text-tertiary leading-relaxed mb-4">
                  Access EaseOrigin services through our established contract
                  vehicles or direct engagement. We hold active security
                  clearances and are SAM.gov registered for federal procurement.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-text-tertiary">
                    <CheckCircle2 className="h-4 w-4 text-eo-blue flex-shrink-0 mt-0.5" />
                    Task order through existing vehicles
                  </li>
                  <li className="flex items-start gap-2 text-sm text-text-tertiary">
                    <CheckCircle2 className="h-4 w-4 text-eo-blue flex-shrink-0 mt-0.5" />
                    Direct small business engagement
                  </li>
                  <li className="flex items-start gap-2 text-sm text-text-tertiary">
                    <CheckCircle2 className="h-4 w-4 text-eo-blue flex-shrink-0 mt-0.5" />
                    Active security clearance holders
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-slate-50 dark:from-gray-900 to-blue-50/30 dark:to-gray-800/30 border border-border-subtle rounded-2xl p-8">
                <div className="w-10 h-10 rounded-lg bg-eo-navy flex items-center justify-center mb-4">
                  <FileCheck className="h-5 w-5 text-eo-gold" />
                </div>
                <h4 className="text-lg font-bold text-text-primary mb-3">
                  For Prime Contractors
                </h4>
                <p className="text-sm text-text-tertiary leading-relaxed mb-4">
                  Partner with EaseOrigin as a subcontractor to extend your team
                  with specialized cloud, DevSecOps, cybersecurity, and program
                  management expertise.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-text-tertiary">
                    <CheckCircle2 className="h-4 w-4 text-eo-blue flex-shrink-0 mt-0.5" />
                    Proven teaming with SAIC, Leidos, Booz Allen
                  </li>
                  <li className="flex items-start gap-2 text-sm text-text-tertiary">
                    <CheckCircle2 className="h-4 w-4 text-eo-blue flex-shrink-0 mt-0.5" />
                    Small business subcontracting credit
                  </li>
                  <li className="flex items-start gap-2 text-sm text-text-tertiary">
                    <CheckCircle2 className="h-4 w-4 text-eo-blue flex-shrink-0 mt-0.5" />
                    Rapid onboarding and clearance-ready staff
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-slate-50 dark:from-gray-900 to-blue-50/30 dark:to-gray-800/30 border border-border-subtle rounded-2xl p-8">
                <div className="w-10 h-10 rounded-lg bg-eo-navy flex items-center justify-center mb-4">
                  <Briefcase className="h-5 w-5 text-eo-gold" />
                </div>
                <h4 className="text-lg font-bold text-text-primary mb-3">
                  For Private Sector & Enterprise
                </h4>
                <p className="text-sm text-text-tertiary leading-relaxed mb-4">
                  Direct engagement for commercial organizations seeking cloud,
                  DevOps, AI/ML, and platform engineering expertise.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-text-tertiary">
                    <CheckCircle2 className="h-4 w-4 text-eo-blue flex-shrink-0 mt-0.5" />
                    Direct consulting engagement
                  </li>
                  <li className="flex items-start gap-2 text-sm text-text-tertiary">
                    <CheckCircle2 className="h-4 w-4 text-eo-blue flex-shrink-0 mt-0.5" />
                    Enterprise cloud and platform expertise
                  </li>
                  <li className="flex items-start gap-2 text-sm text-text-tertiary">
                    <CheckCircle2 className="h-4 w-4 text-eo-blue flex-shrink-0 mt-0.5" />
                    Flexible SOW-based delivery
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Section>

        <CTASection
          variant="navy"
          title="Interested in Working Together?"
          description="Whether you are a government agency looking for specialized IT support, a prime contractor seeking a proven teaming partner, or a private sector organization scaling your technology capabilities, we would like to hear from you."
          primaryCta={{ href: "/contact", label: "Contact Us" }}
          secondaryCta={{ href: "/solutions", label: "View Solutions" }}
        />
      </main>
    </div>
  );
}
