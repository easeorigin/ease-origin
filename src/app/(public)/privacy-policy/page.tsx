import type { Metadata } from "next";
import { Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "EaseOrigin privacy policy. How we collect, use, and protect your information.",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <section className="relative pt-32 pb-12 lg:pt-44 lg:pb-16 bg-eo-navy text-white overflow-hidden">
          <div className="absolute inset-0 opacity-[0.035]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)", backgroundSize: "50px 50px" }} />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-eo-blue rounded-full blur-[140px] opacity-20 translate-x-1/3 -translate-y-1/4" />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="animate-fade-in-up">
              <h1 className="text-4xl font-extrabold tracking-tight mb-4">Privacy Policy</h1>
              <p className="text-gray-300">Last updated: March 2026</p>
            </div>
          </div>
        </section>

        <Section className="bg-gradient-to-b from-slate-50/60 via-blue-50/15 to-white">
          <div className="max-w-4xl mx-auto prose prose-gray">
            <h2 className="text-xl font-bold text-eo-navy">Introduction</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              EaseOrigin (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or engage with our services.
            </p>

            <h2 className="text-xl font-bold text-eo-navy mt-8">Information We Collect</h2>
            <p className="text-gray-600 leading-relaxed mb-4">We may collect information that you provide directly to us, including:</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
              <li>Name, email address, phone number, and company information submitted through contact forms</li>
              <li>Resume and professional information submitted through our careers portal</li>
              <li>Information provided during business communications</li>
            </ul>

            <h2 className="text-xl font-bold text-eo-navy mt-8">How We Use Your Information</h2>
            <p className="text-gray-600 leading-relaxed mb-4">We use the information we collect to:</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
              <li>Respond to inquiries and provide requested services</li>
              <li>Process job applications and recruitment activities</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="text-xl font-bold text-eo-navy mt-8">Contact Us</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              If you have questions about this Privacy Policy, please contact us at{" "}
              <a href="mailto:info@easeorigin.com" className="text-eo-blue hover:underline">info@easeorigin.com</a> or write to us at 211 E Avenue G, 306, Midlothian, TX 76065.
            </p>
          </div>
        </Section>
      </main>
    </div>
  );
}
