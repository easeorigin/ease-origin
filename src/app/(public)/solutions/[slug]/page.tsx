import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Server,
  Shield,
  GitBranch,
  BrainCircuit,
  BarChart3,
  Layers,
  ClipboardList,
  Workflow,
} from "lucide-react";
import { Section } from "@/components/ui/section";
import { getSolutionBySlug, solutions } from "@/data/solutions";
import { getCaseStudyBySlug, type CaseStudy } from "@/data/case-studies";

// ─── Icon Mapping ────────────────────────────────────────────────────────────

const iconMap: Record<string, React.ElementType> = {
  Server,
  Shield,
  GitBranch,
  BrainCircuit,
  BarChart3,
  Layers,
  ClipboardList,
  Workflow,
};

// ─── Category Colors (for case study cards) ──────────────────────────────────

const categoryColors: Record<
  string,
  { bg: string; border: string; text: string; headerBg: string }
> = {
  "Cloud Infrastructure": {
    bg: "bg-blue-50 dark:bg-blue-950",
    border: "border-blue-100 dark:border-blue-900",
    text: "text-eo-blue",
    headerBg: "from-blue-50 to-indigo-50 dark:from-blue-800/60 dark:to-indigo-800/60",
  },
  Cybersecurity: {
    bg: "bg-amber-50 dark:bg-amber-950",
    border: "border-amber-100 dark:border-amber-900",
    text: "text-amber-700 dark:text-amber-300",
    headerBg: "from-amber-50 to-orange-50 dark:from-amber-800/60 dark:to-orange-800/60",
  },
  "Cybersecurity & Compliance": {
    bg: "bg-amber-50 dark:bg-amber-950",
    border: "border-amber-100 dark:border-amber-900",
    text: "text-amber-700 dark:text-amber-300",
    headerBg: "from-amber-50 to-orange-50 dark:from-amber-800/60 dark:to-orange-800/60",
  },
  "Data & Analytics": {
    bg: "bg-emerald-50 dark:bg-emerald-950",
    border: "border-emerald-100 dark:border-emerald-900",
    text: "text-emerald-700 dark:text-emerald-300",
    headerBg: "from-emerald-50 to-teal-50 dark:from-emerald-800/60 dark:to-teal-800/60",
  },
  "AI/ML Infrastructure": {
    bg: "bg-violet-50 dark:bg-violet-950",
    border: "border-violet-100 dark:border-violet-900",
    text: "text-violet-700 dark:text-violet-300",
    headerBg: "from-violet-50 to-purple-50 dark:from-violet-800/60 dark:to-purple-800/60",
  },
  "DevOps & Platform Engineering": {
    bg: "bg-indigo-50 dark:bg-indigo-950",
    border: "border-indigo-100 dark:border-indigo-900",
    text: "text-indigo-700 dark:text-indigo-300",
    headerBg: "from-indigo-50 to-blue-50 dark:from-indigo-800/60 dark:to-blue-800/60",
  },
  "SaaS Solutions": {
    bg: "bg-sky-50 dark:bg-sky-950",
    border: "border-sky-100 dark:border-sky-900",
    text: "text-sky-700 dark:text-sky-300",
    headerBg: "from-sky-50 to-cyan-50 dark:from-sky-800/60 dark:to-cyan-800/60",
  },
  "Program Management": {
    bg: "bg-purple-50 dark:bg-purple-950",
    border: "border-purple-100 dark:border-purple-900",
    text: "text-purple-700 dark:text-purple-300",
    headerBg: "from-purple-50 to-violet-50 dark:from-purple-800/60 dark:to-violet-800/60",
  },
  "Agile Delivery & Release Train Management": {
    bg: "bg-red-50 dark:bg-red-950",
    border: "border-red-100 dark:border-red-900",
    text: "text-red-700 dark:text-red-300",
    headerBg: "from-red-50 to-rose-50 dark:from-red-800/60 dark:to-rose-800/60",
  },
};

const categoryIcons: Record<string, React.ElementType> = {
  "Cloud Infrastructure": Server,
  Cybersecurity: Shield,
  "Cybersecurity & Compliance": Shield,
  "Data & Analytics": BarChart3,
  "AI/ML Infrastructure": BrainCircuit,
  "DevOps & Platform Engineering": GitBranch,
  "SaaS Solutions": Layers,
  "Program Management": ClipboardList,
  "Agile Delivery & Release Train Management": Workflow,
};

// ─── Static Case Study Card (no framer-motion) ──────────────────────────────

