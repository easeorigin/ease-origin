"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft, MapPin, Wifi, Building2, Layers, CheckCircle2,
  ArrowRight, Tag, Briefcase
} from "lucide-react";
import { Section } from "@/components/ui/section";
import { getJobBySlug, jobs } from "@/data/jobs";
import { JobCard } from "@/components/job-card";
import { ApplicationDrawer } from "@/components/application-drawer";



const workTypeIcon: Record<string, React.ElementType> = {
  Remote: Wifi,
  Hybrid: Building2,
  Onsite: Building2,
};

function NotFoundState() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center px-4">
        <h1 className="text-3xl font-bold text-tg-navy mb-4">Job Not Found</h1>
        <p className="text-gray-500 mb-6">This position may have been filled or removed.</p>
        <Link href="/careers/jobs">
          <span className="inline-flex items-center gap-2 px-6 py-3 bg-tg-navy text-white font-bold rounded-lg cursor-pointer hover:bg-tg-blue transition-colors">
            <ArrowLeft className="h-4 w-4" /> View All Positions
          </span>
        </Link>
      </div>
    </div>
  );
}

export default function JobDetailPage() {
  const params = useParams<{ slug: string }>();
  const job = getJobBySlug(params.slug);
  const [drawerOpen, setDrawerOpen] = useState(false);

  if (!job) return <NotFoundState />;

  const WorkIcon = workTypeIcon[job.workType] ?? Wifi;
  const related = jobs.filter((j) => j.slug !== job.slug && j.category === job.category).slice(0, 2);

  return (
    <div className="min-h-screen bg-white">
      <main>

        {/* ── Hero ── */}
        <section className="relative pt-32 pb-16 lg:pt-44 lg:pb-20 overflow-hidden bg-tg-navy text-white">
          <div className="absolute inset-0 z-0">
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)",
                backgroundSize: "50px 50px",
              }}
            />
            <div className="absolute top-0 right-0 w-175 h-175 bg-tg-blue rounded-full blur-[160px] opacity-20 translate-x-1/3 -translate-y-1/4" />
          </div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col"
            >
              <Link href="/careers/jobs">
                <span className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors mb-8 cursor-pointer group">
                  <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                  Back to Open Positions
                </span>
              </Link>

              <span className="flex self-start px-3 py-1 bg-white/10 border border-white/20 text-xs font-bold text-tg-gold rounded-full uppercase tracking-wider mb-5">
                {job.category}
              </span>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-6">
                {job.title}
              </h1>

              {/* Meta chips */}
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/10 border border-white/15 text-sm text-gray-200">
                  <MapPin className="h-4 w-4 text-tg-gold" /> {job.location}
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/10 border border-white/15 text-sm text-gray-200">
                  <WorkIcon className="h-4 w-4 text-tg-gold" /> {job.workType}
                </div>
                {job.clearance && (
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/10 border border-white/15 text-sm text-gray-200">
                    <Layers className="h-4 w-4 text-tg-gold" /> {job.clearance}
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Content + Sidebar ── */}
        <Section className="bg-white border-b border-gray-100">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10 lg:gap-14">

            {/* Left: job content */}
            <div className="lg:col-span-2 flex flex-col gap-10">

              {/* Overview */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-xs font-semibold uppercase tracking-widest text-tg-gold mb-2">Job Overview</p>
                <h2 className="text-2xl font-bold text-tg-navy mb-4">About This Role</h2>
                <p className="text-gray-600 leading-relaxed">{job.overview}</p>
              </motion.div>

              {/* Responsibilities */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.05 }}
              >
                <h2 className="text-xl font-bold text-tg-navy mb-4">Responsibilities</h2>
                <ul className="flex flex-col gap-3">
                  {job.responsibilities.map((r, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-tg-gold shrink-0 mt-0.5" />
                      <span className="text-gray-600 text-sm leading-relaxed">{r}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Qualifications */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h2 className="text-xl font-bold text-tg-navy mb-4">Qualifications</h2>
                <ul className="flex flex-col gap-3">
                  {job.qualifications.map((q, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-tg-blue mt-2 shrink-0" />
                      <span className="text-gray-600 text-sm leading-relaxed">{q}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Technologies */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <Tag className="h-4 w-4 text-tg-blue" />
                  <h2 className="text-xl font-bold text-tg-navy">Technologies</h2>
                </div>
                <div className="flex flex-wrap gap-2">
                  {job.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="inline-block px-3 py-1.5 bg-slate-50 border border-gray-200 text-sm font-medium text-tg-navy rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right: Apply sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-1"
            >
              <div className="sticky top-28 flex flex-col gap-5">
                {/* Apply card */}
                <div className="bg-tg-navy rounded-2xl p-7 text-white">
                  <div className="w-11 h-11 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center mb-4">
                    <Briefcase className="h-5 w-5 text-tg-gold" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Interested in This Role?</h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-5">
                    Apply now or submit your resume for future consideration.
                  </p>
                  <div className="flex flex-col gap-3">
                    <button onClick={() => setDrawerOpen(true)} className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-lg bg-tg-gold text-tg-navy font-bold text-sm hover:bg-white transition-colors cursor-pointer">
                        Apply Now <ArrowRight className="h-4 w-4" />
                      </button>
                  </div>
                </div>

                {/* Job meta card */}
                <div className="bg-slate-50 rounded-2xl border border-gray-100 p-6 flex flex-col gap-4">
                  <h4 className="text-sm font-bold text-tg-navy">Position Details</h4>
                  <div className="flex flex-col gap-3">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1">Category</p>
                      <p className="text-sm font-medium text-tg-navy">{job.category}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1">Work Type</p>
                      <p className="text-sm font-medium text-tg-navy">{job.workType}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1">Location</p>
                      <p className="text-sm font-medium text-tg-navy">{job.location}</p>
                    </div>
                    {job.clearance && (
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1">Clearance</p>
                        <p className="text-sm font-medium text-tg-navy">{job.clearance}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </Section>

        {/* ── Related Positions ── */}
        {related.length > 0 && (
          <Section className="bg-slate-50 border-b border-gray-100">
            <h2 className="text-xl font-bold text-tg-navy mb-6">Similar Positions</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {related.map((j, i) => <JobCard key={j.slug} job={j} index={i} />)}
            </div>
          </Section>
        )}

      </main>
      <ApplicationDrawer
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        jobTitle={job.title}
      />
    </div>
  );
}
