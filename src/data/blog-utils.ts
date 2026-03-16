import { type BlogPost, type BlogCategory, blogPosts } from "./blog";

export function getRecommendedPosts(
  currentSlug: string,
  currentCategory: BlogCategory,
  limit = 3
): BlogPost[] {
  return blogPosts
    .filter(
      (post) => post.slug !== currentSlug && post.category !== currentCategory
    )
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    )
    .slice(0, limit);
}
