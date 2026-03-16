import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { blogPosts, type BlogPost } from "@/data/blog";
import { Clock, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog | Insights on Federal IT, Cloud, and Cybersecurity",
  description:
    "Expert insights from EaseOrigin on federal IT modernization, cloud infrastructure, cybersecurity compliance, DevSecOps, and program management.",
};

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
            <span className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              {post.readTimeMinutes} min read
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

export default function BlogPage() {
  const featuredPost = blogPosts.find((p) => p.featured);
  const otherPosts = blogPosts.filter((p) => p !== featuredPost);

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

        {/* Featured Post */}
        {featuredPost && (
          <section className="mb-16">
            <Link href={`/blog/${featuredPost.slug}`}>
              <article className="group grid md:grid-cols-2 gap-8 bg-surface border border-border-subtle rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 p-0 md:p-0">
                <div className="relative h-64 md:h-full min-h-[280px] overflow-hidden">
                  <Image
                    src={featuredPost.coverImage}
                    alt={featuredPost.coverImageAlt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-eo-gold/10 text-eo-gold border border-eo-gold/20 mb-4 w-fit">
                    Featured
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4 group-hover:text-eo-blue transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="text-text-secondary mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-text-muted">
                    <span className="font-medium text-text-secondary">
                      {featuredPost.author.name}
                    </span>
                    <time dateTime={featuredPost.publishedAt}>
                      {new Date(featuredPost.publishedAt).toLocaleDateString(
                        "en-US",
                        {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        }
                      )}
                    </time>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      {featuredPost.readTimeMinutes} min
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          </section>
        )}

        {/* Post Grid */}
        <section>
          <h2 className="text-2xl font-bold text-text-primary mb-8">
            Latest Articles
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
