import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  blogPosts,
  getBlogPostBySlug,
  getRelatedPosts,
  categoryCTALabels,
} from "@/data/blog";
import { ArrowRight, Clock, Calendar, ChevronRight } from "lucide-react";
import { ShareButtons } from "./share-buttons";

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

  const relatedPosts = getRelatedPosts(post.slug, post.category, 3);
  const ctaLabel = categoryCTALabels[post.category];

  return (
    <main className="pt-32 pb-20 bg-background min-h-screen">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav aria-label="breadcrumb" className="mb-8">
          <ol className="flex flex-wrap items-center gap-1.5 text-sm text-text-muted">
            <li className="inline-flex items-center">
              <Link
                href="/"
                className="hover:text-eo-blue transition-colors"
              >
                Home
              </Link>
            </li>
            <li role="presentation" aria-hidden="true">
              <ChevronRight className="h-3.5 w-3.5" />
            </li>
            <li className="inline-flex items-center">
              <Link
                href="/blog"
                className="hover:text-eo-blue transition-colors"
              >
                Insights
              </Link>
            </li>
            <li role="presentation" aria-hidden="true">
              <ChevronRight className="h-3.5 w-3.5" />
            </li>
            <li className="inline-flex items-center">
              <span
                className="text-text-secondary font-medium truncate max-w-[250px] sm:max-w-[400px]"
                aria-current="page"
              >
                {post.title}
              </span>
            </li>
          </ol>
        </nav>

        {/* Header */}
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 text-xs font-semibold rounded-full bg-eo-navy/10 text-eo-navy dark:bg-eo-blue/10 dark:text-eo-blue">
              {post.category}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-primary tracking-tight mb-6 leading-tight">
            {post.title}
          </h1>

          <p className="text-lg text-text-secondary leading-relaxed mb-8">
            {post.excerpt}
          </p>

          <div className="flex flex-wrap items-center justify-between gap-4 border-y border-border-subtle py-4">
            <div className="flex flex-wrap items-center gap-6 text-sm text-text-muted">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-eo-navy/10 flex items-center justify-center text-eo-navy dark:text-eo-blue font-bold text-sm">
                  {post.author.name.charAt(0)}
                </div>
                <div>
                  <div className="font-medium text-text-secondary">
                    {post.author.name}
                  </div>
                  <div className="text-xs text-text-muted">
                    {post.author.role}
                  </div>
                </div>
              </div>
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                {new Date(post.publishedAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                {post.readTimeMinutes} min read
              </span>
            </div>
            <ShareButtons title={post.title} slug={post.slug} />
          </div>
        </header>

        {/* Cover Image */}
        <div className="relative h-64 sm:h-96 rounded-2xl overflow-hidden mb-12">
          <Image
            src={post.coverImage}
            alt={post.coverImageAlt}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Content */}
        <div className="prose prose-lg dark:prose-invert max-w-none">
          {post.content ? (
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
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
            <h3 className="text-sm font-semibold text-text-muted uppercase tracking-wider mb-3">
              Tags
            </h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-sm rounded-full bg-surface-muted text-text-secondary border border-border-subtle"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Author Bio Card */}
        <div className="mt-12 p-6 sm:p-8 bg-surface border border-border-subtle rounded-2xl">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-full bg-eo-navy/10 flex items-center justify-center text-eo-navy dark:text-eo-blue font-bold text-xl shrink-0">
              {post.author.name.charAt(0)}
            </div>
            <div>
              <h3 className="text-lg font-bold text-text-primary">
                {post.author.name}
              </h3>
              <p className="text-sm text-text-muted mb-3">
                {post.author.role}
              </p>
              <p className="text-sm text-text-secondary leading-relaxed">
                {post.author.name === "Jimi Umar"
                  ? "Jimi Umar is the founder of EaseOrigin, bringing over 15 years of experience in federal IT modernization, cloud infrastructure, and cybersecurity. He holds multiple industry certifications including PMP, AWS Solutions Architect, and Security+."
                  : "The EaseOrigin editorial team shares insights drawn from hands-on experience delivering technology solutions for federal agencies, prime contractors, and commercial organizations."}
              </p>
            </div>
          </div>
        </div>

        {/* Contextual CTA */}
        <div className="mt-12 p-8 sm:p-10 bg-eo-navy rounded-2xl text-white text-center">
          <h3 className="text-2xl font-bold mb-3">
            Need help with {ctaLabel}?
          </h3>
          <p className="text-gray-300 mb-6 max-w-xl mx-auto leading-relaxed">
            Our team brings hands-on federal experience to every engagement.
            Let us help you deliver results.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md bg-white text-eo-navy font-bold text-sm hover:bg-gray-100 transition-all shadow-md"
          >
            Partner With Us <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
          <h2 className="text-2xl font-bold text-text-primary mb-8">
            Related Articles
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedPosts.map((related) => (
              <article
                key={related.slug}
                className="group bg-surface border border-border-subtle rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <Link href={`/blog/${related.slug}`}>
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={related.coverImage}
                      alt={related.coverImageAlt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 text-xs font-semibold rounded-full bg-eo-navy/90 text-white">
                        {related.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-sm text-text-muted mb-3">
                      <time dateTime={related.publishedAt}>
                        {new Date(related.publishedAt).toLocaleDateString(
                          "en-US",
                          {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          }
                        )}
                      </time>
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-eo-blue/10 text-eo-blue text-xs font-medium">
                        <Clock className="h-3 w-3" />
                        {related.readTimeMinutes} min
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-text-primary mb-2 group-hover:text-eo-blue transition-colors">
                      {related.title}
                    </h3>
                    <p className="text-sm text-text-secondary line-clamp-3">
                      {related.excerpt}
                    </p>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
