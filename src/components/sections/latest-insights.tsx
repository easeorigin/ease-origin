"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Section } from "@/components/ui/section";
import { blogPosts } from "@/data/blog";
import { WordReveal } from "@/components/word-reveal";

function formatDate(dateString: string): string {
  const date = new Date(dateString + "T00:00:00");
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function truncateExcerpt(text: string, maxLength: number = 120): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trimEnd() + "...";
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.15,
      ease: "easeOut" as const,
    },
  }),
};

export function LatestInsights() {
  const latestPosts = useMemo(() => {
    return [...blogPosts]
      .sort(
        (a, b) =>
          new Date(b.publishedAt).getTime() -
          new Date(a.publishedAt).getTime()
      )
      .slice(0, 3);
  }, []);

  return (
    <Section id="latest-insights" className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-linear-to-b from-surface-muted/80 via-surface to-surface-muted/80 pointer-events-none" />
      {/* Decorative glows */}
      <div className="absolute -top-20 -left-20 w-100 h-100 bg-linear-to-br from-blue-100/20 dark:from-blue-900/20 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-125 h-125 bg-linear-to-tl from-amber-100/15 dark:from-amber-900/15 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-2xl mb-6 md:mb-0">
            <h2 className="text-eo-gold font-semibold tracking-wider uppercase text-sm mb-3">
              Latest Insights
            </h2>
            <WordReveal
              text="From Our Team"
              as="h3"
              className="text-3xl md:text-4xl font-bold text-text-primary"
            />
          </div>
          <Link href="/blog">
            <span className="hidden md:inline-flex items-center text-text-primary font-semibold hover:text-eo-blue transition-colors cursor-pointer group">
              View All Insights
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {latestPosts.map((post, index) => (
            <motion.div
              key={post.slug}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Link href={`/blog/${post.slug}`} className="group block h-full">
                <div className="bg-surface border border-border-subtle rounded-2xl overflow-hidden h-full flex flex-col shadow-sm hover:shadow-md transition-shadow duration-300">
                  {/* Cover Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={post.coverImage}
                      alt={post.coverImageAlt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Category Badge */}
                    <div className="absolute top-3 left-3">
                      <span className="inline-block bg-eo-navy/85 text-white text-xs font-medium px-3 py-1 rounded-full backdrop-blur-sm">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 flex flex-col flex-1">
                    <h4 className="text-lg font-bold text-text-primary group-hover:text-eo-blue transition-colors mb-2 line-clamp-2">
                      {post.title}
                    </h4>
                    <p className="text-sm text-text-secondary leading-relaxed mb-4 flex-1">
                      {truncateExcerpt(post.excerpt)}
                    </p>

                    {/* Meta */}
                    <div className="flex items-center gap-4 text-xs text-text-secondary border-t border-border-subtle pt-4">
                      <span className="inline-flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" />
                        {post.readTimeMinutes} min read
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5" />
                        {formatDate(post.publishedAt)}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="mt-8 md:hidden">
          <Link href="/blog">
            <span className="inline-flex items-center text-text-primary font-semibold hover:text-eo-blue transition-colors cursor-pointer">
              View All Insights <ArrowRight className="ml-2 h-4 w-4" />
            </span>
          </Link>
        </div>
      </div>
    </Section>
  );
}
