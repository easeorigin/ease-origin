import { Section } from "@/components/ui/section";
import Link from "next/link";

export function CTA() {
  return (
    <Section id="contact" className="bg-tg-blue py-20">
      <div className="bg-white rounded-3xl p-10 md:p-16 text-center max-w-5xl mx-auto shadow-2xl relative overflow-hidden">
        {/* Decorative corner element */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gray-50 rounded-bl-[100px] z-0"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-tg-gold/10 rounded-tr-[80px] z-0"></div>

        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-tg-navy mb-4">
            Ready to Partner With Ease Origin?
          </h2>
          <p className="text-lg text-gray-600 mb-10">
            Whether you are a prime contractor looking for specialized talent or
            an agency seeking innovative IT solutions, let&apos;s discuss how our
            team can support your mission.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              // onClick={() => alert("Partner form would open here.")}
              className="px-8 py-4 text-base font-bold rounded-md bg-tg-navy text-white hover:bg-tg-blue transition-colors shadow-md hover:shadow-lg"
            >
              Partner With Us
            </Link>
            <Link
              href="/contact"
              // onClick={() => alert("Contact form would open here.")}
              className="px-8 py-4 text-base font-bold rounded-md bg-gray-100 text-tg-navy hover:bg-gray-200 transition-colors border border-gray-200"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}
