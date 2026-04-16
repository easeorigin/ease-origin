"use client";

import { motion } from "framer-motion";
import {
  Heart, Users, DollarSign, Shield
} from "lucide-react";
import { Section } from "@/components/ui/section";
import { PageHero } from "@/components/shared/page-hero";
import { CTASection } from "@/components/shared/cta-section";
import { jobs } from "@/data/jobs";
import { fadeInUpWhileVisible } from "@/lib/animations";
import { usePublicJobs } from "@/hooks/use-jobs";

const benefits = [
  {
    icon: Heart,
    title: "Meaningful Work",
    description:
      "Support technology initiatives that directly impact government operations, enterprise systems, and public services at a national scale.",
    color: "text-rose-500",
    bg: "bg-rose-50 dark:bg-rose-950",
    border: "border-rose-100 dark:border-rose-900",
  },
  {
    icon: Users,
    title: "Consultant Support",
    description:
      "We partner with our consultants to provide career guidance, mentorship, and professional development at every stage.",
    color: "text-eo-blue",
    bg: "bg-blue-50 dark:bg-blue-950",
    border: "border-blue-100 dark:border-blue-900",
  },
  {
    icon: DollarSign,
    title: "Competitive Benefits",
    description:
      "Competitive compensation, benefits packages, and long-term placement opportunities on government and commercial programs.",
    color: "text-emerald-600",
    bg: "bg-emerald-50 dark:bg-emerald-950",
    border: "border-emerald-100 dark:border-emerald-900",
  },
  {
    icon: Shield,
    title: "Clearance Support",
    description:
      "We guide consultants through the security clearance process and connect cleared professionals with high-value opportunities.",
    color: "text-eo-gold",
    bg: "bg-amber-50 dark:bg-amber-950",
    border: "border-amber-100 dark:border-amber-900",
  },
];

function WhyWorkWithUs() {
  
  return (
    <Section className="relative overflow-hidden bg-linear-to-br from-slate-50 dark:from-gray-900 via-blue-50/30 dark:via-gray-900/30 to-indigo-50/20 dark:to-gray-800/20 border-b border-border-subtle">
      {/* Subtle glows */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-blue-100/15 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-eo-gold/10 rounded-full blur-[80px] pointer-events-none" />
      <motion.div
        {...fadeInUpWhileVisible}
        className="text-center mb-12"
      >
        <p className="text-sm font-semibold uppercase tracking-widest text-eo-gold mb-2">Why EaseOrigin</p>
        <h2 className="text-3xl md:text-4xl font-bold text-text-primary">Why Work With Us</h2>
        <p className="mt-4 text-text-tertiary max-w-xl mx-auto leading-relaxed">
          We believe great technology starts with great people. Here&apos;s what makes EaseOrigin different.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {benefits.map(({ icon: Icon, title, description, color, bg, border }, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.1 }}
            className="flex flex-col bg-surface rounded-2xl border border-border-subtle shadow-sm p-7 hover:shadow-md transition-shadow"
          >
            <div className={`w-12 h-12 rounded-xl ${bg} ${border} border flex items-center justify-center mb-5`}>
              <Icon className={`h-6 w-6 ${color}`} />
            </div>
            <h3 className="text-base font-bold text-text-primary mb-2">{title}</h3>
            <p className="text-sm text-text-tertiary leading-relaxed">{description}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

export default function CareersPage() {
  const {
      data: publicJobs,
      // isLoading
    } = usePublicJobs();

    const mergedJobs = [...(publicJobs || []), ...jobs];
  return (
    <div className="min-h-screen bg-surface">
      <main>
        <PageHero
          badge={`${jobs.length} Open Position${mergedJobs.length !== 1 ? "s" : ""}`}
          title="Careers at EaseOrigin"
          description="Join a team of highly skilled consultants delivering mission-critical technology solutions for government agencies and private sector organizations nationwide."
          primaryCta={{ href: "/careers/jobs", label: "View Open Positions" }}
          secondaryCta={{ href: "/careers/submit-resume", label: "Submit Resume" }}
          showScrollIndicator
          backgroundImage={{ src: "/images/careers-office.jpg", alt: "Modern technology workplace" }}
        />
        <WhyWorkWithUs />
        <CTASection
          variant="navy"
          eyebrow="Join Our Team"
          title="Explore Opportunities With EaseOrigin"
          description="We're actively hiring technology professionals across cloud, cybersecurity, data, AI/ML, and DevOps disciplines."
          primaryCta={{ href: "/careers/jobs", label: "View Open Positions" }}
          secondaryCta={{ href: "/careers/submit-resume", label: "Submit Resume" }}
        />
      </main>
    </div>
  );
}
