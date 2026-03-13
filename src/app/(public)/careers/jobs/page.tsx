"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search, SlidersHorizontal, X, ArrowRight, FileText } from "lucide-react";
import { Link } from "wouter";
import { Section } from "@/components/ui/section";
import { JobCard } from "@/components/job-card";
import { jobs, CATEGORIES, WORK_TYPES, LOCATIONS, type Category, type WorkType } from "@/data/jobs";
import { cn } from "@/lib/utils";

// ─── Filters State ────────────────────────────────────────────────────────────

interface Filters {
  query: string;
  category: Category | "";
  workType: WorkType | "";
  location: string;
}

const defaultFilters: Filters = {
  query: "",
  category: "",
  workType: "",
  location: "",
};

// ─── No Jobs Fallback ─────────────────────────────────────────────────────────

function NoJobsFallback() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="flex flex-col items-center justify-center text-center py-20 px-4"
    >
      <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mb-5">
        <FileText className="h-7 w-7 text-slate-400" />
      </div>
      <h3 className="text-2xl font-bold text-tg-navy mb-3">No Open Positions Right Now</h3>
      <p className="text-gray-500 max-w-md leading-relaxed mb-7">
        We are always looking for talented consultants. Submit your resume and we'll contact you when opportunities arise.
      </p>
      <Link href="/careers/submit-resume">
        <span className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-tg-navy text-white font-bold text-sm hover:bg-tg-blue transition-colors cursor-pointer">
          Submit Resume <ArrowRight className="h-4 w-4" />
        </span>
      </Link>
    </motion.div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function JobsListingPage() {
  const [filters, setFilters] = useState<Filters>(defaultFilters);
  const [filtersOpen, setFiltersOpen] = useState(false);

  const setFilter = <K extends keyof Filters>(key: K, value: Filters[K]) => {
    setFilters((f) => ({ ...f, [key]: value }));
  };

  const clearFilters = () => setFilters(defaultFilters);

  const hasActiveFilters =
    filters.query || filters.category || filters.workType || filters.location;

  const filtered = useMemo(() => {
    return jobs.filter((job) => {
      const q = filters.query.toLowerCase();
      if (
        q &&
        !job.title.toLowerCase().includes(q) &&
        !job.category.toLowerCase().includes(q) &&
        !job.shortDescription.toLowerCase().includes(q)
      )
        return false;
      if (filters.category && job.category !== filters.category) return false;
      if (filters.workType && job.workType !== filters.workType) return false;
      if (
        filters.location &&
        filters.location !== "Anywhere" &&
        job.location !== filters.location
      )
        return false;
      return true;
    });
  }, [filters]);

  const selectClass =
    "px-3 py-2.5 pr-8 rounded-lg border border-gray-200 bg-white text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-tg-blue/30 focus:border-tg-blue appearance-none cursor-pointer transition-colors hover:border-gray-300";

  return (
    <div className="min-h-screen bg-white">
      <main>

        {/* ── Hero ── */}
        <section className="relative pt-32 pb-12 lg:pt-40 lg:pb-16 overflow-hidden bg-tg-navy text-white">
          <div className="absolute inset-0 z-0">
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)",
                backgroundSize: "50px 50px",
              }}
            />
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-tg-blue rounded-full blur-[140px] opacity-20 translate-x-1/3 -translate-y-1/4" />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col"
            >
              <Link href="/careers">
                <span className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-white transition-colors mb-6 cursor-pointer">
                  ← Back to Careers
                </span>
              </Link>
              <div className="flex w-full md:w-1/2 lg:w-1/4 items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-sm font-medium text-tg-gold mb-4">
                <span className="flex h-2 w-2 rounded-full bg-tg-gold animate-pulse" />
                {jobs.length} Open Position{jobs.length !== 1 ? "s" : ""}
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-3">
                Open Positions
              </h1>
              <p className="text-gray-300 max-w-xl leading-relaxed">
                Browse available opportunities and find your next federal IT engagement with TG Federal.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── Search + Filters + Cards ── */}
        <Section className="bg-slate-50 border-b border-gray-100">

          {/* Search + filter bar */}
          <div className="flex flex-col sm:flex-row gap-3 mb-4">
            {/* Search input */}
            <div className="relative flex-grow">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search jobs by title or keyword…"
                value={filters.query}
                onChange={(e) => setFilter("query", e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-lg border border-gray-200 bg-white text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-tg-blue/30 focus:border-tg-blue transition-colors"
              />
            </div>

            {/* Toggle filters button (mobile) */}
            <button
              onClick={() => setFiltersOpen(!filtersOpen)}
              className={cn(
                "sm:hidden inline-flex items-center gap-2 px-4 py-3 rounded-lg border text-sm font-medium transition-colors",
                filtersOpen
                  ? "bg-tg-navy text-white border-tg-navy"
                  : "bg-white text-gray-700 border-gray-200 hover:border-gray-300"
              )}
            >
              <SlidersHorizontal className="h-4 w-4" />
              Filters
              {hasActiveFilters && (
                <span className="ml-1 px-1.5 py-0.5 rounded-full bg-tg-gold text-tg-navy text-xs font-bold">
                  {[filters.category, filters.workType, filters.location].filter(Boolean).length}
                </span>
              )}
            </button>

            {/* Desktop filter row */}
            <div className="hidden sm:flex gap-3 items-center">
              <div className="relative">
                <select
                  value={filters.category}
                  onChange={(e) => setFilter("category", e.target.value as Category | "")}
                  className={selectClass}
                >
                  <option value="">All Categories</option>
                  {CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-2.5 flex items-center">
                  <svg className="h-4 w-4 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.17l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>

              <div className="relative">
                <select
                  value={filters.workType}
                  onChange={(e) => setFilter("workType", e.target.value as WorkType | "")}
                  className={selectClass}
                >
                  <option value="">Work Type</option>
                  {WORK_TYPES.map((w) => <option key={w} value={w}>{w}</option>)}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-2.5 flex items-center">
                  <svg className="h-4 w-4 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.17l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>

              <div className="relative">
                <select
                  value={filters.location}
                  onChange={(e) => setFilter("location", e.target.value)}
                  className={selectClass}
                >
                  <option value="">Location</option>
                  {LOCATIONS.map((l) => <option key={l} value={l}>{l}</option>)}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-2.5 flex items-center">
                  <svg className="h-4 w-4 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.17l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>

              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-red-500 transition-colors"
                >
                  <X className="h-4 w-4" /> Clear
                </button>
              )}
            </div>
          </div>

          {/* Mobile filter panel */}
          {filtersOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="sm:hidden bg-white rounded-xl border border-gray-200 p-4 mb-4 flex flex-col gap-3"
            >
              <div className="relative">
                <select
                  value={filters.category}
                  onChange={(e) => setFilter("category", e.target.value as Category | "")}
                  className={cn(selectClass, "w-full")}
                >
                  <option value="">All Categories</option>
                  {CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
              <div className="relative">
                <select
                  value={filters.workType}
                  onChange={(e) => setFilter("workType", e.target.value as WorkType | "")}
                  className={cn(selectClass, "w-full")}
                >
                  <option value="">Work Type</option>
                  {WORK_TYPES.map((w) => <option key={w} value={w}>{w}</option>)}
                </select>
              </div>
              <div className="relative">
                <select
                  value={filters.location}
                  onChange={(e) => setFilter("location", e.target.value)}
                  className={cn(selectClass, "w-full")}
                >
                  <option value="">Location</option>
                  {LOCATIONS.map((l) => <option key={l} value={l}>{l}</option>)}
                </select>
              </div>
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="inline-flex items-center gap-1.5 text-sm text-red-500 hover:text-red-600 transition-colors"
                >
                  <X className="h-4 w-4" /> Clear filters
                </button>
              )}
            </motion.div>
          )}

          {/* Results count */}
          <div className="flex items-center justify-between mb-6">
            <p className="text-sm text-gray-500">
              Showing <span className="font-semibold text-tg-navy">{filtered.length}</span> of{" "}
              <span className="font-semibold text-tg-navy">{jobs.length}</span> positions
            </p>
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="hidden sm:inline-flex items-center gap-1 text-xs text-gray-400 hover:text-red-500 transition-colors"
              >
                <X className="h-3.5 w-3.5" /> Clear all filters
              </button>
            )}
          </div>

          {/* Cards or empty state */}
          {filtered.length === 0 ? (
            <NoJobsFallback />
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((job, i) => (
                <JobCard key={job.slug} job={job} index={i} />
              ))}
            </div>
          )}
        </Section>

        {/* ── Submit CV CTA ── */}
        <Section className="bg-white">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-2xl font-bold text-tg-navy mb-3">Don't See the Right Fit?</h2>
            <p className="text-gray-500 mb-6 leading-relaxed">
              Submit your resume and we'll reach out when a matching opportunity becomes available.
            </p>
            <Link href="/careers/submit-resume">
              <span className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-tg-navy text-white font-bold text-sm hover:bg-tg-blue transition-all shadow-md cursor-pointer">
                Submit Resume <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          </motion.div>
        </Section>

      </main>
    </div>
  );
}
