import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, CheckCircle2, Building2, Clock, Briefcase, FileText, Shield } from "lucide-react";
import { Section } from "@/components/ui/section";
import { getCaseStudyBySlug, caseStudies } from "@/data/case-studies";

const categoryHeroImages: Record<string, string> = {
  "Cloud Infrastructure": "/images/cloud-infrastructure.png",
  "Cybersecurity": "/images/cybersecurity.png",
  "Cybersecurity & Compliance": "/images/cybersecurity.png",
  "AI/ML Infrastructure": "/images/ai-ml-platform.jpg",
  "DevOps & Platform Engineering": "/images/devops-pipeline.jpg",
  "Data & Analytics": "/images/data-dashboard.jpg",
  "SaaS Solutions": "/images/saas-solutions.png",
  "Program Management": "/images/program-management.jpg",
  "Agile Delivery": "/images/agile-delivery.jpg",
  "Agile Delivery & Release Train Management": "/images/agile-delivery.jpg",
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  const sectorPrefix = study?.sector ? `${study.sector} | ` : "";
  return {
    title: study ? study.title : "Case Study",
    description: study
      ? `${sectorPrefix}${study.heroDescription}`
      : "EaseOrigin case study",
    openGraph: study
      ? {
          title: study.title,
          description: `${sectorPrefix}${study.heroDescription}`,
          type: "article",
          siteName: "EaseOrigin",
        }
      : undefined,
  };
}

