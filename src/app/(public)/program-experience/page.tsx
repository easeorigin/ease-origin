import type { Metadata } from "next";
import Link from "next/link";
import {
  CheckCircle2,
  ChevronRight,
  FileCheck,
  Building2,
  Handshake,
  Hash,
  Info,
} from "lucide-react";
import { Section } from "@/components/ui/section";
import { PageHero } from "@/components/shared/page-hero";
import { CTASection } from "@/components/shared/cta-section";
import {
  programExperience,
  naicsCodes,
  pscCodes,
  teamingProfile,
} from "@/data/program-experience";
import {
  companyInfo,
  attributionNotice,
  clearanceStatement,
  trademarkNotice,
} from "@/data/company-info";
import { getCaseStudyBySlug } from "@/data/case-studies";

export const metadata: Metadata = {
  title: "Program Experience & Teaming | EaseOrigin",
  description:
    "Federal program experience held by EaseOrigin personnel, plus NAICS codes, PSC codes, and teaming information for prime contractor small business liaison officers.",
  openGraph: {
    title: "Program Experience & Teaming | EaseOrigin",
    description:
      "Federal program experience, NAICS and PSC codes, and subcontracting information for prime contractors.",
    type: "website",
  },
};

export default function ProgramExperiencePage() {
  return (
    <div className="min-h-screen bg-surface">
      <main>
        <PageHero
          badge="Procurement"
          badgeIcon={<FileCheck className="h-4 w-4" />}
          title="Program Experience & Teaming"
          description="The federal programs our people have delivered on, the codes we register under, and how prime contractors can bring us onto a team."
        />

        {/* Attribution notice. This is the first thing on the page by design. */}
        <Section className="border-b border-border-subtle py-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-4 rounded-xl border border-eo-gold/40 bg-eo-gold/5 px-6 py-5">
              <Info className="h-5 w-5 text-eo-gold shrink-0 mt-0.5" />
              <p className="text-sm text-text-secondary leading-relaxed">
                {attributionNotice}
              </p>
            </div>
          </div>
        </Section>

        {/* Program experience */}
        <Section className="relative overflow-hidden bg-linear-to-b from-slate-50/60 dark:from-gray-900/60 via-white dark:via-gray-900 to-slate-50/40 dark:to-gray-900/40 border-b border-border-subtle">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-100/20 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-eo-gold mb-3">
              Federal Programs
            </h2>
            <h3 className="text-2xl font-bold text-text-primary mb-8">
              Relevant Experience
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              {programExperience.map((program) => {
                const caseStudy = program.relatedCaseStudySlugs[0]
                  ? getCaseStudyBySlug(program.relatedCaseStudySlugs[0])
                  : undefined;

                return (
                  <div
                    key={program.slug}
                    className="bg-surface border border-border-subtle rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300"
                  >
                    <span className="inline-block px-3 py-1 mb-4 rounded-full bg-eo-navy/5 border border-border-default text-text-tertiary text-xs font-bold uppercase tracking-wider">
                      {program.role}
                    </span>

                    <h4 className="text-xl font-bold text-text-primary mb-3">
                      {program.programName}
                    </h4>

                    <dl className="space-y-1 mb-4 text-sm">
                      <div className="flex gap-2">
                        <dt className="text-text-muted shrink-0">Agency:</dt>
                        <dd className="text-text-secondary">{program.agency}</dd>
                      </div>
                      <div className="flex gap-2">
                        <dt className="text-text-muted shrink-0">Delivered under:</dt>
                        <dd className="text-text-secondary">{program.prime}</dd>
                      </div>
                      {program.contractNumber && (
                        <div className="flex gap-2">
                          <dt className="text-text-muted shrink-0">Contract:</dt>
                          <dd className="text-text-secondary font-mono text-xs pt-0.5">
                            {program.contractNumber}
                          </dd>
                        </div>
                      )}
                    </dl>

                    <p className="text-sm text-text-tertiary leading-relaxed mb-4">
                      {program.description}
                    </p>

                    <ul className="space-y-2 mb-5">
                      {program.scope.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-eo-gold shrink-0 mt-0.5" />
                          <span className="text-sm text-text-tertiary">{item}</span>
                        </li>
                      ))}
                    </ul>

                    {caseStudy && (
                      <Link
                        href={`/case-studies/${caseStudy.slug}`}
                        className="inline-flex items-center gap-1 text-sm font-semibold text-eo-blue hover:text-eo-navy transition-colors"
                      >
                        Read the detail
                        <ChevronRight className="h-4 w-4" />
                      </Link>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </Section>

        {/* Teaming and subcontracting */}
        <Section className="border-b border-border-subtle">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-eo-gold mb-3">
              For Prime Contractors
            </h2>
            <h3 className="text-2xl font-bold text-text-primary mb-3">
              Teaming & Subcontracting
            </h3>
            <p className="text-text-tertiary mb-8 max-w-2xl">
              We work as a subcontractor on prime-held vehicles. If you are a
              small business liaison officer with a scope gap in cloud or
              platform engineering, this is the short version.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-surface border border-border-subtle rounded-2xl p-7">
                <div className="flex items-center gap-2 mb-4">
                  <Handshake className="h-5 w-5 text-eo-blue shrink-0" />
                  <h4 className="text-base font-bold text-text-primary">
                    What we are looking for
                  </h4>
                </div>
                <ul className="space-y-3">
                  {teamingProfile.seeking.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-eo-gold shrink-0 mt-0.5" />
                      <span className="text-sm text-text-tertiary">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-surface border border-border-subtle rounded-2xl p-7">
                <div className="flex items-center gap-2 mb-4">
                  <Building2 className="h-5 w-5 text-eo-blue shrink-0" />
                  <h4 className="text-base font-bold text-text-primary">
                    Labor categories
                  </h4>
                </div>
                <ul className="space-y-3 mb-5">
                  {teamingProfile.laborCategories.map((cat) => (
                    <li key={cat.title} className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-eo-gold shrink-0 mt-0.5" />
                      <span className="text-sm text-text-tertiary">{cat.title}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-text-tertiary leading-relaxed">
                  Rates on request. {clearanceStatement} Classified work is
                  performed under the prime&apos;s facility clearance, which is
                  the standard arrangement at our size.
                </p>
              </div>
            </div>

            {/* Contract vehicles: stated plainly. */}
            <div className="rounded-xl border border-border-default bg-eo-navy/3 px-6 py-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-text-muted mb-2">
                Contract vehicles held
              </p>
              <p className="text-sm text-text-secondary">
                {teamingProfile.vehiclesHeld}
              </p>
            </div>
          </div>
        </Section>

        {/* Registration data */}
        <Section>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-eo-gold mb-3">
              Registration
            </h2>
            <h3 className="text-2xl font-bold text-text-primary mb-8">
              Company Data
            </h3>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
              {[
                { label: "UEI", value: companyInfo.identifiers.uei },
                { label: "CAGE", value: companyInfo.identifiers.cage },
                { label: "Business size", value: companyInfo.identifiers.businessType },
                {
                  label: "Place of business",
                  value: `${companyInfo.address.city}, ${companyInfo.address.state}`,
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-surface border border-border-subtle rounded-xl p-5"
                >
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-text-muted mb-1">
                    {item.label}
                  </p>
                  <p className="text-sm font-bold text-text-primary">{item.value}</p>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Hash className="h-5 w-5 text-eo-blue shrink-0" />
                  <h4 className="text-base font-bold text-text-primary">NAICS codes</h4>
                </div>
                <ul className="space-y-2">
                  {naicsCodes.map((n) => (
                    <li
                      key={n.code}
                      className="flex items-baseline gap-3 border-b border-border-subtle pb-2"
                    >
                      <span className="font-mono text-sm font-bold text-text-primary shrink-0">
                        {n.code}
                      </span>
                      <span className="text-sm text-text-tertiary">
                        {n.description}
                        {n.primary && (
                          <span className="ml-2 text-xs font-semibold text-eo-gold">
                            Primary
                          </span>
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Hash className="h-5 w-5 text-eo-blue shrink-0" />
                  <h4 className="text-base font-bold text-text-primary">PSC codes</h4>
                </div>
                <ul className="space-y-2">
                  {pscCodes.map((p) => (
                    <li
                      key={p.code}
                      className="flex items-baseline gap-3 border-b border-border-subtle pb-2"
                    >
                      <span className="font-mono text-sm font-bold text-text-primary shrink-0">
                        {p.code}
                      </span>
                      <span className="text-sm text-text-tertiary">{p.description}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <p className="text-xs text-text-muted leading-relaxed mt-10 max-w-3xl">
              {trademarkNotice}
            </p>
          </div>
        </Section>

        <CTASection
          variant="navy"
          eyebrow="Teaming"
          title="Add cloud and platform depth to your team"
          description="Send us the scope and the vehicle. You get back a straight read on fit, the labor categories we cover, the compliance work we can carry, and what we would need from your side to stand it up."
          primaryCta={{ href: "/contact", label: "Start a Conversation" }}
          secondaryCta={{ href: "/capability-statement", label: "Capability Statement" }}
        />
      </main>
    </div>
  );
}
