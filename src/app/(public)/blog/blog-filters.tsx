"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Clock, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  type BlogPost,
  type BlogCategory,
  getAllCategories,
} from "@/data/blog";

function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="group bg-surface border border-border-subtle rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300">
      <Link href={`/blog/${post.slug}`}>
        <div className="relative h-48 overflow-hidden">
          <Image
            src={post.coverImage}
            alt={post.coverImageAlt}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-3 left-3">
            <span className="px-3 py-1 text-xs font-semibold rounded-full bg-eo-navy/90 text-white">
              {post.category}
            </span>
          </div>
        </div>
        <div className="p-6">
          <div className="flex items-center gap-3 text-sm text-text-muted mb-3">
            <time dateTime={post.publishedAt}>
              {new Date(post.publishedAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-eo-blue/10 text-eo-blue text-xs font-medium">
              <Clock className="h-3 w-3" />
              {post.readTimeMinutes} min
            </span>
          </div>
          <h2 className="text-lg font-bold text-text-primary mb-2 group-hover:text-eo-blue transition-colors">
            {post.title}
          </h2>
          <p className="text-sm text-text-secondary line-clamp-3 mb-4">
            {post.excerpt}
          </p>
          <div className="flex items-center justify-between">
            <div className="text-sm text-text-muted">
              <span className="font-medium text-text-secondary">
                {post.author.name}
              </span>
            </div>
            <span className="text-eo-blue font-medium text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
              Read more <ArrowRight className="h-3.5 w-3.5" />
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}

function FeaturedHeroCard({ post }: { post: BlogPost }) {
  return (
    <section className="mb-16">
      <Link href={`/blog/${post.slug}`}>
        <article className="group grid md:grid-cols-2 gap-8 bg-surface border border-border-subtle rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 p-0 md:p-0">
          <div className="relative h-64 md:h-full min-h-[280px] overflow-hidden">
            <Image
              src={post.coverImage}
              alt={post.coverImageAlt}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="p-8 flex flex-col justify-center">
            <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-eo-gold/10 text-eo-gold border border-eo-gold/20 mb-4 w-fit">
              Featured
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4 group-hover:text-eo-blue transition-colors">
              {post.title}
            </h2>
            <p className="text-text-secondary mb-6 leading-relaxed">
              {post.excerpt}
            </p>
            <div className="flex items-center gap-4 text-sm text-text-muted">
              <span className="font-medium text-text-secondary">
                {post.author.name}
              </span>
              <time dateTime={post.publishedAt}>
                {new Date(post.publishedAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-eo-blue/10 text-eo-blue text-xs font-medium">
                <Clock className="h-3 w-3" />
                {post.readTimeMinutes} min
              </span>
            </div>
          </div>
        </article>
      </Link>
    </section>
  );
}

type FilterTab = "All" | "Featured" | BlogCategory;

export function BlogFilters({ posts }: { posts: BlogPost[] }) {
  const [activeFilter, setActiveFilter] = useState<FilterTab>("All");

  const categories = getAllCategories();
  const tabs: FilterTab[] = ["All", "Featured", ...categories];

  const filteredPosts =
    activeFilter === "All"
      ? posts
      : activeFilter === "Featured"
        ? posts.filter((p) => p.featured)
        : posts.filter((p) => p.category === activeFilter);

  // Show a featured hero card when viewing "All" posts
  const featuredPost =
    activeFilter === "All" ? posts.find((p) => p.featured) : undefined;
  const gridPosts = featuredPost
    ? filteredPosts.filter((p) => p !== featuredPost)
    : filteredPosts;

  return (
    <>
      {/* Category Filter Tabs */}
      <div className="mb-12">
        <nav
          aria-label="Filter articles by category"
          className="flex flex-wrap gap-2"
        >
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveFilter(tab)}
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-full border transition-all duration-200",
                activeFilter === tab
                  ? "bg-eo-navy text-white border-eo-navy shadow-sm"
                  : "bg-surface text-text-secondary border-border-subtle hover:border-eo-blue hover:text-eo-blue"
              )}
            >
              {tab}
            </button>
          ))}
        </nav>
      </div>

      {/* Featured Post Hero */}
      {featuredPost && <FeaturedHeroCard post={featuredPost} />}

      {/* Post Grid */}
      <section>
        <h2 className="text-2xl font-bold text-text-primary mb-8">
          {activeFilter === "All"
            ? "Latest Articles"
            : activeFilter === "Featured"
              ? "Featured Articles"
              : activeFilter}
        </h2>
        {gridPosts.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {gridPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 border border-dashed border-border-subtle rounded-xl">
            <p className="text-text-muted text-lg">
              No articles found in this category yet.
            </p>
            <p className="text-text-muted text-sm mt-2">
              Check back soon for new content.
            </p>
          </div>
        )}
      </section>
    </>
  );
}