export function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export default async function CaseStudyDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);

  if (!study) {
    return (
      <div className="min-h-screen bg-surface flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-text-primary mb-4">Case Study Not Found</h1>
          <p className="text-text-tertiary mb-8">The case study you are looking for does not exist.</p>
          <Link href="/case-studies" className="text-eo-blue font-semibold hover:underline">
            View All Case Studies
          </Link>
        </div>
      </div>
    );
  }

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: study.title,
    description: study.heroDescription,
    author: {
      "@type": "Organization",
      name: "EaseOrigin LLC",
      url: "https://easeorigin.com",
    },
    publisher: {
      "@type": "Organization",
      name: "EaseOrigin LLC",
      url: "https://easeorigin.com",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://easeorigin.com/case-studies/${slug}`,
    },
  };

  return (
    <div className="min-h-screen bg-surface">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-16 lg:pt-44 lg:pb-24 overflow-hidden bg-eo-navy text-white">
          <div className="absolute inset-0 z-0">
            {categoryHeroImages[study.category] && (
              <>
                <Image
                  src={categoryHeroImages[study.category]}
                  alt=""
                  fill
                  className="object-cover opacity-[0.12]"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-eo-navy via-eo-navy/95 to-eo-navy/80" />
              </>
            )}
            <div
              className="absolute inset-0 opacity-[0.035]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)",
                backgroundSize: "50px 50px",
              }}
            />
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-eo-blue rounded-full blur-[160px] opacity-20 translate-x-1/3 -translate-y-1/4" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-eo-gold rounded-full blur-[160px] opacity-[0.06] -translate-x-1/3 translate-y-1/4" />
          </div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="animate-fade-in-up">
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors mb-6"
              >
                <ArrowLeft className="h-4 w-4" /> Back to Case Studies
              </Link>

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-sm font-medium text-eo-gold mb-4">
                {study.category}
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-6">
                {study.title}
              </h1>
              <p className="text-lg text-gray-300 leading-relaxed max-w-3xl">
                {study.heroDescription}
              </p>
            </div>
          </div>
        </section>

        {/* Metrics Banner */}
        {study.metrics && study.metrics.length > 0 && (
          <section className="bg-gradient-to-r from-eo-navy via-[#1a2f4a] to-eo-navy border-b border-white/10">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
              <div className={`grid grid-cols-2 ${study.metrics.length >= 4 ? "lg:grid-cols-4" : study.metrics.length === 3 ? "lg:grid-cols-3" : "lg:grid-cols-2"} gap-6`}>
                {study.metrics.map((metric, i) => (
                  <div key={i} className="text-center">
                    <div className="text-3xl sm:text-4xl font-extrabold text-white leading-none mb-1">
                      {metric.value}
                    </div>
                    <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Engagement Metadata Bar */}
        {(study.sector || study.clientLabel || study.duration || study.easeOriginRole || study.contractVehicle || study.complianceFrameworks) && (
          <section className="bg-surface-muted border-b border-border-default">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
              <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm">
                {study.sector && (
                  <div className="flex items-center gap-2">
                    <Building2 className="h-4 w-4 text-gray-400 flex-shrink-0" />
                    <span className="font-semibold text-text-primary">Sector:</span>
                    <span className="text-text-tertiary">{study.sector}</span>
                  </div>
                )}
                {study.clientLabel && (
                  <div className="flex items-center gap-2">
                    <Briefcase className="h-4 w-4 text-gray-400 flex-shrink-0" />
                    <span className="font-semibold text-text-primary">Client:</span>
                    <span className="text-text-tertiary">{study.clientLabel}</span>
                  </div>
                )}
                {study.duration && (
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-gray-400 flex-shrink-0" />
                    <span className="font-semibold text-text-primary">Duration:</span>
                    <span className="text-text-tertiary">{study.duration}</span>
                  </div>
                )}
                {study.easeOriginRole && (
                  <div className="flex items-center gap-2">
                    <Briefcase className="h-4 w-4 text-gray-400 flex-shrink-0" />
                    <span className="font-semibold text-text-primary">Role:</span>
                    <span className="text-text-tertiary">{study.easeOriginRole}</span>
                  </div>
                )}
                {study.contractVehicle && (
                  <div className="flex items-center gap-2">
                    <FileText className="h-4 w-4 text-gray-400 flex-shrink-0" />
                    <span className="font-semibold text-text-primary">Contract:</span>
                    <span className="text-text-tertiary">{study.contractVehicle}</span>
                  </div>
                )}
                {study.complianceFrameworks && study.complianceFrameworks.length > 0 && (
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-gray-400 flex-shrink-0" />
                    <span className="font-semibold text-text-primary">Compliance:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {study.complianceFrameworks.map((fw) => (
                        <span key={fw} className="px-2 py-0.5 rounded-full bg-amber-50 border border-amber-200 text-[11px] font-semibold text-amber-700">
                          {fw}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        {/* Overview */}
        <Section className="bg-gradient-to-b from-slate-50/60 via-white to-slate-50/40 dark:from-gray-900/60 dark:via-gray-900 dark:to-gray-900/40 border-b border-border-subtle">
          <div className="animate-fade-in-up max-w-4xl mx-auto border-l-4 border-eo-gold/30 pl-6">
            <h2 className="text-2xl font-bold text-text-primary mb-4">Overview</h2>
            <p className="text-text-tertiary leading-relaxed text-lg">{study.overview}</p>
          </div>
        </Section>

        {/* Challenge & Solution */}
        <Section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/20 to-slate-50 dark:from-gray-900 dark:via-gray-900/20 dark:to-gray-900 border-b border-border-subtle">
          {/* Centered blue glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-100/20 rounded-full blur-[100px] pointer-events-none" />

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 dark:bg-red-950 border border-red-100 dark:border-red-900 text-sm font-medium text-red-600 mb-4">
                The Challenge
              </div>
              <p className="text-text-tertiary leading-relaxed">{study.challenge}</p>
            </div>

            <div className="animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950 border border-emerald-100 dark:border-emerald-900 text-sm font-medium text-emerald-600 mb-4">
                Our Solution
              </div>
              <p className="text-text-tertiary leading-relaxed">{study.solution}</p>
            </div>
          </div>
        </Section>

        {/* Results */}
        <Section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/25 to-white dark:from-gray-900 dark:via-gray-900/25 dark:to-gray-900 border-b border-border-subtle">
          {/* Gold corner glow */}
          <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-eo-gold/10 rounded-full blur-[80px] pointer-events-none" />

          <div className="max-w-4xl mx-auto">
            <div className="animate-fade-in-up">
              <h2 className="text-2xl font-bold text-text-primary mb-8">Results</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {study.results.map((result, i) => (
                  <div
                    key={i}
                    className="animate-fade-in-up flex items-start gap-3 bg-surface-muted rounded-xl border border-border-subtle px-5 py-4"
                    style={{ animationDelay: `${i * 0.05}s` }}
                  >
                    <CheckCircle2 className="h-5 w-5 text-eo-gold flex-shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-text-primary">{result}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>

        {/* Technologies */}
        <Section className="bg-gradient-to-b from-slate-50 via-white/80 to-slate-50 dark:from-gray-900 dark:via-gray-900/80 dark:to-gray-900 border-b border-border-subtle">
          <div className="max-w-4xl mx-auto">
            <div className="animate-fade-in-up">
              <h2 className="text-2xl font-bold text-text-primary mb-6">Technologies Used</h2>
              <div className="flex flex-wrap gap-3">
                {study.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 rounded-full bg-surface border border-border-default text-sm font-medium text-text-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Section>

        {/* CTA */}
        <Section className="relative overflow-hidden bg-eo-navy">
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)", backgroundSize: "50px 50px" }} />
          {/* Blue glow orb */}
          <div className="absolute -top-20 -right-20 w-72 h-72 bg-eo-blue/20 rounded-full blur-[80px] pointer-events-none" />

          <div className="relative z-10 animate-fade-in-up max-w-2xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Ready for Similar Results?</h2>
            <p className="text-gray-300 leading-relaxed mb-8">
              Let&apos;s discuss how EaseOrigin can help your organization achieve its technology goals.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact">
                <span className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-eo-gold text-eo-navy font-bold text-sm hover:bg-yellow-400 transition-all shadow-md cursor-pointer">
                  Contact Us <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
              <Link href="/case-studies">
                <span className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg border-2 border-white/25 text-white font-bold text-sm hover:bg-white/10 transition-all cursor-pointer">
                  More Case Studies
                </span>
              </Link>
            </div>
          </div>
        </Section>
      </main>
    </div>
  );
}
