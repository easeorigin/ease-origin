import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  blogPosts,
  getBlogPostBySlug,
  getRelatedPosts,
  blogAuthors,
} from "@/data/blog";
import { getRecommendedPosts } from "@/data/blog-utils";
import { categoryColors } from "../blog-filters";
import {
  ArrowLeft,
  Clock,
  Calendar,
  ChevronRight,
  ArrowRight,
  Linkedin,
} from "lucide-react";
import { MarkdownRenderer } from "@/components/markdown-renderer";
import { extractHeadings } from "@/lib/blog-utils";
import { ReadingProgressBar } from "./reading-progress";
import { ReadingRemaining } from "./reading-remaining";
import { TableOfContents } from "./table-of-contents";
import { ShareButtons } from "./share-buttons";
import { BackToTop } from "./back-to-top";
import { ArticleFeedback } from "./article-feedback";
import { FontSizeControl } from "./font-size-control";
import { ReadNextBar } from "./read-next-bar";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author.name],
      images: [{ url: post.coverImage, alt: post.coverImageAlt }],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const headings = post.content ? extractHeadings(post.content) : [];
  const relatedPosts = getRelatedPosts(post.slug, post.category, 3);
  const recommendedPosts = getRecommendedPosts(post.slug, post.category, 3);

  // Pick the best "read next" suggestion: first related, then first recommended
  const readNextPost = relatedPosts[0] ?? recommendedPosts[0] ?? null;

  // BlogPosting JSON-LD structured data
  const blogPostingJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: `https://easeorigin.com${post.coverImage}`,
    datePublished: post.publishedAt,
    ...(post.updatedAt && { dateModified: post.updatedAt }),
    author: {
      "@type": "Person",
      name: post.author.name,
    },
    publisher: {
      "@type": "Organization",
      name: "EaseOrigin LLC",
      url: "https://easeorigin.com",
      logo: {
        "@type": "ImageObject",
        url: "https://easeorigin.com/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://easeorigin.com/blog/${slug}`,
    },
    keywords: post.tags.join(", "),
  };

  // Resolve full author data (with bio/linkedin) from blogAuthors
  const authorKey = Object.keys(blogAuthors).find(
    (k) => blogAuthors[k].name === post.author.name
  );
  const fullAuthor = authorKey ? blogAuthors[authorKey] : post.author;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingJsonLd) }}
      />
      <ReadingProgressBar />
      <ReadingRemaining totalMinutes={post.readTimeMinutes} />
      <BackToTop />

      <main className="pt-32 pb-20 bg-background min-h-screen">
        {/* Breadcrumbs */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-1.5 text-sm text-text-muted"
          >
            <Link
              href="/"
              className="hover:text-eo-blue transition-colors"
            >
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link
              href="/blog"
              className="hover:text-eo-blue transition-colors"
            >
              Blog
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-text-secondary font-medium truncate max-w-[200px] sm:max-w-xs">
              {post.title}
            </span>
          </nav>
        </div>

        {/* Header */}
        <header className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
          <div className="flex items-center gap-3 mb-5">
            <span className="px-3 py-1 text-xs font-semibold rounded-full bg-eo-navy/10 text-eo-navy dark:bg-eo-blue/10 dark:text-eo-blue">
              {post.category}
            </span>
            {post.featured && (
              <span className="px-3 py-1 text-xs font-semibold rounded-full bg-eo-gold/10 text-eo-gold border border-eo-gold/20">
                Featured
              </span>
            )}
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-primary tracking-tight mb-6 leading-tight">
            {post.title}
          </h1>

          <p className="text-lg text-text-secondary leading-relaxed mb-8 max-w-3xl">
            {post.excerpt}
          </p>

          <div className="flex flex-wrap items-center gap-6 text-sm text-text-muted border-y border-border-subtle py-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-eo-navy/10 flex items-center justify-center text-eo-navy dark:text-eo-blue font-bold text-sm">
                {post.author.name.charAt(0)}
              </div>
              <div>
                <div className="font-semibold text-text-primary text-sm">
                  {post.author.name}
                </div>
                <div className="text-xs text-text-muted">
                  {post.author.role}
                </div>
              </div>
            </div>
            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4" />
              {post.updatedAt ? (
                <>
                  Originally published{" "}
                  {new Date(post.publishedAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}{" "}
                  | Updated{" "}
                  {new Date(post.updatedAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </>
              ) : (
                new Date(post.publishedAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })
              )}
            </span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-eo-blue/10 text-eo-blue text-xs font-medium">
              <Clock className="h-3.5 w-3.5" />
              {post.readTimeMinutes} min read
            </span>

            <FontSizeControl />

            {/* Inline share for mobile */}
            <div className="ml-auto">
              <ShareButtons title={post.title} slug={post.slug} layout="inline" />
            </div>
          </div>
        </header>

        {/* Cover Image */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="relative h-64 sm:h-80 lg:h-[420px] rounded-2xl overflow-hidden shadow-xl shadow-eo-navy/5">
            <Image
              src={post.coverImage}
              alt={post.coverImageAlt}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Content Layout: Share (left) | Article (center) | TOC (right) */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 xl:grid-cols-[60px_1fr_220px] gap-8">
            {/* Floating Share Buttons (desktop) */}
            <div className="hidden xl:block">
              <ShareButtons
                title={post.title}
                slug={post.slug}
                layout="floating"
              />
            </div>

            {/* Main Article Content */}
            <article className="max-w-3xl mx-auto w-full xl:max-w-none">
              {/* Mobile TOC */}
              <div className="xl:hidden">
                <TableOfContents headings={headings} variant="mobile" />
              </div>

              {/* Article Body */}
              <div className="prose prose-lg dark:prose-invert max-w-none">
                {post.content ? (
                  <MarkdownRenderer content={post.content} />
                ) : (
                  <div className="text-center py-16 border border-dashed border-border-subtle rounded-xl">
                    <p className="text-text-muted text-lg">
                      Full article content coming soon.
                    </p>
                    <p className="text-text-muted text-sm mt-2">
                      Check back for the complete post.
                    </p>
                  </div>
                )}
              </div>

              {/* Tags */}
              {post.tags.length > 0 && (
                <div className="mt-12 pt-8 border-t border-border-subtle">
                  <h3 className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-3">
                    Tags
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 text-sm rounded-full bg-surface-muted text-text-secondary border border-border-subtle hover:border-eo-blue hover:text-eo-blue transition-colors cursor-default"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Article Feedback */}
              <ArticleFeedback slug={post.slug} />

              {/* Author Card */}
              <div className="mt-12 p-6 sm:p-8 bg-surface-muted border border-border-subtle rounded-2xl">
                <div className="flex flex-col sm:flex-row gap-5">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-eo-navy/10 flex items-center justify-center text-eo-navy dark:text-eo-blue font-bold text-2xl">
                      {fullAuthor.name.charAt(0)}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-bold text-text-primary">
                        {fullAuthor.name}
                      </h3>
                      {fullAuthor.linkedin && (
                        <a
                          href={fullAuthor.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-eo-blue/10 text-eo-blue hover:bg-eo-blue hover:text-white transition-colors"
                          aria-label={`${fullAuthor.name} on LinkedIn`}
                        >
                          <Linkedin className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                    <p className="text-sm text-text-muted mb-2">
                      {fullAuthor.role}
                    </p>
                    {fullAuthor.bio && (
                      <p className="text-sm text-text-secondary leading-relaxed">
                        {fullAuthor.bio}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </article>

            {/* Desktop TOC (right sidebar) */}
            <div className="hidden xl:block">
              <TableOfContents headings={headings} variant="desktop" />
            </div>
          </div>
        </div>

        {/* Related Articles */}
        {relatedPosts.length > 0 && (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
            <div className="border-t border-border-subtle pt-12">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-text-primary">
                  Related Articles
                </h2>
                <Link
                  href="/blog"
                  className="text-sm font-medium text-eo-blue hover:text-eo-gold transition-colors flex items-center gap-1"
                >
                  View all <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedPosts.map((related) => (
                  <article
                    key={related.slug}
                    className="group bg-surface border border-border-subtle rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-eo-navy/5 hover:-translate-y-1 transition-all duration-300"
                  >
                    <Link href={`/blog/${related.slug}`}>
                      <div className="relative h-44 overflow-hidden">
                        <Image
                          src={related.coverImage}
                          alt={related.coverImageAlt}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-eo-navy/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="absolute top-3 left-3">
                          <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-eo-navy/90 text-white backdrop-blur-sm">
                            {related.category}
                          </span>
                        </div>
                      </div>
                      <div className="p-5">
                        <div className="flex items-center gap-2 text-xs text-text-muted mb-2">
                          <time dateTime={related.publishedAt}>
                            {new Date(
                              related.publishedAt
                            ).toLocaleDateString("en-US", {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                            })}
                          </time>
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-eo-blue/10 text-eo-blue font-medium">
                            <Clock className="h-3 w-3" />
                            {related.readTimeMinutes} min
                          </span>
                        </div>
                        <h3 className="font-bold text-text-primary group-hover:text-eo-blue transition-colors line-clamp-2 mb-2">
                          {related.title}
                        </h3>
                        <p className="text-sm text-text-secondary line-clamp-2">
                          {related.excerpt}
                        </p>
                      </div>
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Recommended Reading (cross-category) */}
        {recommendedPosts.length > 0 && (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
            {/* Subtle divider */}
            <div className="flex items-center gap-4 mb-10">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border-subtle to-transparent" />
              <span className="text-xs font-semibold uppercase tracking-wider text-text-muted">
                More to explore
              </span>
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border-subtle to-transparent" />
            </div>

            <h2 className="text-2xl font-bold text-text-primary mb-8">
              Recommended Reading
            </h2>

            <div className="space-y-4">
              {recommendedPosts.map((rec) => {
                const accentColor = categoryColors[rec.category] ?? "#64748B";
                return (
                  <Link
                    key={rec.slug}
                    href={`/blog/${rec.slug}`}
                    className="group flex items-stretch gap-4 sm:gap-5 bg-surface border border-border-subtle rounded-xl overflow-hidden hover:shadow-lg hover:shadow-eo-navy/5 hover:-translate-y-0.5 transition-all duration-300"
                  >
                    {/* Small thumbnail */}
                    <div className="relative w-24 sm:w-32 flex-shrink-0">
                      <Image
                        src={rec.coverImage}
                        alt={rec.coverImageAlt}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex flex-col justify-center py-4 pr-4 flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1.5">
                        <span
                          className="px-2 py-0.5 text-[11px] font-semibold rounded-full text-white"
                          style={{ backgroundColor: accentColor }}
                        >
                          {rec.category}
                        </span>
                        <span className="text-xs text-text-muted flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {rec.readTimeMinutes} min
                        </span>
                      </div>
                      <h3 className="font-bold text-text-primary group-hover:text-eo-blue transition-colors line-clamp-1 text-sm sm:text-base">
                        {rec.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-text-secondary line-clamp-1 mt-1 hidden sm:block">
                        {rec.excerpt}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
        )}

        {/* Back to Blog */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-text-muted hover:text-eo-blue transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to all articles
          </Link>
        </div>
      </main>

      {readNextPost && (
        <ReadNextBar
          post={{
            slug: readNextPost.slug,
            title: readNextPost.title,
            category: readNextPost.category,
            readTimeMinutes: readNextPost.readTimeMinutes,
          }}
        />
      )}
    </>
  );
}
