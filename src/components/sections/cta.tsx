import { Section } from "@/components/ui/section";
import Link from "next/link";

export function CTA() {
  return (
    <Section id="contact" className="bg-eo-blue py-20 relative overflow-hidden">
      {/* Radial dot pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.08]" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
      {/* Gold glow orb */}
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-eo-gold/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="bg-surface rounded-3xl p-10 md:p-16 text-center max-w-5xl mx-auto shadow-2xl relative overflow-hidden">
        {/* Decorative corner element */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-surface-muted rounded-bl-[100px] z-0"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-eo-gold/10 rounded-tr-[80px] z-0"></div>

        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-text-primary mb-4">
            Ready to Partner With EaseOrigin?
          </h2>
          <p className="text-lg text-text-tertiary mb-10">
            Whether you are a prime contractor seeking specialized talent, a
            government agency pursuing IT modernization, or a private sector
            organization looking to scale, let&apos;s discuss how our team can
            support your mission.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 text-base font-bold rounded-md bg-eo-navy text-white hover:bg-eo-blue transition-colors shadow-md hover:shadow-lg"
            >
              Partner With Us
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 text-base font-bold rounded-md bg-surface-muted text-text-primary hover:bg-border-default transition-colors border border-border-default"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}
