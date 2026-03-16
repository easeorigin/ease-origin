export interface BlogAuthor {
  name: string;
  role: string;
  avatar?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  coverImageAlt: string;
  author: BlogAuthor;
  publishedAt: string;
  updatedAt?: string;
  category: BlogCategory;
  tags: string[];
  readTimeMinutes: number;
  featured: boolean;
}

export type BlogCategory =
  | "Cloud & Infrastructure"
  | "Cybersecurity"
  | "DevOps"
  | "Program Management"
  | "Company News"
  | "Federal IT";

export const blogAuthors: Record<string, BlogAuthor> = {
  jimi: {
    name: "Jimi Umar",
    role: "Founder & Principal Consultant",
  },
  editorial: {
    name: "EaseOrigin Editorial",
    role: "EaseOrigin Team",
  },
};

export const blogPosts: BlogPost[] = [
  {
    slug: "fedramp-authorization-what-agencies-need-to-know",
    title: "FedRAMP Authorization: What Agencies Need to Know in 2026",
    excerpt:
      "A practical guide for federal agencies navigating the FedRAMP authorization process, including recent policy changes and strategies for accelerating cloud adoption.",
    content: "",
    coverImage: "/images/cloud-infrastructure.png",
    coverImageAlt: "Cloud security compliance dashboard",
    author: blogAuthors.jimi,
    publishedAt: "2026-03-01",
    category: "Cloud & Infrastructure",
    tags: ["FedRAMP", "Cloud Security", "Compliance", "Federal"],
    readTimeMinutes: 8,
    featured: true,
  },
  {
    slug: "zero-trust-architecture-federal-networks",
    title: "Implementing Zero Trust Architecture Across Federal Networks",
    excerpt:
      "How agencies can transition from perimeter-based security to a zero trust model, aligned with OMB M-22-09 and NIST 800-207 guidance.",
    content: "",
    coverImage: "/images/cybersecurity.png",
    coverImageAlt: "Network security architecture diagram",
    author: blogAuthors.jimi,
    publishedAt: "2026-02-15",
    category: "Cybersecurity",
    tags: ["Zero Trust", "NIST", "Network Security", "Federal"],
    readTimeMinutes: 10,
    featured: true,
  },
  {
    slug: "devsecops-pipeline-best-practices",
    title: "Building a DevSecOps Pipeline for Government Projects",
    excerpt:
      "Key practices for integrating security scanning, compliance checks, and automated testing into your CI/CD pipeline for federal software delivery.",
    content: "",
    coverImage: "/images/devops.png",
    coverImageAlt: "DevSecOps pipeline workflow",
    author: blogAuthors.editorial,
    publishedAt: "2026-01-28",
    category: "DevOps",
    tags: ["DevSecOps", "CI/CD", "Automation", "Security"],
    readTimeMinutes: 7,
    featured: false,
  },
  {
    slug: "safe-agile-federal-programs",
    title: "SAFe Agile at Scale: Lessons from Federal Program Delivery",
    excerpt:
      "Practical insights on running PI Planning, managing Agile Release Trains, and delivering outcomes in large federal program environments.",
    content: "",
    coverImage: "/images/program-management.png",
    coverImageAlt: "Agile program management board",
    author: blogAuthors.jimi,
    publishedAt: "2026-01-10",
    category: "Program Management",
    tags: ["SAFe", "Agile", "PI Planning", "Release Train"],
    readTimeMinutes: 6,
    featured: false,
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getFeaturedPosts(): BlogPost[] {
  return blogPosts.filter((post) => post.featured);
}

export function getPostsByCategory(category: BlogCategory): BlogPost[] {
  return blogPosts.filter((post) => post.category === category);
}
