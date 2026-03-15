import type { Metadata } from "next";
import { Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "EaseOrigin terms of service for website usage.",
};

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <section className="relative pt-32 pb-12 lg:pt-44 lg:pb-16 bg-eo-navy text-white overflow-hidden">
          <div className="absolute inset-0 opacity-[0.035]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)", backgroundSize: "50px 50px" }} />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-eo-blue rounded-full blur-[140px] opacity-20 translate-x-1/3 -translate-y-1/4" />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="animate-fade-in-up">
              <h1 className="text-4xl font-extrabold tracking-tight mb-4">Terms of Service</h1>
              <p className="text-gray-300">Last updated: March 2026</p>
            </div>
          </div>
        </section>

        <Section className="bg-gradient-to-b from-slate-50/60 via-blue-50/15 to-white">
          <div className="max-w-4xl mx-auto prose prose-gray">
            <h2 className="text-xl font-bold text-eo-navy">Agreement to Terms</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              By accessing or using the EaseOrigin website, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you may not access the website.
            </p>

            <h2 className="text-xl font-bold text-eo-navy mt-8">Use of Website</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              This website is provided for informational purposes about EaseOrigin&apos;s technology consulting services. You may not use this website for any unlawful purpose or in any way that could damage, disable, or impair the website.
            </p>

            <h2 className="text-xl font-bold text-eo-navy mt-8">Intellectual Property</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              All content on this website, including text, graphics, logos, and software, is the property of EaseOrigin and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works from any content without written permission.
            </p>

            <h2 className="text-xl font-bold text-eo-navy mt-8">Limitation of Liability</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              EaseOrigin shall not be liable for any indirect, incidental, or consequential damages arising from the use or inability to use this website or our services.
            </p>

            <h2 className="text-xl font-bold text-eo-navy mt-8">Contact</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              For questions about these Terms of Service, contact us at{" "}
              <a href="mailto:info@easeorigin.com" className="text-eo-blue hover:underline">info@easeorigin.com</a>.
            </p>
          </div>
        </Section>
      </main>
    </div>
  );
}
