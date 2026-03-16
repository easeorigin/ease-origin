import type { Metadata } from "next";
import Image from "next/image";
import { blogPosts } from "@/data/blog";
import { BlogFilters } from "./blog-filters";

export const metadata: Metadata = {
  title: "Insights | Expert Perspectives on Federal IT, Cloud, and Cybersecurity",
  description:
    "Expert insights from EaseOrigin on federal IT modernization, cloud infrastructure, cybersecurity compliance, DevSecOps, and program management.",
};

export default function BlogPage() {
  return (
    <main className="bg-background min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-28 overflow-hidden bg-eo-navy text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/blog-hero.jpg"
            alt="Technology insights and articles"
            aria-hidden="true"
            fill
            className="object-cover opacity-[0.12]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-eo-navy via-eo-navy/95 to-eo-navy/80" />
        </div>
        <div
          className="absolute inset-0 z-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-eo-blue rounded-full blur-[180px] opacity-20 translate-x-1/3 -translate-y-1/4 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.06] mb-6">
              Insights & Articles
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
              Expert perspectives on federal IT modernization, cloud
              infrastructure, cybersecurity, and program delivery.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <BlogFilters posts={blogPosts} />
      </div>
    </main>
  );
}
