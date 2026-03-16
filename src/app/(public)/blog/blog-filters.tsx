"use client";

import { useState, useMemo, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Clock, ArrowRight, Search, X, BookOpen } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  type BlogPost,
  type BlogCategory,
  getAllCategories,
} from "@/data/blog";

/* ─── Constants ─── */
const POSTS_PER_PAGE = 9;

/* ─── Animation Variants ─── */
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06, duration: 0.45, ease: "easeOut" },
  }),
};

const heroVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

/* ─── Blog Card ─── */
function BlogCard({
  post,
  index,
  large = false,
}: {
  post: BlogPost;
  index: number;
  large?: boolean;
}) {
  return (
    <motion.article
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      className={cn(
        "group relative bg-surface border border-border-subtle rounded-2xl overflow-hidden transition-all duration-300",
        "hover:shadow-xl hover:shadow-eo-navy/5 hover:-translate-y-1",
        large && "sm:col-span-1"
      )}
    >
      <Link href={`/blog/${post.slug}`} className="block h-full">
        <div
          className={cn(
            "relative overflow-hidden",
            large ? "h-56 sm:h-64" : "h-48"
          )}
        >
          <Image
            src={post.coverImage}
            alt={post.coverImageAlt}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
          />
          {/* Gradient overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-eo-navy/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute top-3 left-3">
            <span className="px-3 py-1 text-xs font-semibold rounded-full bg-eo-navy/90 text-white backdrop-blur-sm">
              {post.category}
            </span>
          </div>
        </div>
        <div className="p-6 flex flex-col flex-1">
          <div className="flex items-center gap-3 text-sm text-text-muted mb-3">
            <time dateTime={post.publishedAt}>
              {new Date(post.publishedAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </time>
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-eo-blue/10 text-eo-blue text-xs font-medium">
              <Clock className="h-3 w-3" />
              {post.readTimeMinutes} min
            </span>
          </div>
          <h2
            className={cn(
              "font-bold text-text-primary mb-2 group-hover:text-eo-blue transition-colors line-clamp-2",
              large ? "text-xl" : "text-lg"
            )}
          >
            {post.title}
          </h2>
          <p className="text-sm text-text-secondary line-clamp-2 mb-4 flex-1">
            {post.excerpt}
          </p>
          <div className="flex items-center justify-between mt-auto">
            <span className="text-sm font-medium text-text-secondary">
              {post.author.name}
            </span>
            <span className="text-eo-blue font-medium text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
              Read <ArrowRight className="h-3.5 w-3.5" />
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

/* ─── Featured Hero Card ─── */
function FeaturedHeroCard({ post }: { post: BlogPost }) {
  return (
    <motion.section
      variants={heroVariants}
      initial="hidden"
      animate="visible"
      className="mb-14"
    >
      <Link href={`/blog/${post.slug}`}>
        <article className="group relative rounded-2xl overflow-hidden min-h-[400px] sm:min-h-[460px]">
          {/* Full-width cover image */}
          <Image
            src={post.coverImage}
            alt={post.coverImageAlt}
            fill
            className="object-cover group-hover:scale-[1.03] transition-transform duration-700"
            priority
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-eo-navy via-eo-navy/70 to-transparent" />

          {/* Content positioned over image */}
          <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12 z-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 text-xs font-semibold rounded-full bg-eo-gold text-white">
                Featured
              </span>
              <span className="px-3 py-1 text-xs font-semibold rounded-full bg-white/20 text-white backdrop-blur-sm">
                {post.category}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-4 max-w-3xl leading-tight group-hover:text-eo-gold/90 transition-colors">
              {post.title}
            </h2>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-2xl line-clamp-2 sm:line-clamp-3">
              {post.excerpt}
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <span className="font-medium text-gray-300">
                  {post.author.name}
                </span>
                <time dateTime={post.publishedAt}>
                  {new Date(post.publishedAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
                <span className="inline-flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" />
                  {post.readTimeMinutes} min
                </span>
              </div>
              <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-eo-gold text-white font-semibold text-sm group-hover:bg-eo-gold/90 transition-colors">
                Read Article <ArrowRight className="h-4 w-4" />
              </span>
            </div>
          </div>
        </article>
      </Link>
    </motion.section>
  );
}

/* ─── Filter Tab Types ─── */
type FilterTab = "All" | "Featured" | BlogCategory;

/* ─── Main Blog Filters Component ─── */
export function BlogFilters({ posts }: { posts: BlogPost[] }) {
  const [activeFilter, setActiveFilter] = useState<FilterTab>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(POSTS_PER_PAGE);
  const filterBarRef = useRef<HTMLDivElement>(null);

  const categories = getAllCategories();
  const tabs: FilterTab[] = ["All", "Featured", ...categories];

  // Count posts per tab
  const tabCounts = useMemo(() => {
    const counts: Record<string, number> = {
      All: posts.length,
      Featured: posts.filter((p) => p.featured).length,
    };
    categories.forEach((cat) => {
      counts[cat] = posts.filter((p) => p.category === cat).length;
    });
    return counts;
  }, [posts, categories]);

  // Filter posts by category, then by search
  const filteredPosts = useMemo(() => {
    let result =
      activeFilter === "All"
        ? posts
        : activeFilter === "Featured"
          ? posts.filter((p) => p.featured)
          : posts.filter((p) => p.category === activeFilter);

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.tags.some((t) => t.toLowerCase().includes(q)) ||
          p.excerpt.toLowerCase().includes(q)
      );
    }

    return result;
  }, [posts, activeFilter, searchQuery]);

  // Featured hero: only show when on "All" tab with no search
  const featuredPost =
    activeFilter === "All" && !searchQuery.trim()
      ? posts.find((p) => p.featured)
      : undefined;

  const gridPosts = featuredPost
    ? filteredPosts.filter((p) => p !== featuredPost)
    : filteredPosts;

  const visiblePosts = gridPosts.slice(0, visibleCount);
  const hasMore = visibleCount < gridPosts.length;

  const handleFilterChange = (tab: FilterTab) => {
    setActiveFilter(tab);
    setVisibleCount(POSTS_PER_PAGE);
  };

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    setVisibleCount(POSTS_PER_PAGE);
  };

  return (
    <>
      {/* Search Bar */}
      <div className="mb-8">
        <div className="relative max-w-md">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4.5 w-4.5 text-text-muted" />
          <input
            type="text"
            placeholder="Search articles by title, tag, or topic..."
            value={searchQuery}
            onChange={(e) => handleSearchChange(e.target.value)}
            className="w-full pl-11 pr-10 py-3 bg-surface border border-border-subtle rounded-xl text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-eo-blue/30 focus:border-eo-blue transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => handleSearchChange("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-surface-muted text-text-muted hover:text-text-primary transition-colors"
              aria-label="Clear search"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>

      {/* Sticky Category Filter Bar */}
      <div
        ref={filterBarRef}
        className="sticky top-16 z-30 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 py-3 bg-background/80 backdrop-blur-lg border-b border-border-subtle mb-10"
      >
        <nav
          aria-label="Filter articles by category"
          className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => handleFilterChange(tab)}
              className={cn(
                "flex-shrink-0 inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-full border transition-all duration-200",
                activeFilter === tab
                  ? "bg-eo-gold text-white border-eo-gold shadow-sm shadow-eo-gold/20"
                  : "bg-surface text-text-secondary border-border-subtle hover:border-eo-blue hover:text-eo-blue"
              )}
            >
              {tab}
              <span
                className={cn(
                  "text-xs px-1.5 py-0.5 rounded-full min-w-[1.25rem] text-center",
                  activeFilter === tab
                    ? "bg-white/20 text-white"
                    : "bg-surface-muted text-text-muted"
                )}
              >
                {tabCounts[tab] ?? 0}
              </span>
            </button>
          ))}
        </nav>
      </div>

      {/* Featured Post Hero */}
      {featuredPost && <FeaturedHeroCard post={featuredPost} />}

      {/* Section Heading */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-text-primary">
          {activeFilter === "All"
            ? "Latest Articles"
            : activeFilter === "Featured"
              ? "Featured Articles"
              : activeFilter}
        </h2>
        {searchQuery.trim() && (
          <span className="text-sm text-text-muted">
            {filteredPosts.length} result{filteredPosts.length !== 1 ? "s" : ""}
          </span>
        )}
      </div>

      {/* Post Grid */}
      <AnimatePresence mode="wait">
        {visiblePosts.length > 0 ? (
          <motion.div
            key={`${activeFilter}-${searchQuery}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {visiblePosts.map((post, i) => (
                <BlogCard
                  key={post.slug}
                  post={post}
                  index={i}
                  large={i < 2 && activeFilter === "All" && !searchQuery.trim()}
                />
              ))}
            </div>

            {/* Load More Button */}
            {hasMore && (
              <div className="flex justify-center mt-14">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() =>
                    setVisibleCount((prev) => prev + POSTS_PER_PAGE)
                  }
                  className="inline-flex items-center gap-2 px-8 py-3 bg-eo-navy text-white font-semibold rounded-full hover:bg-eo-blue transition-colors shadow-lg shadow-eo-navy/10"
                >
                  Load More Articles
                  <ArrowRight className="h-4 w-4" />
                </motion.button>
              </div>
            )}
          </motion.div>
        ) : (
          <motion.div
            key="empty"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="text-center py-20 border border-dashed border-border-subtle rounded-2xl bg-surface-muted/30"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-eo-blue/10 mb-5">
              <BookOpen className="h-7 w-7 text-eo-blue" />
            </div>
            <p className="text-text-primary text-lg font-semibold mb-2">
              No articles found
            </p>
            <p className="text-text-muted text-sm max-w-md mx-auto">
              {searchQuery.trim()
                ? `No results for "${searchQuery}". Try a different keyword or clear the search.`
                : "No articles in this category yet. Check back soon for new content."}
            </p>
            {searchQuery.trim() && (
              <button
                onClick={() => handleSearchChange("")}
                className="mt-4 px-5 py-2 text-sm font-medium text-eo-blue border border-eo-blue/30 rounded-full hover:bg-eo-blue/5 transition-colors"
              >
                Clear search
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
