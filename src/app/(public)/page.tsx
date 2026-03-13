import { Hero } from "@/components/sections/hero";
import { Credibility } from "@/components/sections/credibility";
import { Solutions } from "@/components/sections/solutions";
import { Agencies } from "@/components/sections/agencies";
import { CaseStudies } from "@/components/sections/case-studies";
import { Recruitment } from "@/components/sections/recruitment";
import { CTA } from "@/components/sections/cta";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <Hero />
        <Credibility />
        <Solutions />
        <Agencies />
        <CaseStudies />
        <Recruitment />
        <CTA />
      </main>
    </div>
  );
}
