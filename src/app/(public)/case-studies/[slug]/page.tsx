"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft, CheckCircle2, ArrowRight, Cloud, ShieldCheck, BarChart3, Tag
} from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Section } from "@/components/ui/section";
import { getCaseStudyBySlug, caseStudies } from "@/data/case-studies";

const categoryIcons: Record<string, React.ElementType> = {
  "Cloud Infrastructure": Cloud,
  "Cybersecurity": ShieldCheck,
  "Data & Analytics": BarChart3,
};

function NotFoundState() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center px-4">
        <h1 className="text-3xl font-bold text-tg-navy mb-4">Case Study Not Found</h1>
        <p className="text-gray-500 mb-6">This case study doesn&apos;t exist or may have moved.</p>
        <Link href="/case-studies">
          <span className="inline-flex items-center gap-2 px-6 py-3 bg-tg-navy text-white font-bold rounded-lg cursor-pointer hover:bg-tg-blue transition-colors">
            <ArrowLeft className="h-4 w-4" /> Back to Case Studies
          </span>
        </Link>
      </div>
    </div>
  );
}

export default function CaseStudyDetail() {
  const params = useParams<{ slug: string }>();
  const study = getCaseStudyBySlug(params.slug);

  if (!study) return <NotFoundState />;

  const Icon = categoryIcons[study.category] ?? BarChart3;

  const relatedStudies = caseStudies.filter((s) => s.slug !== study.slug).slice(0, 2);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>

        {/* ── Hero ── */}
        <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-24 overflow-hidden bg-tg-navy text-white">
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
            >
              <Link href="/case-studies">
                <span className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors mb-8 cursor-pointer group">
                  <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                  Back to Case Studies
                </span>
              </Link>

              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center">
                  <Icon className="h-5 w-5 text-tg-gold" />
                </div>
                <span className="inline-block px-3 py-1 bg-white/10 border border-white/20 text-xs font-bold text-tg-gold rounded-full uppercase tracking-wider">
                  {study.category}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-5">
                {study.title}
              </h1>
              <p className="text-lg text-gray-300 leading-relaxed max-w-2xl">
                {study.heroDescription}
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── Overview ── */}
        <Section className="bg-white border-b border-gray-100">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-tg-gold mb-2">Project Overview</p>
              <h2 className="text-2xl md:text-3xl font-bold text-tg-navy mb-6">About This Engagement</h2>
              <p className="text-gray-600 leading-relaxed text-lg">{study.overview}</p>
            </motion.div>
          </div>
        </Section>

        {/* ── Challenge & Solution ── */}
        <Section className="bg-slate-50 border-b border-gray-100">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8"
            >
              <div className="w-10 h-10 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center mb-4">
                <span className="text-red-500 font-bold text-sm">!</span>
              </div>
              <h3 className="text-lg font-bold text-tg-navy mb-4">The Challenge</h3>
              <p className="text-gray-600 leading-relaxed text-sm">{study.challenge}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="bg-tg-navy rounded-2xl p-8 text-white"
            >
              <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center mb-4">
                <Icon className="h-5 w-5 text-tg-gold" />
              </div>
              <h3 className="text-lg font-bold text-white mb-4">Our Solution</h3>
              <p className="text-gray-300 leading-relaxed text-sm">{study.solution}</p>
            </motion.div>
          </div>
        </Section>

        {/* ── Results ── */}
        <Section className="bg-white border-b border-gray-100">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-tg-gold mb-2">Outcomes</p>
              <h2 className="text-2xl md:text-3xl font-bold text-tg-navy mb-8">Results & Impact</h2>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {study.results.map((result, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.07 }}
                    className="flex items-start gap-3 bg-slate-50 rounded-xl border border-gray-100 p-5"
                  >
                    <CheckCircle2 className="h-5 w-5 text-tg-gold shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-tg-navy leading-snug">{result}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </Section>

        {/* ── Technologies ── */}
        <Section className="bg-slate-50 border-b border-gray-100">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Tag className="h-5 w-5 text-tg-blue" />
                <h2 className="text-2xl font-bold text-tg-navy">Technologies Used</h2>
              </div>

              <div className="flex flex-wrap gap-3">
                {study.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="inline-block px-4 py-2 bg-white border border-gray-200 text-sm font-semibold text-tg-navy rounded-full shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </Section>

        {/* ── Related Case Studies ── */}
        {relatedStudies.length > 0 && (
          <Section className="bg-white border-b border-gray-100">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-xl font-bold text-tg-navy mb-6">More Case Studies</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {relatedStudies.map((s) => {
                  const RelIcon = categoryIcons[s.category] ?? BarChart3;
                  return (
                    <Link key={s.slug} href={`/case-studies/${s.slug}`}>
                      <motion.div
                        whileHover={{ y: -2 }}
                        className="flex gap-4 items-start bg-slate-50 rounded-xl border border-gray-100 p-6 cursor-pointer hover:shadow-md transition-all"
                      >
                        <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                          <RelIcon className="h-5 w-5 text-tg-blue" />
                        </div>
                        <div>
                          <span className="text-xs font-bold text-tg-gold uppercase tracking-wider">{s.category}</span>
                          <h4 className="text-sm font-bold text-tg-navy mt-1 mb-2 leading-snug">{s.title}</h4>
                          <span className="inline-flex items-center gap-1.5 text-xs font-bold text-tg-blue">
                            Read Case Study <ArrowRight className="h-3 w-3" />
                          </span>
                        </div>
                      </motion.div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </Section>
        )}

        {/* ── CTA ── */}
        <Section className="bg-tg-navy">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="max-w-2xl mx-auto text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Partner With TG Federal</h2>
            <p className="text-gray-300 leading-relaxed mb-8">
              Our team of federal IT experts is ready to support your agency&apos;s mission. Let&apos;s discuss how we can deliver similar results for you.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/solutions">
                <span className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-white text-tg-navy font-bold text-sm hover:bg-gray-100 transition-all shadow-md cursor-pointer">
                  View Solutions <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
              <Link href="/contact">
                <span className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg border-2 border-white/30 text-white font-bold text-sm hover:bg-white/10 transition-all cursor-pointer">
                  Contact Us
                </span>
              </Link>
            </div>
          </motion.div>
        </Section>

      </main>
      <Footer />
    </div>
  );
}
