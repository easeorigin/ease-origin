"use client";

import { motion } from "framer-motion";
import { MapPin, Wifi, Building2, Layers, ArrowRight } from "lucide-react";
import Link from "next/link";
import { type Job } from "@/data/jobs";
import { cn } from "@/lib/utils";

const categoryColors: Record<string, { bg: string; text: string; border: string }> = {
  "Software Engineering": { bg: "bg-violet-50", text: "text-violet-700", border: "border-violet-100" },
  "Cloud Engineering":    { bg: "bg-blue-50",   text: "text-eo-blue",    border: "border-blue-100"   },
  "Cybersecurity":        { bg: "bg-amber-50",  text: "text-amber-700",  border: "border-amber-100"  },
  "Data & Analytics":     { bg: "bg-emerald-50",text: "text-emerald-700",border: "border-emerald-100"},
  "Project Management":   { bg: "bg-pink-50",   text: "text-pink-700",   border: "border-pink-100"   },
  "DevOps":               { bg: "bg-cyan-50",   text: "text-cyan-700",   border: "border-cyan-100"   },
};

const workTypeIcon: Record<string, React.ElementType> = {
  Remote: Wifi,
  Hybrid: Building2,
  Onsite: Building2,
};

interface JobCardProps {
  job: Job;
  index?: number;
}

export function JobCard({ job, index = 0 }: JobCardProps) {
  const colors = categoryColors[job.category] ?? { bg: "bg-gray-50", text: "text-gray-600", border: "border-gray-200" };
  const WorkIcon = workTypeIcon[job.workType] ?? Wifi;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      className="flex flex-col bg-surface border border-border-subtle rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 group overflow-hidden"
    >
      {/* Color accent stripe */}
      <div className={cn("h-1 w-full", colors.bg.replace("50", "300"))} />

      <div className="p-7 flex flex-col flex-grow">
        {/* Category badge */}
        <span className={cn("inline-block px-3 py-1 text-xs font-bold rounded-full uppercase tracking-wider mb-4 self-start", colors.bg, colors.text, "border", colors.border)}>
          {job.category}
        </span>

        <h3 className="text-lg font-bold text-text-primary mb-2 group-hover:text-eo-blue transition-colors leading-tight">
          {job.title}
        </h3>

        <p className="text-sm text-text-tertiary leading-relaxed mb-5 flex-grow">
          {job.shortDescription}
        </p>

        {/* Meta row */}
        <div className="flex flex-wrap gap-3 mb-6">
          <div className="flex items-center gap-1.5 text-xs text-text-tertiary">
            <MapPin className="h-3.5 w-3.5 text-text-muted" />
            {job.location}
          </div>
          <div className="flex items-center gap-1.5 text-xs text-text-tertiary">
            <WorkIcon className="h-3.5 w-3.5 text-text-muted" />
            {job.workType}
          </div>
          {job.clearance && (
            <div className="flex items-center gap-1.5 text-xs text-text-tertiary">
              <Layers className="h-3.5 w-3.5 text-text-muted" />
              {job.clearance}
            </div>
          )}
        </div>

        <Link href={`/careers/jobs/${job.slug}`}>
          <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-eo-navy text-white text-sm font-bold hover:bg-eo-blue transition-colors cursor-pointer group/btn self-start">
            View Job
            <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-0.5 transition-transform" />
          </span>
        </Link>
      </div>
    </motion.div>
  );
}
