import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { blogPosts, getBlogPostBySlug } from "@/data/blog";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import { MarkdownRenderer } from "@/components/markdown-renderer";

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

  return (
    <main className="pt-32 pb-20 bg-background min-h-screen">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-eo-blue transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to all articles
        </Link>

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

          <div className="flex flex-wrap items-center gap-6 text-sm text-text-muted border-y border-border-subtle py-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-eo-navy/10 flex items-center justify-center text-eo-navy dark:text-eo-blue font-bold text-sm">
                {post.author.name.charAt(0)}
              </div>
              <div>
                <div className="font-medium text-text-secondary">
                  {post.author.name}
                </div>
                <div className="text-xs text-text-muted">{post.author.role}</div>
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

        {/* Content Placeholder */}
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
      </article>
    </main>
  );
}
