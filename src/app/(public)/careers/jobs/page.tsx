/* eslint-disable react-hooks/exhaustive-deps*/

"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import {
  Search,
  SlidersHorizontal,
  X,
  ArrowRight,
  FileText,
} from "lucide-react";
import Link from "next/link";
import { Section } from "@/components/ui/section";
import { PageHero } from "@/components/shared/page-hero";
import { JobCard } from "@/components/job-card";
import {
  jobs,
  CATEGORIES,
  WORK_TYPES,
  LOCATIONS,
  type Category,
  type WorkType,
} from "@/data/jobs";
import { cn } from "@/lib/utils";
import { fadeInUp, fadeInUpWhileVisible } from "@/lib/animations";
import { usePublicJobs } from "@/hooks/use-jobs";
import JobsLoading from "./loading";

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
      {...fadeInUp}
      className="flex flex-col items-center justify-center text-center py-20 px-4"
    >
      <div className="w-16 h-16 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-5">
        <FileText className="h-7 w-7 text-slate-400" />
      </div>
      <h3 className="text-2xl font-bold text-text-primary mb-3">
        No Open Positions Right Now
      </h3>
      <p className="text-text-tertiary max-w-md leading-relaxed mb-7">
        We are always looking for talented consultants. Submit your resume and
        we&apos;ll contact you when opportunities arise.
      </p>
      <Link href="/careers/submit-resume">
        <span className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-eo-navy text-white font-bold text-sm hover:bg-eo-blue transition-colors cursor-pointer">
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
  const {
    data: publicJobs,
    isLoading
  } = usePublicJobs();

  const setFilter = <K extends keyof Filters>(key: K, value: Filters[K]) => {
    setFilters((f) => ({ ...f, [key]: value }));
  };

  const clearFilters = () => setFilters(defaultFilters);

  const hasActiveFilters =
    filters.query || filters.category || filters.workType || filters.location;

  const mergedJobs = [...(publicJobs || []), ...jobs];

  const filtered = useMemo(() => {
    return mergedJobs.filter((job) => {
      const q = filters.query.toLowerCase();
      if (
        q &&
        !job.title.toLowerCase().includes(q) &&
        !job.category.toLowerCase().includes(q)
        // !job.shortDescription.toLowerCase().includes(q)
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
    "px-3 py-2.5 pr-8 rounded-lg border border-border-default bg-surface text-sm text-text-secondary focus:outline-none focus:ring-2 focus:ring-eo-blue/30 focus:border-eo-blue appearance-none cursor-pointer transition-colors hover:border-gray-300 dark:hover:border-gray-600";

    if (isLoading) {
      return <JobsLoading />
    }

  return (
    <div className="min-h-screen bg-surface">
      <main>
        <PageHero
          badge={`${mergedJobs.length} Open Position${mergedJobs.length !== 1 ? "s" : ""}`}
          title="Open Positions"
          description="Browse available opportunities and find your next federal IT engagement with EaseOrigin."
        >
          <Link href="/careers">
            <span className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-white transition-colors mb-6 cursor-pointer">
              ← Back to Careers
            </span>
          </Link>
        </PageHero>

        {/* ── Search + Filters + Cards ── */}
        <Section className="relative overflow-hidden bg-linear-to-b from-slate-50 dark:from-gray-900 via-white dark:via-gray-900 to-slate-50 dark:to-gray-900 border-b border-border-subtle">
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-blue-100/15 rounded-full blur-[80px] pointer-events-none" />

          {/* Search + filter bar */}
          <div className="flex flex-col sm:flex-row gap-3 mb-4">
            {/* Search input */}
            <div className="relative grow">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search jobs by title or keyword…"
                value={filters.query}
                onChange={(e) => setFilter("query", e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-lg border border-border-default bg-surface text-sm text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-eo-blue/30 focus:border-eo-blue transition-colors"
              />
            </div>

            {/* Toggle filters button (mobile) */}
            <button
              aria-pressed={filtersOpen}
              onClick={() => setFiltersOpen(!filtersOpen)}
              className={cn(
                "sm:hidden inline-flex items-center gap-2 px-4 py-3 rounded-lg border text-sm font-medium transition-colors",
                filtersOpen
                  ? "bg-eo-navy text-white border-eo-navy"
                  : "bg-surface text-text-secondary border-border-default hover:border-gray-300 dark:hover:border-gray-600",
              )}
            >
              <SlidersHorizontal className="h-4 w-4" />
              Filters
              {hasActiveFilters && (
                <span className="ml-1 px-1.5 py-0.5 rounded-full bg-eo-gold text-eo-navy text-xs font-bold">
                  {
                    [
                      filters.category,
                      filters.workType,
                      filters.location,
                    ].filter(Boolean).length
                  }
                </span>
              )}
            </button>

            {/* Desktop filter row */}
            <div className="hidden sm:flex gap-3 items-center">
              <div className="relative">
                <select
                  value={filters.category}
                  onChange={(e) =>
                    setFilter("category", e.target.value as Category | "")
                  }
                  className={selectClass}
                >
                  <option value="">All Categories</option>
                  {CATEGORIES.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-2.5 flex items-center">
                  <svg
                    className="h-4 w-4 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.17l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>

              <div className="relative">
                <select
                  value={filters.workType}
                  onChange={(e) =>
                    setFilter("workType", e.target.value as WorkType | "")
                  }
                  className={selectClass}
                >
                  <option value="">Work Type</option>
                  {WORK_TYPES.map((w) => (
                    <option key={w} value={w}>
                      {w}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-2.5 flex items-center">
                  <svg
                    className="h-4 w-4 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.17l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                      clipRule="evenodd"
                    />
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
                  {LOCATIONS.map((l) => (
                    <option key={l} value={l}>
                      {l}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-2.5 flex items-center">
                  <svg
                    className="h-4 w-4 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.17l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                      clipRule="evenodd"
                    />
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
              className="sm:hidden bg-surface rounded-xl border border-border-default p-4 mb-4 flex flex-col gap-3"
            >
              <div className="relative">
                <select
                  value={filters.category}
                  onChange={(e) =>
                    setFilter("category", e.target.value as Category | "")
                  }
                  className={cn(selectClass, "w-full")}
                >
                  <option value="">All Categories</option>
                  {CATEGORIES.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>
              <div className="relative">
                <select
                  value={filters.workType}
                  onChange={(e) =>
                    setFilter("workType", e.target.value as WorkType | "")
                  }
                  className={cn(selectClass, "w-full")}
                >
                  <option value="">Work Type</option>
                  {WORK_TYPES.map((w) => (
                    <option key={w} value={w}>
                      {w}
                    </option>
                  ))}
                </select>
              </div>
              <div className="relative">
                <select
                  value={filters.location}
                  onChange={(e) => setFilter("location", e.target.value)}
                  className={cn(selectClass, "w-full")}
                >
                  <option value="">Location</option>
                  {LOCATIONS.map((l) => (
                    <option key={l} value={l}>
                      {l}
                    </option>
                  ))}
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
            <p className="text-sm text-text-tertiary">
              Showing{" "}
              <span className="font-semibold text-text-primary">
                {filtered.length}
              </span>{" "}
              of{" "}
              <span className="font-semibold text-text-primary">
                {jobs.length}
              </span>{" "}
              positions
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
        <Section className="relative overflow-hidden bg-linear-to-br from-white dark:from-gray-900 via-blue-50/20 dark:via-gray-900/20 to-slate-50/30 dark:to-gray-900/30">
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-eo-gold/10 rounded-full blur-[80px] pointer-events-none" />
          <motion.div
            {...fadeInUpWhileVisible}
            className="relative z-10 max-w-2xl mx-auto text-center"
          >
            <h2 className="text-2xl font-bold text-text-primary mb-3">
              Don&apos;t See the Right Fit?
            </h2>
            <p className="text-text-tertiary mb-6 leading-relaxed">
              Submit your resume and we&apos;ll reach out when a matching
              opportunity becomes available.
            </p>
            <Link href="/careers/submit-resume">
              <span className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-eo-navy text-white font-bold text-sm hover:bg-eo-blue transition-all shadow-md cursor-pointer">
                Submit Resume <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          </motion.div>
        </Section>
      </main>
    </div>
  );
}
