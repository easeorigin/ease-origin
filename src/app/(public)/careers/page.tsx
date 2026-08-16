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

/**
 * Reframed from an employer pitch to a teaming pitch.
 *
 * EaseOrigin carries no standing bench and runs no benefits program, so the
 * previous copy (career guidance, benefits packages, clearance sponsorship)
 * described things that do not exist. What follows is what the firm actually
 * offers the people it works with.
 */
const workingWithUs = [
  {
    icon: Heart,
    title: "Whole Workstreams",
    description:
      "Our engagements are scoped as workstreams: a platform build, a compliance package, a migration. You own real scope, not a seat someone else defined.",
    color: "text-rose-500",
    bg: "bg-rose-50 dark:bg-rose-950",
    border: "border-rose-100 dark:border-rose-900",
  },
  {
    icon: Users,
    title: "A Working Bench",
    description:
      "We team with independent engineers and small firms to cover scope our practice does not. Specialists get brought in on the work that fits them.",
    color: "text-eo-blue",
    bg: "bg-blue-50 dark:bg-blue-950",
    border: "border-blue-100 dark:border-blue-900",
  },
  {
    icon: DollarSign,
    title: "Subcontract Terms",
    description:
      "Engagements run as subcontracts with rates agreed up front. We are not a staffing firm and do not offer W-2 placement or benefits.",
    color: "text-emerald-600",
    bg: "bg-emerald-50 dark:bg-emerald-950",
    border: "border-emerald-100 dark:border-emerald-900",
  },
  {
    icon: Shield,
    title: "Cleared Programs",
    description:
      "Some of our scope sits behind a clearance. Bring your own. We do not sponsor investigations, and classified work runs under the prime's facility clearance.",
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
        <p className="text-sm font-semibold uppercase tracking-widest text-eo-gold mb-2">Our Delivery Model</p>
        <h2 className="text-3xl md:text-4xl font-bold text-text-primary">How We Work</h2>
        <p className="mt-4 text-text-tertiary max-w-xl mx-auto leading-relaxed">
          We deliver federal scope as subcontracts and pull in specialists from
          our network when a program calls for them. Here is what that looks
          like from the inside.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {workingWithUs.map(({ icon: Icon, title, description, color, bg, border }, i) => (
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

  /**
   * The static `jobs` list is intentionally empty. Anything here comes from the
   * admin-managed API, so the count and the copy both have to hold at zero
   * without implying a hiring pipeline that does not exist.
   */
  const mergedJobs = [...(publicJobs || []), ...jobs];
  const openCount = mergedJobs.length;
  const hasOpenings = openCount > 0;

  return (
    <div className="min-h-screen bg-surface">
      <main>
        <PageHero
          badge={
            hasOpenings
              ? `${openCount} Open Position${openCount !== 1 ? "s" : ""}`
              : "Partner Network"
          }
          title="Work With EaseOrigin"
          description={
            hasOpenings
              ? "We deliver cloud, platform, and security workstreams on federal programs, and we bring in specialists from our network when a program calls for them."
              : "We have no open positions right now. We do keep a working network of engineers and small firms we bring onto federal scope as it comes in, and we would rather know what you do before the work shows up than after."
          }
          primaryCta={
            hasOpenings
              ? { href: "/careers/jobs", label: "View Open Positions" }
              : { href: "/careers/submit-resume", label: "Join Our Network" }
          }
          secondaryCta={{ href: "/program-experience", label: "How We Team" }}
          showScrollIndicator
          backgroundImage={{ src: "/images/careers-office.jpg", alt: "Modern technology workplace" }}
        />
        <WhyWorkWithUs />
        <CTASection
          variant="navy"
          eyebrow="Our Network"
          title="Tell Us What You Build"
          description="We keep a standing list of engineers and small firms we can bring onto federal scope. Send us what you do and the clearance you hold, and we will reach out when the work matches."
          primaryCta={{ href: "/careers/submit-resume", label: "Join Our Network" }}
          secondaryCta={{ href: "/contact", label: "Contact Us" }}
        />
      </main>
    </div>
  );
}
