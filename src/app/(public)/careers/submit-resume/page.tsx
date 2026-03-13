"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Upload,
  CheckCircle2,
  AlertCircle,
  ArrowLeft,
  Send,
} from "lucide-react";
import Link from "next/link";
import { Section } from "@/components/ui/section";
import { CATEGORIES, LOCATIONS } from "@/data/jobs";
import { cn } from "@/lib/utils";

interface FormValues {
  name: string;
  email: string;
  country: string;
  expertise: string;
  message: string;
  file: File | null;
}

interface FormErrors {
  name?: string;
  email?: string;
  country?: string;
  expertise?: string;
  message?: string;
  file?: string;
}

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};
  if (!values.name.trim()) errors.name = "Full name is required.";
  if (!values.email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Enter a valid email address.";
  }
  if (!values.country) errors.country = "Please select a country.";
  if (!values.expertise)
    errors.expertise = "Please select an area of expertise.";
  if (!values.file) errors.file = "Please upload your resume or CV.";
  return errors;
}

export default function SubmitResumePage() {
  const [values, setValues] = useState<FormValues>({
    name: "",
    email: "",
    country: "",
    expertise: "",
    message: "",
    file: null,
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<
    Partial<Record<keyof FormValues, boolean>>
  >({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [dragOver, setDragOver] = useState(false);

  const setField = (
    field: keyof FormValues,
    value: FormValues[keyof FormValues],
  ) => {
    setValues((v) => ({ ...v, [field]: value }));
    if (touched[field]) {
      const e = validate({ ...values, [field]: value as string });
      setErrors((prev) => ({ ...prev, [field]: e[field as keyof FormErrors] }));
    }
  };

  const handleBlur = (field: keyof FormValues) => {
    setTouched((t) => ({ ...t, [field]: true }));
    const e = validate(values);
    setErrors((prev) => ({ ...prev, [field]: e[field as keyof FormErrors] }));
  };

  const handleFile = (file: File | null) => {
    if (file && file.size > 10 * 1024 * 1024) {
      setErrors((prev) => ({ ...prev, file: "File must be under 10 MB." }));
      return;
    }
    setValues((v) => ({ ...v, file }));
    setErrors((prev) => ({ ...prev, file: undefined }));
    setTouched((t) => ({ ...t, file: true }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const allTouched = Object.fromEntries(
      (Object.keys(values) as (keyof FormValues)[]).map((k) => [k, true]),
    );
    setTouched(allTouched);
    const e2 = validate(values);
    setErrors(e2);
    if (Object.keys(e2).length > 0) return;
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  const inputBase =
    "w-full px-4 py-3 rounded-lg border text-sm text-gray-900 bg-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-200";
  const inputNormal =
    "border-gray-200 focus:border-tg-blue focus:ring-tg-blue/20";
  const inputError = "border-red-400 focus:border-red-400 focus:ring-red-200";
  const fieldCls = (field: keyof FormValues) =>
    cn(inputBase, errors[field] && touched[field] ? inputError : inputNormal);

  const ErrorMsg = ({ field }: { field: keyof FormErrors }) =>
    errors[field] && touched[field] ? (
      <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
        <AlertCircle className="h-3 w-3" /> {errors[field]}
      </p>
    ) : null;

  return (
    <div className="min-h-screen bg-white">
      <main>
        {/* ── Hero ── */}
        <section className="relative pt-32 pb-14 lg:pt-40 lg:pb-16 overflow-hidden bg-tg-navy text-white">
          <div className="absolute inset-0 z-0">
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)",
                backgroundSize: "50px 50px",
              }}
            />
            <div className="absolute top-0 right-0 w-150 h-150 bg-tg-blue rounded-full blur-[140px] opacity-20 translate-x-1/3 -translate-y-1/4" />
          </div>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col"
            >
              <Link href="/careers">
                <span className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors mb-8 cursor-pointer group">
                  <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                  Back to Careers
                </span>
              </Link>
              <div className="flex w-auto items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-sm font-medium text-tg-gold mb-5">
                <span className="flex h-2 w-2 rounded-full bg-tg-gold animate-pulse" />
                Join Our Talent Network
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
                Submit Your Resume
              </h1>
              <p className="text-gray-300 leading-relaxed max-w-xl">
                We partner with highly skilled consultants supporting federal
                technology initiatives. Submit your resume and we'll reach out
                when a matching opportunity arises.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── Form ── */}
        <Section className="bg-slate-50 border-b border-gray-100">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-lg p-8 md:p-10">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col items-center justify-center text-center py-14 gap-4"
                >
                  <div className="w-16 h-16 rounded-full bg-green-50 border border-green-100 flex items-center justify-center">
                    <CheckCircle2 className="h-8 w-8 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-tg-navy">
                    Resume Submitted!
                  </h3>
                  <p className="text-gray-500 max-w-sm leading-relaxed">
                    Thank you for your interest in EaseOrigin. Our recruiting
                    team will review your profile and be in touch.
                  </p>
                  <Link href="/careers/jobs">
                    <span className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-tg-blue hover:text-tg-navy transition-colors cursor-pointer">
                      View Open Positions
                    </span>
                  </Link>
                </motion.div>
              ) : (
                <>
                  <h2 className="text-xl font-bold text-tg-navy mb-1">
                    Your Information
                  </h2>
                  <p className="text-sm text-gray-400 mb-7">
                    We'll use this to match you with future opportunities.
                  </p>

                  <form
                    onSubmit={handleSubmit}
                    noValidate
                    className="flex flex-col gap-5"
                  >
                    {/* Name + Email */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1.5"
                          htmlFor="cv-name"
                        >
                          Full Name
                        </label>
                        <input
                          id="cv-name"
                          type="text"
                          placeholder="Jane Smith"
                          value={values.name}
                          onChange={(e) => setField("name", e.target.value)}
                          onBlur={() => handleBlur("name")}
                          className={fieldCls("name")}
                        />
                        <ErrorMsg field="name" />
                      </div>
                      <div>
                        <label
                          className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1.5"
                          htmlFor="cv-email"
                        >
                          Email Address
                        </label>
                        <input
                          id="cv-email"
                          type="email"
                          placeholder="jane@example.com"
                          value={values.email}
                          onChange={(e) => setField("email", e.target.value)}
                          onBlur={() => handleBlur("email")}
                          className={fieldCls("email")}
                        />
                        <ErrorMsg field="email" />
                      </div>
                    </div>

                    {/* Country + Expertise */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1.5"
                          htmlFor="cv-country"
                        >
                          Country
                        </label>
                        <div className="relative">
                          <select
                            id="cv-country"
                            value={values.country}
                            onChange={(e) =>
                              setField("country", e.target.value)
                            }
                            onBlur={() => handleBlur("country")}
                            className={cn(
                              fieldCls("country"),
                              "appearance-none pr-8",
                            )}
                          >
                            <option value="">Select country</option>
                            {LOCATIONS.filter((l) => l !== "Anywhere").map(
                              (l) => (
                                <option key={l} value={l}>
                                  {l}
                                </option>
                              ),
                            )}
                          </select>
                          <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
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
                        <ErrorMsg field="country" />
                      </div>
                      <div>
                        <label
                          className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1.5"
                          htmlFor="cv-expertise"
                        >
                          Area of Expertise
                        </label>
                        <div className="relative">
                          <select
                            id="cv-expertise"
                            value={values.expertise}
                            onChange={(e) =>
                              setField("expertise", e.target.value)
                            }
                            onBlur={() => handleBlur("expertise")}
                            className={cn(
                              fieldCls("expertise"),
                              "appearance-none pr-8",
                            )}
                          >
                            <option value="">Select expertise</option>
                            {CATEGORIES.map((c) => (
                              <option key={c} value={c}>
                                {c}
                              </option>
                            ))}
                          </select>
                          <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
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
                        <ErrorMsg field="expertise" />
                      </div>
                    </div>

                    {/* File Upload */}
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1.5">
                        Resume / CV
                      </label>
                      <div
                        onDragOver={(e) => {
                          e.preventDefault();
                          setDragOver(true);
                        }}
                        onDragLeave={() => setDragOver(false)}
                        onDrop={(e) => {
                          e.preventDefault();
                          setDragOver(false);
                          const file = e.dataTransfer.files[0];
                          if (file) handleFile(file);
                        }}
                        className={cn(
                          "relative flex flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed p-8 text-center transition-all duration-200 cursor-pointer",
                          dragOver
                            ? "border-tg-blue bg-blue-50"
                            : errors.file && touched.file
                              ? "border-red-300 bg-red-50"
                              : "border-gray-200 bg-slate-50 hover:border-tg-blue hover:bg-blue-50/30",
                        )}
                      >
                        <input
                          type="file"
                          accept=".pdf,.doc,.docx"
                          onChange={(e) =>
                            handleFile(e.target.files?.[0] ?? null)
                          }
                          className="absolute inset-0 opacity-0 cursor-pointer"
                        />
                        <Upload
                          className={cn(
                            "h-8 w-8",
                            dragOver ? "text-tg-blue" : "text-gray-300",
                          )}
                        />
                        {values.file ? (
                          <div>
                            <p className="text-sm font-semibold text-tg-navy">
                              {values.file.name}
                            </p>
                            <p className="text-xs text-gray-400">
                              Click to replace
                            </p>
                          </div>
                        ) : (
                          <div>
                            <p className="text-sm font-medium text-gray-600">
                              Drag & drop or{" "}
                              <span className="text-tg-blue font-semibold">
                                browse
                              </span>
                            </p>
                            <p className="text-xs text-gray-400 mt-0.5">
                              PDF, DOC, DOCX — max 10 MB
                            </p>
                          </div>
                        )}
                      </div>
                      <ErrorMsg field="file" />
                    </div>

                    {/* Message */}
                    <div>
                      <label
                        className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1.5"
                        htmlFor="cv-message"
                      >
                        Additional Notes{" "}
                        <span className="font-normal text-gray-400 normal-case">
                          (optional)
                        </span>
                      </label>
                      <textarea
                        id="cv-message"
                        rows={4}
                        placeholder="Tell us about your experience, clearance level, or ideal engagement…"
                        value={values.message}
                        onChange={(e) => setField("message", e.target.value)}
                        className={cn(fieldCls("message"), "resize-none")}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={submitting}
                      className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-lg bg-tg-navy text-white font-bold text-sm hover:bg-tg-blue transition-all shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed mt-1"
                    >
                      {submitting ? (
                        <>
                          <span className="h-4 w-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                          Submitting…
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4" /> Submit Resume
                        </>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </Section>
      </main>
    </div>
  );
}
