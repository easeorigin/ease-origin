import { motion } from "framer-motion";
import { ArrowRight, Cloud, ShieldCheck, BarChart3, BrainCircuit, GitBranch, Layers, ClipboardList, Workflow } from "lucide-react";
import Link from "next/link";
import { type CaseStudy } from "@/data/case-studies";

const categoryIcons: Record<string, React.ElementType> = {
  "Cloud Infrastructure": Cloud,
  "Cybersecurity": ShieldCheck,
  "Cybersecurity & Compliance": ShieldCheck,
  "Data & Analytics": BarChart3,
  "AI/ML Infrastructure": BrainCircuit,
  "DevOps & Platform Engineering": GitBranch,
  "SaaS Solutions": Layers,
  "Program Management": ClipboardList,
  "Agile Delivery": Workflow,
};

const CYBER_COLORS = {
  bg: "bg-amber-50 dark:bg-amber-950",
  border: "border-amber-100 dark:border-amber-900",
  text: "text-amber-700 dark:text-amber-300",
  headerBg: "from-amber-50 to-orange-50 dark:from-amber-950 dark:to-orange-950",
};

const categoryColors: Record<string, { bg: string; border: string; text: string; headerBg: string }> = {
  "Cloud Infrastructure": {
    bg: "bg-blue-50 dark:bg-blue-950",
    border: "border-blue-100 dark:border-blue-900",
    text: "text-eo-blue",
    headerBg: "from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950",
  },
  "Cybersecurity": CYBER_COLORS,
  "Cybersecurity & Compliance": CYBER_COLORS,
  "Data & Analytics": {
    bg: "bg-emerald-50 dark:bg-emerald-950",
    border: "border-emerald-100 dark:border-emerald-900",
    text: "text-emerald-700 dark:text-emerald-300",
    headerBg: "from-emerald-50 to-teal-50 dark:from-emerald-950 dark:to-teal-950",
  },
  "AI/ML Infrastructure": {
    bg: "bg-violet-50 dark:bg-violet-950",
    border: "border-violet-100 dark:border-violet-900",
    text: "text-violet-700 dark:text-violet-300",
    headerBg: "from-violet-50 to-purple-50 dark:from-violet-950 dark:to-purple-950",
  },
  "DevOps & Platform Engineering": {
    bg: "bg-indigo-50 dark:bg-indigo-950",
    border: "border-indigo-100 dark:border-indigo-900",
    text: "text-indigo-700 dark:text-indigo-300",
    headerBg: "from-indigo-50 to-blue-50 dark:from-indigo-950 dark:to-blue-950",
  },
  "SaaS Solutions": {
    bg: "bg-sky-50 dark:bg-sky-950",
    border: "border-sky-100 dark:border-sky-900",
    text: "text-sky-700 dark:text-sky-300",
    headerBg: "from-sky-50 to-cyan-50 dark:from-sky-950 dark:to-cyan-950",
  },
  "Program Management": {
    bg: "bg-purple-50 dark:bg-purple-950",
    border: "border-purple-100 dark:border-purple-900",
    text: "text-purple-700 dark:text-purple-300",
    headerBg: "from-purple-50 to-violet-50 dark:from-purple-950 dark:to-violet-950",
  },
  "Agile Delivery": {
    bg: "bg-red-50 dark:bg-red-950",
    border: "border-red-100 dark:border-red-900",
    text: "text-red-700 dark:text-red-300",
    headerBg: "from-red-50 to-rose-50 dark:from-red-950 dark:to-rose-950",
  },
};

interface CaseStudyCardProps {
  study: CaseStudy;
  index?: number;
}

export function CaseStudyCard({ study, index = 0 }: CaseStudyCardProps) {
  const Icon = categoryIcons[study.category] ?? BarChart3;
  const colors = categoryColors[study.category] ?? categoryColors["Data & Analytics"];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col h-full bg-surface border border-border-subtle rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
    >
      {/* Card header */}
      <div className={`h-36 bg-gradient-to-br ${colors.headerBg} relative overflow-hidden flex items-end p-6 border-b border-border-subtle`}>
        <div className="absolute -right-6 -top-6 w-28 h-28 rounded-full bg-white/50 dark:bg-white/10 blur-2xl" />
        <div className="absolute -left-4 -bottom-4 w-20 h-20 rounded-full bg-white/40 dark:bg-white/8 blur-xl" />

        {/* Metric callout */}
        {study.metrics && study.metrics.length > 0 && (
          <div className="absolute top-4 right-4 text-right z-10">
            <div className="text-2xl font-extrabold text-text-primary leading-none">{study.metrics[0].value}</div>
            <div className="text-[10px] font-semibold text-text-tertiary uppercase tracking-wider mt-0.5">{study.metrics[0].label}</div>
          </div>
        )}

        <div className="relative z-10 flex items-center gap-3">
          <div className={`w-9 h-9 rounded-xl ${colors.bg} ${colors.border} border flex items-center justify-center`}>
            <Icon className={`h-4 w-4 ${colors.text}`} />
          </div>
          <span className={`inline-block px-3 py-1 ${colors.bg} ${colors.border} border text-xs font-bold ${colors.text} rounded-full uppercase tracking-wider`}>
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
              <span className="inline-block px-2 py-0.5 bg-slate-50 dark:bg-slate-800 border border-slate-150 dark:border-slate-700 text-[11px] font-medium text-slate-500 dark:text-slate-400 rounded-full truncate max-w-[200px]" title={study.clientLabel}>
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
    </motion.div>
  );
}
