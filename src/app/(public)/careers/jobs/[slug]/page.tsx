import Link from "next/link";
import {
  ArrowLeft, MapPin, Wifi, Building2, Layers, CheckCircle2,
  ArrowRight, Tag, Briefcase
} from "lucide-react";
import { Section } from "@/components/ui/section";
import { getJobBySlug, jobs } from "@/data/jobs";
import { JobCard } from "@/components/job-card";

const workTypeIcon: Record<string, React.ElementType> = {
  Remote: Wifi,
  Hybrid: Building2,
  Onsite: Building2,
};

function NotFoundState() {
  return (
    <div className="min-h-screen bg-surface flex items-center justify-center">
      <div className="text-center px-4">
        <h1 className="text-3xl font-bold text-text-primary mb-4">Job Not Found</h1>
        <p className="text-text-tertiary mb-6">This position may have been filled or removed.</p>
        <Link href="/careers/jobs">
          <span className="inline-flex items-center gap-2 px-6 py-3 bg-eo-navy text-white font-bold rounded-lg cursor-pointer hover:bg-eo-blue transition-colors">
            <ArrowLeft className="h-4 w-4" /> View All Positions
          </span>
        </Link>
      </div>
    </div>
  );
}

export default async function JobDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const job = getJobBySlug(slug);

  if (!job) return <NotFoundState />;

  const WorkIcon = workTypeIcon[job.workType] ?? Wifi;
  const related = jobs.filter((j) => j.slug !== job.slug && j.category === job.category).slice(0, 2);

  return (
    <div className="min-h-screen bg-surface">
      <main>

        {/* Hero */}
        <section className="relative pt-32 pb-16 lg:pt-44 lg:pb-20 overflow-hidden bg-eo-navy text-white">
          <div className="absolute inset-0 z-0">
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)",
                backgroundSize: "50px 50px",
              }}
            />
            <div className="absolute top-0 right-0 w-175 h-175 bg-eo-blue rounded-full blur-[160px] opacity-20 translate-x-1/3 -translate-y-1/4" />
          </div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="animate-fade-in-up flex flex-col">
              <Link href="/careers/jobs">
                <span className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors mb-8 cursor-pointer group">
                  <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                  Back to Open Positions
                </span>
              </Link>

              <span className="flex self-start px-3 py-1 bg-white/10 border border-white/20 text-xs font-bold text-eo-gold rounded-full uppercase tracking-wider mb-5">
                {job.category}
              </span>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-6">
                {job.title}
              </h1>

              {/* Meta chips */}
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/10 border border-white/15 text-sm text-gray-200">
                  <MapPin className="h-4 w-4 text-eo-gold" /> {job.location}
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/10 border border-white/15 text-sm text-gray-200">
                  <WorkIcon className="h-4 w-4 text-eo-gold" /> {job.workType}
                </div>
                {job.clearance && (
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/10 border border-white/15 text-sm text-gray-200">
                    <Layers className="h-4 w-4 text-eo-gold" /> {job.clearance}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Content + Sidebar */}
        <Section className="relative overflow-hidden bg-gradient-to-b from-slate-50 dark:from-gray-900 via-blue-50/25 dark:via-gray-900/25 to-white dark:to-gray-900 border-b border-border-subtle">
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-eo-gold/10 rounded-full blur-[80px] pointer-events-none" />
          <div className="max-w-5xl mx-auto relative z-10 grid lg:grid-cols-3 gap-10 lg:gap-14">

            {/* Left: job content */}
            <div className="lg:col-span-2 flex flex-col gap-10">

              {/* Overview */}
              <div className="animate-fade-in-up">
                <p className="text-xs font-semibold uppercase tracking-widest text-eo-gold mb-2">Job Overview</p>
                <h2 className="text-2xl font-bold text-text-primary mb-4">About This Role</h2>
                <p className="text-text-tertiary leading-relaxed">{job.overview}</p>
              </div>

              {/* Responsibilities */}
              <div className="animate-fade-in-up" style={{ animationDelay: "0.05s" }}>
                <h2 className="text-xl font-bold text-text-primary mb-4">Responsibilities</h2>
                <ul className="flex flex-col gap-3">
                  {job.responsibilities.map((r, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-eo-gold flex-shrink-0 mt-0.5" />
                      <span className="text-text-tertiary text-sm leading-relaxed">{r}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Qualifications */}
              <div className="animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                <h2 className="text-xl font-bold text-text-primary mb-4">Qualifications</h2>
                <ul className="flex flex-col gap-3">
                  {job.qualifications.map((q, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-eo-blue mt-2 flex-shrink-0" />
                      <span className="text-text-tertiary text-sm leading-relaxed">{q}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
                <div className="flex items-center gap-2 mb-4">
                  <Tag className="h-4 w-4 text-eo-blue" />
                  <h2 className="text-xl font-bold text-text-primary">Technologies</h2>
                </div>
                <div className="flex flex-wrap gap-2">
                  {job.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="inline-block px-3 py-1.5 bg-slate-50 border border-border-default text-sm font-medium text-text-primary rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Apply sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 flex flex-col gap-5">
                {/* Apply card */}
                <div className="bg-eo-navy rounded-2xl p-7 text-white">
                  <div className="w-11 h-11 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center mb-4">
                    <Briefcase className="h-5 w-5 text-eo-gold" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Interested in This Role?</h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-5">
                    Apply now or submit your resume for future consideration.
                  </p>
                  <div className="flex flex-col gap-3">
                    <Link href="/contact">
                      <span className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-lg bg-eo-gold text-eo-navy font-bold text-sm hover:bg-yellow-400 transition-colors cursor-pointer">
                        Apply Now <ArrowRight className="h-4 w-4" />
                      </span>
                    </Link>
                    <Link href="/careers/submit-resume">
                      <span className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-lg border-2 border-white/20 text-white font-semibold text-sm hover:bg-white/10 transition-colors cursor-pointer">
                        Submit Resume
                      </span>
                    </Link>
                  </div>
                </div>

                {/* Job meta card */}
                <div className="bg-surface-muted rounded-2xl border border-border-subtle p-6 flex flex-col gap-4">
                  <h4 className="text-sm font-bold text-text-primary">Position Details</h4>
                  <div className="flex flex-col gap-3">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-text-muted mb-1">Category</p>
                      <p className="text-sm font-medium text-text-primary">{job.category}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-text-muted mb-1">Work Type</p>
                      <p className="text-sm font-medium text-text-primary">{job.workType}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-text-muted mb-1">Location</p>
                      <p className="text-sm font-medium text-text-primary">{job.location}</p>
                    </div>
                    {job.clearance && (
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-widest text-text-muted mb-1">Clearance</p>
                        <p className="text-sm font-medium text-text-primary">{job.clearance}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Related Positions */}
        {related.length > 0 && (
          <Section className="bg-gradient-to-b from-slate-50 dark:from-gray-900 via-white dark:via-gray-900 to-slate-50 dark:to-gray-900 border-b border-border-subtle">
            <h2 className="text-xl font-bold text-text-primary mb-6">Similar Positions</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {related.map((j, i) => <JobCard key={j.slug} job={j} index={i} />)}
            </div>
          </Section>
        )}

      </main>
    </div>
  );
}
