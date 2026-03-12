import { motion } from "framer-motion";
import { ArrowRight, Cloud, ShieldCheck, BarChart3 } from "lucide-react";
import { Link } from "wouter";
import { type CaseStudy } from "@/data/case-studies";

const categoryIcons: Record<string, React.ElementType> = {
  "Cloud Infrastructure": Cloud,
  "Cybersecurity": ShieldCheck,
  "Data & Analytics": BarChart3,
};

const categoryColors: Record<string, { bg: string; border: string; text: string; headerBg: string }> = {
  "Cloud Infrastructure": {
    bg: "bg-blue-50",
    border: "border-blue-100",
    text: "text-tg-blue",
    headerBg: "from-blue-50 to-indigo-50",
  },
  "Cybersecurity": {
    bg: "bg-amber-50",
    border: "border-amber-100",
    text: "text-amber-700",
    headerBg: "from-amber-50 to-orange-50",
  },
  "Data & Analytics": {
    bg: "bg-emerald-50",
    border: "border-emerald-100",
    text: "text-emerald-700",
    headerBg: "from-emerald-50 to-teal-50",
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
      className="flex flex-col h-full bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
    >
      {/* Card header */}
      <div className={`h-36 bg-gradient-to-br ${colors.headerBg} relative overflow-hidden flex items-end p-6 border-b border-gray-100`}>
        <div className="absolute -right-6 -top-6 w-28 h-28 rounded-full bg-white/50 blur-2xl" />
        <div className="absolute -left-4 -bottom-4 w-20 h-20 rounded-full bg-white/40 blur-xl" />
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
        <h4 className="text-xl font-bold text-tg-navy mb-3 leading-tight group-hover:text-tg-blue transition-colors">
          {study.title}
        </h4>
        <p className="text-gray-600 mb-8 flex-grow leading-relaxed text-sm">
          {study.shortDescription}
        </p>
        <Link href={`/case-studies/${study.slug}`}>
          <span className="inline-flex items-center text-sm font-bold text-tg-blue hover:text-tg-navy transition-colors cursor-pointer group/link">
            Read Case Study
            <ArrowRight className="ml-2 h-4 w-4 transform group-hover/link:translate-x-1 transition-transform" />
          </span>
        </Link>
      </div>
    </motion.div>
  );
}
