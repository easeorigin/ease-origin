"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin, Phone, Mail, Send, CheckCircle2, AlertCircle,
  Clock, ArrowRight, Briefcase, ChevronRight
} from "lucide-react";
import { Section } from "@/components/ui/section";
import { cn } from "@/lib/utils";

// ─── Types ───────────────────────────────────────────────────────────────────

interface FormValues {
  name: string;
  email: string;
  company: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  company?: string;
  subject?: string;
  message?: string;
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function ContactHero() {
  return (
    <section className="relative pt-32 pb-16 lg:pt-44 lg:pb-20 overflow-hidden bg-tg-navy text-white">
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
        <div className="absolute top-0 right-0 w-150 h-150 bg-tg-blue rounded-full blur-[140px] opacity-25 translate-x-1/3 -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 w-100 h-100 bg-tg-gold rounded-full blur-[160px] opacity-[0.06] -translate-x-1/3 translate-y-1/4" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-sm font-medium text-tg-gold mb-6">
            <span className="flex h-2 w-2 rounded-full bg-tg-gold animate-pulse" />
            Get In Touch
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.08] mb-5">
            Contact Us
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            We welcome inquiries from government agencies, prime contractors, and technology consultants. Our team typically responds within one business day.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Contact Info + Form ─────────────────────────────────────────────────────

function validateForm(values: FormValues): FormErrors {
  const errors: FormErrors = {};
  if (!values.name.trim()) errors.name = "Full name is required.";
  if (!values.email.trim()) {
    errors.email = "Email address is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!values.company.trim()) errors.company = "Company or organization is required.";
  if (!values.subject.trim()) errors.subject = "Subject is required.";
  if (!values.message.trim()) {
    errors.message = "Message is required.";
  } else if (values.message.trim().length < 20) {
    errors.message = "Message must be at least 20 characters.";
  }
  return errors;
}

function ContactFormSection() {
  const [values, setValues] = useState<FormValues>({
    name: "", email: "", company: "", subject: "", message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof FormValues, boolean>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (field: keyof FormValues, value: string) => {
    setValues((v) => ({ ...v, [field]: value }));
    if (touched[field]) {
      const e = validateForm({ ...values, [field]: value });
      setErrors((prev) => ({ ...prev, [field]: e[field] }));
    }
  };

  const handleBlur = (field: keyof FormValues) => {
    setTouched((t) => ({ ...t, [field]: true }));
    const e = validateForm(values);
    setErrors((prev) => ({ ...prev, [field]: e[field] }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const allTouched = Object.fromEntries(
      (Object.keys(values) as (keyof FormValues)[]).map((k) => [k, true])
    );
    setTouched(allTouched);
    const e2 = validateForm(values);
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
  const inputNormal = "border-gray-200 focus:border-tg-blue focus:ring-tg-blue/20";
  const inputError = "border-red-400 focus:border-red-400 focus:ring-red-200";

  const fieldClass = (field: keyof FormValues) =>
    cn(inputBase, errors[field] && touched[field] ? inputError : inputNormal);

  const contactItems = [
    {
      icon: MapPin,
      label: "Address",
      lines: ["4501 Fairfax Dr Suite 500", "Arlington, VA 22203"],
    },
    {
      icon: Phone,
      label: "Phone",
      lines: ["(919) 229-4446"],
    },
    {
      icon: Mail,
      label: "Email",
      lines: ["info@tgfederal.com"],
    },
    {
      icon: Clock,
      label: "Business Hours",
      lines: ["Monday – Friday", "8:00 AM – 6:00 PM ET"],
    },
  ];

  return (
    <Section className="relative overflow-hidden bg-white border-b border-gray-100">
      <div className="absolute inset-0 bg-linear-to-br from-white via-slate-50/60 to-blue-50/30 pointer-events-none" />

      <div className="relative z-10 grid lg:grid-cols-5 gap-12 lg:gap-16">

        {/* Left — Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2 flex flex-col gap-8"
        >
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-tg-navy mb-3">Contact Information</h2>
            <p className="text-gray-500 leading-relaxed">
              Reach out directly or complete the form and we&apos;ll connect you with the right team.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            {contactItems.map(({ icon: Icon, label, lines }, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="shrink-0 w-11 h-11 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center">
                  <Icon className="h-5 w-5 text-tg-blue" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-tg-gold mb-1">{label}</p>
                  {lines.map((line, j) => (
                    <p key={j} className="text-sm text-gray-700 leading-snug">{line}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Who we work with */}
          <div className="bg-tg-navy rounded-2xl p-7 text-white mt-2">
            <h3 className="font-bold text-base mb-4">Who We Work With</h3>
            {[
              "Federal Government Agencies",
              "Prime & Subcontractors",
              "IT Consulting Firms",
              "Technology Consultants",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2.5 mb-2.5">
                <CheckCircle2 className="h-4 w-4 text-tg-gold shrink-0" />
                <span className="text-sm text-gray-300">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right — Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:col-span-3"
        >
          <div className="bg-white rounded-2xl border border-gray-100 shadow-lg p-8 md:p-10">
            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center py-16 gap-5">
                <div className="w-16 h-16 rounded-full bg-green-50 border border-green-100 flex items-center justify-center">
                  <CheckCircle2 className="h-8 w-8 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold text-tg-navy">Message Sent!</h3>
                <p className="text-gray-500 max-w-sm leading-relaxed">
                  Thank you for reaching out. A member of our team will be in touch within one business day.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setValues({ name: "", email: "", company: "", subject: "", message: "" }); setTouched({}); setErrors({}); }}
                  className="mt-2 text-sm font-semibold text-tg-blue hover:text-tg-navy transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-bold text-tg-navy mb-1">Send Us a Message</h2>
                <p className="text-sm text-gray-500 mb-8">All fields are required.</p>

                <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">

                  {/* Name + Email */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1.5" htmlFor="name">
                        Full Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        placeholder="Jane Smith"
                        value={values.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        onBlur={() => handleBlur("name")}
                        className={fieldClass("name")}
                        aria-describedby={errors.name && touched.name ? "name-error" : undefined}
                      />
                      {errors.name && touched.name && (
                        <p id="name-error" className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                          <AlertCircle className="h-3 w-3" /> {errors.name}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1.5" htmlFor="email">
                        Email Address
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="jane@agency.gov"
                        value={values.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        onBlur={() => handleBlur("email")}
                        className={fieldClass("email")}
                        aria-describedby={errors.email && touched.email ? "email-error" : undefined}
                      />
                      {errors.email && touched.email && (
                        <p id="email-error" className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                          <AlertCircle className="h-3 w-3" /> {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Company */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1.5" htmlFor="company">
                      Company / Organization
                    </label>
                    <input
                      id="company"
                      type="text"
                      placeholder="Department of Veterans Affairs"
                      value={values.company}
                      onChange={(e) => handleChange("company", e.target.value)}
                      onBlur={() => handleBlur("company")}
                      className={fieldClass("company")}
                    />
                    {errors.company && touched.company && (
                      <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                        <AlertCircle className="h-3 w-3" /> {errors.company}
                      </p>
                    )}
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1.5" htmlFor="subject">
                      Subject
                    </label>
                    <input
                      id="subject"
                      type="text"
                      placeholder="Partnership Inquiry / Subcontracting / Staffing"
                      value={values.subject}
                      onChange={(e) => handleChange("subject", e.target.value)}
                      onBlur={() => handleBlur("subject")}
                      className={fieldClass("subject")}
                    />
                    {errors.subject && touched.subject && (
                      <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                        <AlertCircle className="h-3 w-3" /> {errors.subject}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1.5" htmlFor="message">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      placeholder="Tell us about your project, agency needs, or how we can help..."
                      value={values.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      onBlur={() => handleBlur("message")}
                      className={cn(fieldClass("message"), "resize-none")}
                    />
                    {errors.message && touched.message && (
                      <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                        <AlertCircle className="h-3 w-3" /> {errors.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-lg bg-tg-navy text-white font-bold text-sm hover:bg-tg-blue transition-all duration-200 shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed mt-1"
                  >
                    {submitting ? (
                      <>
                        <span className="h-4 w-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                        Sending…
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </>
            )}
          </div>
        </motion.div>

      </div>
    </Section>
  );
}

// ─── Map ──────────────────────────────────────────────────────────────────────

function MapSection() {
  return (
    <Section className="relative overflow-hidden bg-slate-50 border-b border-gray-100" containerClassName="px-0 sm:px-0 lg:px-0 max-w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-sm font-semibold uppercase tracking-widest text-tg-gold mb-2">Location</h2>
          <h3 className="text-2xl md:text-3xl font-bold text-tg-navy">Our Office</h3>
          <p className="text-gray-500 mt-2">4501 Fairfax Dr Suite 500, Arlington, VA 22203</p>
        </motion.div>
      </div>

      <div className="w-full h-80 md:h-96 relative overflow-hidden shadow-inner">
        <iframe
          title="EaseOrigin Office Location — Arlington, VA"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.4799!2d-77.1148!3d38.8832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b6e1a5e5e5e5%3A0x0!2s4501+Fairfax+Dr%2C+Arlington%2C+VA+22203!5e0!3m2!1sen!2sus!4v1000000000000!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0, filter: "grayscale(20%) contrast(1.05)" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </Section>
  );
}

// ─── Consultant CTA ───────────────────────────────────────────────────────────

function ConsultantCTA() {
  return (
    <Section className="relative overflow-hidden bg-white border-b border-gray-100">
      <div className="absolute inset-0 bg-linear-to-br from-white via-blue-50/30 to-indigo-50/20 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-4xl mx-auto"
      >
        <div className="bg-tg-navy rounded-3xl p-10 md:p-14 relative overflow-hidden">
          {/* Background grid */}
          <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
          <div className="absolute top-0 right-0 w-87.5 h-87.5 bg-tg-blue/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row gap-10 items-start md:items-center">
            <div className="shrink-0 w-16 h-16 rounded-2xl bg-tg-gold/10 border border-tg-gold/20 flex items-center justify-center">
              <Briefcase className="h-8 w-8 text-tg-gold" />
            </div>

            <div className="grow">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Interested in Working With EaseOrigin?
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6 max-w-xl">
                We partner with highly skilled consultants supporting federal technology initiatives. Explore open positions or submit your resume for future consideration.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-tg-gold text-tg-navy font-bold text-sm hover:bg-yellow-400 transition-all shadow-md"
                >
                  View Careers <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border-2 border-white/20 text-white font-semibold text-sm hover:bg-white/10 transition-all"
                >
                  Submit Resume <ChevronRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <ContactHero />
        <ContactFormSection />
        <MapSection />
        <ConsultantCTA />
      </main>
    </div>
  );
}