function StaticCaseStudyCard({ study }: { study: CaseStudy }) {
  const Icon = categoryIcons[study.category] ?? BarChart3;
  const colors =
    categoryColors[study.category] ?? categoryColors["Data & Analytics"];

  return (
    <div className="flex flex-col h-full bg-surface border border-border-subtle rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
      {/* Card header */}
      <div
        className={`h-36 bg-gradient-to-br ${colors.headerBg} relative overflow-hidden flex items-end p-6 border-b border-border-subtle`}
      >
        <div className="absolute -right-6 -top-6 w-28 h-28 rounded-full bg-white/50 dark:bg-white/10 blur-2xl" />
        <div className="absolute -left-4 -bottom-4 w-20 h-20 rounded-full bg-white/40 dark:bg-white/8 blur-xl" />

        {/* Metric callout */}
        {study.metrics && study.metrics.length > 0 && (
          <div className="absolute top-4 right-4 text-right z-10">
            <div className="text-2xl font-extrabold text-text-primary leading-none">
              {study.metrics[0].value}
            </div>
            <div className="text-[10px] font-semibold text-text-tertiary uppercase tracking-wider mt-0.5">
              {study.metrics[0].label}
            </div>
          </div>
        )}

        <div className="relative z-10 flex items-center gap-3">
          <div
            className={`w-9 h-9 rounded-xl ${colors.bg} ${colors.border} border flex items-center justify-center`}
          >
            <Icon className={`h-4 w-4 ${colors.text}`} />
          </div>
          <span
            className={`inline-block px-3 py-1 ${colors.bg} ${colors.border} border text-xs font-bold ${colors.text} rounded-full uppercase tracking-wider`}
          >
            {study.category}
          </span>
        </div>
      </div>

      {/* Card body */}
      <div className="p-8 flex flex-col flex-grow">
        <h4 className="text-xl font-bold text-text-primary mb-2 leading-tight group-hover:text-eo-blue transition-colors">
          {study.title}
        </h4>

        {/* Sector & client badges */}
        {(study.sector || study.clientLabel) && (
          <div className="flex flex-wrap gap-2 mb-3">
            {study.sector && (
              <span className="inline-block px-2 py-0.5 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-[11px] font-semibold text-slate-600 dark:text-slate-300 rounded-full uppercase tracking-wider">
                {study.sector}
              </span>
            )}
            {study.clientLabel && (
              <span
                className="inline-block px-2 py-0.5 bg-slate-50 dark:bg-slate-800 border border-slate-150 dark:border-slate-700 text-[11px] font-medium text-slate-500 dark:text-slate-400 rounded-full truncate max-w-[200px]"
                title={study.clientLabel}
              >
                {study.clientLabel}
              </span>
            )}
          </div>
        )}

        <p className="text-text-tertiary mb-8 flex-grow leading-relaxed text-sm">
          {study.shortDescription}
        </p>
        <Link href={`/case-studies/${study.slug}`}>
          <span className="inline-flex items-center text-sm font-bold text-eo-blue hover:text-eo-navy transition-colors cursor-pointer group/link">
            Read Case Study
            <ArrowRight className="ml-2 h-4 w-4 transform group-hover/link:translate-x-1 transition-transform" />
          </span>
        </Link>
      </div>
    </div>
  );
}

// ─── Metadata & Static Params ────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);
  return {
    title: solution
      ? `${solution.title} | Solutions | EaseOrigin`
      : "Solution | EaseOrigin",
    description: solution
      ? solution.heroDescription
      : "EaseOrigin technology consulting solution",
    openGraph: solution
      ? {
          title: `${solution.title} | EaseOrigin`,
          description: solution.heroDescription,
          type: "website",
        }
      : undefined,
  };
}

