/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useState, useMemo, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { Clock, ArrowRight, Search, X, BookOpen, Mail, Pause, Play } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  type BlogPost,
  type BlogCategory,
  getAllCategories,
} from "@/data/blog";

/* ─── Constants ─── */
const POSTS_PER_PAGE = 9;
const NEWSLETTER_INSERT_INDEX = 6;

/* ─── Category Color Map ─── */
export const categoryColors: Record<BlogCategory, string> = {
  "Cloud & Infrastructure": "#3B82F6",
  Cybersecurity: "#EF4444",
  DevOps: "#10B981",
  "Program Management": "#8B5CF6",
  "Company News": "var(--color-eo-gold)",
  "Federal IT": "var(--color-eo-navy)",
  "AI & Data": "#7C3AED",
  "Enterprise Platforms": "#14B8A6",
  "Agile & Delivery": "#F97316",
  "GovCon Insights": "#6366F1",
  "Industry Insights": "#64748B",
  Perspectives: "#F43F5E",
};

/* ─── Animation Variants ─── */
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.4, ease: "easeOut" as const },
  }),
};

const gridContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.4, staggerChildren: 0.1 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.2 },
  },
};

const heroVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

/* ─── Newsletter CTA Banner ─── */
function NewsletterCTA() {
  return (
    <motion.div
      custom={NEWSLETTER_INSERT_INDEX}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      className="sm:col-span-2 lg:col-span-3"
    >
      <div className="relative overflow-hidden rounded-2xl bg-eo-navy p-8 sm:p-10 lg:p-12">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-eo-blue rounded-full blur-[120px] opacity-20 translate-x-1/3 -translate-y-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-60 h-60 bg-eo-gold rounded-full blur-[100px] opacity-10 -translate-x-1/4 translate-y-1/4 pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8">
          {/* Text content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-eo-gold/20 text-eo-gold text-xs font-semibold mb-4">
              <Mail className="h-3.5 w-3.5" />
              Newsletter
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3 tracking-tight">
              Get Federal IT Insights Delivered
            </h3>
            <p className="text-gray-400 text-sm sm:text-base max-w-lg leading-relaxed">
              Stay ahead with expert perspectives on cloud modernization,
              cybersecurity compliance, and federal program delivery.
            </p>
          </div>

          {/* Email signup form (UI only) */}
          <div className="w-full lg:w-auto shrink-0">
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto lg:mx-0">
              <input
                type="email"
                placeholder="you@agency.gov"
                className="flex-1 px-5 py-3.5 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-eo-gold/40 focus:border-eo-gold/60 transition-all backdrop-blur-sm"
                aria-label="Email address"
              />
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="px-7 py-3.5 bg-eo-gold text-white font-semibold rounded-xl text-sm hover:bg-eo-gold/90 transition-colors shadow-lg shadow-eo-gold/20 whitespace-nowrap"
              >
                Subscribe
              </motion.button>
            </div>
            <p className="text-xs text-gray-500 mt-3 text-center lg:text-left">
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

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
  const accentColor = categoryColors[post.category] ?? "#64748B";

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
      style={{ borderLeft: `3px solid ${accentColor}` }}
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
            className="object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-[1.05]"
          />
          {/* Gradient overlay that intensifies on hover */}
          <div className="absolute inset-0 bg-linear-to-t from-eo-navy/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute top-3 left-3">
            <span
              className="px-3 py-1 text-xs font-semibold rounded-full text-white backdrop-blur-sm"
              style={{ backgroundColor: accentColor }}
            >
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

/* ─── Rotation interval (ms) ─── */
const HERO_ROTATION_INTERVAL = 8000;

/* ─── Featured Hero Slide (single slide content) ─── */
const heroSlideVariants = {
  enter: { opacity: 0, scale: 1.02 },
  center: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const },
  },
  exit: {
    opacity: 0,
    scale: 0.98,
    transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

/* ─── Featured Hero Carousel ─── */
function FeaturedHeroCarousel({ posts }: { posts: BlogPost[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const progressRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const isPausedRef = useRef(false);

  const clearTimers = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (progressRef.current) clearInterval(progressRef.current);
  }, []);

  const startTimers = useCallback(() => {
    clearTimers();
    setProgress(0);

    // Progress bar updates every 50ms for smooth animation
    const progressStep = 50 / HERO_ROTATION_INTERVAL;
    progressRef.current = setInterval(() => {
      setProgress((prev) => Math.min(prev + progressStep, 1));
    }, 50);

    // Slide rotation
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % posts.length);
      setProgress(0);
    }, HERO_ROTATION_INTERVAL);
  }, [posts.length, clearTimers]);

  const pauseTimers = useCallback(() => {
    clearTimers();
  }, [clearTimers]);

  const resumeTimers = useCallback(() => {
    if (!isPausedRef.current) {
      startTimers();
    }
  }, [startTimers]);

  useEffect(() => {
    if (!isPaused) {
      startTimers();
    } else {
      pauseTimers();
    }
    isPausedRef.current = isPaused;
    return () => clearTimers();
  }, [isPaused, startTimers, pauseTimers, clearTimers]);

  const goToSlide = useCallback(
    (index: number) => {
      setActiveIndex(index);
      if (!isPausedRef.current) {
        startTimers();
      }
    },
    [startTimers]
  );

  const goToPrevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + posts.length) % posts.length);
    if (!isPausedRef.current) {
      startTimers();
    }
  }, [posts.length, startTimers]);

  const goToNextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % posts.length);
    if (!isPausedRef.current) {
      startTimers();
    }
  }, [posts.length, startTimers]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        goToPrevSlide();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        goToNextSlide();
      }
    },
    [goToPrevSlide, goToNextSlide]
  );

  const handleMouseEnter = useCallback(() => {
    if (!isPausedRef.current) pauseTimers();
  }, [pauseTimers]);

  const handleMouseLeave = useCallback(() => {
    if (!isPausedRef.current) resumeTimers();
  }, [resumeTimers]);

  const handleFocus = useCallback(() => {
    if (!isPausedRef.current) pauseTimers();
  }, [pauseTimers]);

  const handleBlur = useCallback(() => {
    if (!isPausedRef.current) resumeTimers();
  }, [resumeTimers]);

  const activePost = posts[activeIndex];

  return (
    <motion.section
      variants={heroVariants}
      initial="hidden"
      animate="visible"
      className="mb-14"
      aria-label="Featured articles carousel"
      aria-roledescription="carousel"
    >
      <div
        className="relative rounded-2xl overflow-hidden min-h-100 sm:min-h-115"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activePost.slug}
            variants={heroSlideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0"
            aria-roledescription="slide"
            role="group"
            aria-label={`Slide ${activeIndex + 1} of ${posts.length}: ${activePost.title}`}
          >
            <div aria-live="polite" className="sr-only">
              Slide {activeIndex + 1} of {posts.length}: {activePost.title}
            </div>
            <Link href={`/blog/${activePost.slug}`} className="block h-full">
              <article className="group relative h-full">
                {/* Full-width cover image */}
                <Image
                  src={activePost.coverImage}
                  alt={activePost.coverImageAlt}
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-[1.03] group-hover:brightness-[1.05]"
                  priority
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-eo-navy via-eo-navy/70 to-transparent" />

                {/* Content positioned over image */}
                <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12 z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-eo-gold text-white">
                      Featured
                    </span>
                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-white/20 text-white backdrop-blur-sm">
                      {activePost.category}
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-4 max-w-3xl leading-tight group-hover:text-eo-gold/90 transition-colors">
                    {activePost.title}
                  </h2>
                  <p className="text-gray-300 mb-6 leading-relaxed max-w-2xl line-clamp-2 sm:line-clamp-3">
                    {activePost.excerpt}
                  </p>
                  <div className="flex flex-wrap items-center gap-6">
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <span className="font-medium text-gray-300">
                        {activePost.author.name}
                      </span>
                      <time dateTime={activePost.publishedAt}>
                        {new Date(activePost.publishedAt).toLocaleDateString(
                          "en-US",
                          {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          }
                        )}
                      </time>
                      <span className="inline-flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" />
                        {activePost.readTimeMinutes} min
                      </span>
                    </div>
                    <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-eo-gold text-white font-semibold text-sm group-hover:bg-eo-gold/90 transition-colors">
                      Read Article <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          </motion.div>
        </AnimatePresence>

        {/* Dot indicators and pause/play button */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1">
          {posts.map((_, index) => (
            <button
              key={index}
              onClick={(e) => {
                e.preventDefault();
                goToSlide(index);
              }}
              className={cn(
                "p-2 rounded-full transition-all duration-300 flex items-center justify-center",
              )}
              aria-label={`Go to featured post ${index + 1}`}
              aria-current={index === activeIndex ? "true" : undefined}
            >
              <span
                className={cn(
                  "block w-2.5 h-2.5 rounded-full transition-all duration-300",
                  index === activeIndex
                    ? "bg-eo-gold scale-110"
                    : "bg-white/40 hover:bg-white/70"
                )}
              />
            </button>
          ))}
          <button
            onClick={(e) => {
              e.preventDefault();
              setIsPaused((prev) => !prev);
            }}
            className="p-2 ml-1 rounded-full text-white/70 hover:text-white transition-colors flex items-center justify-center"
            aria-label={isPaused ? "Play carousel" : "Pause carousel"}
          >
            {isPaused ? (
              <Play className="h-4 w-4" />
            ) : (
              <Pause className="h-4 w-4" />
            )}
          </button>
        </div>

        {/* Progress bar */}
        <div className="absolute bottom-0 left-0 right-0 z-20 h-1 bg-white/10">
          <motion.div
            className="h-full bg-eo-gold/80"
            style={{ width: `${progress * 100}%` }}
            transition={{ duration: 0.05, ease: "linear" as const }}
          />
        </div>
      </div>
    </motion.section>
  );
}

