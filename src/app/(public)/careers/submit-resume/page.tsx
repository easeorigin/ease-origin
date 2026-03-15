"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  AlertCircle,
  ArrowLeft,
  Send,
} from "lucide-react";
import Link from "next/link";
import { Section } from "@/components/ui/section";
import { CATEGORIES, LOCATIONS } from "@/data/jobs";
import { cn } from "@/lib/utils";
import { submitResumeForm, type ResumeFormResponse } from "./actions";

interface FormValues {
  name: string;
  email: string;
  country: string;
  expertise: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  country?: string;
  expertise?: string;
  message?: string;
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
  return errors;
}

export default function SubmitResumePage() {
  const [values, setValues] = useState<FormValues>({
    name: "",
    email: "",
    country: "",
    expertise: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<
    Partial<Record<keyof FormValues, boolean>>
  >({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const setField = (
    field: keyof FormValues,
    value: string,
  ) => {
    setValues((v) => ({ ...v, [field]: value }));
    if (touched[field]) {
      const e = validate({ ...values, [field]: value });
      setErrors((prev) => ({ ...prev, [field]: e[field as keyof FormErrors] }));
    }
  };

  const handleBlur = (field: keyof FormValues) => {
    setTouched((t) => ({ ...t, [field]: true }));
    const e = validate(values);
    setErrors((prev) => ({ ...prev, [field]: e[field as keyof FormErrors] }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError(null);
    const allTouched = Object.fromEntries(
      (Object.keys(values) as (keyof FormValues)[]).map((k) => [k, true]),
    );
    setTouched(allTouched);
    const e2 = validate(values);
    setErrors(e2);
    if (Object.keys(e2).length > 0) return;

    setSubmitting(true);
    try {
      const result: ResumeFormResponse = await submitResumeForm(values);
      if (result.success) {
        setSubmitted(true);
      } else {
        setServerError(result.error || "Something went wrong. Please try again.");
      }
    } catch {
      setServerError("An unexpected error occurred. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const inputBase =
    "w-full px-4 py-3 rounded-lg border text-sm text-gray-900 bg-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-200";
  const inputNormal =
    "border-gray-200 focus:border-eo-blue focus:ring-eo-blue/20";
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
        {/* Hero */}
        <section className="relative pt-32 pb-14 lg:pt-40 lg:pb-16 overflow-hidden bg-eo-navy text-white">
          <div className="absolute inset-0 z-0">
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)",
                backgroundSize: "50px 50px",
              }}
            />
            <div className="absolute top-0 right-0 w-150 h-150 bg-eo-blue rounded-full blur-[140px] opacity-20 translate-x-1/3 -translate-y-1/4" />
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
              <div className="flex w-auto items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-sm font-medium text-eo-gold mb-5">
                <span className="flex h-2 w-2 rounded-full bg-eo-gold animate-pulse" />
                Join Our Talent Network
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
                Submit Your Resume
              </h1>
              <p className="text-gray-300 leading-relaxed max-w-xl">
                We partner with highly skilled consultants supporting federal
                technology initiatives. Submit your information and we&apos;ll reach out
                when a matching opportunity arises.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Form */}
        <Section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-blue-50/15 to-slate-50 border-b border-gray-100">
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-blue-100/15 rounded-full blur-[80px] pointer-events-none" />
          <div className="max-w-2xl mx-auto relative z-10">
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
                  <h3 className="text-2xl font-bold text-eo-navy">
                    Submission Received!
                  </h3>
                  <p className="text-gray-500 max-w-sm leading-relaxed">
                    Thank you for your interest in EaseOrigin. Our recruiting
                    team will review your profile and be in touch.
                  </p>
                  <Link href="/careers/jobs">
                    <span className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-eo-blue hover:text-eo-navy transition-colors cursor-pointer">
                      View Open Positions
                    </span>
                  </Link>
                </motion.div>
              ) : (
                <>
                  <h2 className="text-xl font-bold text-eo-navy mb-1">
                    Your Information
                  </h2>
                  <p className="text-sm text-gray-400 mb-7">
                    We&apos;ll use this to match you with future opportunities.
                  </p>

                  {serverError && (
                    <div className="mb-6 p-4 rounded-lg bg-red-50 border border-red-200 flex items-start gap-3">
                      <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-red-700">{serverError}</p>
                    </div>
                  )}

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
                        placeholder="Tell us about your experience, clearance level, or ideal engagement..."
                        value={values.message}
                        onChange={(e) => setField("message", e.target.value)}
                        className={cn(fieldCls("message"), "resize-none")}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={submitting}
                      className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-lg bg-eo-navy text-white font-bold text-sm hover:bg-eo-blue transition-all shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed mt-1"
                    >
                      {submitting ? (
                        <>
                          <span className="h-4 w-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4" /> Submit
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
