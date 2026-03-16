import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { Inter, Montserrat } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { companyInfo } from "@/data/company-info";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-inter",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: {
    template: "%s | EaseOrigin",
    default: "EaseOrigin | Federal IT Consulting & Cloud Solutions",
  },
  description:
    "EaseOrigin delivers specialized IT consulting for government agencies and prime contractors, including cloud infrastructure, cybersecurity, DevOps, AI/ML solutions, program management, and agile delivery.",
  metadataBase: new URL("https://easeorigin.com"),
  keywords: [
    "federal IT consulting",
    "government cloud solutions",
    "FedRAMP",
    "cybersecurity compliance",
    "DevOps",
    "DevSecOps",
    "cloud modernization",
    "AWS GovCloud",
    "Azure Government",
    "Oracle Cloud",
    "NIST 800-53",
    "FISMA",
    "IT staffing",
    "federal contractor",
    "AI/ML solutions",
    "infrastructure as code",
    "small business",
    "EaseOrigin",
    "program management",
    "agile delivery",
    "release train engineering",
    "SAFe",
    "PI Planning",
  ],
  openGraph: {
    type: "website",
    siteName: "EaseOrigin",
    locale: "en_US",
    title: "EaseOrigin | Federal IT Consulting & Cloud Solutions",
    description:
      "EaseOrigin delivers specialized IT consulting for government agencies and prime contractors, including cloud infrastructure, cybersecurity, DevOps, AI/ML solutions, program management, and agile delivery.",
    url: "https://easeorigin.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "EaseOrigin | Federal IT Consulting & Cloud Solutions",
    description:
      "EaseOrigin delivers specialized IT consulting for government agencies and prime contractors, including cloud infrastructure, cybersecurity, DevOps, AI/ML solutions, program management, and agile delivery.",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: companyInfo.name,
  url: companyInfo.url,
  description:
    "Federal IT consulting firm delivering cloud infrastructure, cybersecurity, DevOps, AI/ML solutions, program management, and agile delivery for government agencies and prime contractors.",
  address: {
    "@type": "PostalAddress",
    streetAddress: companyInfo.address.street,
    addressLocality: companyInfo.address.city,
    addressRegion: companyInfo.address.state,
    postalCode: companyInfo.address.zip,
    addressCountry: "US",
  },
  telephone: companyInfo.phone,
  email: companyInfo.email,
  naics: companyInfo.identifiers.naics,
  identifier: [
    { "@type": "PropertyValue", name: "UEI", value: companyInfo.identifiers.uei },
    { "@type": "PropertyValue", name: "CAGE", value: companyInfo.identifiers.cage },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning
        className={`${inter.variable} ${montserrat.variable} antialiased`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
      </body>
    </html>
  );
}
