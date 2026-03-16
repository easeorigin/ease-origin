import { Hero } from "@/components/sections/hero";
import { Credibility } from "@/components/sections/credibility";
import { Solutions } from "@/components/sections/solutions";
import { WhyEaseOrigin } from "@/components/sections/why-easeorigin";
import { Agencies } from "@/components/sections/agencies";
import { CaseStudies } from "@/components/sections/case-studies";
import { Testimonials } from "@/components/sections/testimonials";
import { LatestInsights } from "@/components/sections/latest-insights";
import { Recruitment } from "@/components/sections/recruitment";
import { CTA } from "@/components/sections/cta";

export default function Home() {
  return (
    <div className="min-h-screen bg-surface">
      <main>
        <Hero />
        <Credibility />
        <Agencies />
        <Solutions />
        <WhyEaseOrigin />
        <CaseStudies />
        <Testimonials />
        <LatestInsights />
        <Recruitment />
        <CTA />
      </main>
    </div>
  );
}