export function generateStaticParams() {
  return solutions.map((s) => ({ slug: s.slug }));
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default async function SolutionDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);

  if (!solution) {
    return (
      <div className="min-h-screen bg-surface flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-text-primary mb-4">
            Solution Not Found
          </h1>
          <p className="text-text-tertiary mb-8">
            The solution you are looking for does not exist.
          </p>
          <Link
            href="/solutions"
            className="text-eo-blue font-semibold hover:underline"
          >
            View All Solutions
          </Link>
        </div>
      </div>
    );
  }

  const Icon = iconMap[solution.icon] ?? Server;

  // Resolve related case studies
  const relatedStudies: CaseStudy[] = solution.relatedCaseStudySlugs
    .map((csSlug) => getCaseStudyBySlug(csSlug))
    .filter((cs): cs is CaseStudy => cs !== undefined);

  return (
    <div className="min-h-screen bg-surface">
      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-16 lg:pt-44 lg:pb-24 overflow-hidden bg-eo-navy text-white">
          <div className="absolute inset-0 z-0">
            <Image
              src={`/${solution.image}`}
              alt={`${solution.title} background`}
              aria-hidden="true"
              fill
              className="object-cover opacity-[0.12]"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-eo-navy via-eo-navy/95 to-eo-navy/80" />
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
                href="/solutions"
                className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors mb-6"
              >
                <ArrowLeft className="h-4 w-4" /> Back to Solutions
              </Link>

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-sm font-medium text-eo-gold mb-4">
                <Icon className="h-4 w-4" />
                {solution.title}
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-6">
                {solution.title}
              </h1>
              <p className="text-lg text-gray-300 leading-relaxed max-w-3xl">
                {solution.heroDescription}
              </p>
            </div>
          </div>
        </section>

        {/* Overview */}
        <Section className="bg-gradient-to-b from-slate-50/60 via-white to-slate-50/40 dark:from-gray-900/60 dark:via-gray-900 dark:to-gray-900/40 border-b border-border-subtle">
          <div className="animate-fade-in-up max-w-4xl mx-auto border-l-4 border-eo-gold/30 pl-6">
            <h2 className="text-2xl font-bold text-text-primary mb-4">Overview</h2>
            <p className="text-text-tertiary leading-relaxed text-lg">
              {solution.overview}
            </p>
          </div>
        </Section>

        {/* Key Capabilities */}
        <Section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/20 to-slate-50 dark:from-gray-900 dark:via-gray-900/20 dark:to-gray-900 border-b border-border-subtle">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-100/20 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-eo-gold/[0.06] rounded-full blur-[80px] pointer-events-none" />

          <div className="max-w-4xl mx-auto relative z-10">
            <h2 className="text-2xl font-bold text-text-primary mb-8">
              Key Capabilities
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {solution.keyCapabilities.map((capability, i) => (
                <div
                  key={i}
                  className="animate-fade-in-up flex items-start gap-3 bg-surface rounded-xl border border-border-subtle px-5 py-4 shadow-sm"
                  style={{ animationDelay: `${i * 0.05}s` }}
                >
                  <CheckCircle2 className="h-5 w-5 text-eo-blue flex-shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-text-primary">
                    {capability}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* Technologies */}
        <Section className="bg-gradient-to-b from-slate-50 via-white/80 to-slate-50 dark:from-gray-900 dark:via-gray-900/80 dark:to-gray-900 border-b border-border-subtle">
          <div className="max-w-4xl mx-auto">
            <div className="animate-fade-in-up">
              <h2 className="text-2xl font-bold text-text-primary mb-6">
                Technologies
              </h2>
              <div className="flex flex-wrap gap-3">
                {solution.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 rounded-full bg-surface border border-border-default text-sm font-medium text-text-primary shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Section>

        {/* Compliance Frameworks */}
        {solution.complianceFrameworks &&
          solution.complianceFrameworks.length > 0 && (
            <Section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-amber-50/10 to-slate-50 dark:from-gray-900 dark:via-gray-900/10 dark:to-gray-900 border-b border-border-subtle">
              <div className="absolute -top-16 -left-16 w-72 h-72 bg-amber-100/15 rounded-full blur-[90px] pointer-events-none" />

              <div className="max-w-4xl mx-auto relative z-10">
                <div className="animate-fade-in-up">
                  <h2 className="text-2xl font-bold text-text-primary mb-6">
                    Compliance Frameworks
                  </h2>
                  <div className="flex flex-wrap gap-3">
                    {solution.complianceFrameworks.map((fw, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 rounded-full bg-amber-50 dark:bg-amber-950 border border-amber-200 dark:border-amber-800 text-sm font-semibold text-amber-700 dark:text-amber-300"
                      >
                        {fw}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Section>
          )}

        {/* Related Case Studies */}
        {relatedStudies.length > 0 && (
          <Section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/25 to-white dark:from-gray-900 dark:via-gray-900/25 dark:to-gray-900 border-b border-border-subtle">
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-blue-200/15 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute -top-16 -left-16 w-64 h-64 bg-eo-gold/[0.05] rounded-full blur-[80px] pointer-events-none" />

            <div className="max-w-4xl mx-auto relative z-10">
              <div className="animate-fade-in-up">
                <h2 className="text-sm font-semibold uppercase tracking-widest text-eo-gold mb-3">
                  Related Work
                </h2>
                <h3 className="text-2xl font-bold text-text-primary mb-8">
                  Case Studies
                </h3>
                <div
                  className={`grid gap-6 ${
                    relatedStudies.length === 1
                      ? "max-w-lg"
                      : relatedStudies.length === 2
                        ? "md:grid-cols-2"
                        : "md:grid-cols-2 lg:grid-cols-3"
                  }`}
                >
                  {relatedStudies.map((study) => (
                    <StaticCaseStudyCard key={study.slug} study={study} />
                  ))}
                </div>
              </div>
            </div>
          </Section>
        )}

        {/* CTA */}
        <Section className="relative overflow-hidden bg-eo-navy">
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          />
          <div className="absolute -top-20 -right-20 w-72 h-72 bg-eo-blue/20 rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-eo-gold/[0.06] rounded-full blur-[80px] pointer-events-none" />

          <div className="relative z-10 animate-fade-in-up max-w-2xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-gray-300 leading-relaxed mb-8">
              Let&apos;s discuss how EaseOrigin can help your organization with{" "}
              {solution.title.toLowerCase()} solutions tailored to your mission.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact">
                <span className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-eo-gold text-eo-navy font-bold text-sm hover:bg-yellow-400 transition-all shadow-md cursor-pointer">
                  Contact Us <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
              <Link href="/solutions">
                <span className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg border-2 border-white/25 text-white font-bold text-sm hover:bg-white/10 transition-all cursor-pointer">
                  All Solutions
                </span>
              </Link>
            </div>
          </div>
        </Section>
      </main>
    </div>
  );
}
