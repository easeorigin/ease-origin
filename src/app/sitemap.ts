import type { MetadataRoute } from "next";
import { blogPosts } from "@/data/blog";
import { caseStudies } from "@/data/case-studies";
import { jobs } from "@/data/jobs";
import { solutions } from "@/data/solutions";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://easeorigin.com";

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: baseUrl, changeFrequency: "weekly" as const, priority: 1.0 },
    { url: `${baseUrl}/solutions`, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${baseUrl}/about`, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/case-studies`, changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${baseUrl}/contact`, changeFrequency: "yearly" as const, priority: 0.7 },
    { url: `${baseUrl}/careers`, changeFrequency: "weekly" as const, priority: 0.7 },
    { url: `${baseUrl}/careers/jobs`, changeFrequency: "weekly" as const, priority: 0.7 },
    { url: `${baseUrl}/careers/submit-resume`, changeFrequency: "yearly" as const, priority: 0.5 },
    { url: `${baseUrl}/contract-vehicles`, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/capability-statement`, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/blog`, changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `${baseUrl}/privacy-policy`, changeFrequency: "yearly" as const, priority: 0.3 },
    { url: `${baseUrl}/terms-of-service`, changeFrequency: "yearly" as const, priority: 0.3 },
  ];

  const solutionRoutes: MetadataRoute.Sitemap = solutions.map((s) => ({
    url: `${baseUrl}/solutions/${s.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const caseStudyRoutes: MetadataRoute.Sitemap = caseStudies.map((cs) => ({
    url: `${baseUrl}/case-studies/${cs.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const jobRoutes: MetadataRoute.Sitemap = jobs.map((job) => ({
    url: `${baseUrl}/careers/jobs/${job.slug}`,
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...solutionRoutes, ...caseStudyRoutes, ...blogRoutes, ...jobRoutes];
}