/* ─── Filter Tab Types ─── */
type FilterTab = "All" | "Featured" | BlogCategory;

/* ─── Sort Helper ─── */
function sortByNewest(a: BlogPost, b: BlogPost): number {
  return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
}

/* ─── Main Blog Filters Component ─── */
export function BlogFilters({ posts }: { posts: BlogPost[] }) {
  const [activeFilter, setActiveFilter] = useState<FilterTab>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(POSTS_PER_PAGE);
  const filterBarRef = useRef<HTMLDivElement>(null);

  // Pre-sort all posts by date, newest first
  const sortedPosts = useMemo(() => [...posts].sort(sortByNewest), [posts]);

  const categories = getAllCategories();
  const tabs: FilterTab[] = ["All", "Featured", ...categories];

  // Count posts per tab
  const tabCounts = useMemo(() => {
    const counts: Record<string, number> = {
      All: sortedPosts.length,
      Featured: sortedPosts.filter((p) => p.featured).length,
    };
    categories.forEach((cat) => {
      counts[cat] = sortedPosts.filter((p) => p.category === cat).length;
    });
    return counts;
  }, [sortedPosts, categories]);

  // Filter posts by category, then by search (already sorted by date)
  const filteredPosts = useMemo(() => {
    let result =
      activeFilter === "All"
        ? sortedPosts
        : activeFilter === "Featured"
          ? sortedPosts.filter((p) => p.featured)
          : sortedPosts.filter((p) => p.category === activeFilter);

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
  }, [sortedPosts, activeFilter, searchQuery]);

  // Featured hero: only show when on "All" tab with no search
  // Collect all featured posts sorted by date for the rotating carousel
  const featuredPosts = useMemo(
    () =>
      activeFilter === "All" && !searchQuery.trim()
        ? sortedPosts.filter((p) => p.featured)
        : [],
    [activeFilter, searchQuery, sortedPosts]
  );

  // Grid shows all filtered posts except the featured posts shown in the hero
  const featuredSlugs = useMemo(
    () => new Set(featuredPosts.map((p) => p.slug)),
    [featuredPosts]
  );
  const gridPosts =
    featuredPosts.length > 0
      ? filteredPosts.filter((p) => !featuredSlugs.has(p.slug))
      : filteredPosts;

  const visiblePosts = gridPosts.slice(0, visibleCount);
  const hasMore = visibleCount < gridPosts.length;

  // Determine whether to show the newsletter banner inline
  const showNewsletter = visiblePosts.length > NEWSLETTER_INSERT_INDEX;

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
                "shrink-0 inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-full border transition-all duration-200",
                activeFilter === tab
                  ? "bg-eo-gold text-white border-eo-gold shadow-sm shadow-eo-gold/20"
                  : "bg-surface text-text-secondary border-border-subtle hover:border-eo-blue hover:text-eo-blue"
              )}
            >
              {tab}
              <span
                className={cn(
                  "text-xs px-1.5 py-0.5 rounded-full min-w-5 text-center",
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

      {/* Featured Post Hero (rotating carousel) */}
      {featuredPosts.length > 0 && (
        <FeaturedHeroCarousel posts={featuredPosts} />
      )}

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
            variants={gridContainerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* First batch of cards (before newsletter) */}
              {visiblePosts.slice(0, NEWSLETTER_INSERT_INDEX).map((post, i) => (
                <BlogCard
                  key={post.slug}
                  post={post}
                  index={i}
                  large={i < 2 && activeFilter === "All" && !searchQuery.trim()}
                />
              ))}

              {/* Newsletter CTA inserted after the first 6 cards */}
              {showNewsletter && <NewsletterCTA />}

              {/* Remaining cards after newsletter */}
              {visiblePosts.slice(NEWSLETTER_INSERT_INDEX).map((post, i) => (
                <BlogCard
                  key={post.slug}
                  post={post}
                  index={i + NEWSLETTER_INSERT_INDEX + 1}
                  large={false}
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
